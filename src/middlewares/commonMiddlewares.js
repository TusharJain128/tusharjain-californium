
const middlewares= function(req,res,next){
    let data= req.body
    let key= Object.keys(data)
    let count= 0
    for(let i=0; i<key.length; i++){
        if(key[i] !== 'isFreeAppUser'){
            count= count+1
        }
      }
      if(count ==key.length){
      console.log("{error: the request is missing a mandatory header}") }
      else{
        next()
      }
}
      

module.exports.middlewares= middlewares