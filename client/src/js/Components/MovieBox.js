var React = require('react');

var MovieBox = React.createClass({

 handleAddMovie: function()
 {
   var movieSave=this.props.valuedata;
   console.log(JSON.stringify(movieSave));
   console.log("added clicked");
   $.ajax({
   url:"http://localhost:8080/movies/add",
   type: 'POST',

   data: movieSave,
   success: function(msg)
   {
     console.log("inside success");
     alert(msg);
   }.bind(this),
   error: function(err)
   {

     console.log(err);
   }.bind(this)
 });



},


render : function()
{
return (
   <div className="movie">
           <h2 className="movieName"> </h2>
           <div className="well">
               <div className="row">
                   <div className="col-4">
                       <img className="thumbnail" src={this.props.valuedata.Poster}/>
                   </div>
                     <div className="col-8">
                         <h4>{this.props.valuedata.Title}</h4>
                         <ul className='list-group'>
                             <li className='list-group-item'>Year Released : {this.props.valuedata.Year}</li>
                             <li className='list-group-item'>IMDB Id : {this.props.valuedata.imdbID}</li>
                         </ul>
                         <a className="btn btn-primary" href={"http://www.imdb.com/title/"+this.props.valuedata.imdbID} > View on IMDB</a>
                         <button className="btn btn-success" onClick={this.handleAddMovie}>Add</button>
                     </div>
               </div>
           </div>
       </div>
);
}

});

module.exports=MovieBox;
