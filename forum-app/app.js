const User = require("./user");
const Football = require("./football");
const Tennis = require("./tennis");
const Rugby = require("./rugby");

const user = new User('dan', false);
const football = new Football('Football');
const tennis = new Tennis('Tennis');
const rugby = new Rugby('Rugby');


let footballPosts = [];
footballPosts.push(football.createTextPost('WHU v MU', '20/09/21', user.username, 'man u beat west ham'));
footballPosts.push(football.createPollPost('who is the GOAT', '20/09/21', 'dan', ['ronaldo', 'messi', 'pele', 'maradona']));

let tennisPosts = [];
tennisPosts.push(tennis.createTextPost('US open', '20/09/21', 'dan', 'emma wins'));

let rugbyPosts = [];
rugbyPosts.push(rugby.createTextPost('Leicester v Exeter', '20/09/21', 'dan', 'Leicester tigers beat Exeter'));

console.log(footballPosts[0])

module.exports = {
    footballPosts,
    tennisPosts,
    rugbyPosts,
}