var React = require('react');
var TodoList = require('./TodoList');
var TodoContainer = require('./TodoContainer');
var CategoryContainer = require('./CategoryContainer');

var Main = React.createClass({
  getInitialState: function(){
    return {
      todosByCategory: {'home': ['sleep', 'eat', 'read'], 'hack reactor': ['code', 'code', 'code']},
      todosInCat: []
    };
  },
  addCategory: function(cat){
    var newObject = this.state.todosByCategory;
    newObject[cat] = [];
    this.setState({
      todosByCategory: newObject
    });
  },

  showCategory: function(cat) {
    var todosInCat = this.state.todosByCategory[cat];
    this.setState({
      todosInCat: todosInCat
    })
  },

  deleteCategory: function(){

  },

  render: function() {
    return (

      <div className="main-container">
        <nav className="navbar navbar-default">navbar</nav>
        
        <TodoContainer todos={this.state.todosInCat}/>
        <CategoryContainer addCategory={this.addCategory} 
          categories={Object.keys(this.state.todosByCategory)} 
          showCategory={this.showCategory}
        />
  
      </div>
     
    )
  }
});

module.exports = Main;