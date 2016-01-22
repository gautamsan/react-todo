// routes.js
var React = require('react');
var Router = require('react-router');
var Main = require('../components/Main');
//
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;
//var main = require()

module.exports = (
  <Route path="/" component={Main}>
    <IndexRoute component={Main} />
  </Route>
);
