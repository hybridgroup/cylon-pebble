/* jshint expr:true */
"use strict";

var pebble = source("cylon-pebble");

var Adaptor = source("adaptor"),
    Driver = source("driver");

describe("cylon-pebble", function() {
  describe("#adaptors", function() {
    it("is an array of supplied adaptors", function() {
      expect(pebble.adaptors).to.be.eql(["pebble"]);
    });
  });

  describe("#drivers", function() {
    it("is an array of supplied drivers", function() {
      expect(pebble.drivers).to.be.eql(["pebble"]);
    });
  });

  describe("#adaptor", function() {
    it("returns a new instance of the Adaptor class", function() {
      expect(pebble.adaptor()).to.be.an.instanceOf(Adaptor);
    });
  });

  describe("#driver", function() {
    it("returns a new instance of the Driver class", function() {
      var driver = pebble.driver({ device: { connection: {} } });
      expect(driver).to.be.an.instanceOf(Driver);
    });
  });
});
