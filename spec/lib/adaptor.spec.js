"use strict";

var Adaptor = lib("adaptor"),
    Commands = lib("commands");

describe("Adaptor", function() {
  var adaptor = new Adaptor();

  describe("constructor", function() {
    it("sets @pebble and @connector to null", function() {
      expect(adaptor.pebble).to.be.eql(null);
      expect(adaptor.connector).to.be.eql(null);
    });
  });

  describe("#commands", function() {
    it("exposes an array of Pebble commands", function() {
      expect(adaptor.commands).to.be.eql(Commands);
    });
  });
});
