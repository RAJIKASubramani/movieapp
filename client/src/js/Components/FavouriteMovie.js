
var React = require('react');

var FavMovie = React.createClass({
  getInitialState: function()
  {
    return {title:''};
  },
  updateTitle: function(t)
  {
    console.log('typing...');
    this.setState({title: t.target.value});
  },
  updateClick: function()
  {
      var newTitle=this.state.title;
      var movieObject = {};
      movieObject.Title = this.state.title;
      movieObject.imdbID= this.props.valuedata.imdbID;
      $.ajax({
       url:"http://localhost:8080/movies/update",
       type: 'PUT',
       data: movieObject,
       success: function(message)
       {
         console.log("Movie updated");
         this.props.onupdate(movieObject.imdbID, movieObject.Title);
       }.bind(this),
       error: function(err)
       {
         console.log(err);
       }.bind(this)
     });
  },
deleteMovie : function()
{
  console.log("deleted");
  var del=this.props.valuedata.imdbID;
  $.ajax({
   url:"http://localhost:8080/movies/delete/"+del,
   type: 'DELETE',
   success: function(message)
   {
     this.props.ondelete(this.props.valuedata);
   }.bind(this),
   error: function(err)
   {
     console.log(err);
   }.bind(this)
 });

},
render : function()
{
  var id="#"+this.props.valuedata.imdbID;
return (
   <div className="movie">
           <h2 className="movieName"> </h2>
           <div className="well">
               <div className="row">
                   <div className="col-sm-4">
                       <img className="thumbnail" src={this.props.valuedata.Poster}/>
                   </div>
                     <div className="col-sm-8">
                         <h4>{this.props.valuedata.Title}</h4>
                         <ul className='list-group'>
                             <li className='list-group-item'>Year Released : {this.props.valuedata.Year}</li>
                             <li className='list-group-item'>IMDB Id : {this.props.valuedata.imdbID}</li>
                         </ul>
                         <a href={id}  role="button" className="btn btn-warning" data-toggle="modal"> Update</a>
                         <div className="modal fade" id={this.props.valuedata.imdbID}>
                             <div className="modal-dialog">
                                 <div className="modal-content">
                                     <div className="modal-header">
                                         <button className="close" data-dismiss="modal">&times;</button>
                                         <h4 className="modal-title">Update</h4>
                                     </div>
                                     <div className="modal-body">
                                         <form className="form-horizontal">
                                                                    <div className="form-group">
                                                                        <label className="col-lg-2 control-label" for="inputName">Title</label>
                                                                        <div className="col-lg-10">
                                                                            <input className="form-control" id="inputName" placeholder="Title Name" onChange={this.updateTitle} type="text"/>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                     </div>
                                     <div className="modal-footer">
                                         <button className="btn btn-default" data-dismiss="modal" type="button">Close</button>
                                         <button className="btn btn-success" type="button" onClick={this.updateClick}>Save</button>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <button className="btn btn-success" onClick={this.deleteMovie}>Delete</button>
                     </div>
               </div>
           </div>
       </div>
 );
}

});

module.exports = FavMovie;
