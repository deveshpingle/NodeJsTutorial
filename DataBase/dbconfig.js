
require('msnodesqlv8');

const config={
    server: 'DDPL21002\\SQLEXPRESS01',
    driver:'msnodesqlv8',
    database:'BombayTools',
    options:{
        trustedconnection:true,
        trustServerCertificate:true
    },
    port:1433

}



module.exports=config;