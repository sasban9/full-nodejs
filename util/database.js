const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    "mongodb+srv://sasUser:5jqesqyPEEHGnNIC@cluster0.bopqy.mongodb.net/test?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected!");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if(_db) {
    return _db;
  }
  throw 'No database found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

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
