let obj={
    name:"John",
    age:21,
    city:"KTM"
}

//json.strignify obj to json
let jsone=JSON.stringify(obj);
console.log(jsone);

//json.parse json to obj
let newobj=JSON.parse(jsone)
console.log(newobj);

const js1= JSON.stringify(obj, ["name","city"]);
console.log(obj);
console.log(JSON.parse(js1));

