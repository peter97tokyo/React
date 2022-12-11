const express = require('express');
const url = require('url');
const router = express.Router();
// 실무110 : node 서버 api를 get으로 json 데이터 호출하기
// 실무110-1  react에서 json 데이터를 받아 사용하기 위해서는 node 서버에서 json 형태로 데이터를 response에 담아 보내줘야함
 

/* GET USERS LISTING */
router.get('/',(req, res, next)=>{    
    res.send({'message':'node get success'});
    // response가 보낸다. 
});
// 실무110-2 node 서버(localhost:5000)에서 user 경로를 get 방식으로 호출하면, key가 message이고 value가 node get success인 json 데이터를 response로 전송한다.

module.exports = router;