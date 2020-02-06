

const mysql = require("mysql");

module.exports = function getConnection(){
    return mysql.createPool(
        {
            connectionLimit: 14, 
            host: process.env.HOST || "127.0.0.1",
            user: process.env.USER || "user",
            password: process.env.PASSWORD || "password",
            database: process.env.DATABASE || "scoreboard",
        }
    );
}



