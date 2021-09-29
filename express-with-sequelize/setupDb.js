const Company = require("./companies");
const Menu = require("./menus");
const Location = require("./locations");
const db = require("./db");

async function setupDb() {
    Company.hasMany(Menu);
    Menu.belongsTo(Company);
    
    Company.hasMany(Location);
    Location.belongsTo(Company);

    await db.sync();
}

module.exports = setupDb;