let config      = require('./config')
let amqp        = require('amqplib')
let rabbitmqCon = amqp.connect({
    protocol: 'amqp',
    hostname: config.rabbitmqHost,
    port: config.port,
    username: config.account,
    password: config.password,
    vhost: '/'

})
let publisher   = require('./publisher')
let consumer    = require('./consumer')

consumer.init(rabbitmqCon)
publisher.init(rabbitmqCon)