"use strict";

var module = source("cylon-pebble");

var Adaptor = source('adaptor'),
    Driver = source('driver');

describe("cylon-pebble", function() {
  describe("#register", function() {
    var bot, adaptor, driver;

    beforeEach(function() {
      bot = {}
      adaptor = bot.registerAdaptor = spy();
      driver = bot.registerDriver = spy();

      module.register(bot);
    });

    it("registers the 'pebble' adaptor with the robot", function() {
      expect(adaptor).to.be.calledWith('cylon-pebble', 'pebble');
    });

    it("registers the 'pebble' driver with the robot", function() {
      expect(driver).to.be.calledWith('cylon-pebble', 'pebble');
    });
  });

  describe("#adaptor", function() {
    it("returns a new instance of the Adaptor class", function() {
      expect(module.adaptor()).to.be.an.instanceOf(Adaptor);
    });
  });

  describe("#driver", function() {
    it("returns a new instance of the Driver class", function() {
      expect(module.driver({ device: {} })).to.be.an.instanceOf(Driver);
    });
  });
});
