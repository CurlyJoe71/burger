const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "local",
    user: "root",
    port: 3306,
    password: "Jmg070181mu$ic",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    };
    console.log("connected as id " + connection.threadId);
})