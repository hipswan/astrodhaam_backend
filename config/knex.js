//let config = require('./config');

 var knex = require('knex')
(  
  {
    client: 'mssql',
    connection: {
        host: 'localhost',  //'ec2-54-163-47-62.compute-1.amazonaws.com' ,
        user: 'admin',      //"mlyllqsbannsmo",
        password: 'admin',// "242faf070b44b39ad59398e86eaf77ef181ad311286f3ae3cc1c39526ddaba48",
        database:  'AstrodhaamDB',         //"d59bbr1se23804" ,
        options: {
            port: 9999
          }
    },
    useNullAsDefault: true,
    // pool: {
    //     // afterCreate: function (conn, done) {
    //     //   // in this example we use pg driver's connection API
    //     //   conn.query('SET timezone="UTC";', function (err) {
    //     //     if (err) {
    //     //       // first query failed, return error and don't try to make next query
    //     //       done(err, conn);
    //     //     } else {}
    //     // });
    // },
// },

    acquireConnectionTimeout: 300000
});

// var knex = require('knex')
// (  
//   {
//     client: 'mssql',
//     connection: {
//         host: '169.254.87.73',  //'ec2-54-163-47-62.compute-1.amazonaws.com' ,
//         user: 'sa',      //"mlyllqsbannsmo",
//         password: 'sa@1808',// "242faf070b44b39ad59398e86eaf77ef181ad311286f3ae3cc1c39526ddaba48",
//         database:  'AstrodhaamDB',         //"d59bbr1se23804" ,
//         options: {
//             port: 1433
//           }
//     },
//     useNullAsDefault: true,
//     // pool: {
//     //     // afterCreate: function (conn, done) {
//     //     //   // in this example we use pg driver's connection API
//     //     //   conn.query('SET timezone="UTC";', function (err) {
//     //     //     if (err) {
//     //     //       // first query failed, return error and don't try to make next query
//     //     //       done(err, conn);
//     //     //     } else {}
//     //     // });
//     // },
// // },

//     acquireConnectionTimeout: 300000
// });

 
module.exports = knex;