const mongoose=require ('mongoose')
const schema=new mongoose.Schema(
    {
        Name:{
            type : String
        },
        Age:{
            type : Number
        },
        Gender:{
            type : String
        },
        City:{
            type : String
        }
    }
)
const collect=new mongoose.model('user',schema)
//save user
const savedetails=async(data)=>
{

      const details=new collect(data)
      const save=await details.save()
      return save
}

//details schema
const detailschema=new mongoose.Schema(
    {
        Mobile:{
            type : Number
        },
        Address:{
            type : String
        },
        Email:{
            type : String
        }
    }
)
const collection=new mongoose.model('userdetails',detailschema)
//save userdetails
const saveuser=async(data)=>
{

      const details=new collection(data)
      const savedata=await details.save()
      return savedata
}
module.exports=
{
    savedetails,
    saveuser
}