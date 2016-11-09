var React = require('react');

var SearchForm = React.createClass({

  getInitialState : function()
  {
    return{
      title :''
    };
},
getTitle : function(arr)
{
  this.setState({title:arr.target.value});
},
 movie: function(){

       console.log(name);
     this.props.getMethod(this.state.title);
 },

render: function (){
  return(

    <div class="form-group">
<h2>Movie  App </h2>
 <input type="text" class="form-control" onChange={this.getTitle}></input>
 <button className="btn btn-success" onClick={this.movie}>search</button>
</div>
  )

}
})
module.exports=SearchForm;
