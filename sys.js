$(document).ready(function() {
    $('#listall button[type="submit"]').click((event) => {
      event.preventDefault()
      $.getJSON("students.json", function(data) {
        updateListDiv(data);
    });
      // Step 11 code goes here
    })
  });