/** @jsx React.DOM */
const React = require('react/addons');

const Header = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },

  render: function() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
      </div>
    );
  }
});

module.exports = Header;
