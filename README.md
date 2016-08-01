# print-viewer

A simple service that generate and preview HTML document from template filled
with JSON.

I used  :

 * [Express JS](https://github.com/pugjs/pug)
 * [Pug](http://expressjs.com/)

## Install
Clone project and run npm install

    git clone https://github.com/molavec/print-viewer.git
    cd print-viewer
    npm install

## Run it

As final service

    node index.js


In dev mode, I suggest use nodemon ('npm install -g nodemon')

    nodemon index.js

For see some examples go to [http://localhost:3000](http://localhost:3000)



##Examples of use

Use **curl** to see an example usign POST

    curl -H \
    "Content-Type: application/json" \
    -X POST -d \
      '{
          "pageTitle": "print-viewer-example"
        , "titleHeaderCenter" : "Print viewer example"
        , "subtitleHeaderCenter" : "This is an print viewer example"
        , "titleHeaderLeft" : "Left Header"
        , "subtitleHeaderLeft" : "This is a right header example"
        , "titleHeaderRight" : "Right Header"
        , "subtitleHeaderRight" : "This is a right header example"
        , "titleContent" : "content Header"
        , "subtitleContent" : "This is a content example"
        , "titleFooterLeft" : "Left footer"
        , "subtitleFooterLeft" : "Left is a left footer example"
        , "titleFooterRight" : "Right footer"
        , "subtitleFooterRight" : "This is a right footer example"
        , "titleFooterCenter" : "Center footer"
        , "subtitleFooterCenter" : "This is a center footer example"
        }' \
    http://localhost:3000/A4

Use **curl** to see an example usign POST without data

    curl -H \
    "Content-Type: application/json" \
    -X POST \
    http://localhost:3000/A4

