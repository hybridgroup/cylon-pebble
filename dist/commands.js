/*
 * Cylonjs Pebble commands
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/


(function() {
  var namespace;

  namespace = require('node-namespace');

  namespace("Cylon.Pebble", function() {
    return this.Commands = ['message'];
  });

}).call(this);
