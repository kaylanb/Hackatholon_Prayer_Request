// Parse.initialize("eML2hkSVPkvyFxBNGC4zZPWRzvfmzsAejgYYL1R7", "vVZp9dKPlLekJoHTq0mYkU054enNsp208JOOygcG");
//     console.log("Parse is working");
    



$(document).ready(function() {
  console.log('sanity check');
  $(".addNumber").on("click", function() {
  	console.log('add another number');
  	var html='<br><br><input type="text" class="form-control phoneInput" id="" placeholder="xxx-xxx-xxxx"><button type="button" class="btn btn-default form-control addNumber" aria-label="Left Align"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>';
  	$('.allNumbers').append(html);
  });
  $("#groupForm").submit(function(e) {
  	e.preventDefault();
  	console.log('group form submitted');
  	$('#createGroup').modal('hide');
  	window.location.href="./group.html";
  });
  $("#prayerForm").submit(function(e) {
    e.preventDefault();
    console.log('prayer form submitted');
    $('#newPrayerModal').modal('hide');
    window.location.href="./newprayer.html";
  });
});