const express=require("express")
const path=require("path")
const app=express()
const port=2020
const exphbs  = require('express-handlebars');
var UD=require('./DataBase/UserDetail');
// const dboperations=require('./DataBase/dboperation');
const dboperations=require('./DataBase/Database')

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname,"static")))
app.use('/',require(path.join(__dirname,'Route/Blog.js')))


app.listen(port,()=>{
    console.log(`Website running on port http://localhost:${port}`)
    
})

// dboperations.getDataTable().then(result=>{
//     console.log(result);
// })
var ud=[];
ud=dboperations.getDataTable().then(result=>{
    return result;
});
console.log(ud);
console.log(dboperations.getDataTable().then(result=>{
    return result;
}));
console.log(dboperations.userdetail);