'use strict';

//Array

//1. Declaration
const arr1 = new Array('','');
const arr2 = [1,2];

//2. Index position
const fruits = ['🍎','🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length-1]);

console.clear();
//3. Looping over an Array
// print all fruits
// a. for
for(let i =0;i<fruits.length;i++){
    console.log(fruits[i]);
}
//b. for of
for(let fruit of fruits){
    console.log(fruit)
}
console.clear();
//c. For each
fruits.forEach((fruit) => console.log(fruit));

//d. Addition, deletion, copy
// push :  add an item to the end
fruits.push('🍓','🍑');
console.log(fruits);
// pop : 
fruits.pop();
console.log(fruits);

// unshift : add an item to the beginning
fruits.unshift('🍓','🍋');
console.log(fruits);
// shift : remove an item to the beginning
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);

// note!! shift,unshift are slower than pop and push
