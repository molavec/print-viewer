$(function(){

  //fill each textarea with json data
  $('textarea').each( function( index ) {
    //obtener el JSON
    var that = this;
    $.getJSON( $(this).attr('template')+ '/example_data.json', function(data){
      //Completar el textarea con el json obtenido
      $(that).text(JSON.stringify(data, null, 2));
    });
    console.log( index + ": " + $( this ).attr('template') );
  });

  $('input[type="button"][value="POST"]').each( function (index){
    var that=this;

    $(this).on('click', function( index ) {
      var $textarea = $("[name='json']", $(this).parent());
      //console.log($("[name='json']", $(this).parent()).val());
      console.log('json:'+$textarea.val());
      console.log('json stringify:'+$textarea.val());
      console.log($textarea.attr('template'));

      //$.post($textarea.attr('template'), $textarea.val(), function(data){
      //    var w = window.open('about:blank','popup','width=300,height=200');
      //    w.document.write(data);
      //    w.document.close();
      //}, "json");

      //$.post($textarea.attr('template'), JSON.stringify($textarea.val()), null, "json")
      $.ajax({
        type: "POST"
        , url: $textarea.attr('template')
        , data: $textarea.val()
        , success: function(data){
            var w = window.open('about:blank','popup','width=300,height=200');
            w.document.write(data);
            w.document.close();
            }
        , contentType: "application/json; charset=utf-8"
      });

    });

  })


});
