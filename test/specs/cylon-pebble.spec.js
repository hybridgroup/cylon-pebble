"use strict";

var pebble = source("cylon-pebble");

describe("Cylon.Pebble", function() {
  it("can register the adaptor and driver", function() {
    pebble.register.should.be.a('function');
  });

  it("can create adaptor", function() {
    pebble.adaptor.should.be.a('function');
    expect(pebble.adaptor()).to.be.a('object');
  });

  it("can create driver", function() {
    pebble.driver.should.be.a('function');
    expect(pebble.driver({ device: {} })).to.be.a('object');
  });
});

