var should = require("chai").should(),
supertest = require("supertest"),
app = require("../app");

var url = supertest("http://localhost:8080");

describe("Testing 1st route", function(err){
  it("Retrive the data", function(done){
    url
        .get("/movies/addMovies")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
          should.not.exist(err);
          var myObj = JSON.parse(res.text);

    var result=Object.keys(myObj).map(function(key)
     {
       return myObj[key];
     });


         result[0].Title.should.be.equal("Kayal");


          done();
        });

  });
});
describe("Testing 2nd route", function(err){
  it("Post the data", function(done){
    url
        .post("/movies/add")
        .send({"Title":"Remo","Year":"2016","imdbID":"tt6126294","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BOTg3MjJkNDItMjg4Yy00MGQ2LWI1MmEtNmY2YWFhN2RlYjMyXkEyXkFqcGdeQXVyNjgyOTU0ODU@._V1_SX300.jpg"})
        .expect(200)

        .end(function(err,res){

       res.text.should.equal("movie inserted");
done();
        });

  });
});
describe("Testing 3rd route", function(err){
  it("delete the data", function(done){
    url
        .del("/movies/delete/tt4679210")

       .expect(200)

      .end(function(err,res){

       res.text.should.equal("  movies deleted");
       done();
        });

  });
});
describe("Testing 4th route", function(err){
  it("update the data", function(done){
    url
        .put("/movies/update")
        .send({"Title":"Superman","imdbID":"tt0464071"})
       .expect(200)

      .end(function(err,res){

       res.text.should.equal("movies updated");
       done();
        });

  });
});
