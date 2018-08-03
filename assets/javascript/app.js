
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
    
  
     //Poster Images
     var poster1=("https://image.tmdb.org/t/p/w200/" + response.results[0].poster_path);
     var poster2=("https://image.tmdb.org/t/p/w200/" + response.results[1].poster_path);
     var poster3=("https://image.tmdb.org/t/p/w200/" + response.results[2].poster_path);
    
     var image1=$("<img>").attr("src", poster1);
     var image2=$("<img id ='poster'>").attr("src", poster2);
     var image3=$("<img id ='poster'>").attr("src", poster3);
  
     //Adding API call to HTML Elements
     $("#nowPlaying").append("<h4>" + movieRec1);
     $("#nowPlaying").append("<p>" + overView1);
     $("#nowPlaying").append(image1);
     $("#nowPlaying").append("<h4>" + movieRec2);
     $("#nowPlaying").append("<p>" + overView2);
     $("#nowPlaying").append(image2);
     $("#nowPlaying").append("<h4>" + movieRec3);
     $("#nowPlaying").append("<p>" + overView3);
     $("#nowPlaying").append(image3);
    
   


    //===================CAROUSEL START=============================//
    $('.carousel').carousel({
        duration: 200
    });
    window.setInterval(function() { $(".carousel").carousel('next') }, 4500);
    //===================CAROUSEL END=============================//

//=================ENTERTAINMENT NEWS TICKER START===================//
    $('#webTicker').webTicker();
//=================ENTERTAINMENT NEWS TICKER END===================//

});

   
    //User on-click to search for movies
    $("#search-button").on("click", function(event) {
      console.log("click");
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
  });
  

