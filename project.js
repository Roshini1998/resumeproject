var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/group');

var projectSchema = mongoose.Schema({
  Name: {type:String},
  Email: {type:String},
 Phno:Number,
 Comments:{type:String}  
});


var project = mongoose.model('project', projectSchema,'project');

module.exports=project;
