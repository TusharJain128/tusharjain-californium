const express = require('express');
const router = express.Router();
const _= require('lodash')
// const intro = require('./introduction')
// const employee = require('./employee')
// const _ = require('underscore');
const problem1 = require('../logger/logger');
const problem2= require('../util/helper')
const problem3= require('../validator/formatter')

router.get('/test-me', function (req, res) {
    // console.log("email from introduction module", intro.myEmail)
    // intro.myFunction('Sabiha')
    // console.log("email from employee module", employee.myEmail)

    // const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    // let result = _.first(days, 4)
    // console.log(`Result from underscore function is ${result}`)

    // Problem 1
        console.log('Problem 1')
       problem1.welcome()

    // Problem 2
        console.log('Problem 2')
       problem2.Date()
       problem2.Month()
       problem2.batchInfo()

    // Problem 3
        console.log('Problem 3')
        problem3.trim('          functionUp ')
        problem3.lower('FunCtiOn uP')
        problem3.upper('FunCtiOn uP')

    // Problem 4
        console.log('Problem 4')
        let a= _.chunk(['January','February','March','April','May','June','July','August','September','October','November','December'],3)
        console.log('Chunk function',a)
        let b= _.tail([1,3,5,7,9,11,13,15,17,19])
        console.log('tail function',b)
        let c= _.union([1,5,7,8],[1,6,5,2],[7,2,1,4],[6,3,4,2])
        console.log('Union',c)
        let d= _.fromPairs([['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']])
        console.log('fromPairs',d)
        res.send('any dummy text')
});

router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})


module.exports = router;