
var React   = require('react');
var Person = require('./Person.jsx');


React.renderComponent(
  React.createElement(Person, {
    name: "Viji", 
    job: "I am a software engineer"}
    
  ),
  document.body
);