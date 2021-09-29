const setupDb = require("./setupDb");
const Company = require("./companies");
const sequelize = require("./db");



async function sandbox() {
    // await sequelize.drop();
    await setupDb();
    const mcDonalds = await Company.create({
        name: "mcDonald's",
        logoURL: "www.mcdonalslogo.com",
    });
    const kfc = await Company.create({
        name: "KFC",
        logoURL: "www.KFClogo.com",
    });
    const mcdDrinks = await mcDonalds.createMenu({
        title: "mcDonalds drinks",
    });
    const mcdFood = await mcDonalds.createMenu({
        title: "mcDonalds Food",
    });
    const kfcDrinks = await kfc.createMenu({
        title: "KFC drinks",
    });
    const mcdRuislip = await mcDonalds.createLocation({
        name: "Ruislip",
        capacity: 80,
        manager: "Greg",
    })
    const mcdNortholt = await mcDonalds.createLocation({
        name: "Northolt",
        capacity: 45,
        manager: "Kate",
    })
    const kfcRuislip = await kfc.createLocation({
        name: "Ruislip",
        capacity: 20,
        manager: "Eva",
    })
    const kfcHarrow = await kfc.createLocation({
        name: "Harrow",
        capacity: 60,
        manager: "Joe",
    });

    // Company.destroy({
    //     where: {},
    //     truncate: true
    //   });
    // Menu.destroy({
    //     where: {},
    //     truncate: true
    // });
    // Location.destroy({
    //     where: {},
    //     truncate: true
    //   });
};
sandbox();