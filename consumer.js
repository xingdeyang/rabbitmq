exports.init = function (conn) {
    console.log('consumer is ready...')
    conn.then(function(rabbitmqCon) {
        return rabbitmqCon.createChannel()
    }).then(function(channel) {
        return channel.assertQueue('test_channel').then(function(ok) {
            return channel.consume('test_channel', function(msg) {
                if (msg !== null) {
                    console.log('当前消费时间: ' + Date.now())
                    console.log(msg.content.toString());
                    channel.ack(msg);
                }
            });
        });
    }).catch(console.warn);
};