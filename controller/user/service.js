const mongoose=require('mongoose')
const userschema=new mongoose.Schema(
    {
        Customerid:
        {
            type : String,
            required :true
        },
        createdon:
        {
            type : String
        },
        Firstname:{
            type : String,
            required : true
        },
        Lastname :{
            type : String,
            required : true
        },
        Email :{
            type :String,
            required : true,
            unique : true
        },
        Password :{
            type :String,
            required : true
        },
        Mobileno: {
            type : Number
        },
        Address:{
            type : String
        }
        
    }
)
const collect=mongoose.model('customer',userschema)
//save data
const savecustomer=async(data)=>
{
        const customer=new collect(data)
        const savedetails=await customer.save()
       return savedetails
}
//find data
const getdetails= async(data)=>
{
    const getdata=await collect.findOne({$or : [{Customerid : data.Customerid},{Email :data.Email},{Mobileno: data.Mobileno}]})
    return getdata
}
const showdetails=async(info)=>
{
    const show=await collect.find()
    return show
}
//updata data
const updatedetails=async(info)=>
{
    const update=await collect.updateOne({Email : info.Email},{Password : info.Password})
    return update
}
const updatemany=async(data)=>
{
    const details=await collect.updateMany({Email : data.Email},
         {$set :{
            Firstname : data.Firstname,
            Mobileno : data.Mobileno,
            Password : data.Password
            
        }})
    return details
}
const updateall=async(data)=>
{
    const uptall=await collect.findOneAndUpdate({Email : data.Email},
         {$set :{
            Customerid : data.Customerid,
            Firstname : data.Firstname,
            Lastname : data.Lastname,
            Password : data.Password,
            Mobileno : data.Mobileno,
            Address : data.Address
            
        }},{multi : true}
        )
    return uptall
}
//login
const login = async(data)=>
{
    const userlogin = await collect.aggregate([{$match : {Email:data.Email}}])
    return userlogin
} 
module.exports=
{
    collect,
    savecustomer,
    getdetails,
    showdetails,
    updatedetails,
    updatemany,
    updateall,
    login
}