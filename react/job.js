/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({displayName: "exports",
  render: function() {
    return (
      React.createElement("div", {className: "Job"}, 
          React.createElement("p", {className: "Job-text"}, this.props.text)
      )
    )
  }
});