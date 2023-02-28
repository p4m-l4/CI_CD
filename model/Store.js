const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({

num1:{
    type: String,
    trim: true
},
num2:{
    type: String,
    trim: true
},
operator:{
    type:String,
    trim: true
}

});


module.exports = mongoose.model('Storing', dataSchema);