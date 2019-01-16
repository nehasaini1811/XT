let myFunctions = [];

//------------------------
// for(var i=0; i<2; i++) {
//     var newF = function() {
//         console.log(i);
//     }
//     myFunctions.push(newF);
// }
//--------------------------

// for(let i=0; i<2; i++) {
//     let newF = function() {
//         console.log(i);
//     }
//     myFunctions.push(newF);
// }
//------------------------
function getF(i){
    var newF = function() {
        console.log(i);
    }
    return newF;
}
for(var i=0; i<2; i++) {

    myFunctions.push(getF(i));
}
//--------------------------

myFunctions[0]();
myFunctions[1]();