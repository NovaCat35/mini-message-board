# Mini Message Board
Whether you came to say hello or just post some gibberish, leave your mark on this small corner of the internet with this mini message board! 

[This project is a WORK IN PROGRESS] ⚠️

## Features 🎯
 - Online posting 

## Installation ⚙️
```
express mini-message-board --view=ejs
cd mini-message-board
npm install
npm install --save-dev nodemon
```

> Add the following scripts to package.json:
  "scripts": {
    ...
    "devstart": "nodemon ./bin/www",
    "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
  },
