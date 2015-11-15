
$(document).ready(function() {
  console.log('sanity check');

  //to add new form field when plus button is checked
  $(".addNumber").on("click", function() {
  	console.log('add another number');
  	var html='<br><br><input type="text" class="form-control phoneInput" id="" placeholder="xxx-xxx-xxxx"><button type="button" class="btn btn-default form-control addNumber" aria-label="Left Align"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>';
  	$('.allNumbers').append(html);
  });

  //when create group form is submitted
  $("#groupForm").submit(function(e) {
  	e.preventDefault();
  	console.log('form submitted');
  	$('#createGroup').modal('hide');
    var formData = $("#groupName").serialize();
    console.log("formData is: ", formData);
    $.ajax({
      url: '/api/groups',
      type: "POST",
      data: formData
    })
    .done(function(data) {
      console.log('group is: ', data);

      window.location.href = "/groups/" + data._id;
    });
    
  	
  });



  // When new prayer is submitted
  $('#newPost').submit(function(e) {
    e.preventDefault();
    console.log("form submitted");
    var groupId = $('#newPost').attr('data-id');
    var formData = $('#newPost').serialize();
    console.log("form data is: ", formData);
    $('#newPost')[0].reset();
    $.ajax({
      url: '/api/groups/' + groupId + '/posts',
      type: "POST",
      data: formData
    })
    .done(function(data) {
      location.reload();
    });

  });

//When new prayer request is submitted
  // $('#new-request').on('submit', function(e) {
  //   e.preventDefault();
  //   console.log('form submitted');
  //   var userId = $('#new-request-input').attr('data-id');
  //   console.log("userID is: " + userId);
  //   var formData = $('#new-request-input').serialize();
  //   console.log("formData is: " + formData);
  //   var newRequest = $( '#new-request-input').val();
  //   console.log("request is: " + newRequest);
  //   $('#new-request')[0].reset();
  //   $.ajax({
  //     url: '/api/users/' + userId + '/requests',
  //     type: "POST",
  //     data: formData
  //   })
  //   .done(function(request) {
  //     console.log("made a new post");
  //       // var requestHtml = "<li class='well' data-id='" + request._id + "'>" + newRequest + "<p><strong>Prayer count: <span class='pray-count'>" + request.prayerCount + " </span></strong></p><button type='button' data-id='" + request._id + "' class='btn btn-default btn-lg openModal owner' data-toggle='modal' data-target='#answeredModal'>Answered</button><button type='button' data-id='" + request._id + "' class='close owner deleteModal' data-target='#deletedModal' data-toggle='modal' data-placement='top' title='Delete prayer request' aria-label='Close'><span aria-hidden='true'>X</span></button><label><button type='button' class='btn btn-default btn-xs count visitor'>I prayed for this request</button><label></li>";
  //       // $('.active').prepend(requestHtml);
  //       // checkAuth();
  //       location.reload();
  //     });

  //   });


// Parse.initialize("eML2hkSVPkvyFxBNGC4zZPWRzvfmzsAejgYYL1R7", "vVZp9dKPlLekJoHTq0mYkU054enNsp208JOOygcG");
//     console.log("Parse is working");
    









    // var TestObject = Parse.Object.extend("TestObject");
    // var testObject = new TestObject();
    //   testObject.save({foo: "bar"}, {
    //   success: function(object) {
    //     $(".success").show();
    //   },
    //   error: function(model, error) {
    //     $(".error").show();
    //   }
    // });




});
