const express = require("express");

const app = express();
const port = 8000;

app.use(express.static('public'));

app.get("/flipcoin", (req, res) => {
    const random = Math.floor((Math.random() * 2));
    if (random == 0) return res.send("Heads");
    else return res.send("Tails");
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

