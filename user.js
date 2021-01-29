const mongoose = require("mongoose");

const{Schema} = mongoose

const userSchema = new Schema({
    
    rule: {
         field: {
             type: String,
             required: true
         },
         condition: {
            type: String,
            required: true
        },
         condition_value: {
            type: Number,
            required: true
        }
      },
      data: {
        name: {
            type: String,
            required: true
        },
        crew: {
            type: String,
            required: true
        },
        age:{
            type: String,
            required: true
        },
        position: {
            type: String,
            required: true
        },
        missions: {
          count: {
            type: Number,
            required: true
        },
          successful: {
            type: Number,
            required: true
        },
          failed: {
            type: Number,
            required: true
        },
        }
    }
        
})

module.exports = mongoose.model('User', userSchema)