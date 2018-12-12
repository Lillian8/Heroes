const express = require('express')
const path = require('path');
const app = express()


app.use(express.static(__dirname + '/dist/spa'))
app.get('*', function(req, res) {
    // res.sendfile('./dist/spa/index.html')
    res.sendFile(path.join(__dirname + '/dist/spa/index.html'));
})

// app.get('/*', function(req,res) {

//     res.sendFile(path.join(__dirname+'/dist/<name-of-app>/index.html'));
//     });

app.listen(3000, () => {
    console.log("corriendo en el puerto 3000");
})