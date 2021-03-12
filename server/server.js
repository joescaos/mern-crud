import mongoose from 'mongoose'
const { MONGOURI } = require('./keys')
import config from './../config/config'
import app from './express'

app.listen(config.port, (err) => {
    if(err){
        console.log(err)
    }
    console.info('Server started on port %s', config.port)
})

mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
  
  mongoose.connection.on('connected', () => {
    console.log('Conectado a Mongo')
  })
  
  mongoose.connection.on('error', (err) => {
    console.log('error ', err)
  })