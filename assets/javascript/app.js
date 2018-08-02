<<<<<<< HEAD
$(document).ready(function() {

//beginning of AJAX call to auto populate on screen load
var queryURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=8687c4fd9f6a13ab54df3f1d1311f161"; 

// Creating an AJAX call to populate on screen when users enter site 
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {
 
  console.log(response.results)
  
  //variables to hold API responses
   var movieRec1=(response.results[0].title);
   var overView1=(response.results[0].overview)
   var movieRec2=(response.results[1].title);
   var overView2=(response.results[1].overview)
   var movieRec3=(response.results[2].title);
   var overView3=(response.results[2].overview)
   var movieRec4=(response.results[3].title);
   var overView4=(response.results[3].overview)
   var movieRec5=(response.results[4].title);
   var overView5=(response.results[4].overview);

   //Adding API call to HTML Elements
   $("#movieView").append("<h4>" + movieRec1);
   $("#movieView").append("<p>" + overView1);
   $("#movieView").append("<h4>" + movieRec2);
   $("#movieView").append("<p>" + overView2);
   $("#movieView").append("<h4>" + movieRec3);
   $("#movieView").append("<p>" + overView3);
   $("#movieView").append("<h4>" + movieRec4);
   $("#movieView").append("<p>" + overView4);
   $("#movieView").append("<h4>" + movieRec5);
   $("#movieView").append("<p>" + overView5);
 })

 
  //User on-click to search for movies
  $("#find-movie").on("click", function(event) {
    event.preventDefault();

    //Emptying HTML when a new search is performed
    $("#movie-view").empty();
    

    //beginning of AJAX call 2 
    var movie = $("#movie-input").val();
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    // Creating an AJAX call for the specific movie button being clicked 
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);

      //Variables to hold response returns
      var movieTitle= response.Title;
      var imgURL = response.Poster;
      var actors = response.Actors;
      var rated = response.Rated;
      var plot = response.Plot;
      var rottenTomotoes =JSON.stringify (response.Ratings[1].Value);
      var poster = $("<img>").attr("src", imgURL);

      //placing API call into HTML elements
      $("#movie-view").append("<p>" + movieTitle);
      $("#movie-view").append(poster);
      $("#movie-view").append("<p> Rotten Tomotos Rating: " + rottenTomotoes);
      $("#movie-view").append("<p> Leading actors: " + actors);
      $("#movie-view").append("<p> Movie is rated: " + rated);
      $("#movie-view").append("<p> Plot: " + plot);

      //Emptying out text box
       $("#movie-input").val("");
    });

     
    
  });
});


=======
$(document).ready(function () {
   

    //===================SLICK.JS SLIDER SINGLE VERTICLE POSTER SLIDER START=============================//
    $(".Vertical-Slider").slick({
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        prevArrow: false,
        nextArrow: false,
        fade: true
    });
    //===================SLICK.JS SLIDER SINGLE VERTICLE POSTER SLIDER END=============================//

});
>>>>>>> 806f68a0f00a46c3743d41717d9605341ae0c329
