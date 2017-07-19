# bahasa-ge

A tools for converting casual language to ge-language

ge-language is an alternative way to alter your way of communicating by duplicating every vocal character and put "g" beetwen them

exp: "where are you going?"

ge-language: "whegerege agarege yogougu gogoiging?"

##Instalation
```bash
$ npm install --save bahasa-ge
```

##How To Run
```bash
$ touch index.js
$ vim index.js
```
```javascript
const bahasa = require('bahasa-ge');

let txt = "Some very important string, that not everyone can know.\n\nSebuah kalimat penting yang gak semua orang boleh tau"

console.log(bahasa(txt))
```
```bash
node index.js
```
result
```bash
Sogomege vegery igimpogortagant striging, thagat nogot egevegeryogonege cagan knogow.

Segebuguagah kagaligimagat pegentiging yagang gagak segemuguaga ogoragang bogolegeh tagaugu
```
