# Introduction

## What is FormSG?

FormSG is a form builder tool for government to self-service and create online forms that capture classified data, with the goal of replacing paper forms. Since it began in September 2017, it has replaced thousands of paper forms and are used by over 80 agencies such as MOM, MOE, PA and SportSG. More than 10,000 public officers are already on it. There is no onboarding process. Officers with @gov.sg emails can sign up.

## How does it work?

FormSG has a simple to use interface to build your form. After you create your form, you may share your form link to your users. When users submit your form, responses either go directly to your email or are stored in encrypted form on our server. These are the two response modes available: [Email mode](/Email.html) and [Storage mode](/Storage.html). 

## How does FormSG handle classified data?

FormSG can capture classified data, because in both Email and Storage mode, data is not stored on FormSG servers. Visit [Email mode](/Email.html) and [Storage mode](/Storage.html) to find out the specific data classification and data sensitivity FormSG can handle.

## What kinds of forms can be on FormSG?

FormSG is not just digitising surveys and polls. We have digitised thousands of application forms or e-services from MOM, IRAS, MOE and more. To view Examples of what forms officers have digitised with FormSG, [log in](https://form.gov.sg/#!/signin) and view the Examples tab on the top right of your dashboard. From the Examples tab, you may use other officers' forms as templates for your own.

## Can FormSG forms have many questions?

Some of our forms have more than 300 questions. To make it easier to fill in, form creators used Logic/Branching functionality to shorten their forms to only show relevant questions.

## Can FormSG manage high volume of responses?

Some of our forms already have a high number of responses. National Day Parade Ticket Application 2019 was hosted on FormSG, which had hundreds of thousands of applications in a week.

## What is the price of using FormSG?

FormSG is free to use.

Forms that enable SingPass (SP) or CorpPass (CP) authentication will however have to pay for these external services. For more information on SPCP refer to the [SPCP section](/SPCP.html).

## Does FormSG have a maintenance window?

We do not have a maintenance window and is up 24/7. Occasionally (once a few months) we might have a short planned downtime for trickier updates such as database migrations or schema edits, but we will notify you in advance, and only do those updates in periods of low usage.

## I am not part of the government. Can I use FormSG?

Today we enable government agencies and select government related organisations, such as public hospitals, to use FormSG. If you are part of a private sector organisation that is keen on using FormSG, we have plans to release an open-source version in 2020. If you are part of a government related organisation, you may write in to formsg@tech.gov.sg to request for your organisation's email domain to be whitelisted.

## How do I get started?

1. [Sign up](https://form.gov.sg/#!/signin) for an account.
2. Follow instructions to whitelist form.gov.sg emails so our emails don't end up in your Junk folder.
3. Browse the Examples tab to explore forms created by other officers.
4. Start building your own form and publish it!

## What are the features of FormSG?

There are many features of FormSG and the best way to learn about them is to [log in](https://form.gov.sg/#!/signin) and explore the tool. But here's a brief list of some of the features available:
- Fields: Short text, Long text, Header, Statement, Email, Number, Dropdown, Radio, Checkbox, Yes/No, Date, Rating, NRIC
- Attachments to upload photos and files
- Table style questions
- Automated acknowledgement email
- Field validations
- Control flow logic / Branching
- Collaborate on a form together
- Form feedback
- Form templates/examples
- SingPass login
- MyInfo fields
- CorpPass login
- Encrypted responses via Storage mode

## FormSG forms are only accessible on the Internet. How about Intranet forms?

The goal of FormSG is to replace citizen-facing paper forms. For Intranet forms, you may find SharePoint or PSST useful (we don't know much about them though, you may want to ask around). Alternatively, you may email your FormSG form link as a QR code to officers so they may fill in forms from their own mobile devices.

We will experiment with bringing FormSG to the Intranet late 2019 / early 2020.

## What is FormSG’s infrastructure like?

We have our NodeJS web servers hosted on AWS Singapore zone. Our NoSQL database that stores only form fields and not form data is managed by Mongo Atlas, and also hosted on AWS Singapore zone. We use AWS SES to send out mails, which are not open mail relays, have valid SPF and DKIM records, and encrypts form data before sending them over to government SG-Mail. Our web servers are protected with Cloudflare SSL, their Anti-DDoS protection and Web Application Firewall. We use Pingdom for website performance and availability monitoring, and have AWS CloudWatch alarms. Our Data Collation Tool is built with vanilla Javascript and hosted on top of Nectar on the Intranet, and is an S3 static site on the Internet.

## Where do I keep up to date with product updates, or ask questions on how to use FormSG?

We post product updates on FormSG’s Workplace@Facebook group. Please search for "form.gov.sg" on Workplace and apply to join. You'd be surprised how active our Workplace@Facebook group is, where questions get answered by the FormSG team and the community in minutes if not hours. :) 

