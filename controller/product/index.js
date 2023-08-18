const db=require('./service')
//addproduct
const product=async(req,res)=>
{
    var date= new Date()
    id = date.toISOString().slice(0,10).replace("-","").replace("-","");
    req.body.createdon = id;
    const count = await db.collect.countDocuments ({
        'createdon' : id
    })
    req.body.Productid = id + (count+1)

const addproduct=async(req,res)=>
{
    const registerdetails=await db.saveproduct(req.body)
    res.send('Product added Successfully')
    
}
}
//find all
const productdisplay=async(req,res)=>
{
    const display=await db.getproducts()
    res.send(display)
}
//findone
const fetchone=async(req,res)=>
{
    const fetch =await db.show(req.body)
    res.send(fetch)
}
const updatequantity=async(req,res)=>
{
    const set=await db.updatedetails(req.body)
    res.send(set)
}
const setprice=async(req,res)=>
{
    const many=await db.updatemany(req.body)
    res.send(many)
}
const findandupdate=async(req,res)=>
{
    const find=await db.updatealldetails(req.body)
    res.send(find)
}
module.exports=
{
    product,
    productdisplay,
    fetchone,
    updatequantity,
    setprice,
    findandupdate

}