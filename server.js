const io = require('socket.io')()

let count = 0

io.on('connection', (client) => {
  console.log('client is subscribing to counter')
  io.emit('count', ++count)
  client.on('disconnect', () => {
    console.log('client disconected')
    io.emit('count', --count)
  })
})

const port = 8000
io.listen(port)
console.log('listening on port ', port)
