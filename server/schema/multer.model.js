const mongoose = require("mongoose")
const ImageSchem = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    image:{
        data:Buffer,
        contentType:String
    }
})


const ImageSchema = mongoose.model('imageModel', ImageSchem);

module.exports = ImageSchema;