const express = require('express');
const router = express.Router();

let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]

 router.post('/person', function(req,res){
    let voteAge= req.query.votingAge
    for(let i=0; i<persons.length; i++){
        if(persons[i].age>=voteAge){
            persons[i].votingStatus= true
        }
    }
    let result= persons.filter(ele=> ele.votingStatus)
    res.send({data: result})
 })


module.exports = router;