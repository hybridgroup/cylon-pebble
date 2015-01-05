/* jshint expr:true */
"use strict";

var Commands = source("commands");

describe("Commands", function() {
  it("is an array of Pebble commands", function() {
    expect(Commands).to.be.an("array");

    Commands.forEach(function(command) {
      expect(command).to.be.a("string");
    });
  });
});
