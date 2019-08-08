let express= require('express');
let router= express.Router();
let mgdb= require('../../utils/mgdb');

router.get('/',(req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin)
    mgdb({
        url:'mongodb://127.0.0.1:27017',
        dbName:'1905',
        collectionName:'banner'
    },(collection)=>{
       collection.find({}).toArray((err,result)=>{
           if(!err){
            res.send({err:0,msg:'成功',data:result})
           }
       })
    })
});
router.get('/:_id',()=>{
    let _id=req.params._id;
    mgdb({
        url:'mongodb://127.0.0.1:27017',
        dbName:'1905',
        collectionName:'banner'
    },(collection,client,ObjectID)=>{
       collection.find({
           _id:ObjectID(_id)
       }).toArray((err,result)=>{
           if(!err){
            res.send({err:1,msg:'查无数据',data:result[0]})
           }
       })
    })
})
module.exports=router;