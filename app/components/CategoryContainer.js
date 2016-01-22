var React = require('react');
//var AddCategory = require('./AddCategory');
var CategoryList = require('./CategoryList');

var CategoryContainer = React.createClass({
  render: function() {
    return(
      <div>
        <CategoryList categories={this.props.categories} 
          addCategory={this.props.addCategory} 
          showCategory={this.props.showCategory}
        />
      </div>
    )
  }
});

module.exports = CategoryContainer;