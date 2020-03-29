//Arithmetaic
//Assignment
//Ternary
//Comparison
//Logical
//Binary


let x = 10;
let y = 30;

console.log(x+y);

console.log(y-x);
console.log(x*y);
console.log(y/x);
console.log(2 ** 3);
console.log(x++);
console.log(++y);
console.log(x);
 
let val ;
val = x+5;
console.log('val ='+val);

let j =5;
j+=5;
console.log('j = '+j);

console.log(x>y);

console.log(j===10);//strict equality both type and value

console.log(j==x);//loose equality

let points = 100;
let type = points > 100 ? 'Gole': 'Silver';
console.log('type = '+type);

let bool_1 = true;
let bool_2 = false;
let comp1 = bool_1 && bool_2;
console.log('true && false : '+ comp1);
console.log(bool_1 && bool_1);
console.log(false && false);
console.log('OR Operator : '+bool_1 || bool_2);
console.log('Not Operator : '+!bool_2);