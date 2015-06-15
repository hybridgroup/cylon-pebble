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
    my.pebble.send_notification("Hello Pebble!");

    my.pebble.on("button", function(data) {
      console.log("Button pushed: " + data);
    });

    my.pebble.on("tap", function() {
      console.log("Tap event detected");
    });
  }
}).start();
