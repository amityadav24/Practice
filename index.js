//1
const result=["paly","game","swim","dance"];
result.push("gym");
result.unshift("zudo")
console.log(result);

//2
const fruits=["apple","banana","grapes","pineple","orange"];
fruits.pop();
fruits.shift();
console.log(fruits);

//3
const arr=[10,20,30,40];
arr.splice(1,1,25);
console.log(arr);

//4
const color=["pink","balck","white","yellow"];

const value=color.join("-");
console.log(value);

//5
const array=[100,200,300];
const values=array.toString();
console.log(values);

//6
const me=[5,10,15,20];
console.log(me.at(-1));

//7
const mee=[1,2,3,4,5];
mee.copyWithin(3,0,2);
console.log(mee);

//8
const pre=[1,[2,3],[4,[5]]];

console.log(pre.flat(2));

//9
const nine=[10,20,30,40,50];
const results=nine.slice(1,3);
console.log(results);

//10
const ten=[1,2];
const ten1=[3,4];

console.log(ten.concat(ten1));

//11
const eleven=[1,2,3,4,5];
delete eleven[2];
console.log(eleven);
console.log(eleven.length);

//12
const a=[9,8,7,6];
const b=a.toSpliced(1,1,10,11);
console.log(a);
console.log(b);

//13
const c=[1,2,3,4,5];
c.splice(3,3);
console.log(c);

//14
const copy=[7,8,9];
copy.unshift(6);
console.log(copy);

//15
function join(arr){
    return arr.join("|");


}
const joint=["app","dog","sheep"];
const res=join(joint);
console.log(res);

//16
function Item(arr) {
  return arr[arr.length - 1];
}

const numbers = [10, 20, 30, 40];
console.log(Item(numbers)); 

//17
function long(arr){
    return arr.at(-2);
}
const fruity=["a","b","c","d"];
console.log(long(fruity));

//18
function reverseArray(arr) {
    let reversed = [];
    for (let i = 0; i < arr.length; i++) {
        reversed.unshift(arr[i]);  
    }
    return reversed;
}


let myArray = [1, 2, 3, 4, 5];
let reversedArray = reverseArray(myArray);

console.log(reversedArray);  

//19
function ninteen(arr){
  return arr.flat();
}
let my=[[1,2],[3,4]] ;
let flatted=ninteen(my);
console.log(flatted);

//20
function combineNamesAndMarks(names, marks) {
    let result = [];
    for (let i = 0; i < names.length; i++) {
        result.push([names[i], marks[i]].join(": "));
    }
    return result;
}


let names = ['Ram', 'Shyam'];
let marks = [80, 90];

console.log(combineNamesAndMarks(names, marks));  

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const evens = number.filter(num => num % 2 == 1);

console.log(evens);

const re=["Orange","Grapes","Apple","Mango","Banana","Watermelon"]
const fil = re.filter(num=>num.includes("App"));
console.log(fil)

const arry = [1, 2, 3, 4];

const sum = arry.reduce((acc, curr) => acc + curr, 0);

console.log(sum); 
const fruit1 = ["grapes","mango","apple","banana"];

fruit1.forEach(num => {
  console.log(num.toUpperCase());
});

const user={
		name:"Amit",
		age:"24",
		email:"amit@gmail.com",
        msg(){
            console.log(hello.$(this.name));
        }
		}
console.log(Object.keys(user));//object keys method
console.log(Object.values(user));//object value method
console.log(Object.entries(user));//object entres method

const obj1={name:"Amit"};
const obj2={age:24};
const resu=Object.assign({},obj1,obj2);//object assign method to merge two object
console.log(resu);

const user1 = {
  name: "Alice",
  age: 25
};

Object.freeze(user1);//freeze method is used to fixed
user1.name="Ram";
console.log(user1);

function calculator(a, b, operator) {
  let result;

  switch (operator) {
    case '+':
      result = a + b;
      break;

    case '-':
      result = a - b;
      break;

    case '*':
      result = a * b;
      break;

    case '/':
      result =  a / b ; 
      break;

    case '%':
      result = a % b ;
      break;

    case '**':
      result = a ** b;
      break;

    default:
      result = 'Invalid operator';
  }

  return result;
}





