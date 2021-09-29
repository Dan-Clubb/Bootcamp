setTimeout(() => {
    console.log("hello");
}, 1000);
setTimeout(() => {
    console.log("goodbye");
}, 500);
// goodbye hello 



setTimeout(() => {
    console.log("hello");
}, 0);
console.log("goodbye");
// goodbye hello



setTimeout(() => {
    console.log("hello");
    setTimeout(() => {
        console.log("goodbye");
    }, 2000);
}, 1000);




// setTimeout(() => console.log("hello"), 1000);

// let x = 1;
// while (true) {
//     x++;
// }




// const s = new Date().getSeconds();

// setTimeout(function () {
//     console.log("hello");
// }, 100);

// while (true) {
//     if (new Date().getSeconds() - s >= 3) {
//         console.log("goodbye");
//         break;
//     }
// }

