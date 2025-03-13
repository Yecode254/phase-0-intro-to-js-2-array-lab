// Write your solution here!
// 
let cats = ["Milo", "Otis", "Garfield"];
 
 function destructivelyAppendCat(name){
     cats.push(name);
     return cats;
 }
 
 function destructivelyPrependCat (name){
     cats.unshift(name);
     return cats;
 }
 
 function destructivelyRemoveLastCat(){
     cats.pop();
     return cats;
 }
 
 function destructivelyRemoveFirstCat(){
     cats.shift();
     return cats;
 }
 
 function appendCat(name){
     let newArray = cats.slice();
     newArray.push(name);
     return newArray;
 }
 
 function prependCat(name){
     let newArray = cats.slice();
     newArray.unshift(name);
     return newArray;
 }
 
 function removeLastCat(){
     let newArray = cats.slice();
     newArray.pop();
     return newArray;
 }
 
 function removeFirstCat(){
     let newArray = cats.slice();
     newArray.shift();
     return newArray;
 }