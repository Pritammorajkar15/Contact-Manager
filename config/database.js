const mongoose=require('mongoose')

const configDB=()=>
{
    mongoose.connect('mongodb://localhost:27017/contacts-app',{useNewUrlParser:true,useUnifiedTopology:true})

    .then(()=>
    {
        console.log('connected to db')
    })
    .catch((err)=>
    {
        console.log(err)
    })
}
module.exports=configDB