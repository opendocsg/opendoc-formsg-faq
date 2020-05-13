# Advanced Guide

This advanced guide includes tips and tricks, and also solutions to common issues you may face when using FormSG. This section is updated regularly, so feel free to check back once in a while.

## Input fields

### Where is the signature field?

There are a few variants of electronic signatures available on FormSG, all of which, according to the Electronic Transactions Act, are not legally weaker than a wet ink signature. Agencies such as IRAS and MOM have used the following for electronic signatures: a) an NRIC field, b) an attachment of a wet ink signature and c) SingPass Login. 

### Is there an address field? How can I auto-populate one?

You may create a Postal code field with Short Text that validates 6 characters, together with a few more fields for block and unit numbers. Do not use a Number field for Postal code as Numbers cannot start with zero. If verified addresses are needed, you may enable SingPass on your form, and drag in a Registered Address MyInfo field.

### When should I use a radio button vs a dropdown field? 

For 6 or fewer choices, it is advised to use a radio button, as there are only a few options to display:

![FormSG FAQ Radio Button](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-radio.png "FormSG FAQ Radio Button")

For >6 choices, you should use a dropdown field: 

![FormSG FAQ Dropdown](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-dropdown.png "FormSG FAQ Dropdown")

### Can my forms support multiple languages?

Yes it can. Form title has to be in English, but instructions and fields can be in any language. For example, you can specify form fields in English, and provide translations in field descriptions. Your users can also submit your form in any language they want - they just have to switch to the respective keyboard on their device.

### How do I increase attachment size limit? And what if there are many attachments for my form?

The current size limit is 7 MB for the entire form. We auto-compress images to 1024x768 resolution, which is typically less than 1 MB. This is a hard limit because the email service we use has a fixed 10 MB outgoing size, and we buffer 3 MB for email fields and metadata. Because the smallest unit you can attach per attachment field is 1 MB, you can have a max of 7 attachments on your form. If your user has to submit more than 7 documents, you may create just one attachment field of 7 MB, and advise your user to zip documents up and submit as one attachment. Now that Storage mode is launched, we have plans in Q3 2020 to increase attachment size limit to 20 MB.

## Form logic

### How do I know if the logic for the form is correct?

When you implement a new logic, you should test it yourself via the preview page. Note that the onus is on you to verify the correct logic for your form.

![FormSG FAQ Logic](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-logic.png "FormSG FAQ Logic")

### How do I route responses to different emails based on form option selected? 

This might apply for an enquiry form. If user chooses "Complaint" response should route to Complaints Department, but if user chooses "IT" response should route to IT Department. There's no such feature on FormSG, but you can set mail forwarding rules on your email. For example, one such rule can detect "Complaint" in the form response email, and forward this to the Complaints Department automatically.

To set such mail forwarding rules, you have to Create Rule, then select Advanced Options. Next, select the condition as "with specific words in the body":

![FormSG FAQ Specify Condition](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-mailforwarding-guide-1.jpg "FormSG FAQ Specify Condition")

Click on the underlined "specific words", and specify "IT department". Next, select the action as "forward it to people or public group":

![FormSG FAQ Forward Mail](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-mailforwarding-guide-2.jpg "FormSG FAQ Forward Mail")

Click on the underlined "people or public group" and specify the IT department's email.

## Storage mode

### What is Storage mode?

Storage mode is one of two options that FormSG users have for receiving their form responses.

Under Storage mode, form administrators can view responses within FormSG and export collated responses in spreadsheet format. To access these responses, form administrators must first enter a secret key that was generated upon form creation.

All responses are stored in encrypted format, meaning no one except form administrators will be able to view or download responses. Storage mode is permissible for data up to "Restricted" classification and "Sensitive Normal" sensitivity.

Note: The following features are currently **not available** in Storage mode. If you need to use these features with your form, please select Email mode.
- MyInfo fields
- Tables
- Attachments

### What browsers are compatible with Storage mode?

All browsers can submit a form with Storage mode. To retrieve responses, it is strongly advised you use Chrome and not IE11, which has more processing power to decrypt responses.

### When should I choose Storage mode?

Storage mode will be more convenient for the majority of users, especially when there is a high volume of anticipated responses. You will no longer have to manage or manually collate your form responses from your email inbox. Storage mode is permissible for data with "Restricted" classification and "Sensitive Normal" sensitivity.

However, you should choose Email mode if 
- your collated data is classified "Confidential" or "Sensitive High"
- your data is Sensitive High
- you require MyInfo fields, table-style questions or attachments in your form 

### How do I use Storage mode?

**1. Create a new form and select Storage mode**

![FormSG FAQ Storage Create](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-storage-create.png "FormSG FAQ Storage Create")

**2. Download your secret key**

You and any collaborators will need this secret key to activate your form and access form responses. [Learn more about secret keys](https://guide.form.gov.sg/AdvancedGuide.html#what-is-a-secret-key).

Note that if you lose your secret key, your form responses will be __permanently lost__. [Here's how to avoid accidentally losing your secret key.](https://guide.form.gov.sg/AdvancedGuide.html#how-do-i-make-sure-i-dont-lose-my-secret-key)

![FormSG FAQ Storage Download Key](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-storage-downloadkey.png "FormSG FAQ Storage Download Key")

**3. Share your secret key with collaborators** (if any)

Any collaborators you invite will need the secret key to view form responses. Share your secret key with collaborators through a secure channel, according to your agency's security policies.

**4. Build your form as per usual**

**5. Activate your form**

To activate your form and start sharing it with respondents, enter or upload the secret key you downloaded at form creation.

![FormSG FAQ Storage Activate](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-storage-activate.png "FormSG FAQ Storage Activate")

**6. Unlock form responses**

With Storage mode, you can access form responses and feedback within FormSG in the new ‘Data’ tab (previously ‘Results’).

To unlock your responses, enter or upload the secret key you downloaded at form creation. This will give you access to view and export your form responses.

![FormSG FAQ Storage Access Response](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-storage-accessresponse.png "FormSG FAQ Storage Access Response")

**7. View and export responses**

Once you have unlocked your responses with your secret key, you will be able to view your collated form responses within FormSG. Download your form responses by clicking the Export button.

![FormSG FAQ Storage View Response](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-storage-viewresponse.png "FormSG FAQ Storage View Response")

Click on each list item to view the full response.

![FormSG FAQ Storage Click Response](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-storage-clickresponse.png "FormSG FAQ Storage Click Response")

You can also view and download your feedback data in the Feedback tab. 

![FormSG FAQ Storage View Feedback](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-storage-viewfeedback.png "FormSG FAQ Storage View Feedback")

### What is a secret key?

Your secret key is a string of text and numbers used to encrypt and decrypt your form responses. Each secret key unlocks the responses to **one** form only. No one will be able to view your form responses unless they have your Secret Key. 

You will need your secret key at 3 points in your FormSG journey:
- Form creation: download secret key
- Form activation: enter/upload secret key
- Access responses: enter/upload Secret Key

Your secret key is generated by your browser during form creation, and downloaded to your computer or mobile phone. We do not save or store your secret key, and it is the **only way** to access your response data. This is why you should be careful not to lose your secret key, as if you do we will not be able to help you regain access to your response data.

### I've lost my secret key! Can you recover my form data?

Unfortunately, there is no way for us to recover your lost data or retrieve your secret key.

This is because FormSG does not store secret keys (they are truly secret to you!) or any other way to unlock your encrypted data. This is an important security benefit, because that means even if our server were to be compromised, an attacker would never be able to unlock your encrypted responses.

If you have lost your secret key, we advise that you promptly duplicate your form, and publish a new form with a new secret key to continue gathering responses.

### How do I make sure I don't lose my secret key?

To make sure you don't lose your secret key(s), and permanently lose access to your form responses, you can
- Share secret key(s) with colleagues that are also authorised to view form responses;
- Store secret key(s) in a third-party password manager tool, if your agency uses one;
- Store multiple secret keys and associated form links on a spreadsheet in your government-issued laptop;
- Regularly check in on your form responses to make sure that you still have your secret key.

### What if my secret key has been accidentally circulated?

1. Promptly back-up your form data by downloading form responses and feedback from FormSG. 
2. Duplicate your old form and publish a new form with a new secret key, and continue gathering responses with this new form. 
3. When you have done Steps 1-2, email us to delete encrypted responses from the old form so that no one will be able to access your responses with the leaked secret key.

### Is there a storage limit for Storage mode?

No. There have been forms with over a million submissions on Storage mode. In the future with the release of attachment, we will still not impose a limit on number of responses for Storage mode.

### What is the storage duration? How long will my responses be stored for? 

FormSG will store your encrypted responses permanently, and they will be accessible as long as you have the secret key.

If you no longer need to access your form responses, you can simply discard your secret key. Without your secret key, your form responses cannot be decrypted, and are as good as gibberish.

### How does end-to-end encryption work?

When a respondent submits a response, response data is encrypted in the respondent's browser before being sent to our servers for storage. This means that by the time FormSG servers receive responses, they have already been scrambled and are stored in this unreadable form. Your response data remains in this encrypted state until you decrypt your responses with your secret key, transforming them into a readable format. 

The benefit of end-to-end encryption is that response data enters and remains in FormSG's servers in an encrypted state. This ensures that even if our servers are compromised by an attack, attackers will still not be able to decrypt and view your response data, as they do not possess your secret key.

![FormSG FAQ Storage Encrypted](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-storage-encrypted.png "FormSG FAQ Storage Encrypted")

### Who can see my form responses in Storage mode?

To view responses from Storage mode forms, you have to
- be a form owner or collaborator, **and**
- know the secret key generated at form creation

The secret key is the **only way** to view your responses in a readable format. As FormSG does not store your secret key, no one can view your response data, except you and collaborators that you share the secret key with. Even FormSG developers and administrators with full access to the server cannot view your response data, as we do not possess your secret key. 

### Can I enable both Storage and Email mode?

You may select either Storage or Email mode for a single form, but not both.

## Email mode

### What is Email mode?

Email mode is one of two options that FormSG users have for receiving their form responses, the other being Storage mode.

If you opt to create your form on Email mode, your form responses will be sent to email addresses that you specify. FormSG will not store your form responses for security purposes.

Email mode is permissible for individual responses classified Restricted Sensitive High and below, and collated data classified Confidential and below.

### When should I choose Email mode?

You should choose Email mode if
- your collated data is classified Confidential
- your data is Sensitive High
- you require MyInfo fields, table-style questions or attachments in your form 

In most other situations, Storage mode is expected to be more convenient,  especially for forms with a high volume of anticipated responses.

### My form responses are lost! Can you help us recover them?

We cannot recover any form data that you have lost. If you are on Email mode, FormSG does not store any response data for security purposes.

If you cannot find your email responses, they might have been routed to an obscure Outlook folder set by your mail forwarding rules. Or they might have been quarantined by your agency firewall, which you can contact your AFM/IT department for. If you accidentally delete your email responses, they might still be on the email server, which you should contact your AFM/IT department for help.

### Will my emails be blocked?

If emails are non-malicious, they typically will not be blocked. There are two junctures where they might be blocked, but the form submitter will know about it and will be able to retry:

- When a user clicks Submit on his form, the response first goes to our server. Before reaching our server, we have a web application firewall that detects for malicious content and might block the submission. If blocked, a user will see a "Please try again later" message on the form.

- If the form passes the web application firewall, it goes to our server, and we email it to your government email (SGMail) without storing it on our servers. If the government email does not exist then your response will bounce and the user will see a "Please try again later" message on the form.

From here on out, if the email is blocked, your user will not be aware. But there is still a way for you as the form creator to retrieve the blocked responses:

- If the government email exists, it proceeds to SGMail servers. Before it enters SGMail, it will arrive at SGMail's firewall. This firewall will block out emails if there are attachments with non-whitelisted file extensions, for e.g. ".abc" or ".mov". We are not aware of the full list of file extensions that SGMail whitelists, but most of the file extensions that are whitelisted can be viewed here on [our spreadsheet](https://go.gov.sg/email-cwl). If your email gets blocked due to non-whitelisted attachment file extensions, you will receive a mail hygiene notification. You may contact SPEAR (spear@tech.gov.sg) within 1 month from receiving the mail hygiene notification to retrieve the dropped mail.

### How do I recover my mail when I receive a mail hygiene notification?

You may recover your blocked email within 1 month if you email SPEAR (spear@tech.gov.sg) and attach the mail hygiene notification.

## Webhooks

### What are webhooks, and why are they useful?

Webhooks are a standard means for applications like FormSG to send real-time data to other applications and servers. As of May 2020, webhooks are available on Storage mode and can be used by agencies to securely integrate form data collection into the rest of their existing IT workflows. 

Webhooks are useful for agencies who wish to have FormSG response data sent directly to existing IT systems. This removes the need for a human user to periodically export form response data from FormSG, then upload it to an internally-used application.

While webhooks have been tried and tested on high-volume applications, this feature is still in **beta**, meaning users should expect bugs as we work on smoothing out the rough edges. **If you are unable to accept this risk, please do not use this feature until its mainstream release.**

### Who should use webhooks?

Webhooks are worth considering if your agency
- expects to receive a high volume of responses
- needs to integrate internal systems/workflows with form data collection (e.g. sorting responses, and channeling them to specific officers for case management)
- has IT expertise capable of using our software development kit to prepare an endpoint for receiving response data

Webhooks are not necessary or beneficial in most form use cases, where officers are following up over email or Excel spreadsheet, since FormSG already outputs responses in those formats. 

### Are webhooks secure?

Yes - as webhooks are a Storage mode feature, your data is end-to-end encrypted as with all Storage mode responses. Our software development kit (https://github.com/opengovsg/formsg-javascript-sdk) provides instructions on setting up your receiving system to 
- verify that each submission was sent by FormSG and not any other server
- decrypt submissions using the secret key that only you own

### How do I set up webhooks for my form?

Pre-requisite: You must be able to expose an endpoint that is accessible over the Internet.

1. Follow the instructions at https://github.com/opengovsg/formsg-javascript-sdk to prepare your system to receive, verify and decrypt FormSG responses. Please lock down the version of the SDK you are using and disable automatic upgrades to avoid disruption from breaking changes.

2. Navigate to the form you want to set up a webhook for. In the Settings tab, enter your webhook URL in the 'Webhook URL' field and save changes.

3. Test that responses are received at your webhook URL.

**Important to note**
- Webhooks are still in **beta**, meaning users should expect bugs as we work on smoothing out the rough edges. **If you are unable to accept this risk, please do not use this feature until its mainstream release.**
- Please lock down the version of the SDK you are using and disable automatic upgrades to avoid disruption from breaking changes.
- You are responsible for correctly setting up your system to receive, verify and decrypt FormSG responses using our software development kit (SDK). FormSG is not responsible for your setup, and only bears responsibility for ensuring our servers are correctly routing responses in accordance with our SDK. 

### There is a problem and my system is not receiving data from FormSG. Are my responses lost?

Your responses are not lost as all Storage mode responses are stored encrypted in FormSG's database. As with all Storage mode forms, you can retrieve your data by simply logging in to FormSG and using your secret key to decrypt and export responses.

## Data Collation Tool

### Where do I access the Data Collation Tool? I can't find it.

Since we moved to the Intranet start of 2020, Data Collation Tool has shifted from the old link of https://form.app.gov.sg to the new link of https://collate.form.gov.sg.

### Does my data go to your server when I use the Data Collation Tool?

No, your data is not seen by our server during the Data Collation Tool process. Aggregation of your email responses happens offline on your browser.

### Excel responses from table style questions are clumped into one line, how do I separate them?

1. Open the excel sheet generated from our Data Collation Tool
2. Select the entire column of the responses
3. Go to the Data tab and choose Text to Columns > Delimit by comma (,).

![FormSG FAQ Excel Split Response](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-excel.png "FormSG FAQ Excel Split Response")  
Don't worry if responses contain commas because Excel does not split commas accompanied by spaces. Commas between columns have no space, which Excel will split by, unlike commas within sentences. An example response to a table style question asking for name, age, hobbies is: "Mr Tan,55,Soccer, Tennis, Taichi". Excel will split this correctly into "Mr Tan", "55", and "Soccer, Tennis, Taichi" because it ignores the commas in hobbies that have spaces after them.

## Other

### I did not receive my OTP. Where is it?

The OTP is sent immediately, but might take a while to arrive in your government email due to the potentially multiple firewalls the email has to go through. OTPs expire in 15 minutes, after which you have to resend another one. After logging in, you will remain logged in for 24 hours. This means you need not have both Intranet and Internet devices at all times; you can log in to your Internet device before you leave your office, and for 24 hours be able to create forms from one Internet device.

### My form is really long. Why can't users save draft?

Prior to the launch of Storage mode, we did not enable draft-saving functionality because there was no good place to store draft form data. Our servers did not store data, and saving data on local machines might leak this out to unintended recipients if form is filled from a library computer. With the launch of Storage mode, we might consider re-enabling Save Draft. Stay tuned!

### I am leaving the organisation or switching over to a new email. How do I transfer ownership of my forms?

Note that you might not need to transfer ownership of your form. You may simply add your colleague as a collaborator. Collaborators have the same rights as form creators, except they cannot delete the form.

![FormSG FAQ Add Collaborators](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-collaborator.png "FormSG FAQ Add Collaborators")

If you have already lost access to your old email and can no longer edit your form, you may file a [Support Form](https://go.gov.sg/formsg-support) request to transfer ownership to another email.

### My forms are particularly sensitive and I do not want other public officers to see them on the Examples tab.

Note that only forms that are active, and have at least 10 responses will be searchable on the Examples tab. And that the Examples tab is only viewable by authenticated public officers, not the general public. Furthermore, only your form fields are viewable, not your form data.

But if there is still a need to unlist your form from the Examples tab because the form fields alone are already sensitive to be viewed by fellow public officers, then you may submit our [Support Form](https://go.gov.sg/formsg-support), and attach an email approval from your MIC (DD/Dir) stating justifications for unlisting specific form links from the Examples tab.

### How do I restrict access to my form to selected users to submit?

The unguessable form link acts as a password. You can circulate the form link to only users that you intend to gather responses from. As long as you don't add the form link to public channels such as on your agency's Internet website, the form link will not be indexed by search engines. If the form link ends up widely circulated with non-authorised users submitting the form, you may then filter off such non-authorised submissions.

### How can I split the form into multiple pages?

We don't support multiple pages, because >70% of our users fill in forms from their phones, and are used to navigate through content by scrolling not tabbing through pages, such as when they scroll through their social media feeds. Hence we built the Header field to separate your form into sections that your user can scroll through.

![FormSG FAQ Create Section](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-section.png "FormSG FAQ Create Section")

### What is FormSG’s infrastructure like? How is the security of the system? 

We have our NodeJS web servers hosted on AWS Singapore zone. Our NoSQL database that stores only form fields and not form data is managed by Mongo Atlas, and also hosted on AWS Singapore zone. We use AWS SES to send out mails, which are not open mail relays, have valid SPF and DKIM records, and encrypts form data before sending them over to government SGMail. Our web servers are protected with Cloudflare SSL, their Anti-DDoS protection and Web Application Firewall. We use Pingdom for website performance and availability monitoring, and have AWS CloudWatch alarms, together with CloudTrail that monitors activity and GuardDuty for threat intelligence monitoring. Our Data Collation Tool is built with vanilla Javascript and is static site on S3. We have undergone rigorous penetration testing, vulnerability assessment and infrastructure review by both world renowned security testers and CSG. We have also written a >74 page NIST security review documenting our security best practices.

### How do I suggest changes to this user guide?

Our user guide is hosted by [OpenDoc](https://opendoc.sg) and is written in [Markdown](https://www.markdownguide.org/), which is a laymen-friendly language. The code for our user guide is open-sourced, and you may visit our [Github repository](https://github.com/opendocsg/opendoc-formsg-faq), and send us a [Pull Request](https://help.github.com/en/articles/creating-a-pull-request) if you have corrections or suggestions to the guide.
