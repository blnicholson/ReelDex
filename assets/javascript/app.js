
$(document).ready(function() {
$("#card2").hide();
//Enter button functionality from landing page
 
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
    var image2=$("<img>").attr("src", poster2);
    var image3=$("<img>").attr("src", poster3);
 
    //Adding API call to HTML Elements
    $("#movieTitle").append("<h4>" + movieRec1);
    $("#movieInformation").append("<p>" + overView1);
    $("#picture1").append(image1);
    $("#movieTitle2").append("<h4>" + movieRec2);
    $("#movieInformation2").append("<p>" + overView2);
    $("#picture2").append(image2);
    $("#movieTitle3").append("<h4>" + movieRec3);
    $("#movieInformation3").append("<p>" + overView3);
    $("#picture3").append(image3);
    
     //User on-click to search for movies
     $("#search-button").on("click", function(event) {
       event.preventDefault();
       $("#card2").show();
       
       //Emptying HTML when a new search is performed
       $("#movieInfoCard").empty();
       $("#moviePoster").empty();
       
       
       //beginning of AJAX call 2 
       var movie = $("#search").val();
       var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
       console.log(response);
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
          var rottenTomotoes = response.Ratings[1].Value;
          var poster = $("<img>").attr("src", imgURL);
          
          //placing API call into HTML elements
          $("#movieInfo").append("<p>" + movieTitle);
          $("#moviePoster").append(poster);
          $("#movieInfoCard").append("<p> Rotten Tomotoes Rating: " + rottenTomotoes);
          $("#movieInfoCard").append("<p> Leading actors: " + actors);
          $("#movieInfoCard").append("<p> Movie is rated: " + rated);
          $("#movieInfoCard").append("<p> Plot: " + plot);
          
          //Emptying out text box
          $("#search").val("")
        });
 
          });
        });
        
        //===================CAROUSEL START=============================//
        $('.carousel').carousel({
            duration: 200
        });
        window.setInterval(function() { $(".carousel").carousel('next') }, 4500);
        //===================CAROUSEL END=============================//
    
    //=================ENTERTAINMENT NEWS TICKER START===================//
         $('#webTicker').webTicker();
    //=================ENTERTAINMENT NEWS TICKER END===================//
  
     //API call for Entertainment News
      var queryURL = "https://newsapi.org/v2/top-headlines?sources=entertainment-weekly&apiKey=e80eeef9fe094e85b51eac14d1d102a0";
        
        // Creating an AJAX call for the specific movie button being clicked 
        $.ajax({
          url: queryURL,
          method: "GET"
         }).then(function(response) {
           console.log(response.articles);

          // Variable to hold responses
           var news1 =  response.articles[0].title;
           var news2 = response.articles[1].title;
           var news3 = response.articles[2].title;

          //jQuery to place response into news ticker
           $("#scrolling1").html(news1);
           $("#scrolling2").html(news2);
           $("#scrolling3").html(news3);

           
           
  
      
  });
});
  

