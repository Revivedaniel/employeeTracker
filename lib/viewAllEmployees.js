const db = require("../config/connection");
function viewAllEmployees () {
    const indexMenu = require("../menus/index");
    const sql = "SELECT * FROM employees";
    db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            return;
        };
        console.log(results)
        indexMenu();
    })
};

module.exports = viewAllEmployees;