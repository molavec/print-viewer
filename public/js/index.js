$(function(){

  //fill each textarea with json data
  $('textarea').each(function( index ) {
    //obtener el JSON
    var that = this;
    $.getJSON( $(this).attr('template')+ '/example_data.json', function(data){
      //Completar el textarea con el json obtenido
      $(that).text(JSON.stringify(data, null, 2));
    })


    console.log( index + ": " + $( this ).attr('template') );
  });

});
