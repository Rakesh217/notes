function difference(x){
    if(x > 13){
        return (x - 13) * 2;
    }
    else{
        return 'Enter number greater than 13';
    }
}
console.log(difference(25));
console.log(difference(10));

//----------------------------------------------------

function sum(x, y){
    if(x == y){
        return (x + y) * 3;
    }
    else{
        return x + y;
    }
}
console.log(sum(5, 3));
console.log(sum(2, 2));

//-----------------------------------------------------

function absDiff(x){
    if(x > 19){
        return Math.abs(x - 19) * 3;
    }
    else{
        return Math.abs(x - 19);
    }
}
console.log(absDiff(28));
console.log(absDiff(10));

//------------------------------------------------------

function check(x, y){
    if(x == 50 || y == 50){
        return true;
    }
    else if(x + y == 50){
        return true;
    }
}
console.log(check(50, 30));
console.log(check(30, 20));

//-------------------------------------------------------

function within(x){
    if((x - 100) <= 20 || ( x- 400) <= 20){
        return true;
    }
    else{
        return false;
    }
}
console.log(within(85));
console.log(within(450));

//--------------------------------------------------------

function pstv(x){
    if(x > 0){
        return 'This is a Positive number';
    }
    else if(x < 0){
        return 'This is a Negative number';
    }
}
console.log(pstv(5));
console.log(pstv(-5));

//-------------------------------------------------------

function addPy(x){
    if(x.substring(0,2) == 'Py'){
        return x;
    }
    else if(x == null || x == undefined){
        return ' Enter any word';
    }
    else{
        return 'Py' + x;
    }
}
console.log(addPy('Apple'));
console.log(addPy('Python'));

//--------------------------------------------------------

function remove(x, y){
    str1 = x.substring(0, y);
    str2 = x.substring(y + 1, x.length);
    return str1 + str2;
}
console.log(remove('Python', 2));
console.log(remove('Remove', 0));

//-----------------------------------------------------------

function replace(x){
    if(x.length >= 1){
        first = x.substring(0,1);
        last = x.substring(x.length - 1, x.length);
        middle = x.substring(1, x.length - 1);
        return last+ middle + first;
    }
}
console.log(replace('Python'));
console.log(replace('Maggie'));

//----------------------------------------------------------

function replace(x){
    if(x.length > 0){
        first = x.substring(0,1);
        return first + x + first;
    }
}
console.log(replace('Python'));
console.log(replace('Maggie'));

//----------------------------------------------------------

function multiple(x){
    if(x > 0){
        if(x % 3 == 0){
            return x + ' is multpile of 3.';
        }
        else if(x % 7 == 0){
            return x +' is multiple of 7.';
        }
        else{
            return x + ' is not a multiple of 3 or 7.'
        }
    }
    else{
        return 'Enter a positive number.';
    }
}
console.log(multiple(27));
console.log(multiple(10));

//--------------------------------------------------------------

function lastThree(x){
    if(x.length >= 3){
        str1 = x.substring(x.length - 3, x.length);
        return str1 + x + str1;
    }
    else{
        return 'Enter any word with 3 or more characters'
    }
}
console.log(lastThree('Python'));
console.log(lastThree('Py'));

//--------------------------------------------------------------

function isJava(x){
    if(x.substring(0,4) == 'Java'){
        return true;
    }
    else{
        return false;
    }
}
console.log(isJava('JavaScript'));
console.log(isJava('Python'));

//------------------------------------------------------------

function value(x, y){
    if((x >= 50 && y <= 99) || (y >= 50 && y <= 99)){
        return true;
    }
    else{
        return false;
    }
}
console.log(value(70, 80));
console.log(value(25, 80));

//------------------------------------------------------------

function val(x, y, z){
    if((x >= 50 && y <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z<= 99)){
        return true;
    }
    else{
        return false;
    }
}
console.log(value(70, 10, 45));
console.log(value(15, 20, 30));

//-------------------------------------------------------------

function removeStr(x){
    if(x.substring(4) == 'Script'){
        return x.substring(0, 4) + x.substring(10, x.length);
    }
    else{
        return x;
    }
}
console.log(removeStr('JavaScript'));
console.log(removeStr('Python'));

//---------------------------------------------------------------

function maxThree(x, y, z){
    if(x > y ){
        if(x > z){
            return x;
        }
        else{
            return z;
        }
    }
    else if(y > z){
        if(y > x){
            return y;
        }
        else{
            return x;
        }
    }
    else if(z > x){
        if(z > y){
            return z;
        }
        else{
            return y;
        }
    }
    else{
        return 'Try Again';
    }
}
console.log(maxThree(13, 26, 9));
console.log(maxThree(15, 9, 30));

//------------------------------------------------------------

function nearest(x, y){
    int1 = 100 - x;
    int2 = 100 - y;
    if(int1 < int2){
        return x;
    }
    else{
        return y;
    }
}
console.log(nearest(85, 95));
console.log(nearest(20, 50));

//--------------------------------------------------------------

function finalExam(x){
    if(x >= 90 && x <= 100){
        return true;
    }
}
console.log(finalExam(95));

//-------------------------------------------------------------

/*
42. Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode.  Go to the editor
Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31
*/

//------------------------------------------------------------------

/*
47. Write a JavaScript program to check whether a given number is presents in the range 40..10000.  Go to the editor
For example 40 presents in 40 and 4000
*/

//------------------------------------------------------------------

function revers(x){
    return x.split("").reverse().join("");
}
console.log(revers('Python'));
console.log(revers('JavaScript'));

//------------------------------------------------------------------

function addArry(x, y){
    let a = [];
    if(x.length == 3 && y.length == 3){
        a[0] = x[parseInt(x.length/2)];
        a[1] = y[parseInt(y.length/2)];
        return a;
    }
}
console.log(addArry([5, 3, 9], [10, 12, 15]));

//-----------------------------------------------------------------------

function sep(x){
    let a = [0, 0];
    for(i = 0; i < x.length; i++){
        if(i % 2 == 0){
            a[1] += x[i]; 
        }
        else{
            a[0] += x[i];
        }
    }
    return a;
}
console.log(sep([1,2,3,4,5, 6]));

//-----------------------------------------------------------------------

function rplc(a) {
    str = a.split(' ');
    p = [];
    for (i = 0; i < str.length; i++) {
        s = str[i].substring(0, 1).toUpperCase().concat(str[i].substring(1));
        p[i] = s;
    }
    console.log(p.join(' '));
}

rplc('abc def ghi');

//------------------------------------------------------------------------
let a = 'dcab';
str = a.split('');
let p = [];
for (i = 0; i < str.length; i++) {
    p[i] = parseInt(str[i], 36);
}
console.log(p.sort());
let q = p.sort();
for (z = 0; z < q.length; z++) {
    q[z] = q[z].toString(36);
}
console.log(q.join(''));
//--------------------------------------------------------
function chk(a) {
    if (a.includes('b')) {
        for (i = 0; i < a.length; i++) {
            if (a.charAt(i) == 'b') {
                if (a.charAt(i - 4) == 'a' || a.charAt(i + 4) == 'a') {
                    console.log(' A exists near B');
                }
            }
        }
    }
}
chk('Charhebh beera');
//---------------------------------------------------------
function vowel(b) {
    a = b.toLowerCase();
    let p = 0;
    for (i = 0; i < a.length; i++) {
        if (a.charAt(i) == 'a' || a.charAt(i) == 'e' || a.charAt(i) == 'i' ||
            a.charAt(i) == 'o' || a.charAt(i) == 'u') {
            p++;

        }
    }
    console.log(p);

}
vowel('Apile')
//--------------------------------------------------------------
let pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
let petsCount = pets.reduce((name, pet) => {
    if (!name[pet]) {
        name[pet] = 1;
    } else {
        name[pet]++;
    }
    console.log(name[pet]);
    return name;
}, {});
console.log(petsCount);
//------------------------------------------------------------
