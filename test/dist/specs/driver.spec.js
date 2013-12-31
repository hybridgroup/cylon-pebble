(function() {
  'use strict';
  source('driver');

  describe('Cylon.Drivers.Pebble', function() {
    var pebble;
    pebble = new Cylon.Drivers.Pebble({
      device: {}
    });
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
      return expect(pebble.messages).to.be.an('array');
    });
    it("has a message_queue function to access the messages", function() {
      pebble.messages.push("test");
      return expect(pebble.message_queue()).to.be.eql(["test"]);
    });
    return it("has a last_message function to access the latest message in the queue", function() {
      pebble.messages.push("robots");
      return expect(pebble.last_message()).to.be.eql("robots");
    });
  });

}).call(this);
