const express = require("express");
const Company = require("./companies");
const Menu = require("./menus");
const Location = require("./locations");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/companies", async (req, res) => {
    const companies = await Company.findAll();
    res.json(companies);
});

app.get("/companies/:id", async (req, res) => {
    const companies = await Company.findByPk(req.params.id);
    res.json(companies);
});

app.get("/companies/:id/menus", async (req, res) => {
    const companies = await Menu.findAll({
        where: {
            companyId: `${req.params.id}`
        }
    });
    res.json(companies);
});

app.post("/companies", async (req, res) => {
    const newCompany = Company.create({
        name: req.body.name,
        logoURL: req.body.logoURL,
        });
        res.send("new company created");
});

app.delete("/companies/:id", async (req, res) => {
    const company = await Company.findByPk(req.params.id);
    company.destroy();
    res.send(`${company.name} deleted`);
});

app.get("/menus/:id", async (req, res) => {
    const menu = await Menu.findByPk(req.params.id);
    res.json(menu);
});

app.put("/companies/:id", async (req, res) => {
    const company = await Company.findByPk(req.params.id);
    if (!company) {
        return res.sendStatus(404);
    }
    await company.update(req.body);
    res.send('company updated');
});

app.post("companies/:id/menus", async (req, res) => {
    const company = req.params.id;
    await company.createMenu({
        title: req.body.title
        });
        res.send("new menu created");
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});