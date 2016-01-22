var React = require('react');
var AddTodo = require('./AddTodo');
var TodoList = require('./TodoList');

var TodoContainer = React.createClass({
  todos: {},
  render: function(){

    return (

    <div>
      <AddTodo />
      <TodoList todos={this.props.todos} />
    </div>
  
      )
  }
});

module.exports = TodoContainer;