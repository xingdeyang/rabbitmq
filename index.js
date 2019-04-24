let config      = require('./config')
let amqp        = require('amqplib')
let rabbitmqCon = amqp.connect('amqp://' + config.rabbitmqHost)
let publisher   = require('./publisher')
let consumer    = require('./consumer')

consumer.init(rabbitmqCon)
publisher.init(rabbitmqCon)