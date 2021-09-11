const db = require("../config/connection");
function viewAllDepartments () {
    const indexMenu = require("../menus/index");
    const sql = "SELECT * FROM departments";
    db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            return;
        };
        console.log(results)
        indexMenu();
    })
};

module.exports = viewAllDepartments;