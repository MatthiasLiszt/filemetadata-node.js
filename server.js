var express = require('express')
var path = require('path')
var multer = require('multer')
var app=express()
var port = process.env.PORT || 5000

var storage = multer.memoryStorage()
var limit = { fileSize: 5000000 }
var upload = multer({ storage, limit })



    app.get('/',function(req,res){
       res.sendFile(path.join(__dirname + '/index.html'))
    })

    app.listen(process.env.PORT || port, function(err) {

     if (err) {return console.log('something bad happened', err)}
      console.log('server is listening on '+port)
     })

app.post('/get-file-size', upload.single('file'), function(req,res){

    res.json(req.file.size);
});    
   


