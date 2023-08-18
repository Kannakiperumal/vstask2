const mongoose=require('mongoose')
const productschema=new mongoose.Schema(
    {
        Productid:{
            type : String,
            required : true
        },
        Name:{
            type : String,
            required : true
        },
        Category :{
            type : String,
            required : true
        },
        Price :{
            type :Number,
            required : true
        },
        Quantity :{
            type :Number,
            required : true
        },
        Brand: {
            type : String
        }
    }
)
const collect=mongoose.model('Product',productschema)
//save product
const saveproduct=async(data)=>
{

      const product=new collect(data)
      const productdetails=await product.save()
      return productdetails
}
//find all
const getproducts= async()=>
{
    const getdata=await collect.find()
    return getdata
}
//findone
const show =async(info)=>
{
    const showproduct=await collect.findOne({$or : [{Productid : info.Productid},{Name : info.Name},{Category : info.Category}]})
    return showproduct
}
//update
const updatedetails=async(info)=>
{
    const update=await collect.updateOne({Name : info.Name},{Quantity : info.Quantity})
    return update
}
const updatemany=async(data)=>
{
    const details=await collect.updateMany({Name : data.Name},
         {$set :{
            Price : data.Price,
            Quantity : data.Quantity
            
        }})
    return details
}
const updatealldetails=async(data)=>
{
    const uptall=await collect.findOneAndUpdate({Name : data.Name},
         {$set :{
            Productid : data.Productid,
            Name : data.Name,
            Category : data.Category,
            Price : data.Price,
            Quantity : data.Quantity,
            Brand : data.Brand
            
            
        }},{multi : true}
        )
    return uptall
}
module.exports=
{
    collect,
    saveproduct,
    getproducts,
    show,
    updatedetails,
    updatemany,
    updatealldetails
}