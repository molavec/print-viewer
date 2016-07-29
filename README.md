# print-viewer
A service that generate and preview HTML document from template filled
with JSON

##Simple Example

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

