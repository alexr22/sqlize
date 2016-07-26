// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

var mysql = require('mysql');

// Edit this connection to make it work with JawsDB.
var source = {

    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: "Njmitx123",
        database: "starwars"
    },
    jawsDB: {
        port: 3306,
        host: 'izm96dhhnwr2ieg0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'i3oqy1o7hhta8lkv',
        password: 'b5ocs6wph5woavo5',
        database: 't7m3pvzxzf9fx4ch'
        // TODO: Add your JawsDB connection info here
    }
}


// TODO: connect your jawsDB connection witht he mysql connection.
var connection = mysql.createConnection(source.jawsDB);



// Replace the connection code here with one to connect to you JawsDB connection.
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;