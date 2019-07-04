# Email Mode

## What is Email mode?

FormSG does not store your form responses. Each time a user submits a response, an email of the response is sent to emails that you specify on the Settings tab. You may specify multiple emails that are comma-separated. You may also specify shared inboxes or non-government emails, for example:

![FormSG FAQ Email Responses](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-email-responses.png "FormSG FAQ Email Responses")

If there is a need to aggregate emails into an Excel sheet, you may use our Data Collation Tool to do so. You can access the Data Collation Tool on the Intranet at https://form.app.gov.sg or on the Internet at [https://collate.form.gov.sg](https://collate.form.gov.sg).

## Email reliability

## Will my emails be blocked? 

If emails are non-malicious, they typically will not be blocked. There are two junctures where they might be blocked, but the form submitter will know about it and will be able to retry:

- When a user clicks Submit on his form, the response first goes to our server. Before reaching our server, we have a web application firewall that detects for malicious content and might block the submission. If blocked, a user will see a "Please try again later" message on the form.

- If the form passes the web application firewall, it goes to our server, and we email it to your government email (SGMail) without storing it on our servers. If the government email does not exist then your response will bounce and the user will see a "Please try again later" message on the form.

From here on out, if the email is blocked, your user will not be aware. But there is still a way for you as the form creator to retrieve the blocked responses: 

- If the government email exists, it proceeds to SGMail servers. Before it enters SGMail, it will arrive at SGMail's firewall. This firewall will block out emails if there are attachments with non-whitelisted file extensions, for e.g. ".abc" or ".mov". We are not aware of the full list of file extensions that SGMail whitelists, but most of the file extensions that are whitelisted can be viewed here: https://go.gov.sg/email-cwl. If your email gets blocked due to non-whitelisted attachment file extensions, you will receive a mail hygiene notification. You may contact SPEAR (spear@tech.gov.sg) within 1 month from receiving the mail hygiene notification to retrieve the dropped mail. 

## How do I recover my mail when I receive a mail hygiene notification?

You may recover your blocked email within 1 month if you email SPEAR (spear@tech.gov.sg) and attach the mail hygiene notification. If you have any queries you may also contact us at formsg@tech.gov.sg and we will assist you ASAP.

## How does the Data Collation Tool work? 

The Data Collation Tool can only aggregate Outlook emails. You may export your email responses from Outlook to a .pst file (which is the arhchive format), and upload the .pst file to our tool. Our tool will process your .pst file into an Excel of collated responses for you to download. You may visit [here](https://collate.form.gov.sg/#instructions) to view screenshots of how to use the tool.

## How does the Data Collation Tool work with attachments?

If your email responses contained attachments, a zip file with your Excel sheet and attachments will be downloaded instead of just an Excel sheet. Once you have unzipped this file, you will see that it contains an Excel sheet and a folder with all your attachments.

The names of your attachments in this folder will be prefixed with the submission id of the email reponse that it belongs to (e.g. abc_file name.png, where abc is the submission id of the email response associated with the attachment).

If you open the downloaded Excel sheet, you will be able to click on the attachment file names within the Excel sheet to open the corresponding attachment.

## Does my data go to your server when I use the Data Collation Tool? 

No, your data is not seen by our server. Aggregation of your email responses happens offline on your browser. Another way for you to use the Data Collation Tool is to save the web page and open it again to use it without network connectivity. When you're on the Data Collation Tool's site, you can simply Right Click > Save As to download the web page, then open the web page to use the tool as per usual.

## What classification of data (based on RCST) can Email mode handle?

If your per-entry data is Restricted, but the whole collection of data is Confidential, FormSG has you covered. This is because FormSG is a Restricted system that can manage Restricted data flowing through it, but ultimately data is stored in your government email, or SGMail, which is a Confidential system that lets you store Confidential collections of data. If however you specify a non-government email to send responses to, then you are not recommend to accept data that is classified Confidential.

## What sensitivity of data (based on Information Sensitivity Framework or ISF) can Email mode handle? 

Email mode can handle up to Sensitive Normal. The semantics of Sensitive High are still being deliberated and we will push for FormSG to be able to handle Sensitive High as soon as the discussion around Sensitive High has concluded.
