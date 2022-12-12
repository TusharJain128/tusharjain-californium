const express = require('express');
const router = express.Router();

router.get('/sol1', function(req, res){
    const arr= [1,2,3,5,6,7]
    let n= arr[arr.length-1]
    let totalSum= n*(n+1)/2
    let arrSum=0
    for(let i=0; i<arr.length; i++){
        arrSum+=arr[i]
    }
    const missingNumber=totalSum-arrSum
    res.send({data:missingNumber})
});

router.get('/sol2', function(req,res){
    const arr= [33, 34, 35, 37, 38]
    let n= arr.length+1
    let totalSum= n*(arr[0]+arr[arr.length-1])/2
    let arrSum= 0
    for(let i=0; i<arr.length; i++){
        arrSum += arr[i]
    }
    const missingNumber= totalSum- arrSum
    res.send({data: missingNumber})
});


module.exports = router;