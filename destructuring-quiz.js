// Destructuring Quiz

// For each of the following code snippets, predict the output. 
// Some of the examples might throw errors. After guessing each one,
//  try running the code to see if your answer was correct.

//##################################################################

let teacher = {
    name: "Walter",
    subject: "Chemistry",
};
console.log(name); // error
//////////////////////////////////////////////////////////////////////
let teacher = {
    name: "Walter",
    subject: "Chemistry",
};
const { name } = teacher;
console.log(name); // walter
//////////////////////////////////////////////////////////////////////
const animals = ["Red Panda", "Otter", "Raccoon"];
const [pet] = animals;

console.log(pet); // ["Red Panda", "Otter", "Raccoon"] ----> wrong answer
                  // correct answer is red panda
//////////////////////////////////////////////////////////////////////
function shouldDelete({ admin, verified }) {
    return !admin && !verified;
}

let user = {
    id: 8732429,
    admin: true,
    verified: false,
};

console.log(shouldDelete(user)); // false
//////////////////////////////////////////////////////////////////////
const [a, b, c] = [3, 1, 4, 1, 5];
console.log(c); // 4
//////////////////////////////////////////////////////////////////////
let a = 6;
let b = 22;

console.log({ a, b }); // {a: 6, b: 22}
