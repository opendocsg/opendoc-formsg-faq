# Read This First

This is a 5 minute read that helps you understand most of the in-and-outs of FormSG.

## What is FormSG?

FormSG is a self-service form builder for government to create online forms that capture classified data, with the goal of replacing paper forms. Since it began in September 2017, it has replaced thousands of paper forms and are used by over 90 agencies such as MOM, MOE, PA,  SportSG and TTSH. More than 15,000 officers are already on it. It has advanced features and can be used for not just simple surveys but also complicated workflow forms.

## Who can use FormSG?

FormSG is built for the public sector and public healthcare clusters. There is no onboarding process. Simply [log in](https://form.gov.sg/#!/signin) with your agency email (e.g. @tech.gov.sg).

## How does FormSG keep my data secure?

Unlike most form builders out there, FormSG does not store your data. This means if our database is breached, there is no raw data to hack. There are two secure modes of creating forms.

Email mode: Form responses are sent directly into your specified email(s), and our server never stores a copy of it. 

Storage mode (Coming Soon!): Responses are end-to-end encrypted. On form creation, private key is generated on the client and never seen by our server. On form submission, response is encrypted on the client first, before being sent to our server for storage.

## Is FormSG IM / AIAS / DSS compliant?

Yes we are compliant with IM8, AIAS policy, and DSS. If you have concerns on our compliance, kindly contact us via our [Support Form](https://go.gov.sg/formsg-support), and mention the specific clause you have concerns on.

## Is FormSG really free?

Yes, officers can build any number of forms to collect any number of submissions for free. 

The only exception is having to pay for SingPass or CorpPass authentication. If your agency has a high volume of SPCP transactions each month, the price per login can be low. At the base tier, the price of SPCP is about $0.25 per login, with a fixed fee of about $2,000/month. For pricing info, pls contact SPCP rep maya_roosevelt@tech.gov.sg.

## Is FormSG really up 24/7?

Yes, we are up 24/7. There is no planned maintenance window. New features are constantly deployed without downtime. Because we do not charge for the service we do not have an SLA, but have a measured uptime 99.999% since we launched. The exception is SingPass and CorpPass, which do have planned maintenance, with which you can contact SPCP rep to find out more.

## What kind of data classification (RCST) can FormSG handle?

On Email mode, FormSG can handle up to Restricted per entry, and Confidential for the collection of data. This is because FormSG is a Restricted system that can manage Restricted data flowing through it, but ultimately data is stored in your government email, or SGMail, which is a Confidential system that lets you store Confidential collections of data. If however you specify a non-government email to send responses to, then you are not recommended to accept data that is classified Confidential.

On Storage mode, FormSG can handle up to Restricted. 

## What kind of information sensitivity (ISF) can FormSG handle?

FormSG can handle up to Sensitive-Normal for both modes, and is pending Sensitive-High.

## What are the features of FormSG?

There are many features of FormSG and the best way to learn about them is to [log in](https://form.gov.sg/#!/signin) and explore the tool. Here's a brief list of some of the features available:
- Fields: Short text, Long text, Header, Statement, Email, Number, Dropdown, Radio, Checkbox, Yes/No, Date, Rating, NRIC, Decimal
- Verified phone field (Coming soon!)
- Upload Image on the form (Coming soon!)
- Attachments to upload photos and files
- Table style questions
- Automated acknowledgement email and SMS
- Field validations
- Control flow logic / Branching
- Collaborate on a form together
- Form feedback
- Form templates/examples
- SingPass login
- MyInfo fields
- CorpPass login

## Can FormSG forms have many questions?

Some of our forms have more than 300 questions. To make it easier to fill in, form creators used Logic/Branching functionality to shorten their forms to only show relevant questions.

## Can FormSG manage high volume of responses?

Some of our forms already have a high number of responses. National Day Parade Ticket Application 2019 was hosted on FormSG, which had hundreds of thousands of applications in a week.

## Who do I ask for help?

The fastest way to get help is to join our Workplace@Facebook group and post a question there. Our group name is form.gov.sg. Fellow form creators and ourselves will readily respond within hours if not minutes. 

You may also consult your agency reps for help, which we will publish soon.

For bug reports or technical issues happening to your live form, please fill in our [Support Form](https://go.gov.sg/formsg-support).
