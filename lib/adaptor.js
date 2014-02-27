/*
 * Cylon.js Pebble adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

require('./cylon-pebble');
require('./commands');

var namespace = require('node-namespace');

namespace("Cylon.Adaptors", function() {
  this.Pebble = (function(klass) {
    subclass(Pebble, klass);

    function Pebble(opts) {
      if (opts == null) {
        opts = {};
      }
      Pebble.__super__.constructor.apply(this, arguments);
      this.pebble = null;
      this.connector = null;
    }

    Pebble.prototype.commands = function() {
      return Cylon.Pebble.Commands;
    };

    return Pebble;

  })(Cylon.Adaptor);
});
