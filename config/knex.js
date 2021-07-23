//let config = require('./config');

var knex = require('knex')({
    client: 'pg',
    connection: {
        host:'ec2-54-163-47-62.compute-1.amazonaws.com' ,
        user: "mlyllqsbannsmo",
        password: "242faf070b44b39ad59398e86eaf77ef181ad311286f3ae3cc1c39526ddaba48",
        database:"d59bbr1se23804" ,
        asyncStackTraces: true,
        options: {
            port: 14831
          }
    },
    useNullAsDefault: true,
    pool: {
        afterCreate: function (conn, done) {
          // in this example we use pg driver's connection API
          conn.query('SET timezone="UTC";', function (err) {
            if (err) {
              // first query failed, return error and don't try to make next query
              done(err, conn);
            } else {}
        });
    },
},

    acquireConnectionTimeout: 300000
});





module.exports = knex;