
const mongoose=require('mongoose')
const bcryptjs=require('bcryptjs')
const validator=require('validator')
const jwt=require('jsonwebtoken')
const Schema=mongoose.Schema
const UserSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        minlength:5

    },
    email:{
        type:String,
        required:true,
        // unique:true,
        //custom validations
        validate:{
            validator:function(value){ //value is my email as defined in validator.js
                return validator.isEmail(value)

            },
            message:{function() {
                return 'invalid email format'
                
            }}
        }
    },
    password:{
        type:String,
        required:true,
        minlength:6,
        maxlength:128
    },
    tokens:[
        {
            token:{
                type:String
            },
            createdAt:{
                type:Date,
                default:Date.now()
            }
    }
        
    ]
})

//pre hooks
UserSchema.pre('save',function(next){
    const user=this
    if(user.isNew){
        bcryptjs.genSalt(10)
        .then(function(salt){
            bcryptjs.hash(user.password,salt)
            .then(function(encryptedPassword){
                user.password=encryptedPassword
                next()
            })
        })
    }
    else{
        next()
    }
    
})

UserSchema.statics.findByCredentials=function(email,password){
    const user=this

    return user.findOne({email})

    .then(function(user){
        console.log("user",user)
        if(!user){
            return Promise.reject('invalid email/password')
        }
        return bcryptjs.compare(password,user.password)
        .then(function(result){
            if(result)
            {return Promise.resolve(user)
            }
            else{
                return Promise.reject('invalid email/password')
            }
        }
       

        )
.catch(function(err){
    return Promise.reject(err)
})
    })
}

UserSchema.methods.generateToken=function(){
    const user=this

    const tokenData={
        _id:user._id,
        username:user.username,
        createdAt:Number(Date.now())
    }
    const token=jwt.sign(tokenData,'secret123')
user.tokens.push({token})
return user.save()
.then((user)=>
{
    return Promise.resolve(token)
})
.catch((err)=>
{
    return Promise.reject(err)
})
}

UserSchema.statics.findByToken=function(token)
{
    const User=this
    let tokenData
    try{
        tokenData=jwt.verify(token,'secret123')

    }
    catch(err){
return Promise.reject(err)
    }

    return User.findOne({
    _id:tokenData._id,
    'tokens.token':token
    })
}




const User=mongoose.model('User',UserSchema)
module.exports={
    User
}