var React = require('react');
var ReactDOM = require('react-dom');

var AddCategory = React.createClass({
  handleSubmit: function(e){
    //prevent page refresh when form is submitted
    e.preventDefault();
    var catInput = ReactDOM.findDOMNode(this.refs.category);
    //Add category
    this.props.addCat(catInput.value);
    catInput.value = '';
  },

  render: function() {
    return (
      <form className="form-group" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Enter Category" ref="category" />
        <button type="submit">Add</button>
      </form>
    )
  }
});

module.exports = AddCategory;