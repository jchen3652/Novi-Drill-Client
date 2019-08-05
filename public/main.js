function fetchIssues() {
  var issues = JSON.parse(localStorage.getItem('issues'));
  var issuesList = document.getElementById('issuesList');

  issuesList.innerHTML = '';

  for (var i = 0; i < issues.length; i++) {
    var id = issues[i].id;
    var desc = issues[i].description;
    var severity = issues[i].severity;
    var assignedTo = issues[i].assignedTo;
    var status = issues[i].status;

    issuesList.innerHTML += '<div class="well">' +
      '<h6>Issue ID: ' + id + '</h6>' +
      '<p><span class="label label-info">' + status + '</span></p>' +
      '<h3>' + desc + '</h3>' +
      '<p><span class="glyphicon glyphicon-time"></span> ' + severity + ' ' +
      '<span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>' +
      '<a href="#" class="btn btn-warning" onclick="setStatusClosed(\'' + id + '\')">Close</a> ' +
      '<a href="#" class="btn btn-danger" onclick="deleteIssue(\'' + id + '\')">Delete</a>' +
      '</div>';
  }
}

document.getElementById("showlife").addEventListener('click', function() {
  document.getElementById("message").innerHTML = "Your performer number is: " + document.getElementById("performerNumber").value;
  console.log("button pressed");
  jQuery.get('http://novi-drill-client.herokuapp.com/data.txt', function(data) {
    console.log(data);
  });


});