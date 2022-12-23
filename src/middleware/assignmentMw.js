const assignmentMiddleware= function(req,res,next){
    console.log("I am middleware")
    var today= new Date()
    var dateTime=  today.getDate() + " "
    + (today.getMonth()+1)  + " " 
    + today.getFullYear() + "  "  
    + today.getHours() + ":"  
    + today.getMinutes() + ":" 
    + today.getSeconds();
    let ip= req.ip
    let url= req.originalUrl
    console.log(`${dateTime} ${ip} ${url}`)
    next()
}

module.exports.assignmentMiddleware= assignmentMiddleware