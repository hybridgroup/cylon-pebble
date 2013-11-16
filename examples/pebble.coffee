Cylon = require('cylon')

Cylon.api host: '0.0.0.0', port: '8080'

robot = 
  connection:
    name: 'pebble', adaptor: 'pebble'

  device:
    name: 'pebble', driver: 'pebble'

  work: (self) ->
    c = 0
    every 1.second(), -> 
      c++
      self.pebble.message_queue().push(c)
      console.log(self.pebble.last_message())

bot = Object.create(robot)
bot.name = 'pebble'
Cylon.robot Object.create(bot)
Cylon.start()
