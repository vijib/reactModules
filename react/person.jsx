/** @jsx React.DOM */

var React  = require('react');
var Job    = require('./Job.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="Person">
        <h2 className="Person-title">{this.props.name}</h2>
        <div className="Person-body">
          <Job text={this.props.job} />
        </div>
      </div>
    )
  }
});