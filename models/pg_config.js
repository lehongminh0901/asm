const Pool = require('pg').Pool;

const pg_conn = new Pool (
    {
        user: 'pcydnjhdsefoqv',
        host: 'ec2-44-194-145-230.compute-1.amazonaws.com',
        database: 'd246b1gt36nk36',
        password: '2eec60707f51d97aa019f41e3b6eb42b19b4395be9b2811cac00294f8b137c13',
        port: 5432,
        ssl: {
            rejectUnauthorized: false
          },
    });

module.exports = pg_conn;