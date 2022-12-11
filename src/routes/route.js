const express = require('express');
const router = express.Router();
const problem4 = require('../films')

const movies=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
router.get('/movies', function (req, res) {
    res.send(movies)
});

router.get('/movies/:indexNumber', function (req, res){
    let requestParams = req.params
    console.log("This is the request "+ JSON.stringify(requestParams))
    let index = requestParams.indexNumber
    if(index>=movies.length){
        res.send('Please use valid index')
    }
    res.send(movies[index])

});

router.get('/films', function(req, res){
    res.send(problem4.films)
})

router.get('/films/:filmId', function( req, res){
    let requestParams= req.params
    let id=requestParams.filmId
    if(films.length<id){
        res.send('No movie exists with this id')
    }
    else{
        for(let i=0; i<films.length ; i++){
            if(films[i].id==id){
            res.send(films[i])
}}}})

module.exports = router;