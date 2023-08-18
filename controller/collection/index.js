const service=require('./service')
const xlsx=require('xlsx')

const user=async(req,res)=>
{
    try{
        if(!req.file){
            res.json({code:404,message:"please upload xlsx file...!"})
            return console.log('kindly select and upload xlsx file');
        }
    let path="./files/"+req.file.filename
            const details= xlsx.readFile(path)
            const sheetname=details.SheetNames[0];
            const sheet = details.Sheets[sheetname];
            const data = xlsx.utils.sheet_to_json(sheet); 

            
            for (const item of data)
            {
                const servicesave =await service.savedetails(item);
                const info = await service.saveuser(item);
            }
                res.send({status:200,success:true ,message:"uploaded succesfully"})
        }catch(error){
            res.send({message:error,status:"not uploaded"})
        }
        
} 
module.exports=
{
user   
} 
