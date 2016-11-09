var React = require('react');
var MovieBox = require('./MovieBox');
var ContainerComponent = React.createClass({
render: function (){


    var movarr=this.props.moviedata.map(function(movie){
      return(
      <MovieBox
       valuedata={movie}
       key={movie.imdbID}
       >
       </MovieBox>
     );
   }.bind(this));
    return (
      <div className="movieList">
      {movarr}
   </div>
 );
}
});
module.exports=ContainerComponent;
