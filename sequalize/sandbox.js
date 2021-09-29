const sequelize = require("./db");
const Cinema = require("./cinema");

async function sandbox() {
    await sequelize.sync();

    const cineworld = await Cinema.create({
        location: 'South Ruislip',
        numOfScreens: 8,
    });
    const vue = await Cinema.create({
        location: 'Harrow',
        numOfScreens: 10,
    })
};
sandbox();
