"use strict";

var module = source("cylon-pebble");

var Adaptor = source('adaptor'),
    Driver = source('driver');

describe("cylon-pebble", function() {
  describe("#adaptors", function() {
    it('is an array of supplied adaptors', function() {
      expect(module.adaptors).to.be.eql(['pebble']);
    });
  });

  describe("#drivers", function() {
    it('is an array of supplied drivers', function() {
      expect(module.drivers).to.be.eql(['pebble']);
    });
  });

  describe("#adaptor", function() {
    it("returns a new instance of the Adaptor class", function() {
      expect(module.adaptor()).to.be.an.instanceOf(Adaptor);
    });
  });

  describe("#driver", function() {
    it("returns a new instance of the Driver class", function() {
      expect(module.driver({ device: { connection: {} } })).to.be.an.instanceOf(Driver);
    });
  });
});
