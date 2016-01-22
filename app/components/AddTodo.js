var React = require('react');

var AddTodo = React.createClass({

  setRef: function(ref){
    this.todo = ref;
  },

  handleSubmit: function(){
    var newTodo = this.todo.value;
    this.todo.value = '';
  },

  render: function(){
    return (

      <div className="input-group">
        <input type="text" className="" placeholder="Add Todo..." ref={this.setRef} />
        <button onClick={this.handleSubmit}>Add</button>
      </div>

    )
  }
});

module.exports = AddTodo;