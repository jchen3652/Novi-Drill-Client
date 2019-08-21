// document.getElementById("showlife").addEventListener('click', function() {
//   document.getElementById("message").innerHTML = "Your performer number is: " + document.getElementById("performerNumber").value;
//   console.log("button pressed");
//   jQuery.get('http://novi-drill-client.herokuapp.com/data.txt', function(data) {
//     console.log(data);
//   });
// });

document.getElementById("submit").addEventListener('click', function() {
  var url = "http://novi-drill-client.herokuapp.com/";

  url += document.getElementById("movement").value;
  url += "/"
  url += document.getElementById("performerNumber").value.toUpperCase().trim();

  url += "DrillSheet.pdf"

  // document.getElementById("message").innerHTML = url;
  window.location.href = url;
});

// Execute a function when the user releases a key on the keyboard
document.getElementById("performerNumber").addEventListener("keyup", function(event) {4
  console.log("button was pressed");
  // Enter
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("submit").click();
  }
});
