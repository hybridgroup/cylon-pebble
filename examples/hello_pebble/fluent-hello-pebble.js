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
    bot.pebble.send_notification("Hello Pebble!");

    bot.pebble.on("button", function(data) {
      console.log("Button pushed:", data);
    });

    bot.pebble.on("tap", function(data) {
      console.log("Tap event detected:", data);
    });
  });

Cylon.start();
