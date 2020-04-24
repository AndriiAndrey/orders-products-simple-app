const io = require('socket.io')()

let count = 0

io.on('connection', (client) => {
  client.on('subscribeToCount', () => {
    console.log('client is subscribing to counter')
    count++
    setInterval(() => {
      client.emit('count', count)
    }, 1000)
  })
  client.on('disconnect', () => {
    console.log('client disconected')
    client.emit('count', count--)
  })
})

const port = 8000
io.listen(port)
console.log('listening on port ', port)
