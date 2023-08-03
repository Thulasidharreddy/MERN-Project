// Has Schema of Users

const mongoose= require('mongoose')

const schema = mongoose.Schema(
    {
        first_name : {
            type : String,
            required : true
        },
        last_name: {
            type : String
        },
        email : {
            type : String,
            required : true
        },
        password : {
            type : String,
            required : true
        }
    }
)



module.exports=mongoose.model('Users',schema);


