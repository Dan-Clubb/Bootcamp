let alansDad = {
    name: 'Ted',
    parents: [undefined, undefined],
    printParents: function (){
        console.log(this.parents[0]);
        console.log(this.parents[1]);
    },
};
let carolsDad = {
    name: 'Charlie',
    parents: [undefined, undefined],
    printParents: function (){
        console.log(this.parents[0]);
        console.log(this.parents[1]);
    },
};
let alansMum = {
    name: 'Anne',
    parents: [undefined, undefined],
    printParents: function (){
        console.log(this.parents[0]);
        console.log(this.parents[1]);
    },
};
let carolsMum = {
    name: 'Jane',
    parents: [undefined, undefined],
    printParents: function (){
        console.log(this.parents[0]);
        console.log(this.parents[1]);
    },
};
let alan = {
    name: 'Alan',
    parents: [alansDad, alansMum],
    printParents: function (){
        console.log(this.parents[0].name);
        console.log(this.parents[1].name);
    },
};
let carol = {
    name: 'carol',
    parents: [carolsDad, carolsMum],
    printParents: function (){
        console.log(this.parents[0].name);
        console.log(this.parents[1].name);
    },
};
let daniel = {
    name: 'Daniel',
    parents: [alan, carol],
    printParents: function (){
        console.log(this.parents[0].name);
        console.log(this.parents[1].name);
    },
};
let lousie = {
    name: 'Louise',
    parents: [alan, carol],
    printParents: function (){
        console.log(this.parents[0].name);
        console.log(this.parents[1].name);
    },
};

console.log(lousie.name);
console.log(daniel.parents);
alan.printParents();
carol.printParents();
alansDad.printParents()
console.log(alansMum.name);


