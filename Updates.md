# Updates

We typically release features, improvements or fixes every Tuesday or Wednesday afternoon.

## 15 Oct 2019: Image field, response includes section headers, bug fixes and cleanups

What you can see, feel or smell: 
- Image field: You may now upload images to your form, which will be autocompressed to 1024 width and preserving aspect ratio
- Email responses now include section headers to be clearer

What goes on behind the scenes:
- Fixed browser caching: no need to clear browser cache with future releases
- Fixed email autoreply bug introduced since last Friday, where all email fields sent out autoreply
- Enforce content security policies
- Refactored code for user client service for improved readability
- Added more unit tests for submissions endpoint
- Improved internal documentation for onboarding and release process for engineers

## 8 Oct 2019: Allow special characters in form name, table question need not have max rows, code clean up

What you can see, feel or smell: 
- Form name can now accept special characters such as parantheses and slashes
- Table style question no longer mandates number of max rows

What goes on behind the scenes:
- Cleaned up unused code, such as analytics APIs, AngularJS services and functions
- Refactored form fields into separate files
- Made clearer different errors during login flow
- Prevented HTML injection in email autoreply body
- Fixed bug where non-signed in user does not get redirected to /signin when they visit /forms

## 1 Oct 2019: Speed up beta Storage mode, speed up Examples, security improvements

What goes on behind the scenes:
- For beta Storage mode, optimise speed of decryption for many responses by 330%
- Speed up Examples loading time further by using indexes
- Configure Content Security Policy for AngularJS and Font Awesome

## 24 Sep 2019: Restore Examples tab

What you can see, feel or smell: 
- Restore Examples tab with significantly faster loading speed
- Remove pencils from Settings to make editing settings clearer
- Display feedback count instead of response count on Feedback tab

## 18 Sep 2019: Checkbox validation feature

What you can see, feel or smell: 
- You can now validate number of options users must choose on Checkbox
- Add report vulnerability link to footer of form.gov.sg as per SNDGO circular
- Fixed bug where MyInfo phone field did not show error text when not filled

What goes on behind the scenes:
- Update our nginx proxy to resolve domain dynamically
- Batch job that update number of "live" forms, once this is fully ready we will reactivate Examples

## 10 Sep 2019: Bug fixes and automated tests for submissions flow

What you can see, feel or smell: 
- Fixed bug where visiting deleted forms still displayed custom form inactive message
- Fixed bug where attachments hidden by logic, when revealed but re-hidden are still submitted

What goes on behind the scenes:
- Automated end to end tests for submissions

## 3 Sep 2019: New user guide, multiple bug fixes

What you can see, feel or smell: 
- Revamped FAQ into user guide
- Fixed bug where radio button error did not show up when field is empty
- Fixed bug where checking one checkbox option on preview page, selects multiple options at once

What goes on behind the scenes:
- Clean up pop-up code

## 27 Aug 2019: Beta Image field, temporarily take down Examples

What you can see, feel or smell: 
- Image field which allows images to be embedded on forms released for closed beta testing
- Character limit of 480 (3 SMS messages) introduced for closed beta Phone field
- Update messages for Decimal field to be in line with existing design
- Show response count in Responses tab
- Temporarily take down Examples for improvements

What goes on behind the scenes:
- Enable social sharing tags to be modified by us without deploying new code

## 20 Aug 2019: New Decimal field, fixes to edge cases of attachments errors

What you can see, feel or smell:
- Decimal field with value based validation, e.g. GPA can be validated to be between 0.0 and 4.0
- Uploading .zip attachments with invalid file extensions now shows an error
- Uploading corrupt image files now shows a useful error

What goes on behind the scenes:
- Load test closed beta Phone field, and improve design 
- Improved our continuous deployment process

## 13 Aug 2019: New pop-up design for adding collaborators, improved efficiency of form creation code 

What you can see, feel or smell:
- New pop-up design for adding collaborators
- Login OTP expiry reduced to 15 minutes, but logged in session still remains 1 day
- Closed beta Phone field's autoreply SMS falls back to phone number if alphanumeric ID fails
- File extension check on attachments should be case-insensitive

What goes on behind the scenes:
- Improved efficiency of code that creates new fields on forms

## 6 Aug 2019: Beta phone field, download form feedback

What you can see, feel or smell:
- Closed beta phone field with country validation, and sends acknowledgement SMS
- Download form feedback button
- Clearer error messages for failed OTP resends
- Fixed bug where Logic tab sometimes does not reflect Build tab field title changes

What goes on behind the scenes:
- Only send used form data to the client, to speed up forms and decrease risk of unintended metadata exposure
- Increased automation in our deployment pipeline by auto-purging caches

## 30 Jul 2019: Remain logged in to SingPass

What you can see, feel or smell: 
- Form submitters can now choose to remain logged in to SingPass indefinitely, which does not apply to forms with MyInfo fields

What goes on behind the scenes:
- Add end-to-end tests for login screen
- Improve continuous deployment process

## 23 Jul 2019: Bug fixes and security improvements

What you can see, feel or smell: 
- Fixed bug where email fields without includeFormSummary flag were sending out form summaries

What goes on behind the scenes:
- Fix security finding relating to regex for government email login
- Update versions of software dependencies

## 19 Jul 2019: Custom form inactive message, GCC preperations for FormSG Intranet

What you can see, feel or smell: 
- Form editors can now customise message to display when their forms are inactive

What goes on behind the scenes:
- Download imports from online links (from Content Delivery Networks) and host them locally
- Kick start GCC onboarding to bring FormSG onto the Intranet

## 15 Jul 2019: Use form as template through a link

What you can see, feel or smell: 
- Add use template option to the Share tab

What goes on behind the scenes:
- Add end-to-end tests framework
- Fix indentation inconsistencies in form's Welcome tab

## 8 Jul 2019: SingPass e-service ID validation, database and cert upgrades

What you can see, feel or smell: 
- SingPass e-service id is validated for your convenience on Settings panel

What goes on behind the scenes:
- Upgrade MongoDB database to version 3.6
- Nudge CSG team to improve messaging on rejected email messages to let users know they can recover emails within 1 month if they write in to spear@tech.gov.sg
- Viewer role for closed beta Storage mode of form responses
- CorpPass and MyInfo cert changes
