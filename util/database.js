// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: ''
// });

// module.exports = pool.promise();
// ######################################################
// const Sequelize = require("sequelize");

// const sequelize = new Sequelize("node-complete", "root", "", {
//   dialect: "mysql",
//   host: "localhost",
// });

// module.exports = sequelize;

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
  MongoClient.connect(
    "mongodb+srv://sasUser:5jqesqyPEEHGnNIC@cluster0.bopqy.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((result) => {
      console.log("Connected!");
    })
    .catch((err) => console.log(err));
}

module.exports = mongoConnect;