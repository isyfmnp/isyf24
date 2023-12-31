var crypto = require('crypto-js');

const password = '';
const files = [];

console.log(`Password: \n${crypto.SHA256(password + 'isyf2024')}`);

const filesJson = JSON.stringify(files);
const fileDigest = crypto.AES.encrypt(filesJson, password).toString();
console.log(`Files: \n${fileDigest}`);

//console.log(crypto.AES.decrypt(fileDigest, password).toString(crypto.enc.Utf8))
