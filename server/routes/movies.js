var express = require('express');
var router = express.Router();

var movies=require('../models/movies');


router.route("/add")
.post(function(req,res) {
//  console.log("Request body = "+req.body);
  if(req.body) {
  var movievar=new movies();
  movievar.Title=req.body.Title;
  movievar.Year=req.body.Year;
  movievar.imdbID=req.body.imdbID;
  movievar.Type=req.body.Type;
  movievar.Poster=req.body.Poster;
  movievar.save(function(err){
  if(err) {
    res.send(err);
  }
  else  {
  res.send("movie inserted");
  }
    });
  }
  });


  router.route("/delete/:imdbID")
  .delete(function(req,res) {
    var request=req.params.imdbID;
    console.log(request);
    if(request)
    {console.log("remove");

      movies.remove({imdbID:request},function(err){
        console.log("remove1");
        if(err) {
          res.send(err);
        }
        else  {
          console.log("remove2");
        res.send("  movies deleted");
        }
      });
    }
  });


  router.route("/update").put(function(req,res)
 {
console.log("updating movie");
console.log(req.body);
   if(req.body)
   {

     movies.update({imdbID:req.body.imdbID}, {$set: {Title:req.body.Title}},function(err){
       if(err) {
         console.log(err);
         res.send(err);
       }
       else  {
         console.log("success");
         res.send("movies updated");
       }
     });
   }
 });

  router.route("/addMovies")
  .get(function(req,res){
    movies.find({},function(err,moviesall){
      if(err) {
        res.send(err);
      }
      else {

console.log("all movies get displayed");
        var moviess={};
        moviesall.forEach(function(moviee){
          moviess[moviee._id]=moviee;
        });
        res.send(moviess);
      }
    });

  });
module.exports = router;
