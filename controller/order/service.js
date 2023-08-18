const mongoose=require('mongoose')
const orderschema=mongoose.Schema({
    Customerid:
    {
        type : String,
        required : true
    },
    Productid:
    {
        type : String,
        required : true
    },
    Quantity:
    {
        type : String
    },
    Orderedon:
    {
        type : String
    }
})
const collect=mongoose.model('order',orderschema,'order')
const addorder= async(data)=>
{
    const order = new collect()
    const orderdetails= await order.save();
    return orderdetails
}
module.exports=
{
    collect,
   addorder
}