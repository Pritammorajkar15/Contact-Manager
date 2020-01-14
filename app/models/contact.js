const mongoose=require('mongoose')
const Schema=mongoose.Schema
const validator=require('validator')
const contactsSchema=new Schema({
    name:{
type:String,
required:true,

    },
    email:{
        type:String,
        required:true,
        validate:{
            validator:function(value){
               return validator.isEmail(value)
            },
            message:
                function() {
                    return 'invalid email format'
                }
            
        }

    },

    number:{
        type:String,
        maxlength:10,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    
    }
})

const Contact= mongoose.model('Contact',contactsSchema)
module.exports={
    Contact
}

