var express = require('express')
var app = express()


app.use(express.static(__dirname + '/dist/spa'))

// app.get('/', function(req, res) {
//     res.send('Hello World')
// })

app.listen(3000)