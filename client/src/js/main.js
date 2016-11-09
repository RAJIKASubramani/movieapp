var React=require('react');
var ReactDOM=require('react-dom');
var SearchForm=require('./Components/SearchForm.js');
var ContainerComponent=require('./Components/ContainerComponent.js');
var {browserHistory, Route, Router, IndexRoute} = require('react-router');

var NavBar = require('./Components/NavBar');

var Home = require('./Components/Home');
var fav = require('./Components/fav');

var MainComponent=React.createClass({
 getInitialState: function()
 {
    return {data: []};
 },
 retriveData: function(title){
   console.log(title);
   $.ajax({
     url:"http://www.omdbapi.com/?s="+title,
     type: 'GET',
     dataType: 'JSON',

     success: function(data)
     {
       console.log('inside success');
       this.setState({data: data.Search});
       console.log(JSON.stringify(this.state.data));
     }.bind(this),
     error: function(err)
     {
       console.log(err);
     }.bind(this)
   });

 },

 render: function(){
   return (
     <div>
     <NavBar/>
     <br/><br/><br/><br/>
       {this.props.children}
     <SearchForm getMethod={this.retriveData}/>
     <ContainerComponent moviedata={this.state.data}/>
     </div>
   )
 }
})

 ReactDOM.render(
 <Router history={browserHistory}>
   <Route path="/" components={MainComponent}>
   <IndexRoute components={Home}/>
   <Route path="/home" components={Home}/>
  <Route path="/fav" components={fav}/>
   </Route>

 </Router>,document.getElementById('app'));
