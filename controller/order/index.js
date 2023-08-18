const db=require('./service')
const placeoreder= async(req,res)=>
{
    var date= new Date()
    userid = date.toISOString().slice(0,10).replace("-","").replace("-","");
    req.body.createdon = userid;

    const order=await db.addorder(req.body)
    res.send("Order successfully")
}
module.exports=
{
    placeoreder
}