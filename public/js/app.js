function counting(len){
  counter =0;
  for(var i = 0; i < len; i++){
    counter += 1;
  }
  console.log(counter);
}
var waiting = $("#waiting").html();
var template = Handlebars.compile(waiting);
var counter = 0;
// Data
var data = {
  status: "waiting",
  task: [
    {
      description: "Unable to load game-request session",
      name: "",
      image: "../img/profile.png",
      label: "../img/green_label.png"
    },
    {
      description: "Fullscreeen btn doesn't spread to full",
      name: "",
      image: "../img/profile.png",
      label: "../img/green_label.png"
    },
    {
      description: "Reels can be tampered with before",
      name: "",
      image: "../img/profile.png",
      label: "../img/green_label.png"
    },
    {
      description: "Big Win and Bangup not positioned",
      name: "",
      image: "../img/profile.png",
      label: "../img/green_label.png"
    },
    {
      description: "Winlines are misaligment(all)",
      name: "",
      image: "../img/profile.png",
      label: "../img/green_label.png"
    },
    {
      description: "Spin swap tile misaligment (all)",
      name: "",
      image: "../img/profile.png",
      label: "../img/green_label.png"
    },
    {
      description: "Hidden Dragon Revision",
      name: "",
      image: "../img/profile6.png",
      label: "../img/green_label.png"
    },
    {
      description: "Spin tile се пада 2 пъти на един",
      name: "",
      image: "../img/profile2.png",
      label: "../img/green_label.png"
    },
    {
      description: "Може да се разместят рийлове със",
      name: "",
      image: "../img/profile.png",
      label: "../img/green_label.png"
    },
    {
      description: "Fullscreeen doesn't spread reels",
      name: "",
      image: "../img/profile.png",
      label: "../img/green_label.png"
    },
    {
      description: "Символите премигват при драгван",
      name: "",
      image: "../img/profile4.png",
      label: "../img/green_label.png"
    },
    {
      description: "Game not scaled for iPhone",
      name: "",
      image: "../img/profile.png",
      label: "../img/green_label.png"
    },
    {
      description: "Debug pause button doesn't",
      name: "",
      image: "../img/profile.png",
      label: "../img/gray_label.png"
    },
    {
      description: "[Config reels on] doesn't show config",
      name: "",
      image: "../img/profile.png",
      label: "../img/gray_label.png"
    },
    {
      description: "Nundge up/down misaligment (all)",
      name: "",
      image: "../img/profile.png",
      label: "../img/gray_label.png"
    },
    {
      description: "Looked tile shadow",
      name: "",
      image: "../img/profile.png",
      label: "../img/gray_label.png"
    },
  ]
};

counting(data.task.length);
$("#waiting-badge").append(counter);
$("#waiting-content").append(template(data));
$("#add-task-waiting").on( "click", function() {
  $("#waiting-content").append('<div class="add-layout"><input type="text" class="col-md-8" id="waiting_input" placeholder="Input field"><button type="submit" class="add_waiting col-md-offset-1 col-md-3">ADD</button></div>');  $(".add_waiting").on( "click", function() {
    var input_string = $('#waiting_input').val();
    // data = JSON.parse( data );
    // Add new key value pair "myData":"Helo World" to object
    data.task.push({description: input_string, image: "../img/profile.png", label: "../img/green_label.png" });
    JSON.stringify( data );
    // Log to console:
    $("#waiting-content").html('');
    counting(data.task.length);
    var newValue = 0;
    newValue += parseInt(counter);
    $("#waiting-badge").text(newValue);
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
      label: "../img/green_label.png"
    },
    {
      description: "Autoplay disables buttombar bur",
      name: "",
      image: "../img/profile5.png",
      label: "../img/green_label.png"
    },
    {
      description: "Да се направят unit test-ове на",
      name: "",
      image: "../img/profile2.png",
      label: "../img/green_label.png"
    },
    {
      description: "Symbols Design",
      name: "",
      image: "../img/profile8.png",
      label: "../img/green_label.png"
    },
    {
      description: "Symbols Design",
      name: "",
      image: "../img/profile6.png",
      label: "../img/green_label.png"
    },
    {
      description: "Letter Symbols Design",
      name: "",
      image: "../img/profile6.png",
      label: "../img/green_label.png"
    },
  ]
};

counting(progress.task.length);
$("#progress-badge").append(counter);
$("#progress-content").append(template(progress));
$("#add-task-progress").on( "click", function() {
  $("#progress-content").append('<div class="add-layout"><input type="text" class="col-md-8" id="progress_input" placeholder="Input field"><button type="submit" class="add_progress col-md-offset-1 col-md-3">ADD</button></div>');  $(".add_progress").on( "click", function() {
    var input_string = $('#progress_input').val();

    progress.task.push({description: input_string, image: "../img/profile.png", label: "../img/green_label.png" });
    JSON.stringify( progress );
    // Log to console:
    $("#progress-content").html('');
    counting(progress.task.length);
    var newValue = 0;
    newValue += parseInt(counter);
    $("#progress-badge").text(newValue);
    $("#progress-content").append(template(progress));

  });
});
var review = $("#review").html();
var template = Handlebars.compile(review);
// var review = $.getJSON("review.json");
var review = {
  status: "review",
  task: [
    {
      description: "Use reel positions from backend",
      name: "",
      image: "../img/profile.png",
      label: "../img/green_label.png"
    },
    {
      description: "Stop reels at correct position",
      name: "",
      image: "../img/profile.png",
      label: "../img/green_label.png"
    },
    {
      description: "Config Reels Debug",
      name: "",
      image: "../img/profile.png",
      label: "../img/green_label.png"
    },
    {
      description: "Popup tile should remove itself",
      name: "",
      image: "../img/profile.png",
      label: "../img/green_label.png"
    },
    {
      description: "Draw win lines dynamicaly",
      name: "",
      image: "../img/profile.png",
      label: "../img/green_label.png"
    },
    {
      description: "Spin sound does not play (Opera)",
      name: "",
      image: "../img/profile7.png",
      label: "../img/red_label.png",
      merged: "true"
    },
    {
      description: "Bangup sound does not play. (Opera",
      name: "",
      image: "../img/profile7.png",
      label: "../img/red_label.png",
      merged: "true"
    },
    {
      description: "Spin sound does not play (Opera)",
      name: "",
      image: "../img/profile7.png",
      label: "../img/red_label.png",
      merged: "true"
    },
    {
      description: "Special tile animation not triggered",
      name: "",
      image: "../img/profile7.png",
      label: "../img/red_label.png",
      merged: "true"
    },
    {
      description: "Unable to get width property of",
      name: "",
      image: "../img/profile7.png",
      label: "../img/red_label.png",
      merged: "true"
    },
    {
      description: "When dragging and space key is pre",
      name: "",
      image: "../img/profile.png",
      label: "../img/green_label.png"
    },
    {
      description: "Slot Scene Backgound (Design)",
      name: "",
      image: "../img/profile6.png",
      label: "../img/green_label.png"
    },
    {
      description: "Width property error in console",
      name: "",
      image: "../img/profile7.png",
      label: "../img/green_label.png"
    },
    {
      description: "Feature LookedTiles",
      name: "",
      image: "../img/profile5.png",
      label: "../img/green_label.png"
    },
    {
      description: "Code review #API",
      name: "",
      image: "../img/profile9.png",
      label: "../img/green_label.png"
    },
  ]
};

console.log(review);
counting(review.task.length);
$("#review-badge").append(counter);
$("#review-content").append(template(review));
$("#add-task-review").on( "click", function() {
  $("#review-content").append('<div class="add-layout"><input type="text" class="col-md-8" id="review_input" placeholder="Input field"><button type="submit" class="add_review col-md-offset-1 col-md-3">ADD</button></div>');  $(".add_review").on( "click", function() {
    var input_string = $('#review_input').val();
    review.task.push({description: input_string, image: "../img/profile.png", label: "../img/green_label.png" });
    JSON.stringify( review );
    $("#review-content").html('');
    counting(review.task.length);
    var newValue = 0;
    newValue += parseInt(counter);
    $("#review-badge").text(newValue);
    $("#review-content").append(template(review));
  });
});
if(review.task.merged == "true"){
  console.log(review.task.merged);
  $(".description").addClass("merged");
}
