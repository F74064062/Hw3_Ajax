$(document).ready(function() {
    
  $('#listall button').click((event) => {
      event.preventDefault()
      $.getJSON("./students.json", function(data) {
        $("#list_all").empty();
        $.each(data, function(key, value){
          $("#list_all").append(`${key}: ${value} <br>`)
        })
      });
    })

  $('search button').click((event) =>{
    event.preventDefault()
    $.get('./hello', {
      ID: $('#search[name=student_ID').val(),
    }, (data) => {
      $('student_search').html(data)
    })
  })

    
    
  });
