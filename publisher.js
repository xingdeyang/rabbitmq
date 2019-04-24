exports.init = function (conn) {
    conn.then(conn => {
        return conn.createChannel()
    }).then(channel => {
        return channel.assertQueue('test_channel').then(data => {
            return channel.sendToQueue('test_channel', Buffer.from(JSON.stringify({
                name: 'dy_xing',
                content: 'this is messgage content test',
                time: Date.now()
            })))
        })
    }).catch(err => {
        console.log(err)
    })
};