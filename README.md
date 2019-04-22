# How to create a new Opendoc 

## Github

Step 1:
Create a new repo, the name of the repo should follow the convention:

`opendoc-<name_of_document>`

Step 2:
Clone the template repo onto your local machine

```
git clone https://github.com/opendocsg/opendoc-template.git opendoc-<name_of_document>
```

Step 3: 
Change the remote url for the repo on your local machine

```
git remote set-url origin https://github.com/opendocsg/opendoc-<name_of_document>.git
```
or (if you're using ssh)
```
git remote set-url origin git@github.com:opendocsg/opendoc-<name_of_document>.git
```

Step 4: 
Add your converted markdown files into the root directory of the repo

Step 5: 
Update the following fields in the _config.yml file:
- title (Required)
- repository (Required)
- order (Optional)
- google_analytics(Optional)
- styling_options
	- primary_brand_color (Optional)
	- logo_path (Optional)

Step 6: 
Commit your changes 

```
git add .
git commit -m <commit_message>
```

Step 7:
Push your changes to the remote branch

```
git push origin master
```

Step 8:
Verify changes on Github

Step 9:
Setup up webhooks for 
- https://search.opendoc.sg/push
- https://search-staging.opendoc.sg/push

Ensure Content type is set to `application/json`

Webhook secret is found in 1Password

## Netlify

Step 1: 
On Netlify, click on `New site From Git`

Step 2:
Select Github > Select repository

Step 3:
Click on `Deploy Site`

Step 4:
Go to `Domain Settings` > click on ... on the default subdomain  > `Edit site name` > Input new netlify site subdomain

