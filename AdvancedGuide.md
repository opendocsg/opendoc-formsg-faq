# Advanced Guide


## FormSG forms are only accessible on the Internet. How about Intranet forms?

The goal of FormSG is to replace citizen-facing paper forms. For Intranet forms, you may find SharePoint or PSST useful (we don't know much about them though, you may want to ask around). Alternatively, you may email your FormSG form link as a QR code to officers so they may fill in forms from their own mobile devices.

We will experiment with bringing FormSG to the Intranet late 2019 / early 2020.

## What is FormSG’s infrastructure like?

We have our NodeJS web servers hosted on AWS Singapore zone. Our NoSQL database that stores only form fields and not form data is managed by Mongo Atlas, and also hosted on AWS Singapore zone. We use AWS SES to send out mails, which are not open mail relays, have valid SPF and DKIM records, and encrypts form data before sending them over to government SG-Mail. Our web servers are protected with Cloudflare SSL, their Anti-DDoS protection and Web Application Firewall. We use Pingdom for website performance and availability monitoring, and have AWS CloudWatch alarms. Our Data Collation Tool is built with vanilla Javascript and hosted on top of Nectar on the Intranet, and is an S3 static site on the Internet.

## Where do I keep up to date with product updates, or ask questions on how to use FormSG?

We post product updates on FormSG’s Workplace@Facebook group. Please search for "form.gov.sg" on Workplace and apply to join. You'd be surprised how active our Workplace@Facebook group is, where questions get answered by the FormSG team and the community in minutes if not hours. :) 




## My form is having issues receiving responses, or there is a bug I want to report.

Promptly email formsg@tech.gov.sg with your form link, screenshots of the problem, when it happened and who/how many people are affected. We will debug and resolve the issue as soon as we can.

## I’ve signed up for an account but have not received the one-time password (OTP) needed to log in. What do I do?

Because of the firewalls that emails have to jump through to land in your government mailbox, it might take up to a few minutes to receive the OTP. If you still have not received it after a while, you might want to check other folders that is not your Inbox because of forwarding rules you might have previously set to route FormSG emails to. If you still cannot find that OTP, check your Junk folder. If it is still not there, kindly click the "Resend" button on the sign-in page to receive a new OTP.

## I am having issues with the Data Collation Tool. What do I do?

Most issues that you might be facing with collating your data can be solved by following the suggestions below:

1. Close Outlook before running the Data Collation Tool.
2. Switch to a modern browser such as Chrome, IE Edge or Firefox.
3. Delete the old .pst file and create a new .pst file, then upload it to the Data Collation Tool.
4. If step 1-3 do not work, zip up the .pst file and email it to us for investigation. We will use your .pst file for investigative purposes only and not circulate it past the FormSG team. If your .pst file is particularly sensitive, you may send us screenshots of the error instead.

## I am leaving the organisation or switching over to a new email. How do I transfer ownership of my forms?

A first step you can do is to add your new email or colleagues' emails as Collaborators to the form. You may do so by clicking on the (+) icon at the top right corner of your form:

![FormSG FAQ Add Collaborators](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-collaborator.png "FormSG FAQ Add Collaborators")

Collaborators have the same rights as form creators, except they cannot delete the form.

After this is done, you can request a transfer of ownership for the form by emailing us at formsg@tech.gov.sg with the forms you want to transfer, and the new email you want to transfer them to.

## My forms are particularly sensitive and I do not want other public officers to see them on the Examples tab.

Note that only forms that are active, and have at least 10 responses will be searchable on the Examples tab. And that the Examples tab is only viewable by authenticated public officers, not the general public. Furthermore, only your form fields are viewable, not your form data.

But if there is still a need to unlist your form from the Examples tab because the form fields alone are already sensitive to be viewed by fellow public officers, then you may get your MIC to write in to us at formsg@tech.gov.sg with your form links and reasons to unlist them.

## How do I get started with SingPass, CorpPass or MyInfo?

For more information on SingPass (SP), CorpPass (CP) or MyInfo, kindly refer to our [SPCP section](/SPCP.html).
