var mongoose=require('mongoose');
var express = require('express')
var path =require('path')
var app = express()
var path=require('path')
var bodyParser = require('body-parser')

app.use(express.static(__dirname))
console.log(__dirname);
app.use('/static', express.static(path.join(__dirname, '../own resume')))

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 

var da1=require('./project.js')
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/projectlist',function(req,res){
   da1.find({},function(err,data){
       res.json(data)
})

})


app.post('/post',function(req,res){
	var v=new da1({"Name":req.body.Name,"Email":req.body.Email,"Phno":req.body.Phno,"Comments":req.body.Comments})
   v.save(function(err,data){
       res.json(data)
})

})
app.use('/routing', express.static(path.join(__dirname, 'routing')))
app.listen(3000)
