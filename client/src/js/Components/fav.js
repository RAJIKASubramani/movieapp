var React = require('react');
var FavouriteMovie = require('./FavouriteMovie.js')
var fav = React.createClass({
  getInitialState: function()
  {
     return {data: []};
  },
  handleviewMovie: function()
  {
console.log("inside fav");
    $.ajax({
     url:"http://localhost:8080/movies/addMovies",
     type: 'GET',
     dataType: 'JSON',
     success: function(message)
     {
          console.log("inside success");
         this.setState({data:Object.values(message)});
     }.bind(this),
     error: function(err)
     {
       console.log(err);
     }.bind(this)
   });
},


handleUpdate:function(imdbID,Title){
 var movieData=this.state.data;
 var index=movieData.findIndex(function(element){
   return element.imdbID===imdbID;
 });
 if(index!==-1){
   movieData[index].Title=Title;
   this.setState({data:movieData});
 }
},
handleDelete:function(allContent){
 console.log(allContent);
 var movieData1=this.state.data;
 var index=movieData1.findIndex(function(element){
   return element.imdbID===allContent.imdbID;
 });
 console.log(index);
 if(index!==-1){
   movieData1.splice(index,1);
   this.setState({data:movieData1});
 }
 },
 componentDidMount:function(){
   this.handleviewMovie();
 },
  render: function(){

var viewComponents = this.state.data.map(function(view){
  return (
           <FavouriteMovie
                valuedata={view}
                key={view.imdbID}
                onupdate={this.handleUpdate}
                   ondelete={this.handleDelete}
             >
             </FavouriteMovie>
        );
    }.bind(this));

  return(
    <div className="moiveList">
    {viewComponents}
    </div>
  );
  }
});
module.exports=fav;
