const db = require("../config/connection");
function viewAllRoles () {
    const indexMenu = require("../menus/index");
    const sql = "SELECT * FROM roles";
    db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            return;
        };
        console.log(results)
        indexMenu();
    })
};

module.exports = viewAllRoles;