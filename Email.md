# Email Mode

## What is Email mode?

FormSG does not store your form responses. Each time a user submits a response, an email of the response is sent to emails that you specify on the Settings tab. You may specify multiple emails that are comma-separated. You may also specify shared inboxes or non-government emails, for example:

![FormSG FAQ Email Responses](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-email-responses.png "FormSG FAQ Email Responses")

If there is a need to aggregate emails into an Excel sheet, you may use our Data Collation Tool to do so. You can access the Data Collation Tool on the Intranet at https://form.app.gov.sg or on the Internet at [https://collate.form.gov.sg](https://collate.form.gov.sg).

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
