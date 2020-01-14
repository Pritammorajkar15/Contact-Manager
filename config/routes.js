const express=require('express')
const router=express.Router()
const usersController=require('../app/controllers/userscontroller')
const contactscontroller=require('../app/controllers/contactscontroller')
 const {authenticateUser} =require('../app/middleware/authentication')

router.get('/contacts',authenticateUser,
contactscontroller.list)


router.post('/contacts',authenticateUser,
contactscontroller.create)

router.get('/contacts/:id',authenticateUser,
contactscontroller.show)

router.put('/contacts/:id',authenticateUser,
contactscontroller.update)

router.delete('/contacts/:id',authenticateUser,
contactscontroller.delete)

// router.post('/contacts/image',authenticateuser,
// contactscontroller.upload.single('productImage'))

// router.get('/contacts?pageNumber=2',authenticateUser,
// contactscontroller.paginate)

router.post('/users/register',
usersController.register)

router.post('/users/login',
usersController.login)

router.get('/users/account',authenticateUser,
usersController.account)

router.delete('/users/logout',authenticateUser,
usersController.logout)

module.exports=router