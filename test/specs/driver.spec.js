"use strict";

var Driver = source('driver');

describe('Cylon.Drivers.Pebble', function() {
  var pebble = new Driver({ device: {} });

  it("exposes a list of commands in the 'commands' method", function() {
    var commands = pebble.commands;

    expect(commands).to.be.a('array');

    for (var c = 0; c < commands.length; c++) {
      expect(commands[c]).to.be.a('string');
    }
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

