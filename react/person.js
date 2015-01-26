/** @jsx React.DOM */

var React  = require('react');
var Job    = require('./Job.jsx');

module.exports = React.createClass({displayName: "exports",
  render: function() {
    return (
      React.createElement("div", {className: "Person"}, 
        React.createElement("h2", {className: "Person-title"}, this.props.name), 
        React.createElement("div", {className: "Person-body"}, 
          React.createElement(Job, {text: this.props.job})
        )
      )
    )
  }
});