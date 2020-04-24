import openSocket from 'socket.io-client'
const socket = openSocket('http://localhost:8000')
function subscribeToCount (cb) {
  socket.on('count', count => cb(null, count))
  socket.emit('subscribeToCount')
}
export { subscribeToCount }
