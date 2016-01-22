var React = require('react');
var AddCategory = require('./AddCategory');

var CategoryList = React.createClass({
  /*getInitialState: function() {
    return {categories: ['Personal', 'work', 'Hack Reactor']};
  },*/
/*  componentDidMount: function() {
    var component = this;
    var data = 
      [
        {'category': 'personal'},
        {'category': 'school'},
        {'category': 'work'}
      ];
      component.setState(data);
  },*/
  addCat: function(catToAdd) {
    this.props.addCategory(catToAdd);
    
    // this.setState({categories: this.state.categories.concat(catToAdd)});
    //this.props.state.categories.concat(catToAdd)
  },

  showCat: function(catToAdd) {
    this.props.showCategory(catToAdd);
  },

  deleteCat: function(index, event) {
    var categories = this.props.categories;
    var newCategories = [];
    // Alternative
    // var newCategories = categories.slice(0, index).concat(categories.slice(index+1));

    categories.forEach(function(catItem, idx){
      if (idx !== index){
        newCategories.push(catItem);
      }
    });
    
    this.setState({categories: newCategories});
  },

  render: function() {
    var that = this;
    var lists = this.props.categories.map(function(category, index) {
      return (<li key={index}>{category}
                <button onClick={that.deleteCat.bind(that, index)}>Delete</button>
                <button onClick={that.showCat.bind(that, category)}>Show todos</button>
              </li>);
    });

    return (
      <div>
        <AddCategory addCat={this.addCat} />
        <div className="category-list-container">      
          <ul>
            {lists}
          </ul>
        </div>
      </div>
    )
  }
});

module.exports = CategoryList;