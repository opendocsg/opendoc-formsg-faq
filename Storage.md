# Storage Mode

## What is Storage mode?

FormSG does not store your responses in the clear. In Storage mode, form responses are encrypted, before being sent to our server for storage. Here's how it works:

1. You create a form using Storage mode, and is prompted to download a form password which you have to keep safe:

![FormSG FAQ Storage Create Form](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-storage-createform.png "FormSG FAQ Storage Create Form")

2. When user submits your form, responses gets encrypted on user's browser before being sent to our server for storage:

![FormSG FAQ Storage Encrypted](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-storage-encrypted.png "FormSG FAQ Storage Encrypted")

3. When you want to retrieve responses, visit the Results tab, and enter your form password in order to download encrypted responses have them decrypted on your browser with the form password you provide:

![FormSG FAQ Storage View Response](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-storage-viewresponses.png "FormSG FAQ Storage View Response")

4. You may then view your responses one-by-one or click the Download button to export all responses to an Excel.

## What are the benefits of this mode over Email mode? 

The key benefit here is convenience. You no longer have to manage emails, and no longer have to manually aggregate emails into Excel using the Data Collation Tool. If your form has high volume such as tens of thousands of responses or more, it can be quite painful to manage those responses in your mailbox.

## What features are not available yet? 

We have yet to progressively roll out Storage mode to all users. All users should have access to the feature by early August 2019. Certain features you have on Email mode will not be available yet. They include: Attachment field, Table style field, SingPass/CorpPass/MyInfo and Auto-acknowledgement emails. We will progressively roll them out towards the end of 2019.

## This form password sounds important. What if I lose it? 

Note that the form password has to be kept safely by you. Our server will not be able to recover the form password for you if you lose it. This is a key security benefit, because that means if our server were to be compromised, the attacker will not have the form password to unlock your encrypted responses, and will only see gibberish. 

If you really do lose your form password, you will lose past responses. Unfortunately, there is no way for us to retrieve the form password for you. It is advised you promptly duplicate the form, and publish the new form with a new form password to continue gathering responses from your users.

## How should I keep my form password safe? 

It is recommended you at least pass the password to one other colleague just in case. You may email yourself the password. Or store it in a third-party password manager tool. And most importantly, it is advised you regularly log in to decrypt your form responses to make sure you still have the form password.

## What if I want to purge the encrypted data on the FormSG server? 

To purge encrypted data from our server, all you have to do is destroy/delete/forget your form password. Because our server only stores gibberish, without the form password, your data is as good as being purged.

## What if my form password has been accidentally circulated? 

A first step is to first download the data, then create a new form with a new form password and continue gathering responses from this new form. Then send us an email to assist you in deleting the responses from the old form with the leaked form password.

## How can I prevent leaving data in the clear on my Internet machine? 

Instead of downloading data into the default Downloads folder, you might want to plug in your encrypted thumbdrive and download directly into the thumbdrive instead. This prevents your data in the clear persisting on an Internet machine, which might be a concern especially if your Internet machine is shared.

## What classification of data (based on RCST) can Storage mode handle?

Storage mode can handle up to Restricted. If there is a need to handle up to Confidential, you may consider using [Email mode](/Email.html).

## What sensitivity of data (based on Information Sensitivity Framework or ISF) can Storage mode handle? 

Storage mode can handle up to Sensitive Normal. The semantics of Sensitive High are still being deliberated and we will push for FormSG to be able to handle Sensitive High as soon as the discussion around Sensitive High has concluded.
