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
$("#waiting-content").append(template(data));var source = $("#waiting").html();
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