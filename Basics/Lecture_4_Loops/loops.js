// for loop

console.log('****************For Loop***************')
for(let i=1; i<=10; i++){
    console.log(i);
}

for (let j = 1; j < 20; j++) {
    if (j%2==0) {
        console.log(j +' is even number!!!');
    }
}

//while loop
console.log('**********While Loop**********');
let i =1;
while (i<=10) {
    console.log(i);
    i++;
}

//do--while
console.log('***********do-while***********');

let x=1;
do {
    console.log(x);
    x++;
} while (x<=10);


//for--in
console.log('************for-in*****************');
const persons = {
    name : 'Richard',
    age : '22'
};

for (let key in persons){
    console.log(key,  persons[key]);
}

//array
const colours =['red', 'blue', 'yellow'];
for(let col in colours){
    console.log(col, colours[col]);
}

//for-of
console.log('*************for-of*************');
for (let x of colours) {
    console.log(x);
}

//break
console.log('*************break*************');
for(let num = 1; num<25; num++){
    if (num%2!=0) {
        console.log(num +' is not an even number!!!');
        break;
    }
}


