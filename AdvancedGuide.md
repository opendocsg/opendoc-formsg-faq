# Advanced Guide

This advanced guide includes tips and tricks, and also solutions to common issues you may face when using FormSG. This section is updated regularly, so feel free to check back once in a while.

## Is FormSG accessible on the Intranet?

Yes! Since start of 2020, FormSG has been accessible on WOG Intranet. If you still cannot access https://form.gov.sg on the Intranet, join our Workplace@Facebook group and ask for help. Note certain features are not available on WOG Intranet, such as SingPass/CorpPass/MyInfo and Captcha. If your form is intended for internal use, you can disable Captcha.

## I did not receive my OTP. Where is it?

The OTP is sent immediately, but might take a while to arrive in your government email due to the potentially multiple firewalls the email has to go through. OTPs expire in 15 minutes, after which you have to resend another one. After logging in, you will remain logged in for 24 hours. This means you need not have both Intranet and Internet devices at all times; you can log in to your Internet device before you leave your office, and for 24 hours be able to create forms from one Internet device.

## Where do I access the Data Collation Tool? I can't find it.

Since we moved to the Intranet start of 2020, Data Collation Tool has shifted from the old link of https://form.app.gov.sg to the new link of https://collate.form.gov.sg.

## Where is the signature field?

There are a few variants of electronic signatures available on FormSG, all of which, according to the Electronic Transactions Act, are not legally weaker than a wet ink signature. Agencies such as IRAS and MOM have used the following for electronic signatures: a) an NRIC field, b) an attachment of a wet ink signature and c) SingPass Login. 

## How do I route responses to different emails based on form option selected? 

This might apply for an enquiry form. If user chooses "Complaint" response should route to Complaints Department, but if user chooses "IT" response should route to IT Department. There's no such feature on FormSG, but you can set mail forwarding rules on your email. For example, one such rule can detect "Complaint" in the form response email, and forward this to the Complaints Department automatically.

To set such mail forwarding rules, you have to Create Rule, then select Advanced Options. Next, select the condition as "with specific words in the body":

![FormSG FAQ Specify Condition](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-mailforwarding-guide-1.jpg "FormSG FAQ Specify Condition")

Click on the underlined "specific words", and specify "IT department". Next, select the action as "forward it to people or public group":

![FormSG FAQ Forward Mail](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-mailforwarding-guide-2.jpg "FormSG FAQ Forward Mail")

Click on the underlined "people or public group" and specify the IT department's email.

## My form is really long. Why can't users save draft?

We took out Save Draft because there is no good place to save such data - our servers do not store data, and saving data on the local computer might leak this out to unintended recipients if form is filled from a library computer. Furthermore, it's more important to advise the user how long it takes to fill in the form, so they have sufficient time to submit in one sitting, which is a better user experience than saving draft and coming back repeatedly. In the future after launch of Storage mode, we might consider re-enabling Save Draft function.

## How do I increase attachment size limit? And what if there are many attachments for my form?

The current size limit is 7 MB for the entire form. We auto-compress images to 1024x768 resolution, which is typically less than 1 MB. This is a hard limit because the email service we use has a fixed 10 MB outgoing size, and we buffer 3 MB for email fields and metadata. Because the smallest unit you can attach per attachment field is 1 MB, you can have a max of 7 attachments on your form. If your user has to submit more than 7 documents, you may create just one attachment field of 7 MB, and advise your user to zip documents up and submit as one attachment. In the future after launch of Storage mode, we are considering raising this size limit to 20 MB. 

## I am leaving the organisation or switching over to a new email. How do I transfer ownership of my forms?

Note that you might not need to transfer ownership of your form. You may simply add your colleague as a collaborator. Collaborators have the same rights as form creators, except they cannot delete the form.

![FormSG FAQ Add Collaborators](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-collaborator.png "FormSG FAQ Add Collaborators")

If you have already lost access to your old email and can no longer edit your form, you may file a [Support Form](https://go.gov.sg/formsg-support) request to transfer ownership to another email.

## My forms are particularly sensitive and I do not want other public officers to see them on the Examples tab.

Note that only forms that are active, and have at least 10 responses will be searchable on the Examples tab. And that the Examples tab is only viewable by authenticated public officers, not the general public. Furthermore, only your form fields are viewable, not your form data.

But if there is still a need to unlist your form from the Examples tab because the form fields alone are already sensitive to be viewed by fellow public officers, then you may submit our [Support Form](https://go.gov.sg/formsg-support), and attach an email approval from your MIC (DD/Dir) stating justifications for unlisting specific form links from the Examples tab.

## Can my forms support multiple languages?

Yes it can. Form title has to be in English, but instructions and fields can be in any language. For example, you can specify form fields in English, and provide translations in field descriptions. Your users can also submit your form in any language they want - they just have to switch to the respective keyboard on their device.

## Is there an address field? How can I auto-populate one?

You may create a Postal code field with Short Text that validates 6 characters, together with a few more fields for block and unit numbers. Do not use a Number field for Postal code as Numbers cannot start with zero. If verified addresses are needed, you may enable SingPass on your form, and drag in a Registered Address MyInfo field.

## How do I restrict access to my form to selected users to submit?

The unguessable form link acts as a password. You can circulate the form link to only users that you intend to gather responses from. As long as you don't add the form link to public channels such as on your agency's Internet website, the form link will not be indexed by search engines. If the form link ends up widely circulated with non-authorised users submitting the form, you may then filter off such non-authorised submissions.

## When should I use a radio button vs a dropdown field? 

For 6 or fewer choices, it is advised to use a radio button, as there are only a few options to display:

![FormSG FAQ Radio Button](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-radio.png "FormSG FAQ Radio Button")

For >6 choices, you should use a dropdown field: 

![FormSG FAQ Dropdown](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-dropdown.png "FormSG FAQ Dropdown")

## Excel responses from table style questions are clumped into one line, how do I separate them?

1. Open the excel sheet generated from our Data Collation Tool
2. Select the entire column of the responses
3. Go to the Data tab and choose Text to Columns > Delimit by comma (,).

![FormSG FAQ Excel Split Response](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-excel.png "FormSG FAQ Excel Split Response")  
Don't worry if responses contain commas because Excel does not split commas accompanied by spaces. Commas between columns have no space, which Excel will split by, unlike commas within sentences. An example response to a table style question asking for name, age, hobbies is: "Mr Tan,55,Soccer, Tennis, Taichi". Excel will split this correctly into "Mr Tan", "55", and "Soccer, Tennis, Taichi" because it ignores the commas in hobbies that have spaces after them.

## How can I split the form into multiple pages?

We don't support multiple pages, because >70% of our users fill in forms from their phones, and are used to navigate through content by scrolling not tabbing through pages, such as when they scroll through their social media feeds. Hence we built the Header field to separate your form into sections that your user can scroll through.

![FormSG FAQ Create Section](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-section.png "FormSG FAQ Create Section")

## How do I know if the logic for the form is correct?

When you implement a new logic, you should test it yourself via the preview page. Note that the onus is on you to verify the correct logic for your form.

![FormSG FAQ Logic](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-logic.png "FormSG FAQ Logic")

## What is FormSG’s infrastructure like? How is the security of the system? 

We have our NodeJS web servers hosted on AWS Singapore zone. Our NoSQL database that stores only form fields and not form data is managed by Mongo Atlas, and also hosted on AWS Singapore zone. We use AWS SES to send out mails, which are not open mail relays, have valid SPF and DKIM records, and encrypts form data before sending them over to government SGMail. Our web servers are protected with Cloudflare SSL, their Anti-DDoS protection and Web Application Firewall. We use Pingdom for website performance and availability monitoring, and have AWS CloudWatch alarms, together with CloudTrail that monitors activity and GuardDuty for threat intelligence monitoring. Our Data Collation Tool is built with vanilla Javascript and is static site on S3. We have undergone rigorous penetration testing, vulnerability assessment and infrastructure review by both world renowned security testers and CSG. We have also written a >74 page NIST security review documenting our security best practices.

## Does my data go to your server when I use the Data Collation Tool?

No, your data is not seen by our server. Aggregation of your email responses happens offline on your browser.

## Email reliability

## Will my emails be blocked?

If emails are non-malicious, they typically will not be blocked. There are two junctures where they might be blocked, but the form submitter will know about it and will be able to retry:

- When a user clicks Submit on his form, the response first goes to our server. Before reaching our server, we have a web application firewall that detects for malicious content and might block the submission. If blocked, a user will see a "Please try again later" message on the form.

- If the form passes the web application firewall, it goes to our server, and we email it to your government email (SGMail) without storing it on our servers. If the government email does not exist then your response will bounce and the user will see a "Please try again later" message on the form.

From here on out, if the email is blocked, your user will not be aware. But there is still a way for you as the form creator to retrieve the blocked responses:

- If the government email exists, it proceeds to SGMail servers. Before it enters SGMail, it will arrive at SGMail's firewall. This firewall will block out emails if there are attachments with non-whitelisted file extensions, for e.g. ".abc" or ".mov". We are not aware of the full list of file extensions that SGMail whitelists, but most of the file extensions that are whitelisted can be viewed here on [our spreadsheet](https://go.gov.sg/email-cwl). If your email gets blocked due to non-whitelisted attachment file extensions, you will receive a mail hygiene notification. You may contact SPEAR (spear@tech.gov.sg) within 1 month from receiving the mail hygiene notification to retrieve the dropped mail.

## How do I recover my mail when I receive a mail hygiene notification?

You may recover your blocked email within 1 month if you email SPEAR (spear@tech.gov.sg) and attach the mail hygiene notification.

## What is Storage mode?

FormSG does not store your responses in the clear. In Storage mode, form responses are encrypted, before being sent to our server for storage. Here's how it works:

1) You create a form using Storage mode, and is prompted to download a secret key which you have to keep safe:

![FormSG FAQ Storage Create Form](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-storage-secretkey.png "FormSG FAQ Storage Create Form")

2) When user submits your form, responses gets encrypted on user's browser before being sent to our server for storage:

![FormSG FAQ Storage Encrypted](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-storage-encrypted.png "FormSG FAQ Storage Encrypted")

3) To retrieve responses, visit the Data tab, and enter your secret key in order to download and unlock encrypted responses:

![FormSG FAQ Storage View Response](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-storage-responses.png "FormSG FAQ Storage View Response")

4) You may then view your responses one-by-one by clicking each row, or export all responses to an Excel by clicking on Export.

## What are the benefits of Storage mode over Email mode?

The key benefit here is convenience. You no longer have to manage emails, and no longer have to manually aggregate emails into Excel using the Data Collation Tool. If your form has high volume such as tens of thousands of responses or more, it can be quite painful to manage those responses in your mailbox.

## When is Storage mode coming out?

Storage mode is expected to be launched to all users by end Apr 2020.

## This secret key sounds important. What if I lose it?

Note that your form's secret key has to be kept safely by you. Our server will not be able to recover your secret key if you lose it. This is an important security benefit, because that means if our server were to be compromised, your responses will not be leaked as the attacker will not have your secret key to unlock your encrypted responses.

If you really do lose your secret key, you will lose past responses. Unfortunately, there is no way for us to retrieve the secret key for you. It is advised you promptly duplicate the form, and publish the new form with a new secret key to continue gathering responses.

## How do I make sure I do not lose my secret key?

It is recommended you share your secret key(s) with colleagues just in case. If you have multiple secret keys you can store them in an Excel with form links and associated secret keys, and keep this Excel on your government laptop. Consider storing secret keys in a third-party password manager tool if your agency has one. Most importantly, regularly log in to unlock form responses to make sure you still have the secret key.

## What if I want to purge encrypted responses stored on the FormSG server?

To purge encrypted responses from our server, all you have to do is discard your secret key. Without the secret key, encrypted responses on our server are as good as gibberish.

## What if my secret key has been accidentally circulated?

Backup your data first, by downloading form responses. Then create a new form with a new secret key and continue gathering responses from this new form. Finally, email us to delete encrypted responses from the old form with the leaked secret key.

## How do I suggest changes to this user guide?

Our user guide is hosted by [OpenDoc](https://opendoc.sg) and is written in [Markdown](https://www.markdownguide.org/), which is a laymen-friendly language. The code for our user guide is open-sourced, and you may visit our [Github repository](https://github.com/opendocsg/opendoc-formsg-faq), and send us a [Pull Request](https://help.github.com/en/articles/creating-a-pull-request) if you have corrections or suggestions to the guide.
