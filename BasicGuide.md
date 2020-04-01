# Basic Guide

This is a 5 minute read that helps you understand most of the in-and-outs of FormSG.

## What is FormSG?

FormSG is a self-service form builder for public officers to create online forms that capture classified data, with the goal of replacing paper forms. Since launching in September 2017, FormSG has replaced tens of thousands of paper forms and is used by over 90 public agencies including MOM, MOE, PA,  SportSG and TTSH. More than 25,000 public officers are users of FormSG today. FormSG comes with powerful functionality including user verification and conditional logic, enabling public officers to design not just simple surveys but also complex and feature-rich forms.

## Who can use FormSG?

FormSG is built for the public sector and public healthcare clusters. There is no onboarding process. Simply [log in](https://form.gov.sg/#!/signin) with your agency email (e.g. @tech.gov.sg). FormSG is accessible from both the Internet and Singapore Government Intranet.

## Is FormSG accessible on the Intranet?

Yes! Since start of 2020, FormSG has been accessible on WOG Intranet in addition to the Internet. If you still cannot access https://form.gov.sg on the Intranet, join our Workplace@Facebook group and ask for help. Note certain features are not available on WOG Intranet, such as SingPass/CorpPass/MyInfo and Captcha. If your form is intended for internal use, you can disable Captcha.

## How does FormSG keep my data secure?

FormSG provides users with two options for secure form data management - Storage mode and Email mode.

In Email mode, form responses are sent directly to user-specified email addresses. FormSG does not store form response data in our servers. Therefore, it is critical that email addresses are correctly specified and mailboxes are not over-capacity, or else form responses will be lost.

In Storage mode, your responses are encrypted end-to-end and stored in encrypted format, ensuring that only form administrators can access and view responses. During form creation, the user's client generates a private key that is never seen by the FormSG server, and is used to access and view responses. Upon response submission, the respondent's client encrypts the response using the corresponsing public key, before the encrypted response is sent to FormSG servers for storage.

Both these options ensure that should our servers be compromised, attackers would not be able to view form response data. 

## Is FormSG IM8 / AIAS / DSS compliant?

Yes we are compliant with IM8, AIAS policy, and DSS. If you have concerns on our compliance, kindly contact us via our [Support Form](https://go.gov.sg/formsg-support), and mention the specific clause you have concerns on.

## What data classification (RCST) can FormSG handle?

On Email mode, FormSG can handle up to Restricted-classified individual responses, and Confidential-classified data collections. This is because FormSG is a Restricted system that can manage Restricted data flowing through it, but ultimately data is stored in your government email, or SGMail, which is a Confidential system that lets you store Confidential collections of data. However, if you specify a non-government email to send responses to, then you are not recommended to accept data that is classified Confidential.

On Storage mode, FormSG can handle up to Restricted-classified individual responses and data collections.

## What information sensitivity (ISF) can FormSG handle?

FormSG's Email mode has in-principle approval from the Smart Nation and Digital Government Office (SNDGO) to support Sensitive High data. 

FormSG's Storage mode has similar approval from SNDGO to support Sensitive Normal data, and review is undergoing to support Sensitive High data.

## Is FormSG really free?

Yes, officers can build any number of forms to collect any number of submissions for free. 

The only exception is having to pay for SingPass or CorpPass authentication. If your agency has a high volume of SPCP transactions each month, the price per login can be low. At the base tier, the price of SPCP is about $0.25 per login, with a fixed fee of about $2,000/month. We won't be able to advise you on the latest pricing info, and you should contact SPCP rep [alvin_wee@tech.gov.sg](mailto:alvin_wee@tech.gov.sg) for it.

## How do you enable SingPass or CorpPass?

All you have to do is enter an e-service ID on the Settings tab of your form to enable SPCP:

![FormSG FAQ E-service ID](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-singpass.png "FormSG FAQ E-service ID")

An e-service ID is a unique billing ID given by the SingPass/CorpPass office to your department's finance team. An invalid e-service ID will yield a 138 error for SingPass and 328 error for CorpPass. If you don’t already have an e-service ID, you can either ask your agency IT department to find an e-service ID to reuse, or contact SPCP rep [alvin_wee@tech.gov.sg](mailto:alvin_wee@tech.gov.sg) to create a new one. When testing your e-service ID you may log in to our UAT server, https://uat.form.gov.sg and create test forms there. Note that accounts and forms are separate on UAT and Live servers and cannot be transferred over.

To track number of submissions at your e-service ID you may visit the Billing Panel tab on the top right of your forms dashboard:

![FormSG FAQ Billing Panel E-service ID](https://s3-ap-southeast-1.amazonaws.com/misc.form.gov.sg/faq-billing-eservice.png "FormSG FAQ Billing Panel E-service ID")

It is up to you to decide if you want 2FA or 1FA e-service ID. For CorpPass, it is also up to you to decide whether you want authorisation work flows at your e-service ID. Consult SPCP rep on this if you have concerns. 

## Is FormSG really up 24/7?

Yes, we are up 24/7. There is no planned maintenance window. Typically once a few months we have a 2 hour maintenance window from 12am - 2am, but most features are constantly deployed without downtime. Because we do not charge for the service we do not have an SLA, but have a measured uptime of 99.999% since we launched. The exception is SingPass and CorpPass, which do have planned maintenance, with which you can contact SPCP rep [alvin_wee@tech.gov.sg](mailto:alvin_wee@tech.gov.sg) to find out more.

## How will I be informed of any issues with my form?

We have multiple tests and detection tools to flag issues on forms. If we detect an issue with your form we will email you. Although rare, if the entire platform has downtime, we will announce it on Workplace@Facebook, and enable a maintenance page on all forms. We have engineers on-call 24/7 to react to issues as fast as we can. If there are issues with your form, you can contact us through our [Support Form](https://go.gov.sg/formsg-support).

## What are some features of FormSG?

There are many features of FormSG and the best way to learn about them is to [log in](https://form.gov.sg/#!/signin) and explore the tool. Here's a brief list of some of the features available:
- Fields: Short text, Long text, Header, Statement, Email, Number, Dropdown, Radio, Checkbox, Yes/No, Date, Rating, NRIC, Decimal
- Upload Image on the form
- Attachments to upload photos and files
- Table style questions
- Automated acknowledgement email
- Field validation
- Control flow logic / Branching
- Collaborative editing
- Form feedback
- Form templates/examples
- SingPass login
- MyInfo fields
- CorpPass login

## How many questions can I put in a form?

Our longest forms have more than 400 questions, and more than 100 deployed forms have 100 questions and more. To make forms easier to fill, form creators used Logic/Branching to shorten their forms and only show relevant questions.

## Can FormSG manage a high volume of responses?

Some of our forms already have a high number of responses. In January 2020, more than a million submissions went through FormSG.

## Can I use FormSG all around the world?

As long as you have an Internet/WOG Intranet connection you can use FormSG all around the world. Note that to log in to create forms you will also need access to your government email to retrieve the OTP.

## Are there slides for me to read or share with my peers?

Yes there are! Feel free to view, comment on and share these slides that is viewable on the Internet: [https://go.gov.sg/formsg-sharing-slides](https://go.gov.sg/formsg-sharing-slides).

## Who do you ask for help or keep updated?

The fastest way to get help is to join our [Workplace@Facebook group](https://onepublicservice.facebook.com/groups/299464690543915/) and post a question there. Our group name is [WOG] form.gov.sg. Fellow form creators and ourselves will readily respond within hours if not minutes. 

You may also consult experts in your agency, or "Agency Pros" for help via [this list](/AskAPro.html).

For bug reports or technical issues happening to your live form, please fill in our [Support Form](https://go.gov.sg/formsg-support).