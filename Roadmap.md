# Feature Roadmap

## Latest features

#### Bulk download attachments on Storage mode
- Click 'Export' for the option to download both CSV and all attachments in separate zip files per response

#### Transfer form ownership
- On collaborator button at top right hand corner of your form, useful for form admins changing roles or handing over portfolios

#### Email and Mobile Number fields
- OTP verification for Email and Mobile Number fields
- Limit allowable respondent email addresses to certain domains only, e.g. '@agency.gov.sg'

#### Date field
- Limit date selection to disallow past dates, disallow future dates or a custom date range

#### Secret key safeguarding
- Email secret key to collaborators for safekeeping at form creation and activation

#### reCaptcha on Intranet
- reCaptcha spam protection is now available for respondents accessing from WOG Intranet as well as from the Internet


## Roadmap

In the past 3 years, we prioritised delivering critical form management features so that public officers could digitalize paper forms and reduce manual work as quickly as possible. By end 2020, Form had been used to launch over 60k Singapore government forms and collect over 80 million responses. 

From end 2020 to 2021, we are turning our focus to urgently needed technical improvements. These are necessary for Form to run reliably at our current scale, and allow us to deliver future features quickly and without many bugs. During this time, we will continue to deliver the most important features to our users, albeit at a slower rate. Our improvement work is targeted to be complete in Q3/2021, and feature-focused development will likely resume in Q4. 

#### Q1 2021

Features
- Copy & paste the options for Checkbox field in a list, similar to current Dropdown field
- Limit number of responses per form
- Display response summary on Thank You page

Technical improvements
- MyInfo migration
- Complete Typescript server migration
- MongoDB upgrade
- Elastic Beanstalk migration

#### Q2 2021

Features
- Webhook retries
- Webhook attachments
- Logic for Checkbox options

Technical improvements
- API migration
- AngularJS services migration


#### Q3 2021

Features
- Accessibility for public forms

Technical improvements
- React migration


## Old development updates

For releases after 12 Jun 2020, check out our [release log on GitHub](https://github.com/opengovsg/FormSG/pulls?q=is%3Apr+base%3Arelease). We typically release features, improvements or fixes every Tuesday or Wednesday afternoon.

### 12 Jun 2020: Table fields for Storage mode, new graphics, Home Number field

All the good news:
- Table fields have arrived to Storage mode forms!
- New Home Number field
- Improved consistency across Home/Mobile Number and MyInfo Home/Mobile Number fields
- Redrawn graphics in Form Admin experience
- Copy fixes for usability

Behind the scenes:
- Bug fixes, more e2e tests, refactoring for open sourcing, documentation, templatized links

### 5 Jun 2020: Attachments for Storage mode

Latest arrivals:
- Attachments are now available on Storage mode forms
- Fixed text cutoff bug on image field descriptions (mobile)
- Fixed future dates in IE11 and Safari
- Exported CSV is now UTF-8 encoded, which means better support for non-English responses

Behind the scenes:
- Bug fixes, open source prep, minor refactoring

### 30 May 2020: Fixes and open source prep

What you can see, feel or smell:
- UI fixes for modal dialogs and verified fields

Behind the scenes:
- Made Webhooks and Twilio optional for open source
- Bug fixes, added tests, refactoring 

### 20 May 2020: UI improvements, tests and refactoring

What you can see, feel or smell:
- Cool new datepicker with day, month and year views
- Loading indicators for verified field OTPs 
- Consistent mobile field styling

Behind the scenes:
- More tests, wiring for verified fields, refactoring

### 14 May 2020: Webhooks 

What you can see, feel or smell:
- Webhooks launched for all users
- Error shown when MyInfo is down
- Second line of form title now visible in dashboard

Behind the scenes:
- More open source prep, code refactoring and improved logging

### 4 May 2020: Prevent submission with logic, new date field validation

What you can see, feel or smell:
- Logic can now prevent submission, not just show fields
- New date field validation: Allow only future date
- Show download progress on large Storage mode CSV downloads

What goes on behind the scenes:
- Open source prep: Make SingPass, CorpPass and MyInfo code optional
- Various server validations, refactor to clean up code, and more tests
- Storage mode download optimisation

### 28 Apr 2020: Bug fixes and storage mode minor adjustments

What you can see, feel or smell:
- Leading zeroes in number field now work, so number can be used for Postal code
- Fixed temporary bug where Storage mode CSV did not show checkbox responses
- Minor Storage mode UI tweaks

What goes on behind the scenes:
- Backend versions for Storage mode to support backward compatibility
- More tests for Storage mode

### 21 Apr 2020: Start open source prep, Storage mode SingPass/CorpPass sends NRIC/UEN

What you can see, feel or smell:
- SingPass/CorpPass forms on storage mode now sends verified NRIC/UEN, similar to email mode
- User interface improvements for Logic panel

What goes on behind the scenes:
- Open source prep: Toggle off captcha in the code

### 14 Apr 2020: Verified email field, bug fixes and scale optimisations

What you can see, feel or smell:
- Verified email field that requires user to enter OTP from his email to submit form
- Removed Reply-to toggle and default it to true
- Fixed bug where hidden table questions are now shown in email responses so as not to affect collation

What goes on behind the scenes:
- Database optimisations to manage load of 350k submissions in one night

### 8 Apr 2020: Storage mode

What you can see, feel or smell:
- Launched Storage mode for everyone (MyInfo, attachments, table fields, response pdf not available)

### 7 Apr 2020: Basic phone field, extend CorpPass time out, security and testing improvements

What you can see, feel or smell:
- Basic phone field with local or international number validation
- Extend CorpPass time out duration to 6h
- Fixed bug where hidden table questions made forms not able to submit
- Add disabled toggle for email autoreply pdf on Storage mode to clarify feature not available

What goes on behind the scenes:
- Additional security for email bounce endpoint
- Improved logging of validation errors
- Additional end-to-end tests
- Version Storage mode
- Validator for checkbox fields

### 2 Apr 2020: Government banner, verified fields in Beta

What you can see, feel or smell:
- Government agency banner on landing page

What goes on behind the scenes:
- Verified Whatsapp field in Beta
- Verified SMS field in Beta

### 30 Mar 2020: Clearer NRIC field, Storage mode prep

What you can see, feel or smell:
- Clarify NRIC field placeholder and error message to support both NRIC and FIN
- Caused IE11 issues, but fixed on same day
- Date range picker for filtering Storage mode responses
- Mobile optimisation for Storage mode
- Introduce Storage mode on landing page

What goes on behind the scenes:
- Migrate end-to-end decryption for Storage mode to use open source FormSG SDK
- Big code clean up of submissions flow
- Verified email field in Beta

### 24 Mar 2020: Social sharing, Chinese in autoreply PDFs, Bug fixes

What you can see, feel or smell:
- Social sharing through Facebook and Whatsapp now shows preview of form title, not just "Form Manager for Government"
- Fixed bug where Chinese characters in auto-acknowledgement PDFs did not show up
- Fixed permission related bugs for Storage mode in beta
- Fixed MyInfo related bugs

What goes on behind the scenes:
- Removed old and unused endpoints

### 13 Mar 2020: TemperatureSG 2x report

What you can see, feel or smell:
- Launch 2x daily report for TemperatureSG to flag out non-submissions at 9am and 4pm

### 11 Mar 2020: Autofill

What you can see, feel or smell:
- Autofill for all fields, similar to Google forms' logic

What goes on behind the scenes:
- End to end testing for Storage mode

### 3 Mar 2020: TemperatureSG

What you can see, feel or smell:
- UI improvements for Storage mode
- Updated error message when captcha forms are filled on Intranet, as captcha is not available there

### 28 Feb 2020: TemperatureSG

What you can see, feel or smell:
- Launch Storage Mode and Webhooks for select users of temperature taking forms

### 12 Feb 2020: Intranet

What you can see, feel or smell:
- Enable Intranet
- Migrated Intranet Data Collation Tool from form.app.gov.sg to collate.form.gov.sg
- Fixed bug where attachment is selected when Enter is pressed on another field

What goes on behind the scenes:
- Refactored certain code into components to improve code re-usability

### 4 Feb 2020: Enable captcha worldwide, clean up code

What you can see, feel or smell:
- Enable Captcha worldwide

What goes on behind the scenes:
- Refactored certain code into components to improve code re-usability

### 28 Jan 2020: Bug fix

What you can see, feel or smell:
- Fixed bug where table question could not be saved under a specific obscure workflow

### 9 Jan 2020: Finish server side validation, minor UI fixes

What you can see, feel or smell:
- Increased clickable area for admin navigation bar
- Fixed bug where radio button is misaligned when option is empty

What goes on behind the scenes:
- Released all remaining server side validation, for security and prevention of data corruption
- Refactored certain code into components to improve code re-usability

### 19 Dec 2019: Bug fixes, operating system change

What you can see, feel or smell:
- Fixed visual glitch where hidden fields on build tab were not updated correctly when condition fields were deleted on Logic
- Fixed bug where billing panel did not display for Dec 2019
- Fixed bug where decimal validator did not validate min and max when value is 0
- Clearer error message when form content changes and form filler has to refresh to re-submit

What goes on behind the scenes:
- Changed our application's base operating system to alpine which is lightweight and with much fewer potential vulnerabilities
- Shifted underlying framework that powers autoreply pdf from the outdated PhantomJS to a more modern Puppeter that is backed by Google
- Released more server side validation, for security and prevention of data corruption

### 10 Dec 2019: Database cleanup, tightened protocols

What goes on behind the scenes:
- Removed unused keys in database
- Tightened downtime protocols if we ever need them
- Released more server side validation, for security and prevention of data corruption 

### 3 Dec 2019: Code cleanup, security improvements

What goes on behind the scenes:
- Released more server side validation, for security and prevention of data corruption 
- Implemented backend unit tests for server side validation
- Enforced same site cookie policy for SPCP and Admin logins
- Used built-in router for routes instead of directly assigning links to the window
- Cleaned up code for welcome tab and thank you page

### 26 Nov 2019: Bug fixes, security improvements

What you can see, feel or smell:
- Disallowed large forms from being created, e.g. forms with 2 million dropdown options
- Added banner to remind users only yesno, radio, number, dropdown, rating and decimal can trigger Logic

What goes on behind the scenes:
- Released more server side validation, for security and prevention of data corruption 
- Implemented backend unit tests for server side validation
- Disallowed duplicate emails where responses went to

### 19 Nov 2019: Upload form logo, security improvements

What you can see, feel or smell:
- Upload form logo feature released, you are encouraged to re-upload old custom logos with us

What goes on behind the scenes:
- Released more server side validation, for security and prevention of data corruption 
- Implemented backend unit tests for server side validation
- Removed need for network call to get error messages
- Improved logging to log IPs in error messages
- Tested caching policy to make sure it works

### 12 Nov 2019: Security improvements

What you can see, feel or smell:
- Fix bottom padding of SingPass Login forms
- Fix MyInfo hash bug that happens when user takes a long time to fill in MyInfo enabled forms

What goes on behind the scenes:
- Released server side validation for certain form fields, for security and prevention of data corruption

### 5 Nov 2019: Remove form start button, onboarding page, bug fixes and security improvements

What you can see, feel or smell: 
- Remove Start button and Read Instructions at the top of forms
- Remove onboarding page for new users to whitelist @form.gov.sg emails
- Fixed blank page when form.gov.sg/(symbol) is visited
- Fixed empty eservice ID on Billing panel causing loader to hang

What goes on behind the scenes:
- Improved security of rating field to not pull from external sources
- Improved code quality from Deepscan reports

### 31 Oct 2019: Penetration testing, server side field validation

What you can see, feel or smell: 
- Clearer error message when you fail to submit form

What goes on behind the scenes:
- Penetration testing
- Form fields and logic validated server side to patch data corruption
- Escaped html in Logic tab
- Refactored and cleaned up code for form validation

### 22 Oct 2019: Error catching and content security policies

What goes on behind the scenes:
- Catch errors for JSON.parse that can potentially cause server to crash (although we have auto-recovery)
- Fine tune content security policies
- Commence penetration testing

### 15 Oct 2019: Image field, response includes section headers, bug fixes and cleanups

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

### 8 Oct 2019: Allow special characters in form name, table question need not have max rows, code clean up

What you can see, feel or smell: 
- Form name can now accept special characters such as parantheses and slashes
- Table style question no longer mandates number of max rows

What goes on behind the scenes:
- Cleaned up unused code, such as analytics APIs, AngularJS services and functions
- Refactored form fields into separate files
- Made clearer different errors during login flow
- Prevented HTML injection in email autoreply body
- Fixed bug where non-signed in user does not get redirected to /signin when they visit /forms

### 1 Oct 2019: Speed up beta Storage mode, speed up Examples, security improvements

What goes on behind the scenes:
- For beta Storage mode, optimise speed of decryption for many responses by 330%
- Speed up Examples loading time further by using indexes
- Configure Content Security Policy for AngularJS and Font Awesome

### 24 Sep 2019: Restore Examples tab

What you can see, feel or smell: 
- Restore Examples tab with significantly faster loading speed
- Remove pencils from Settings to make editing settings clearer
- Display feedback count instead of response count on Feedback tab

### 18 Sep 2019: Checkbox validation feature

What you can see, feel or smell: 
- You can now validate number of options users must choose on Checkbox
- Add report vulnerability link to footer of form.gov.sg as per SNDGO circular
- Fixed bug where MyInfo phone field did not show error text when not filled

What goes on behind the scenes:
- Update our nginx proxy to resolve domain dynamically
- Batch job that update number of "live" forms, once this is fully ready we will reactivate Examples

### 10 Sep 2019: Bug fixes and automated tests for submissions flow

What you can see, feel or smell: 
- Fixed bug where visiting deleted forms still displayed custom form inactive message
- Fixed bug where attachments hidden by logic, when revealed but re-hidden are still submitted

What goes on behind the scenes:
- Automated end to end tests for submissions

### 3 Sep 2019: New user guide, multiple bug fixes

What you can see, feel or smell: 
- Revamped FAQ into user guide
- Fixed bug where radio button error did not show up when field is empty
- Fixed bug where checking one checkbox option on preview page, selects multiple options at once

What goes on behind the scenes:
- Clean up pop-up code

### 27 Aug 2019: Beta Image field, temporarily take down Examples

What you can see, feel or smell: 
- Image field which allows images to be embedded on forms released for closed beta testing
- Character limit of 480 (3 SMS messages) introduced for closed beta Phone field
- Update messages for Decimal field to be in line with existing design
- Show response count in Responses tab
- Temporarily take down Examples for improvements

What goes on behind the scenes:
- Enable social sharing tags to be modified by us without deploying new code

### 20 Aug 2019: New Decimal field, fixes to edge cases of attachments errors

What you can see, feel or smell:
- Decimal field with value based validation, e.g. GPA can be validated to be between 0.0 and 4.0
- Uploading .zip attachments with invalid file extensions now shows an error
- Uploading corrupt image files now shows a useful error

What goes on behind the scenes:
- Load test closed beta Phone field, and improve design 
- Improved our continuous deployment process

### 13 Aug 2019: New pop-up design for adding collaborators, improved efficiency of form creation code 

What you can see, feel or smell:
- New pop-up design for adding collaborators
- Login OTP expiry reduced to 15 minutes, but logged in session still remains 1 day
- Closed beta Phone field's autoreply SMS falls back to phone number if alphanumeric ID fails
- File extension check on attachments should be case-insensitive

What goes on behind the scenes:
- Improved efficiency of code that creates new fields on forms

### 6 Aug 2019: Beta phone field, download form feedback

What you can see, feel or smell:
- Closed beta phone field with country validation, and sends acknowledgement SMS
- Download form feedback button
- Clearer error messages for failed OTP resends
- Fixed bug where Logic tab sometimes does not reflect Build tab field title changes

What goes on behind the scenes:
- Only send used form data to the client, to speed up forms and decrease risk of unintended metadata exposure
- Increased automation in our deployment pipeline by auto-purging caches

### 30 Jul 2019: Remain logged in to SingPass

What you can see, feel or smell: 
- Form submitters can now choose to remain logged in to SingPass indefinitely, which does not apply to forms with MyInfo fields

What goes on behind the scenes:
- Add end-to-end tests for login screen
- Improve continuous deployment process

### 23 Jul 2019: Bug fixes and security improvements

What you can see, feel or smell: 
- Fixed bug where email fields without includeFormSummary flag were sending out form summaries

What goes on behind the scenes:
- Fix security finding relating to regex for government email login
- Update versions of software dependencies

### 19 Jul 2019: Custom form inactive message, GCC preperations for FormSG Intranet

What you can see, feel or smell: 
- Form editors can now customise message to display when their forms are inactive

What goes on behind the scenes:
- Download imports from online links (from Content Delivery Networks) and host them locally
- Kick start GCC onboarding to bring FormSG onto the Intranet

### 15 Jul 2019: Use form as template through a link

What you can see, feel or smell: 
- Add use template option to the Share tab

What goes on behind the scenes:
- Add end-to-end tests framework
- Fix indentation inconsistencies in form's Welcome tab

### 8 Jul 2019: SingPass e-service ID validation, database and cert upgrades

What you can see, feel or smell: 
- SingPass e-service id is validated for your convenience on Settings panel

What goes on behind the scenes:
- Upgrade MongoDB database to version 3.6
- Nudge CSG team to improve messaging on rejected email messages to let users know they can recover emails within 1 month if they write in to spear@tech.gov.sg
- Viewer role for closed beta Storage mode of form responses
- CorpPass and MyInfo cert changes
