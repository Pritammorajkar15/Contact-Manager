const express =require('express')
const cors=require('cors')
 const multer=require('multer')
 const bodyParser =require('body-parser')
 const path=require('path')
 const mongodb=require('mongodb')
 const fs=require('fs')
 
//  const uploads=require({dest:'uploads/'})
// const ejs=require('ejs')
// const path=require('path')
const configDB=require('./config/database')
const port=3025
const router=require('./config/routes')
const app=express()

app.use(express.json())
app.use(cors())
configDB()
app.use(bodyParser.urlencoded({extended:true}))
var storage=multer.diskStorage({
    destination:function (req,res,cb){
        cb(null,'uploads')
        
    },
    filename:function(req,res,cb){
        cb(null,file.fieldname + '-' +Date.now() + path.extname(file.originalname))
    }
})
var upload=multer({
    storage:storage
})

app.get('/',(req,res)=>
{
    console.log('welcome to the contacts app')
})


// app.get('/image',(req,res)=>{
//     res.sendFile(_dirname + '././')
// })

//ejs
// app.set('view engine','ejs')
// //public folder
// app.use(express.static('./public'))
// app.get('/image',(req,res)=>res.render('index'))

app.use('/',router)

// app.use(app.router)
// routes.initialize(app)

app.listen(port,()=>
{
    console.log('listning on port',port)
})