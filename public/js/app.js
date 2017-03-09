var waiting = $("#waiting").html();
var template = Handlebars.compile(waiting);
var data = {
  status: "waiting",
  task: [
    {
      description: "Unable to load game-request session",
      name: "",
      image: "../img/profile.png",
    },
    {
      description: "Fullscreeen btn doesn't spread to full",
      name: "",
      image: "../img/profile.png"
    }
  ]
};
$("#waiting-content").append(template(data));
$("#add-task-waiting").on( "click", function() {
  $("#waiting-content").append('<div class="add-layout"><input type="text" class="col-md-8" id="waiting_input" placeholder="Input field"><button type="submit" class="add_waiting col-md-offset-1 col-md-3">ADD</button></div>');  $(".add_waiting").on( "click", function() {
    var input_string = $('#waiting_input').val();
    // data = JSON.parse( data );
    // Add new key value pair "myData":"Helo World" to object
    data.task.push({description: input_string, image: "../img/profile.png" });
    JSON.stringify( data );
    // Log to console:
    $("#waiting-content").html('');
    $("#waiting-content").append(template(data));

  });
});

var progress = $("#in-progress").html();
var template = Handlebars.compile(progress);
var progress = {
  status: "in-progress",
  task: [
    {
      description: "Support multiple Reels Definitior",
      name: "",
      image: "../img/profile4.png",
    },
    {
      description: "Autoplay disables buttombar bur",
      name: "",
      image: "../img/profile5.png",
    }
  ]
};
$("#progress-content").append(template(progress));
$("#add-task-progress").on( "click", function() {
  $("#progress-content").append('<div class="add-layout"><input type="text" class="col-md-8" id="progress_input" placeholder="Input field"><button type="submit" class="add_progress col-md-offset-1 col-md-3">ADD</button></div>');  $(".add_progress").on( "click", function() {
    var input_string = $('#progress_input').val();
    // data = JSON.parse( data );
    // Add new key value pair "myData":"Helo World" to object
    progress.task.push({description: input_string, image: "../img/profile.png" });
    JSON.stringify( progress );
    // Log to console:
        $("#progress-content").html('');
    $("#progress-content").append(template(progress));

  });
});
var review = $("#review").html();
var template = Handlebars.compile(review);
var review = {
  status: "review",
  task: [
    {
      description: "Use reel positions from backend",
      name: "",
      image: "../img/profile.png",
    },
    {
      description: "Stop reels at correct position",
      name: "",
      image: "../img/profile.png",
    }
  ]
};
$("#review-content").append(template(review));
$("#add-task-review").on( "click", function() {
  $("#review-content").append('<div class="add-layout"><input type="text" class="col-md-8" id="review_input" placeholder="Input field"><button type="submit" class="add_review col-md-offset-1 col-md-3">ADD</button></div>');  $(".add_review").on( "click", function() {
    var input_string = $('#review_input').val();
    // data = JSON.parse( data );
    // Add new key value pair "myData":"Helo World" to object
    review.task.push({description: input_string, image: "../img/profile.png" });
    JSON.stringify( review );
    // Log to console:
      $("#review-content").html('');
    $("#review-content").append(template(review));
  });
});