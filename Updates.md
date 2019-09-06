# Updates

## 3 Sep 2019: New user guide, multiple bug fixes
Improvements:
- Clean up pop-up code
- Revamped FAQ into user guide

Fixes: 
- Attachments that are hidden by logic field should not be submitted when they are revealed then hidden again
- Radio button error should show up when not filled
- When checking one checkbox option on preview page, multiple options shoud not get selected

## 27 Aug 2019: Beta Image field, take down Examples
Features:
- Image field which allows images to be embedded on forms released for closed beta testing

Improvements:
- Character limit of 480 (3 SMS messages) introduced for closed beta Phone field
- Update messages for Decimal field to be in line with existing design
- Show response count in Responses tab
- Enable social sharing tags to be modified by us without deploying new code
- Temporarily take down Examples for improvements

## 20 Aug 2019: New Decimal field, fixes to edge cases of attachments errors
Features:
- Decimal field with value based validation, e.g. GPA can be validated to be between 0.0 and 4.0

Improvements:
- Load test closed beta Phone field, and improve design 
- Improved our continuous deployment process

Fixes: 
- Uploading .zip attachments with invalid file extensions now shows an error
- Uploading corrupt image files now shows a useful error

## 13 Aug 2019: New pop-up design for adding collaborators, improved efficiency of form creation code 
Improvements:
- New pop-up design for adding collaborators
- Closed beta phone field's autoreply SMS falls back to phone number if alphanumeric ID fails
- Improved efficiency of code that creates new fields on forms
- Login OTP expiry reduced to 15 minutes, but logged in session still remains 1 day

Fixes:
- File extension check on attachments should be case-insensitive
