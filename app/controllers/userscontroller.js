const express=require('express')

const {User}=require('../models/user')
//const {authenticateUser}=require('../middleware/authentication')
//const bcryptjs=require('bcryptjs')

module.exports.register=(req,res)=>
{
    const body=req.body
    const user=new User(body)
    user.save()
    .then(function(user){
        
        res.send(user)
    })
    .catch(function(err){
        res.send(err)
    })
}
module.exports.login=(req,res)=>
{
    const body=req.body
    User.findByCredentials(body.email,body.password)
    .then(function(user){
        // res.send(user)
        return user.generateToken()
    })
    .then(function(token){
        console.log(token)
        // res.setHeader('x-auth',token).send({})
        // res.json({token})
        res.json({'token':token})
        })
    .catch(function(err){
        res.send(err)
    })
}
module.exports.account=(req,res)=>{
    const {user}=req
    res.send(user)
}
module.exports.logout=(req,res)=>
{
    const {user,token}=req
    User.findByIdAndUpdate(user._id,{$pull:{tokens:{token:token}}})
    .then(()=>
    {
        res.send({notice:'succefully logged out'})
    })
    .catch((err)=>
    {
        res.send(err)
    })
}
