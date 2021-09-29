const express = require("express");

const app = express();
const users = {};
let userId = 1;
const port = 7000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/users", (req, res) => {
    users[userId] = req.body;
    userId ++;
    res.send('user created');
})

app.get("/users/:id", (req, res) => {
    let user = users[req.params.id];
    res.json(user);
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});