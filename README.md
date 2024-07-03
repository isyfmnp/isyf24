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

Ok, so this was an attempt to serve documents to the delegates
in a non-google-drive method. Honestly (this is Xuyuan speaking),
its not worth the effort, just share your documents over Google Drive 
instead. 

This method is highly manual, and its use of security-through-obscurity
was always problematic. Similiarly, the janky scripts I wrote 
ended up causing much chaos because they were not reliable,
nearly as much as Google Drive is. 

~Tang Xuyuan 3rd July 2024

### How it works

For those who are still curious, this page effectively achieves 
encryption through security-through-obscurity. The files are 
placed under a hash filename, and the links ('LONG-UUID.pdf' etc)
are then encrypted through basic SHA256

The encryption is done by encoding the JSON-string with each of the document's 
links, using the password as a key. This is done on the server-side (see 
`/generateFilesDigest.js`), with manually inputted constants at the top of the script. 
The decoding is done in `/pages/documents.vue` (lines 120:157). 

These documents are to be released on a schedule, and I wrote a script to do 
this automatically. These are found in `/documentUpdate`, with the trigger 
script being `/documentUpdate/update.sh`. On my personal computer, a cron job 
triggers this script at 6AM and 6PM, at which point the script checks the current 
time and reads the corresponding prepared file for that day & time. 

The output is piped into the `/public/documents.txt`, which contains the 
encrypted digest and is referenced by `/pages/documents.vue`. 


