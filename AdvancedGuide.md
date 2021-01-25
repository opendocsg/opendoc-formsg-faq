# Advanced Guide

This advanced guide includes tips and tricks, and also solutions to common issues you may face when using Form. This section is updated regularly, so feel free to check back once in a while.

## Input fields

### Where is the signature field?

There are a few variants of electronic signatures available on Form, all of which, according to the Electronic Transactions Act, are not legally weaker than a wet ink signature. Agencies such as IRAS and MOM have used the following for electronic signatures: a) an NRIC field, b) an attachment of a wet ink signature and c) SingPass Login. 

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

This might apply for an enquiry form. If user chooses "Complaint" response should route to Complaints Department, but if user chooses "IT" response should route to IT Department. There's no such feature within the Form interface, but you can set mail forwarding rules on your email. For example, one such rule can detect "Complaint" in the form response email, and forward this to the Complaints Department automatically.

To set such mail forwarding rules, you have to Create Rule, then select Advanced Options. Next, select the condition as "with specific words in the body":

![FormSG FAQ Specify Condition](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-mailforwarding-guide-1.jpg "FormSG FAQ Specify Condition")

Click on the underlined "specific words", and specify "IT department". Next, select the action as "forward it to people or public group":

![FormSG FAQ Forward Mail](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-mailforwarding-guide-2.jpg "FormSG FAQ Forward Mail")

Click on the underlined "people or public group" and specify the IT department's email.

## Storage mode

### What is Storage mode?

Storage mode is a method of receiving form responses. Form admins can choose between `Storage mode` and `Email mode` for each form. 

Under Storage mode, form administrators can view responses within form.gov.sg and export collated responses in spreadsheet format. To access these responses, form administrators must first enter a secret key that was generated upon form creation.

All responses are stored in encrypted format, meaning no one except form administrators will be able to view or download responses. Storage mode is permissible for data up to "Restricted" classification and "Sensitive Normal" sensitivity.

Note: The following features are currently **not available** in Storage mode. If you need to use these features with your form, please select Email mode.
- MyInfo fields
- Emailed copy of response to respondent

### What browsers are compatible with Storage mode?

Respondents can use any browser to submit a form on Storage mode. For form admins, we strongly recommend using Chrome, Edge or any browser other than Internet Explorer (IE) for quicker response retrieval, as IE tends to have low processing power and will take a longer time to decrypt responses.

### When should I choose Storage mode?

Storage mode will be more convenient for the majority of users, especially when there is a high volume of anticipated responses. You will no longer have to manage or manually collate your form responses from your email inbox. Storage mode is permissible for data with "Restricted" classification and "Sensitive Normal" sensitivity.

However, you should choose Email mode if 
- your data is classified "Confidential" or "Sensitive High"
- you require MyInfo fields or emailed response copies to respondents

### How do I switch my form from Email mode to Storage mode?

You will have to duplicate your Email mode form and recreate it as a Storage mode form. On your dashboard, hover over your Email mode form and click the duplicate icon. Then select 'Storage mode' and follow the steps below to create a duplicate form in Storage mode.

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

![Form FAQ Storage Activate](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-storage-activate.png "Form FAQ Storage Activate")

**6. Unlock form responses**

With Storage mode, you can access form responses and feedback within Form in the new ‘Data’ tab (previously ‘Results’).

To unlock your responses, enter or upload the secret key you downloaded at form creation. This will give you access to view and export your form responses.

![Form FAQ Storage Access Response](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-storage-accessresponse.png "Form FAQ Storage Access Response")

**7. View and export responses**

Once you have unlocked your responses with your secret key, you will be able to view your collated form responses within Form. Download your form responses by clicking the Export button.

![Form FAQ Storage View Response](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-storage-viewresponse.png "Form FAQ Storage View Response")

Click on each list item to view the full response.

![Form FAQ Storage Click Response](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-storage-clickresponse.png "Form FAQ Storage Click Response")

You can also view and download your feedback data in the Feedback tab. 

![Form FAQ Storage View Feedback](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-storage-viewfeedback.png "Form FAQ Storage View Feedback")

### What is a secret key?

Your secret key is a string of text and numbers used to encrypt and decrypt your form responses. Each secret key unlocks the responses to **one** form only. No one will be able to view your form responses unless they have your Secret Key. 

You will need your secret key at 3 points in your Form journey:
- Form creation: download secret key
- Form activation: enter/upload secret key
- Access responses: enter/upload Secret Key

Your secret key is generated by your browser during form creation, and downloaded to your computer or mobile phone. We do not save or store your secret key, and it is the **only way** to access your response data. This is why you should be careful not to lose your secret key, as if you do we will not be able to help you regain access to your response data.

### I am encountering a secret key error or I have lost my secret key! Are you able to help me recover the secret key or my response data?

If you have lost your secret key, take these steps immediately:

1. If your form is live, duplicate your form, save the new secret key securely and replace the original form's link with the new form's link to continue collecting responses. Deactivate the original form as soon as possible to avoid losing further responses.

2. On the computer you used to create the original form, search for 'Form Secret Key'. Secret keys typically downloaded into your Downloads folder as .txt files with 'Form Secret Key' in the filename.

3. If you have created multiple forms with similar titles in the past, it is possible that you have confused the different forms' secret keys with each other, as form titles are in the secret keys' filenames. Try all secret keys with similar filenames on your form.

4. If you remember sending an email to share your secret key with collaborators, search the Sent folder in your email for the keyword 'secret key' and your form title. 

5. If you still cannot find your secret key and would like our help to debug this further, contact us on our [help form](https://go.gov.sg/form-help). 

Without your secret key, you will not be able to access your existing response data. Additionally, it's not possible for us to recover your lost secret key or response data on your behalf. This is because Form does not retain your secret key or any other way to unlock your encrypted data - the only way to ensure response data is truly private to agencies only. This is an important security benefit, because that means even if our server were to be compromised, an attacker would never be able to unlock your encrypted responses.

### How do I make sure I don't lose my secret key?

To make sure you don't lose your secret key(s), and permanently lose access to your form responses, you can
- Share secret key(s) with colleagues that are also authorised to view form responses;
- Store secret key(s) in a third-party password manager tool, if your agency uses one;
- Store multiple secret keys and associated form links on a spreadsheet in your government-issued laptop;
- Regularly check in on your form responses to make sure that you still have your secret key.

### What if my secret key has been accidentally circulated?

1. Promptly back-up your form data by downloading form responses and feedback from Form. 
2. Duplicate your old form and publish a new form with a new secret key, and continue gathering responses with this new form. 
3. When you have done Steps 1-2, email us to delete encrypted responses from the old form so that no one will be able to access your responses with the leaked secret key.

### Is there a storage limit for Storage mode?

No. There have been forms with over a million submissions on Storage mode. In the future with the release of attachment, we will still not impose a limit on number of responses for Storage mode.

### Can I delete my responses in Storage mode?

For audit reasons, deleting responses is not allowed. However, if you wish to reset your response count to zero after testing your form, you can simply duplicate your test form and create another Storage mode form. You can then use your new form as your live form instead.

### What is the storage duration? How long will my responses be stored for? 

Form will store your encrypted responses permanently, and they will be accessible as long as you have the secret key.

If you no longer need to access your form responses, you can simply discard your secret key. Without your secret key, your form responses cannot be decrypted, and are as good as gibberish.

### How does end-to-end encryption work?

When a respondent submits a response, response data is encrypted in the respondent's browser before being sent to our servers for storage. This means that by the time Form's servers receive responses, they have already been scrambled and are stored in this unreadable form. Your response data remains in this encrypted state until you decrypt your responses with your secret key, transforming them into a readable format. 

The benefit of end-to-end encryption is that response data enters and remains in Form's servers in an encrypted state. This ensures that even if our servers are compromised by an attack, attackers will still not be able to decrypt and view your response data, as they do not possess your secret key.

![Form FAQ Storage Encrypted](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-storage-encrypted.png "Form FAQ Storage Encrypted")

### Who can see my form responses in Storage mode?

To view responses from Storage mode forms, you have to
- be a form owner or collaborator, **and**
- know the secret key generated at form creation

The secret key is the **only way** to view your responses in a readable format. As Form's servers do not store your secret key, no one can view your response data, except you and collaborators that you share the secret key with. Even Form developers and administrators with full access to the server cannot view your response data, as we do not possess your secret key. 

### Can I enable both Storage and Email mode?

You may select either Storage or Email mode for a single form, but not both.

## Email mode

### What is Email mode?

Storage mode is a method of receiving form responses. Form admins can choose between `Storage mode` and `Email mode` for each form. 

If you select Email mode, your form responses will be sent to email addresses that you specify. Form will not store your form responses for security purposes.

Email mode is permissible for individual responses classified Restricted Sensitive High and below, and collated data classified Confidential and below.

### When should I choose Email mode?

You should choose Email mode if
- your data is Confidential or Sensitive High
- you require MyInfo fields, or emailed response copies to your respondent

In most other situations, Storage mode is expected to be more convenient,  especially for forms with a high volume of anticipated responses.

### How do I ensure my form responses will not bounce?

If your mailbox is full or your email address is no longer valid, form responses will bounce and be permanently lost. Here are some ways to prevent this:

1. Set up auto-archiving on your mailbox to ensure that your mailbox will never hit full capacity. 

   You can set up auto-archiving in your Outlook by navigating to `File` > `Options` (left) > `Advanced` (left) > `AutoArchive Settings` (right). Run `AutoArchive` as often as you expect your mailbox to be full - if you expect high response volume, you can run `AutoArchive` every day.

2. Enter 2 or more email addresses where responses will be sent, for all your Email mode forms. 

   You can find this setting by logging in to form.gov.sg, clicking on your form, navigating to `Settings` > `Emails where responses will be sent`.

3. If you are leaving your department, make sure to update "Emails where responses will be sent" so that form responses will go to a colleague after you leave.

### My form responses are lost! Can Forms help me recover them?

If your form is on Email mode, Forms does not store your response data for security purposes. We cannot recover any form data that you have lost.

If you cannot find your email responses, they might have been routed to an obscure Outlook folder set by your mail forwarding rules. Or they might have been quarantined by your agency firewall, which you can contact your AFM/IT department for. If you accidentally delete your email responses, they might still be on the email server, which you should contact your AFM/IT department for help.

### Will my emails be blocked?

If emails are non-malicious, they typically will not be blocked. There are two junctures where they might be blocked, but the form submitter will know about it and will be able to retry:

- When a user clicks Submit on his form, the response first goes to our server. Before reaching our server, we have a web application firewall that detects for malicious content and might block the submission. If blocked, a user will see a "Please try again later" message on the form.

- If the form passes the web application firewall, it goes to our server, and we email it to your government email (SGMail) without storing it on our servers. If the government email does not exist then your response will bounce and the user will see a "Please try again later" message on the form.

From here on out, if the email is blocked, your user will not be aware. But there is still a way for you as the form creator to retrieve the blocked responses:

- If the government email exists, it proceeds to SGMail servers. Before it enters SGMail, it will arrive at SGMail's firewall. This firewall will block out emails if there are attachments with non-whitelisted file extensions, for e.g. ".abc" or ".mov". We are not aware of the full list of file extensions that SGMail whitelists, but most of the file extensions that are whitelisted can be viewed here on [our spreadsheet](https://go.gov.sg/email-cwl). If your email gets blocked due to non-whitelisted attachment file extensions, you will receive a mail hygiene notification. You may contact SPEAR (spear@tech.gov.sg) within 1 month from receiving the mail hygiene notification to retrieve the dropped mail.

### How do I recover my mail when I receive a mail hygiene notification?

You may recover your blocked email within 1 month if you email SPEAR (spear@tech.gov.sg) and attach the mail hygiene notification.

### Is there any way to receive my responses in an Excel spreadsheet?

Yes! Other than using Storage mode to download a spreadsheet of your responses directly, you can also collate your Email mode responses into a spreadsheet using the Data Collation Tool.

## Data Collation Tool

### Where is the Data Collation Tool? I can't find it.

Since we moved to the Intranet start of 2020, Data Collation Tool has shifted from the old link of [https://form.app.gov.sg](https://form.app.gov.sg) to the new link of [https://collate.form.gov.sg](https://collate.form.gov.sg).

If you are not able to access the new link, visit Proxy Settings, toggle "Use setup script" on, and insert: http://proxy.sgnet.gov.sg:4714/files/proxy.pac. Appreciate if you can also approach your agency IT to push this proxy setup to your colleagues.

If this does not work, use the old link of https://form.app.gov.sg on the Intranet. If you are not able to access it, get your IT team to whitelist 10.54.9.38, 10.54.9.34 and 10.54.9.57 on your agency firewall

As a last resort, you can use our Internet collation tool at https://collate.form.gov.sg. Transfer your .pst file of responses to your Internet machine via a secure thumb-drive, visit the link, and follow the instructions to collate your responses. Note that your data is not exposed to the Internet as the tool does not upload data to a server. Data is collated offline on the browser.

### Excel responses from table style questions are clumped into one line, how do I separate them?

1. Open the excel sheet generated from our Data Collation Tool
2. Select the entire column of the responses
3. Go to the Data tab and choose Text to Columns > Delimit by comma (,).

### Does my data go to your server when I use the Data Collation Tool?

No, your data is not seen by our server during the Data Collation Tool process. Aggregation of your email responses happens offline on your browser.

## SingPass, CorpPass and MyInfo

### How do you enable SingPass or CorpPass?

All you have to do is enter an e-service ID on the Settings tab of your form to enable SPCP:

![Form FAQ E-service ID](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-singpass.png "Form FAQ E-service ID")

An e-service ID is a unique billing ID given by the SingPass/CorpPass office to your department's finance team. An invalid e-service ID will yield a 138 error for SingPass and 328 error for CorpPass. If you don’t already have an e-service ID, you can either ask your agency IT department to find an e-service ID to reuse, or contact SPCP rep [alvin_wee@tech.gov.sg](mailto:alvin_wee@tech.gov.sg) to create a new one. When testing your e-service ID you may log in to our UAT server, https://uat.form.gov.sg and create test forms there. Note that accounts and forms are separate on UAT and Live servers and cannot be transferred over.

To track number of submissions at your e-service ID you may visit the Billing Panel tab on the top right of your forms dashboard:

![Form FAQ Billing Panel E-service ID](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-billing-eservice.png "Form FAQ Billing Panel E-service ID")

It is up to you to decide if you want 2FA or 1FA e-service ID. For CorpPass, it is also up to you to decide whether you want authorisation work flows at your e-service ID. Consult SPCP rep on this if you have concerns. 

## Webhooks

### What are webhooks, and why are they useful?

Webhooks are a standard means for applications like Form to send real-time data to other applications and servers. As of May 2020, webhooks are available on Storage mode and can be used by agencies to securely integrate form data collection into the rest of their existing IT workflows. 

Webhooks are useful for agencies who wish to have form response data sent directly to existing IT systems. This removes the need for a human user to periodically export form response data from form.gov.sg, then upload it to an internally-used application.

While webhooks have been tried and tested on high-volume applications, this feature is still in **beta**, meaning users should expect bugs as we work on smoothing out the rough edges. **If you are unable to accept this risk, please do not use this feature until its mainstream release.**

### Who should use webhooks?

Webhooks are worth considering if your agency
- expects to receive a high volume of responses
- needs to integrate internal systems/workflows with form data collection (e.g. sorting responses, and channeling them to specific officers for case management)
- has IT expertise capable of using our software development kit to prepare an endpoint for receiving response data

Webhooks are not necessary or beneficial in most form use cases, where officers are following up over email or Excel spreadsheet, since Form already outputs responses in those formats. 

### Are webhooks secure?

Yes - as webhooks are a Storage mode feature, your data is [end-to-end encrypted](https://guide.form.gov.sg/AdvancedGuide.html#how-does-end-to-end-encryption-work) as with all Storage mode responses. Our [software development kit](https://github.com/opengovsg/formsg-javascript-sdk) (SDK) provides instructions on setting up your receiving system to 
- verify that each submission was sent by Form and not any other server
- decrypt submissions using the secret key that only you own

### How do I set up webhooks for my form?

Pre-requisite: You must be able to expose a HTTPS endpoint that is accessible over the Internet.

1. Follow [these instructions](https://github.com/opengovsg/formsg-javascript-sdk) to prepare your system to receive, verify and decrypt form responses. Please lock down the version of the SDK you are using and disable automatic upgrades to avoid disruption from breaking changes.

2. Navigate to the form you want to set up a webhook for. In the Settings tab, enter your endpoint URL in the 'Webhook Endpoint URL' field and save changes.

3. Test that responses are received at your endpoint URL.

**Important to note**
- Webhooks are still in **beta**, meaning users should expect bugs as we work on smoothing out the rough edges. **If you are unable to accept this risk, please do not use this feature until its mainstream release (end Q3 CY2020).**
- Please lock down the version of the SDK you are using and disable automatic upgrades to avoid disruption from breaking changes.
- You are responsible for correctly setting up your system to receive, verify and decrypt Form responses using our SDK. Form is not responsible for your setup, and only bears responsibility for ensuring our servers are correctly routing responses in accordance with our SDK. 

### There is a problem and my system is not receiving data from Form. Are my responses lost?

Your responses are not lost as all Storage mode responses are stored encrypted in Form's database. As with all Storage mode forms, you can retrieve your data by simply logging in to Form and using your secret key to decrypt and export responses in .csv format.


## Verified SMS Paid Service

The Verified SMS feature on the Mobile Phone field triggers an SMS containing a One-Time Password (OTP) to the entered mobile phone number, so that form respondents can verify that the entered number belongs to them. 

### Do I have to pay for Verified SMS?

Verified SMS is free up to 10,000 responses per form. 

**However, if your form might receive over 10,000 responses, your agency will have to pay for verified SMS by setting up your own Twilio account** (see instructions below). To be safe, please arrange payment before activating your form. Once your form has exceeded 10,000 responses, either the Verified SMS feature or the form itself will have to be deactivated, and Form reserves the right to charge your agency for past SMS expenditure. 

### How do I arrange payment for Verified SMS?

We recommend that you arrange payment before activating your form, in case a high volume of responses are submitted and bust your free tier. Once your form has exceeded 10,000 responses, either the Verified SMS feature or the form itself will have to be deactivated, and Form reserves the right to charge your agency for past SMS expenditure. 

**Step 1**. Obtain approval within your agency to pay for verified SMS through Twilio. [Twilio](https://www.twilio.com/) is the paid SMS service that Form uses to send OTP verification SMSes to mobile numbers. Twilio is the only SMS service provider that Form is integrated with, and provides paid SMS at a competitive price. Twilio's SMSes cost 0.03 USD (3 cents USD) per SMS. 

**Step 2**. Create an account at https://twilio.com, and set up payment to your agency. Set up the rest of your account according to the instructions below in the 'Twilio account setup' section.

**Step 3** Email us at formsg@tech.gov.sg but **do not include any Twilio account details** in your email. We will advise you on how to securely pass the following 4 items to us:

i. Account SID

ii. API Key SID

iii. API Key Secret

iv. Messaging Service SID


### Twilio account setup

#### Account SID

Upon logging in, you should be able to see your **account SID** on the dashboard when you arrived on Twilio's console. 

![Twilio Dashboard](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/twilio-dashboard.png)
📌 Item 1: We will need your Account SID from this step.


#### Set up API Key

Click on Settings > API Keys on the left-side menu and select **Create new API Key**.

![Create new api key](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/create-new-api-keys.jpg)

Create a new **standard** API key. You can rename the friendly name.

![New Api Key](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/new-api-key.png)

You will need to pass us your **SID** and **secret**. Please keep these safe. Remember to save the **secret** somewhere before you click on **Done**! Or else you will not be able to view your **secret** again and will have to recreate a new API key.

![SID and Secret key](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/secret-key-twilio.png)
📌 Items 2 and 3: We will need your API Key SID and Secret from this step.


#### Buy a phone number

You need to purchase a phone number to start sending SMSes. 

We recommend buying a US number ($1 a month) and masking the number with an [alphanumeric sender ID](https://support.twilio.com/hc/en-us/articles/223181348-Getting-Started-with-Alphanumeric-Sender-ID-for-Twilio-Programmable-SMS/). A Singapore phone number is $75 per month but a Singapore number is not required to send Singapore SMSes. 

Click on the button with 3 dots on the left side menu and then click on **Phone Numbers**

![Sending Sms](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/phone-numbers.jpg)

![Buy a number](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/buy-number.jpg)

You can change the country code to USA, and click on search to purchase a phone number

**Do not release your number**: Releasing a number means that you are returning the number you have purchased back to Twilio. This is irreversible. They will charge you for a new number when you purchase it again.

**Optional**: Alphanumeric Sender ID

Once you have bought a phone number, you can configure the Alphanumeric Sender ID to mask it with your agency info. This means SMS recipients will see the SMS as coming from the name (Alpha Sender ID) you specify instead of a phone number.

You can do this by navigating to Programmable SMS > Messaging Service > Select the name of the Messaging Service > Features > Add sender > Add Alpha Sender

Alternatively, you may wish to watch the video on [Postman.gov.sg's workplace group](https://onepublicservice.workplace.com/groups/postman.gov.sg/permalink/2716726868596347/) on adding an Alpha Sender ID.


#### Set up Messaging Service

Click on the button with the "chat message" icon on the left side menu and then click on Programmable Messaging > Messaging Services > Create new Messaging Service.

Once you click on the button, you can enter a name for your messaging service and click OK.

![Create Messaging Service](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/msg-service-.jpg)

Click on Add Senders

![Add Senders](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/sender-pool-.jpg)

Select Phone Number for Sender Type and click Continue

![Add Senders 2](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/add-sender-1.png)

Your purchased number should appear here. Select the number and click Add Phone Numbers

![Purchase Number](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/purchased-number.jpg)

Now, your phone number will be added to the messaging service. Go back to the messaging services landing page.

![msg service 2](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/msg-service-2.jpg)
📌 Item 4: We will need your Messaging Service SID from this step.


## Other

I did not receive my OTP. Where is it?

The OTP is sent immediately, but might take a while to arrive in your government email if there is high traffic on the government network. OTPs expire in 15 minutes, after which you have to resend another one. After logging in, you will remain logged in for 24 hours. This means you need not have both Intranet and Internet devices at all times; you can log in to your Internet device before you leave your office, and for 24 hours be able to create forms from one Internet device.

### I did not receive my OTP. Where is it?

The OTP is sent immediately, but might take a while to arrive in your government email if there is high traffic on the government network. OTPs expire in 15 minutes, after which you have to resend another one. After logging in, you will remain logged in for 24 hours. This means you need not have both Intranet and Internet devices at all times; you can log in to your Internet device before you leave your office, and for 24 hours be able to create forms from one Internet device.

### My form is really long. Why can't users save draft?

Prior to the launch of Storage mode, we did not enable draft-saving functionality because there was no good place to store draft form data. Our servers did not store data, and saving data on local machines might leak this out to unintended recipients if form is filled from a library computer. With the launch of Storage mode, we might consider re-enabling Save Draft. Stay tuned!

### I am leaving the organisation or switching over to a new email. How do I transfer ownership of my forms?

You can transfer ownership on the top right hand corner of each form by clicking the round Add Collaborator button. 

Note that you might not need to transfer ownership of your form. You may simply add your colleague as a collaborator. Collaborators have the same rights as form creators, except they cannot delete the form.

![Form FAQ Add Collaborators](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-collaborator.png "Form FAQ Add Collaborators")

### The previous form administrator has left the department without transferring their forms or adding collaborators. Their email address is no longer valid. How can we regain access to their forms?

Obtain internal approval and make a request to your IT Department to temporarily reinstate the email address of the previous form admin, so that you can log in to form.gov.sg using their email to transfer their forms. You can transfer ownership on the top right hand corner of each form by clicking the round Add Collaborator button. 

To prevent such incidents from occurring, we strongly recommend that all IT departments add form ownership transfer in offboarding steps for staff leaving the organisation.

### My forms are particularly sensitive and I do not want other public officers to see them on the Examples tab.

Note that only forms that are active, and have at least 10 responses will be searchable on the Examples tab. And that the Examples tab is only viewable by authenticated public officers, not the general public. Furthermore, only your form fields are viewable, not your form data.

But if there is still a need to unlist your form from the Examples tab because the form fields alone are already sensitive to be viewed by fellow public officers, then you may submit our [Support Form](https://go.gov.sg/formsg-support), and attach an email approval from your MIC (DD/Dir) stating justifications for unlisting specific form links from the Examples tab.

### How do I restrict access to my form to selected users to submit?

The unguessable form link acts as a password. You can circulate the form link to only users that you intend to gather responses from. As long as you don't add the form link to public channels such as on your agency's Internet website, the form link will not be indexed by search engines. If the form link ends up widely circulated with non-authorised users submitting the form, you may then filter off such non-authorised submissions.

### How can I split the form into multiple pages?

We don't support multiple pages, because >70% of our users fill in forms from their phones, and are used to navigate through content by scrolling not tabbing through pages, such as when they scroll through their social media feeds. Hence we built the Header field to separate your form into sections that your user can scroll through.

![Form FAQ Create Section](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-section.png "Form FAQ Create Section")

### What tech stack is Form built on?

Form is built on a MEAN stack (MongoDB, Express.js, AngularJS, Node.js). We will be migrating from AngularJS to React (MERN stack) in Feb 2021.

### What is Form's infrastructure? How secure is Form?

We have our NodeJS web servers hosted on AWS Singapore zone. Our NoSQL database that stores only form fields and not form data is managed by MongoDB Atlas, and also hosted on AWS Singapore zone. We use AWS SES to send out mails, which are not open mail relays, have valid SPF and DKIM records, and encrypts form data before sending them over to government SGMail. Our web servers are protected with Cloudflare SSL, their Anti-DDoS protection and Web Application Firewall. We use Pingdom for website performance and availability monitoring, and have AWS CloudWatch alarms, together with CloudTrail that monitors activity and GuardDuty for threat intelligence monitoring. Our Data Collation Tool is built with vanilla Javascript and is a static site on S3. 

We have undergone rigorous penetration testing, vulnerability assessment and infrastructure review by both world renowned security testers and CSG. Our [July 2020 pentest report](https://go.gov.sg/form-pentest) by renowned security firm Cure53 found a solid security standing. We have also written a >74 page NIST security review documenting our security best practices.

### How do I suggest changes to this user guide?

Our user guide is hosted by [OpenDoc](https://opendoc.sg) and is written in [Markdown](https://www.markdownguide.org/), which is a laymen-friendly language. The code for our user guide is open-sourced, and you may visit our [Github repository](https://github.com/opendocsg/opendoc-formsg-faq), and send us a [Pull Request](https://help.github.com/en/articles/creating-a-pull-request) if you have corrections or suggestions to the guide.
