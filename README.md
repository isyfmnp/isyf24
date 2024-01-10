# ISYF 2024

This project is constructed using:

- NuxtJS 3 and Vue 3, for the purposes of reactivity, component reusability 
and filesystem page routing
- Google's Material Symbols, for the purposes of iconography
- Google Fonts, for the purposes of fonts

Planning and design specs can be found in the ISYF24 - MnP - Website 
Planning Document. 
A lot of effort was put into this aesthetic and interactivity, so please try 
to reuse/recycle as much of this as possible.

## Styling

Styling is all done in vanilla CSS, with a focus on responsiveness and 
ease of change through logical use of variables. 
Styling can be found in `assets/css` and in the style tags of individual 
components, where relevant. 
Refer to `assets/css/index.css` for all the colours, fonts, sizing and 
other style settings—These can be re-used or altered as needed!

## Document Update

This section pertains to the `/documents` route, accessible only through 
the index page, and which is created to be a easy way to share documents for 
ISYF delegates through the course of the event. 

For accessibility, it is linked from the main event. For privacy, it is 
password-protected. The files themselves are accessible with 'unlisted'
URLs, which are purposely created with UUID filenames (see `/public/documents`).
If required, ISYF facilitators can share these links for direct and easy access. 

The encryption is done by encoding the JSON-string with each of the document's 
links, using the password as a key. This is done on the server-side (see 
`/generateFilesDigest.js`), with manually inputted constants at the top of the script. 
The decoding is done in `/pages/documents.vue` (lines 120:157). 

These documents are to be released on a schedule, and I wrote a script to do 
this automatically. These are found in `/documentUpdate`, with the trigger 
script being `/documentUpdate/update.sh`. On my personal computer, a cron job 
triggers this script at 6AM and 6PM, at which point the script checks the current 
time and reads the corresponding prepared file for that day & time. 

The outputis piped into the `/public/documents.txt`, which contains the 
encrypted digest and is referenced by `/pages/documents.vue`. 
