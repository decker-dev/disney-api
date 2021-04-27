import app from './app';
import config from '../config'
app.listen(config.api.port)
console.log('server on',config.api.port)