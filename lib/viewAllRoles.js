//Calling database connection
const db = require("../config/connection");
function viewAllRoles () {
    //requiring indexMenu
    const indexMenu = require("../menus/index");
    //pre-written sql statement
    const sql = "SELECT * FROM roles";
    //using mysql2 to query the database specified in ../config/connections.js
    db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            return;
        };
        console.log(results)
        //Returning to the indexMenu
        indexMenu();
    })
};
//exporting the viewAllRoles function
module.exports = viewAllRoles;