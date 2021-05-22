var list_btn = document.getElementById("list_btn");
var search_btn = document.getElementById("search_btn");
var add_btn = document.getElementById("add_btn");
var delete_btn = document.getElementById("delete_btn");
var list_all = document.getElementById("list_all");
var student_search = document.getElementById("student_search");



listbtn.addEventListener("click", function(){
  $.getJSON("./students.json", function(data){
    $.each(data, function(key, value){
      $("#list_all").append(`${key}: ${value} <br>`)
    })
  });
});





/*

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

  */
