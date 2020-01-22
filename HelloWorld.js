//Prints Hello WOrld!
console.log('Hello World!');
/*
Prints hello! goodbye!
*/
console.log('hello!', 'goodbye!');
console.log([1, 2, 3], { example: true});

parseInt('1.2'); // 1
parseFloat('1.2'); //1.2
parseInt('No'); //NaN

let foods = [];
foods.push('pizza');
foods.push('tacos');
foods.push('burgers');

foods;
console.log(foods[0]);
foods[foods.length - 1];
foods.pop();
foods;


let info = {
    greeting: 'Hello',
    age: 22,
    helpful: true,
    favoriteFoods: ['pizza', 'tacos'],
    name: {
        first: 'Rakesh',
        last: 'Avirineni',
    },
    hometown: 'Hyderabad',
    favoriteCar: null
};

console.log(info.greeting);
info.helpful;
info['favoriteFoods']

let c = 'Text';
c = 1;

const x = 1;

var z = 'Text';
console.log(1+1);
1 +1 ;
3 * 3;

const firstName = 'Rakesh';
const lastName = 'Avirineni';
console.log(firstName + ' ' + lastName);
console.log(firstName == lastName);

let name = 'Rakesh';
if(name.length > 3){
    console.log('Hello!' + name);
}
else if(name.length ==0){
    console.log('Keep Tryping');
}
else{
    console.log('Please enter a name');
}

let color = 'Orange';
switch(color){
    case 'Red': console.log('Go Red!');
    break;
    case 'Orange': console.log('Go Orange!!');
    break;
    default:
        console.log('Sorry')
}

let userInfo = { questionNicely: false};
let question = userInfo.questionNicely ? 'What would you like to drink':
'Whatya want, punk?';
console.log(question);
userInfo.questionNicely = true;
question = userInfo.questionNicely ? 'What would you like to drink':
'Whatya want, punk?';
console.log(question);

for(let i = 0; i < 10; i++){
    console.log(i);
}

let i = 0;
while(i < 10){
    console.log(i);
    i++;
}

function add(x, y){
    return x + y;
}
console.log(add(10,6));

const subtract = (an, or) => an - or;

console.log(subtract(10, 6));

const obj = {
    wish: 'Hello',
    food: 'Biryani',
    car: 'BMW'
};

const person = {
    ...obj,
    car: 'xyz'
}

console.log(person);

let person1 = 'Man';
let person2 = 'Super';

let intro = `Hii! I am ${person1}, ${person2} ${person1}`;

console.log(intro)