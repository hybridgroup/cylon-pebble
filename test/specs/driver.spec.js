"use strict";

source('driver');

describe('Cylon.Drivers.Pebble', function() {
  var pebble = new Cylon.Drivers.Pebble({ device: {} });

  it("exposes a list of commands in the 'commands' method", function() {
    var command, _i, _len, _ref, _results;
    expect(pebble.commands()).to.be.an('array');
    _ref = pebble.commands();
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      command = _ref[_i];
      _results.push(expect(command).to.be.a('string'));
    }
    return _results;
  });

  it("stores an array of messages in the @messages variable", function() {
    expect(pebble.messages).to.be.an('array');
  });

  it("adds message to queue qhen sending notification", function() {
    pebble.send_notification("robots");

    expect(pebble.pending_message()).to.be.eql("robots");
  });

  it("returns pending messages and remove from queue", function() {
    pebble.send_notification("robots");

    expect(pebble.pending_message()).to.be.eql("robots");
    expect(pebble.pending_message()).to.be.eql(null);
  });
});

