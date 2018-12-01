let React = require('react');
let ListItem = require('./ListItem.jsx');

var ingredients = [{"id" : 1,"text" : "HAM"}, {"id" : 2,"text" : "CHEESE"}];

var List = React.createClass({
  render: function () {
    let listItem = ingredients.map((item) => {
      return <ListItem key = {item.id} ingredient = {item.text} />
    });

    return (
      <ul>{listItem}</ul>
    );
  }
});

module.exports = List;
