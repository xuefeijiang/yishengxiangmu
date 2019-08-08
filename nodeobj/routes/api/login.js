let express = require('express');
let router = express.Router();
let mgdb = require('../../utils/mgdb');//引入mongo
let bcrypt = require('bcrypt');

router.post('/', (req, res, next) => {
  let { username, password } = req.body;
  // username/password 是必传参数 不传不兜库
  
  if (!username || !password) {
    res.send({ err: 1, msg: '用户名和密码为必传参数' })
    return;
  }

 
  // 兜库校验username/password 
  mgdb({
    collectionName: 'user'
  }, (collection, client) => {
    collection.find({
      username
    }, {
        projection: { username: 0 }
      }).toArray((err, result) => {
        //  console.log(999,err)
        if (!err) {
          // console.log(result.length,8888);
          if (result.length > 0) {
            // console.log(pass, 999)
            let userdata = result[0];
            let pass = bcrypt.compareSync(password, userdata.password);//解密

            if (pass) {
              //通过  种cookie 留session 返回用户数据
              req.session['1905_user_session'] = userdata._id
              res.send({ err: 0, msg: '登录成功', data: userdata })
            } else {
              res.send({ err: 1, msg: '用户名或者密码有误' })
            }
          }else{
            res.send({err:1,msg:'用户名不存在'})
          }

          client.close()
        } else {
          res.send({ err: 1, msg: 'user集合操作失败' })
          client.close()
        }
      })
  })
});


module.exports = router;