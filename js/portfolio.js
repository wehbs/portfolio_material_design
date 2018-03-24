$.getJSON("https://ipapi.co/json/", function(json) {
  var config = {
    apiKey: "AIzaSyDxW2ypEVCUqBXGf-gL7MXA0pUJjEiPxU0",
    authDomain: "portfolio-5daeb.firebaseapp.com",
    databaseURL: "https://portfolio-5daeb.firebaseio.com",
    projectId: "portfolio-5daeb",
    storageBucket: "portfolio-5daeb.appspot.com",
    messagingSenderId: "667750983442"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  var ipValues = {
    city: json.city,
    country: json.country_name,
    isp: json.org,
    lat: json.latitude,
    lon: json.longitude,
    ip: json.ip,
    state: json.region,
    zip: json.postal,
    timestamp: firebase.database.ServerValue.TIMESTAMP
  };
  database.ref().push(ipValues);
});

// jQuery to collapse the navbar shadow on scroll
// =================================================
function removeNavShadow() {
  var scroll = $(window).scrollTop();
  if (scroll === 0) {
    $("nav.white").addClass("z-depth-0");
  } else {
    $("nav.white").removeClass("z-depth-0");
  }
}
removeNavShadow();
$(window).scroll(function() {
  removeNavShadow();
});
// =================================================

// jQuery to remove valign-wrapper on small screen because is breaks the columns
// =================================================
function checkWidth() {
  if ($(window).width() < 600) {
    $("#about").removeClass("valign-wrapper");
    $("#skills").removeClass("valign-wrapper");
    $("#contact").removeClass("valign-wrapper");
    $(".fa-terminal").removeClass("animated tada infinite");
  } else {
    $("#about").addClass("valign-wrapper");
    $("#skills").addClass("valign-wrapper");
    $("#contact").addClass("valign-wrapper");
    $(".fa-terminal").addClass("animated tada infinite");
  }
}
checkWidth();
$(window).resize(checkWidth);
// =================================================

// Add Classes when elements enter the viewport
// Skill Bars
$(".b1").whenInViewport(function() {
  $(".b1").addClass("bar1");
});
$(".b2").whenInViewport(function() {
  $(".b2").addClass("bar2");
});
$(".b3").whenInViewport(function() {
  $(".b3").addClass("bar3");
});
$(".b4").whenInViewport(function() {
  $(".b4").addClass("bar4");
});
$(".b5").whenInViewport(function() {
  $(".b5").addClass("bar5");
});
$(".b6").whenInViewport(function() {
  $(".b6").addClass("bar6");
});
$(".b7").whenInViewport(function() {
  $(".b7").addClass("bar7");
});
$(".b8").whenInViewport(function() {
  $(".b8").addClass("bar8");
});

// Add Animate.CSS classes when elements enter the viewport
$("#1").whenInViewport(function() {
  $("#1").addClass("animated fadeInUp");
});
$("#2").whenInViewport(function() {
  $("#2").addClass("animated fadeInUp");
});
$("#3").whenInViewport(function() {
  $("#3").addClass("animated fadeInUp");
});
$("#4").whenInViewport(function() {
  $("#4").addClass("animated fadeIn");
});
$("#5").whenInViewport(function() {
  $("#5").addClass("animated fadeInUp");
});
$("#6").whenInViewport(function() {
  $("#6").addClass("animated fadeInUp");
});
$("#7").whenInViewport(function() {
  $("#7").addClass("animated fadeInUp");
});
$("#8").whenInViewport(function() {
  $("#8").addClass("animated fadeInUp");
});
$("#9").whenInViewport(function() {
  $("#9").addClass("animated fadeInUp");
});
$("#10").whenInViewport(function() {
  $("#10").addClass("animated fadeInUp");
});
$("#11").whenInViewport(function() {
  $("#11").addClass("animated fadeInUp");
});
$("#12").whenInViewport(function() {
  $("#12").addClass("animated fadeInUp");
});
$("#13").whenInViewport(function() {
  $("#13").addClass("animated fadeInUp");
});
$("#14").whenInViewport(function() {
  $("#14").addClass("animated fadeInUp");
});
$("#15").whenInViewport(function() {
  $("#15").addClass("animated fadeInUp");
});
$("#16").whenInViewport(function() {
  $("#16").addClass("animated fadeInUp");
});
$("#17").whenInViewport(function() {
  $("#17").addClass("animated fadeInUp");
});
$("#18").whenInViewport(function() {
  $("#18").addClass("animated fadeInUp");
});
$("#19").whenInViewport(function() {
  $("#19").addClass("animated fadeInUp");
});
$("#20").whenInViewport(function() {
  $("#20").addClass("animated fadeInUp");
});
$("#21").whenInViewport(function() {
  $("#21").addClass("animated fadeInUp");
});

// Contact Form
$("#contactForm").submit(function(event) {
  event.preventDefault();
  $.ajax({
    url: "https://www.enformed.io/5xj2jsur",
    method: "post",
    dataType: "json",
    accepts: "application/json",
    data: $("#contactForm").serialize(),
    success: function() {
      console.log("Your form was successfully received!");
      Materialize.toast("Thanks for reaching out!", 4000);
      $("textarea").val("");
      $("input").val("");
    },
    error: function() {
      console.log("Failure. Try again.");
      Materialize.toast("Thanks for reaching out!", 4000);
      $("textarea").val("");
      $("input").val("");
    }
  });
});

// Used to make callback work after animation in Animate.CSS
var animationEnd = (function(el) {
  var animations = {
    animation: "animationend",
    OAnimation: "oAnimationEnd",
    MozAnimation: "mozAnimationEnd",
    WebkitAnimation: "webkitAnimationEnd"
  };

  for (var t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
})(document.createElement("div"));

// Show/Hide the terminal
$(".brand-logo").click(function() {
  $(".shell-wrap").toggleClass("shell-visible");
  $(".fa-terminal").removeClass("animated tada infinite");
});

// Click anywhere on the terminal window and it will focus to the text box so that you can type commands
$(".shell-wrap").click(function() {
  $(".shell-box").focus();
});

// Navigate the site through terminal commands
function terminal(element) {
  console.log(element);
  if (event.key === "Enter") {
    var command = element.value.toLowerCase();
    $("<li>" + command + "</li>").insertBefore(".shell-box");
    $(".shell-box").val("");

    switch (command) {
      case "help":
        $(
          "<li>cd home: scroll to top of the page</li> <li>cd about: scroll to about section</li> <li>cd portfolio: scroll to portfolio section</li> <li>cd skills: scroll to skills section</li> <li>cd contact: scroll to contact section</li> <li>cd end: scroll to end of the page</li> <li>cd github: go to my github</li> <li>cd linkedin: go to my linkedin</li> <li>send email: send me an email</li> <li>reload: reload the webpage</li> <li>clear: empty the bash window</li> <li>hide: hide the bash window</li>"
        ).insertBefore(".shell-box");
        break;

      case "cd home":
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $("#page-top").offset().top
            },
            1500,
            "easeInOutExpo"
          );
        break;

      case "cd about":
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $("#about").offset().top
            },
            1500,
            "easeInOutExpo"
          );
        break;

      case "cd portfolio":
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $("#portfolio").offset().top
            },
            1500,
            "easeInOutExpo"
          );
        break;

      case "cd skills":
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $("#skills").offset().top
            },
            1500,
            "easeInOutExpo"
          );
        break;

      case "cd contact":
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $("#contact").offset().top
            },
            1500,
            "easeInOutExpo"
          );
        break;

      case "cd end":
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $("#end").offset().top
            },
            1500,
            "easeInOutExpo"
          );
        break;

      case "cd github":
        window.location = "https://github.com/wehbs";
        break;

      case "cd linkedin":
        window.location = "https://www.linkedin.com/in/shamirwehbe";
        break;

      case "send email":
        window.location = "mailto:shamirwehbe@me.com";
        break;

      case "reload":
        location.reload();
        break;

      case "clear":
        $(".shell-body li.pwd")
          .nextAll("li")
          .remove();
        break;

      case "hide":
        $(".shell-wrap")
          .addClass("slideOutDown")
          .one(animationEnd, function() {
            $(".shell-wrap").removeClass("slideOutDown");
            $(".shell-wrap").toggleClass("shell-visible");
          });
        break;
    }
  }
}
