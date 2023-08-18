const db=require('./service')
//register
const registration=async(req,res)=>
{
    var date= new Date()
    userid = date.toISOString().slice(0,10).replace("-","").replace("-","");
    req.body.createdon = userid;
    const count = await db.collect.countDocuments ({
        'createdon' : userid
    })
    req.body.Customerid = userid + (count+1)


    const registerdetails= await db.savecustomer(req.body)

    if(registerdetails)
    {
        res.send('Register Successfully')
    }
    else
    {
        res.send('Email already found')
    }
}
//findone
const getuser=async(req,res)=>
{
    const display=await db.getdetails(req.body)
    res.send(display)
}
//find 
const showdata=async(req,res)=>
{
    const fetchdetails=await db.showdetails()
    res.send(fetchdetails)
}
//update
const setdata=async(req,res)=>
{
    const set=await db.updatedetails(req.body)
    res.send(set)
}
const setmany=async(req,res)=>
{
    const many=await db.updatemany(req.body)
    res.send(many)
}
const findone=async(req,res)=>
{
    const find=await db.updateall(req.body)
    res.send(find)
}
//login
const logincheck=async(req,res)=>
{
    const login2=await db.login(req.body)
    if(login2.length == 0)
    {
        res.send('Email id not found')
    }
    else if(req.body.Password==login2[0].Password)
    {
        res.send('Login successfull')
    }
    else{
        res.send('Incorrect password')
    }
}
module.exports=
{
    registration,
    getuser,
    showdata,
    setdata,
    setmany,
    findone,
    logincheck

}