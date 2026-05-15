import mysql from 'mysql2';

const {
  MY_SQL_HOST,
  MY_SQL_PORT,
  MY_SQL_USER,
  MY_SQL_PASSWORD,
  MY_SQL_DATABASE,
} = process.env;

const connection = mysql.createConnection({
  host: MY_SQL_HOST,
  port: MY_SQL_PORT,
  user: MY_SQL_USER,
  password: MY_SQL_PASSWORD,
  database: MY_SQL_DATABASE,
});

(async () => {
  try {
    await connection.connect(function (err, db) {
      if (err) {
        console.log(err)
      }
    });
    console.log('Connected to DB');
  } catch (err) {
    console.error(err);
  }
})();

export default connection.promise();
