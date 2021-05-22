$(document).ready(function() {
  $('#list button[type="submit"]').click((event) => {
    event.preventDefault()
    $.get('./getlist', {},(data) => {$('#ajax-output').html(data)})
  })

/*
  $('#ajax-form button[type="submit"]').click((event) => {
    event.preventDefault()
    // Step 9 and step 10 code goes here
    $.get('./step5', {
          fname: $('#ajax-form [name=fname]').val(),
          lname: $('#ajax-form [name=lname]').val(),
          }, (data) => {
          $('#list_all').html(data)
        })
  })
  */
});
















/*

var list_btn = document.getElementById("list_btn");
var search_btn = document.getElementById("search_btn");
var add_btn = document.getElementById("add_btn");
var delete_btn = document.getElementById("delete_btn");
var list_all = document.getElementById("list_all");
var student_search = document.getElementById("student_search");
var student_search = document.getElementById("student_search")


list_btn.addEventListener("click", function(){
  $("#list_all").empty();
  $.getJSON("./students.json", function(data){
    $.each(data, function(key, value){
      $("#list_all").append(`${key}: ${value} <br>`)
    })
  });
});

list_btn.addEventListener("click", function(){
  var student_ID = document.getElementById("student_ID").value;
  $.getJSON("./students.json", function(data){
    $.each(data, function(key, value){
      if(key == student_ID)
        $("#student_search").append(`Hello, ${value}`)
    })
  });
});

list_btn.addEventListener("click", function(){
  var student_ID1 = document.getElementById("student_ID1").value;
  var student_name = document.getElementById("student_name").value;
  const fs = require('fs');
  var data = fs.readFileSync('students.json');
  var myObject= JSON.parse(data);
  var newData = {
    student_ID1 : student_name
  }
  myObject.push(newData);
  var newData = JSON.stringify(myObject);
  fs.writeFile('data.json', newData, err => {
    // error checking
    if(err) throw err;
    
  console.log("New data added");
  });  
});


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
