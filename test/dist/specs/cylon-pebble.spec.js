(function() {
  'use strict';
  var pebble;

  pebble = source("cylon-pebble");

  describe("Cylon.Pebble", function() {
    it("standard async test", function(done) {
      var bool;
      bool = false;
      bool.should.be["false"];
      setTimeout(function() {
        bool.should.be["false"];
        bool = true;
        return bool.should.be["true"];
      });
      150;
      setTimeout(function() {
        bool.should.be["true"];
        return done();
      });
      return 300;
    });
    it("standard sync test", function() {
      var data, obj;
      data = [];
      obj = {
        id: 5,
        name: 'test'
      };
      data.should.be.empty;
      data.push(obj);
      data.should.have.length(1);
      data[0].should.be.eql(obj);
      return data[0].should.be.equal(obj);
    });
    it("can register", function() {
      return pebble.register.should.be.a('function');
    });
    it("can create an adaptor", function() {
      return pebble.adaptor.should.be.a('function');
    });
    return it("can create a driver", function() {
      return pebble.driver.should.be.a('function');
    });
  });

}).call(this);
