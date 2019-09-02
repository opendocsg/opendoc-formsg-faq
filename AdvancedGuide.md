# Advanced Guide

This advanced guide includes tips and tricks, and also solutions to common issues you may face when using FormSG. This section is updated regularly, so feel free to check back once in a while.

## FormSG forms are only accessible on the Internet. How about Intranet forms?

The primary goal of FormSG is to replace citizen-facing paper forms. However, by end 2019 we will move onto the Intranet where you can create and fill forms there. We also have future plans in 2020 to extend FormSG to handle client relationship management (CRM) and case management.

## I am leaving the organisation or switching over to a new email. How do I transfer ownership of my forms?

Note that you might not need to transfer ownership of your form. You may simply add your colleague as a collaborator. 

![FormSG FAQ Add Collaborators](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-collaborator.png "FormSG FAQ Add Collaborators")

Collaborators have the same rights as form creators, except they cannot delete the form.

## My forms are particularly sensitive and I do not want other public officers to see them on the Examples tab.

Note that only forms that are active, and have at least 10 responses will be searchable on the Examples tab. And that the Examples tab is only viewable by authenticated public officers, not the general public. Furthermore, only your form fields are viewable, not your form data.

But if there is still a need to unlist your form from the Examples tab because the form fields alone are already sensitive to be viewed by fellow public officers, then you may get your MIC to write in to us at formsg@tech.gov.sg with your form links and reasons to unlist them.

## How do I get started with SingPass, CorpPass or MyInfo?

For more information on SingPass (SP), CorpPass (CP) or MyInfo, kindly refer to our [SPCP section](/SPCP.html).

## What is FormSG’s infrastructure like?

We have our NodeJS web servers hosted on AWS Singapore zone. Our NoSQL database that stores only form fields and not form data is managed by Mongo Atlas, and also hosted on AWS Singapore zone. We use AWS SES to send out mails, which are not open mail relays, have valid SPF and DKIM records, and encrypts form data before sending them over to government SG-Mail. Our web servers are protected with Cloudflare SSL, their Anti-DDoS protection and Web Application Firewall. We use Pingdom for website performance and availability monitoring, and have AWS CloudWatch alarms. Our Data Collation Tool is built with vanilla Javascript and hosted on top of Nectar on the Intranet, and is an S3 static site on the Internet.
