const express = require("express");
const bodyParser = require("body-parser");
const route = require("./route/route");
const app = express();
const { default: mongoose } = require("mongoose");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://devendra_29:I28Cx63EjuXQjHtQ@devendra.ytysqub.mongodb.net/blog", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/',route)

app.listen(process.env.PORT || 3000, function(){
    console.log('Express app running on port '+ (process.env.PORT || 3000))
})


