const mongoose=require ('mongoose')
const schema=new mongoose.Schema(
    {
        NAME:{
            type : String,
            required : true
        },
        AGE:{
            type : Number
        },
        GENDER:{
            type : String
        },
        CITY:{
            type : String
        }
    }
)
const collect=new mongoose.model('fileupload',schema)
//save 
const savedetails=async(data)=>
{

      const details=new collect(data)
      const save=await details.save()
      return save
}
module.exports=
{
    savedetails
}