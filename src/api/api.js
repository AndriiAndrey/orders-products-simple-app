import openSocket from 'socket.io-client'
const socket = openSocket('http://localhost:8000')
export const subscribeToCount = (cb) => {
  socket.on('count', count => cb(null, count))
}
