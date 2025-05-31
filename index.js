const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon");
console.log(fruits);

fruits.unshift("Kiwi");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

const num1 =[10, 20, 30, 40];
num1.splice(1,1,25);
console.log(num1);

const color=["Red","Green","Blue","Black"];
const colors= color.join("-");
console.log(colors);

const num =[100, 200, 300];
const nums= num.toString();
console.log(nums);


const ar= [5, 10, 15, 20]
const arr= ar.at(-1);
console.log(arr);
