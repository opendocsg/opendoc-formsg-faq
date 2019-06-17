# Usage

## I’ve signed up for an account but have not received the one-time password (OTP) needed to log in. What do I do?

Please check your junk folder. If the email with your OTP is not there, kindly click the 'Resend' button on the sign-in page to receive a new OTP. If you can't find it in your junk mail folder it might be in a folder that you previously set forwarding rules to route FormSG emails to.

## What is this Data Collation Tool and how do I access it?

The Data Collation Tool can be accessed from both the Intranet (https://form.app.gov.sg) and Internet (https://collate.form.gov.sg) and only works on Outlook. You may export your email responses from Outlook to a .pst file, and upload the .pst file to our tool. Our tool will process your .pst file into an Excel of collated responses for you to download.

## My form is receiving tens of thousands of responses. Can FormSG support such high volume?

We have load tested on 20,000 submissions in 10 minutes. All responses came in without problems. Note that form responses might sometimes take a short while to trickle into your government mailbox as SG-Mail internally maintains a queue to stream emails into your mailbox. If you’re concerned that your personal government mailbox will be flooded with form responses, you may contact your IT department to provision a shared mailbox.

## Where do I keep up to date with product updates, or ask questions on how to use FormSG?

We post product updates on FormSG’s Workplace@Facebook group. Please search for "form.gov.sg" on Workplace and apply to join.

## FormSG forms are only accessible on the Internet. How about Intranet forms?

The goal of FormSG is to replace citizen-facing paper forms. For Intranet forms, you may find SharePoint or PSST useful (we don't know much about them though, you may want to ask around). Alternatively, you may email your FormSG form link as a QR code to officers so they may fill in forms from their own mobile devices.

## What is FormSG’s infrastructure like?

We have our NodeJS web servers hosted on AWS Singapore zone. Our NoSQL database that stores only form fields and not form data is managed by Mongo Atlas, and also hosted on AWS Singapore zone. We use AWS SES to send out mails, which are not open mail relays, have valid SPF and DKIM records, and encrypts form data before sending them over to government SG-Mail. Our web servers are protected with Cloudflare SSL, their Anti-DDoS protection and Web Application Firewall. We use Pingdom for website performance and availability monitoring, and have AWS CloudWatch alarms. Our Data Collation Tool is built with NodeJS and hosted on top of Nectar on the Intranet.