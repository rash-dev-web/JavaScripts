// refrence type
// 1. Object
// 2. Array
// 3. Function

let user = {
    name : 'Richard',
    age : '30'
};

console.log(user);
console.log(user.name);
console.log(user.age);
user.age = 35;
console.log(user.age);
console.log(user.name+' '+user.age);

let language = ['java', 'javascript'];
console.log(language);
console.log(language.length);
console.log(language[1]);
language[2] = 'ruby';
console.log(language);
