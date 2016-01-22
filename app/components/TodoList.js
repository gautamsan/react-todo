var React = require('react');


var TodoList = React.createClass({
  deleteTodo: function(){

  },
  render: function() {
    console.log(this.props.todos)
    //var todos =- this.props.todos.map()
    return (
      <div>
        <ul>
          {
            this.props.todos.map(function(todo, index){
              return ( <li key={index}>{todo}<button onClick={this.deleteTodo}>delete</button></li> );
            }.bind(this))
          }
        </ul>
      </div>
    );
  }
});

module.exports = TodoList;