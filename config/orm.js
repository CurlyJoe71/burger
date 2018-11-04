const connection = require('connection.js');

const orm = {
    selectAll: function(cb) {
        connection.query('SELECT * FROM burgers', function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    insertOne: function(newBurger, devoured, cb) {
        connection.query('INSERT INTO burgers (burger_name, devoured) VALUES ?', [newBurger, devoured], function(err, result) {
            if (err) throw error;
            cb(result);
        })
    },
    updateOne: function(burgerID, devoured, cb) {
        connection.query('UPDATE burgers WHERE id = ? SET ?', [burgerID, devoured], function(err, result) {
            if (err) throw err;
            console.log('burger has been updated');
            cb(result);
        })
    }
};

module.exports = orm;