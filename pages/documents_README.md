# Document Page

Ok, so this was an attempt to serve documents to the delegates
in a non-google-drive method. Honestly (this is Xuyuan speaking),
its not worth the effort, just share your documents over Google Drive 
instead. 

For those who are still curious, this page effectively achieves 
encryption through security-through-obscurity. The files are 
placed under a hash filename, and the links ('LONG-UUID.pdf' etc)
are then encrypted through basic SHA256

The passwordHash is the hashed password, to check if the password 
entered is correct. If this passes, the same password is then used 
to decrpt the contents of '/documents.txt' (which are by default 
a long digest, but which are decrypted to give html links), which 
are directly placed into the page flow. 

This method is highly manual, using a few scripts I wrote in 
python to manually update the password hash, encrypted links-list,
and so on. Therefore this is disabled. 

~Tang Xuyuan 3rd July 2024
