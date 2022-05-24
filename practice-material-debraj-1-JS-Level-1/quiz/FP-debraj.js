//Input

let menu = [
    "veg",
    "nveg",
    "veg",
    "nveg",
    "veg",
    "veg"
];

//output ==> vegMenu

//Functional Programming (FP) is using the Declarative way of programming
//Declarative style with function ==> What
let vegMenu = menu.filter(item => item === "veg");
console.log(vegMenu);


//Quiz 2
//Find the different elements in arr1 which are not in arr2
let arr1 = [1,2,3]
let arr2 = [3,4,5]

let uniqueArr1 = arr1.filter(arr1Item => arr2.indexOf(arr1Item) === -1);
// let uniqueArr1 = arr1.filter(arr1Item => arr1Item !== arrIteratee(arr2));

// let arrIteratee = (item, arr) => {}
// OR
let uniqueArr1 = _.difference(arr1, arr2);
console.log(uniqueArr1);