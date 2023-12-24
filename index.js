const express=require("express")
const path=require("path")
const app=express()
const port=2020
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname,"static")))
app.use('/',require(path.join(__dirname,'Route/Blog.js')))

app.listen(port,()=>{
    console.log(`Website running on port http://localhost:${port}`)
})