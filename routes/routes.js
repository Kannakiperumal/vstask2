const express=require('express')
const router=express.Router()
const functions = require('../controller/user/index')
const functions2= require('../controller/product/index')
const orderfunctions = require('../controller/order/index')
const filefunction= require('../controller/fileupload/index')
const excelfunctions=require('../controller/collection/index')
const multer=require('../middleware/multer')
let routes=(app)=>
{
 //user
    router.post("/register",functions.registration)
    router.post("/getdata",functions.getuser)
    router.post('/show',functions.showdata)
    router.post("/update",functions.setdata)
    router.post("/updatemany",functions.setmany)
    router.put("/updateall",functions.findone)
    router.post("/login",functions.logincheck)
 //product
    router.post("/saveproduct",functions2.product)
    router.post("/displayall",functions2.productdisplay)
    router.post("/fetch",functions2.fetchone)
    router.post("/quantity",functions2.updatequantity)
    router.post("/updateproduct",functions2.setprice)
    router.put("/product",functions2.findandupdate)
    //order 
    router.post("/placeoreder",orderfunctions.placeoreder)
   
   //fileupload
   router.post('/uploadfile',multer.single("upload"),filefunction.exceluser);
   //excelfunction
   router.post('/upload',multer.single("upload"),excelfunctions.user)

   app.use("/api",router)
} 
module.exports=
routes