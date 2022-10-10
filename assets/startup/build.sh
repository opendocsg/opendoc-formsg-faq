#!/bin/bash

echo 'Started script to generate PDFs'
echo 'Installing node dependencies'
npm i glob@7.1.6 jsdom@16.4.0 js-yaml@4.0.0 p-all@3.0.0
if [ "true" == "true" ]; then
    node _site/assets/startup/prebuild-lunr-index.js
    echo 'Generating lunr index complete'
    npm i html-pdf@2.2.0
else
    if ! [ -x "$(command -v aws)" ]; 
    then
      echo 'Warning: aws is not installed. Please setup github webhooks for elasticsearch indexing'
    else
      APP_NAME="opendoc-formsg-faq"
      echo "APP_NAME = $APP_NAME"
      if [ "${AWS_BRANCH}" = "master" ]; then
        echo "Building prod elasticsearch index for $APP_NAME";
        aws lambda invoke --function-name es-lambda-prod-es --invocation-type Event \
          --payload "{\"index\":\"opendocsg-$APP_NAME\", \"repoName\":\"$APP_NAME\"}" /dev/null;
      fi

      if [ "${AWS_BRANCH}" = "staging" ]; then
        echo "Building staging elasticsearch index for $APP_NAME";
        aws lambda invoke --function-name es-lambda-staging-es --invocation-type Event \
          --payload "{\"index\":\"opendocsg-$APP_NAME\", \"repoName\":\"$APP_NAME\", \"branch\": \"staging\"}" /dev/null;
      fi

      if [ ! -z "${CUSTOM_BRANCH}" ] && [ "${AWS_BRANCH}" = "${CUSTOM_BRANCH}" ]; then
        echo "Building $CUSTOM_BRANCH into staging elasticsearch index for $APP_NAME";
        aws lambda invoke --function-name es-lambda-staging-es --invocation-type Event \
          --payload "{\"index\":\"opendocsg-$APP_NAME\", \"repoName\":\"$APP_NAME\", \"branch\": \"$CUSTOM_BRANCH\"}" /dev/null;
      fi
    fi
fi
echo "key is $PDF_LAMBDA_KEY"
echo "server is $PDF_LAMBDA_SERVER"
node _site/assets/startup/pdf-gen.js
echo 'End script'
