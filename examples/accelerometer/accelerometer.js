"use strict";

var Cylon = require("cylon");

Cylon.api({
  host: "0.0.0.0",
  port: "8080",
  ssl: false
});

Cylon.robot({
  name: "pebble",

  connections: {
    pebble: { adaptor: "pebble" }
  },

  devices: {
    pebble: { driver: "pebble" }
  },

  work: function(my) {
    my.pebble.on("accel", function(data) {
      console.log(data);
    });
  }
}).start();
