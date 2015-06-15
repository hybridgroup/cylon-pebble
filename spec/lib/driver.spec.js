"use strict";

var Driver = lib("driver");

describe("Driver", function() {
  var driver;

  beforeEach(function() {
    driver = new Driver({
      connection: {}
    });
  });

  describe("constructor", function() {
    it("sets @messages to an empty array", function() {
      expect(driver.messages).to.be.eql([]);
    });
  });

  describe("#start", function() {
    beforeEach(function() {
      driver.defineDriverEvent = spy();
    });

    it("sets up driver events", function() {
      driver.start(function() {});

      expect(driver.defineDriverEvent).to.be.calledWith("button");
      expect(driver.defineDriverEvent).to.be.calledWith("accel");
      expect(driver.defineDriverEvent).to.be.calledWith("tap");
    });
  });

  describe("#commands", function() {
    it("is an object containing Pebble commands", function() {
      for (var c in driver.commands) {
        expect(driver.commands[c]).to.be.a("function");
      }
    });
  });

  describe("#send_notification", function() {
    beforeEach(function() {
      driver.messages = ["message"];
    });

    it("pushes a message onto the @messages", function() {
      driver.send_notification("new_message");
      expect(driver.messages).to.be.eql(["message", "new_message"]);
    });
  });

  describe("#message_queue", function() {
    beforeEach(function() {
      driver.messages = ["message"];
    });

    it("returns the message queue", function() {
      expect(driver.message_queue()).to.be.eql(["message"]);
    });
  });

  describe("#pending_message", function() {
    context("if there are messages in the queue", function() {
      beforeEach(function() {
        driver.messages = ["alpha", "bravo"];
      });

      it("returns the message at the front of the queue", function() {
        expect(driver.pending_message()).to.be.eql("alpha");
      });
    });

    context("if the queue is empty", function() {
      it("returns null", function() {
        expect(driver.pending_message()).to.be.eql(null);
      });
    });
  });

  describe("#publish_event", function() {
    beforeEach(function() {
      driver.connection = { emit: spy() };
    });

    it("emits an event with the supplied name and data", function() {
      driver.publish_event("hello", "world");
      expect(driver.connection.emit).to.be.calledWith("hello", "world");
    });
  });
});
