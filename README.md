# print-viewer
A service that generate and preview document from template filled with JSON

##Simple Example

Use
    curl -H \
    "Content-Type: application/json" \
    -X POST -d \
      '{
          "page-title": "print-viewer-example"
        , "title-header-center" : "Print viewer example"
        , "subtitle-header-center" : "This is an print viewer example"
        , "title-header-left" : "Left Header"
        , "subtitle-header-left" : "This is a right header example"
        , "title-header-right" : "Right Header"
        , "subtitle-header-right" : "This is a right header example"
        , "title-content" : "content Header"
        , "subtitle-content" : "This is a content example"
        , "title-footer-left" : "Left footer"
        , "subtitle-footer-left" : "Left is a left footer example"
        , "title-footer-right" : "Right footer"
        , "subtitle-footer-right" : "This is a right footer example"
        , "title-footer-center" : "Center footer"
        , "subtitle-footer-center" : "This is a center footer example"
        }' \
    http://localhost:3000/A4

## TODO:
- Instalar combo plugin y utilizarlo
- Aún no se consigue reemplazar el contenido del template. Conseguirlo!!
- Generar ejemplo solicitud con JQuery!

# ChangeLog:
- Se genera template más complejo
- Se genera rutas para obtener el template
- EJEMPLO NO REEMPLAZA AÚN EL CONTENIDO ENTREGADO POR EL JSON POST

## Posibles soluciones
REST - más compleja o webiada
POST - crear un div dentro que haga una solicitud ajax
GET - ver como pedir JSON con Get

Entender mejor
app.use(bodyParser.json());

