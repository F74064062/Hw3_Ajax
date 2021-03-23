$(document).ready(function() {
    $('#listall button').click((event) => {
      event.preventDefault()
      $.getJSON("./students", function(data) {
        $("#list_all").empty();
        $.each(data, function(key, value){
          $("#list_all").append('${key}: ${value} <br>')
        })
      });
    })  
  });
