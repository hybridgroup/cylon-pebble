"use strict";

var Cylon = require("cylon");

Cylon.api({
  host: "0.0.0.0",
  port: "8080",
  ssl: false
});

Cylon
  .robot({ name: "pebble" })
  .connection("pebble", { adaptor: "pebble" })
  .device("pebble", { driver: "pebble" })

  .on("ready", function(bot) {
    bot.pebble.on("accel", function(data) {
      console.log(data);
    });
  });

Cylon.start();
