# print-viewer
A service that generate and preview HTML document from template filled
with JSON

## Install
Clone project and run npm install

    git clone https://github.com/molavec/print-viewer.git
    npm install

## Run it

As final service

   node index.js


In dev mode, I suggest use nodemon ('npm install -g nodemon')

    nodemon index.js

##Example of use
Use
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

