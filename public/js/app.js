
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
    $('#groupForm')[0].reset();
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

  //when demo prayer is submitted
  $('#demoPost').submit(function(e) {
    e.preventDefault();
    console.log("new post form submitted");
    var formData = $('#demoPost').serialize();
    console.log(formData);
    $.ajax({
      url: '/api/groups/5648dabd521bb4ab58ffd78e/posts',
      type: "POST",
      data: formData
    })
    .done(function(data) {
      console.log("groupis: ", data);
      location.reload();
    });
  });

  //when demo prayer is deleted
  $('.confirmDelete').on('submit', function(e) {
    e.preventDefault();
    console.log("delete button clicked");

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


//give form in modal a data-id based on the request
  $('.deleteButton').on('click', function() {
    var id = $(this).attr('data-id');
    $('.deleteForm').attr('data-id', id);
  });



  // //When delete button is clicked remove post
  $('.deleteForm').on('submit', function(e) {
    e.preventDefault();
    console.log("delet button clicked");
    var postId = $(this).data('id');
    var groupId = $('#newPrayerButton').attr('data-id');
    $.ajax({
      url: '/api/groups/' + groupId + '/posts/' + postId,
      type: "DELETE"
    })
    .done(function (data) {
      location.reload();
      
    });
  });

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
