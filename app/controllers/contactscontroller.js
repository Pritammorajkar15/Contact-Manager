const {Contact}=require('../models/contact')
// const multer=require('multer')
// const upload=require({dest:'uploads/'})
module.exports.list=(req,res)=>
{ //const number=parseInt(req.query.pagenumber)
    // Contact.find({user:req.user._id}).skip(number).limit(number)
    console.log(req.user._id,'list')
    Contact.find({user:req.user._id})
    // .then((contacts)=>{
       
    //     res.json(contacts)
    // })
    .then((contacts)=>{
        res.json(contacts)
        console.log(contacts,"aaaa")
    })

    .catch((err)=>
    {
        res.json(err)
    })
}

module.exports.create=(req,res)=>
{const body=req.body
    const contact=new Contact(body)
    contact.user=req.user._id
    console.log(req.user._id,'create')
    contact.save()
    .then((contact)=>{
        console.log(contact)
            res.json(contact)
        
        
    })
    .catch((err)=>
    {
        res.json(err)
    })



    // router.get('/posts',authenticate, async (req,res) => {
    //     //const _ispublished = req.query.published;
    //     const match = {}
    
    //     if(req.query.published){
    //         match.published = req.query.published === 'true'
    //     }
    //     try {
    //         await req.user.populate({
    //             path:'posts',
    //             match,
    //             options:{
    //                 limit: parseInt(req.query.limit),
    //                 skip: parseInt(req.query.skip)
    //             }
    //         }).execPopulate()
    //         res.send(req.user.posts)
    //     } catch (error) {
    //         res.status(500).send()
    //     }
    // })
}
// module.exports.paginate=(req,res)=>{
//     // const body=req.user
//     // const user=new user(body)
//     const {user,query}=req
//     Contact.find({user:user._id}).skip(5*(query.pageNumber-1)).limit(5)
//     .then((contacts)=>{
//         res.send(contacts)
//     })
//     .catch((err)=>
//     {
//         res.send(err)
//     })

// //    req.user.populate({
// //        path:'contacts',
// //       
// //        options:{
// //            limit:parseInt(req.query.limit),
// //            skip:parseInt(req.query.skip)
// //        }
// //    }).execPopulate()
// //    res.send(req.user.contacts)

// }

module.exports.show=(req,res)=>
{
    const id=req.params.id
    Contact.findOne({_id:id,user:req.user._id})
    .then((contact)=>
    {
        console.log(123,contact)
        res.json(contact)
    })
    .catch((err)=>
    {
res.json(err)
    })
}

module.exports.update=(req,res)=>
{
    const body=req.body
    const id=req.params.id
    Contact.findByIdAndUpdate({_id:id,user:req.user._id},{$set:body},{new:true,runValidators:true})

    .then((contact)=>{
        if(contact)
        {
            res.json(contact)
        }
        else{
            res.json({})
        }
    })
    .catch((err)=>{
        res.json(err)
    })
    
    
}
// module.exports.upload=(req,res)=>{
//     console.log(req.file)
//     const body=req.body
//     const contact=new Contact(body)
//     contact.user=req.user._id
//     contact.save()
//     .then((contact)=>{
//         console.log(contact)
//             res.json(contact)
        
        
//     })
//     .catch((err)=>
//     {
//         res.json(err)
//     })
// }
module.exports.delete=(req,res)=>{
    const id=req.params.id
    Contact.findByIdAndDelete({_id:id,user:req.user._id})
    .then((contact)=>
    {
        if(contact){
            res.json(contact)
        }
        else{
            res.json({})
        }
    })
    .catch((err)=>
    {
        res.json(contact)
    })
}


