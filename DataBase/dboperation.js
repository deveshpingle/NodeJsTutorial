var config=require('./dbconfig');
const sql=require('mssql');

async function getDataTable(){
    try{
        let pool=await sql.connect(config);
        let data=await pool.request().query('SELECT ID,UserName FROM UserDetail');
        return data.recordsets;
    }
    catch(ex){
        console.log(ex);
    }
}

module.exports={
    getDataTable:getDataTable
}