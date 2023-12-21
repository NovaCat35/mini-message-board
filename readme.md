# Mini Message Board



### Installation
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
