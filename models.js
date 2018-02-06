var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    visitor: String,
    text: String
});
var boxSchema = new Schema({
    name: String,
    country: String,
    icon: String,
    feelslike_c: String,
    text: String,
    comments: [commentSchema]
});

var Box = mongoose.model('Box', boxSchema);
module.exports = Box;