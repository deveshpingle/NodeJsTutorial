const sql=require('msnodesqlv8');
var user=[];
var username='Devesh';
const connectionstring="server=DDPL21002\\SQLEXPRESS01;Database=BombayTools;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
const query="SELECT * FROM UserDetail";
async function getDataTable(){
    try{
        

        await sql.query(connectionstring,query,(err,rows)=>{
            return rows[5];
        })
        
        
    }
    catch(ex){
        console.log(ex);
    }
}


getDataTable().then(result=>{
    console.log(result);
})

module.exports={
    getDataTable:getDataTable,
    userdetail:user
}