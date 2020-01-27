function strReverse(str){
    split = str.split('').reverse().join('');
    return split;
}
console.log(strReverse('Java Script'));
//---------------------------------------------------------
function checkPalin(str) {
    split = str.split('').reverse().join('');
    if (split.toLowerCase() == str.toLowerCase()) {
        return 'This is a Palindrome.';
    } else {
        return 'This is not a Palindrome';
    }
}
console.log(checkPalin('Likil'));
console.log(checkPalin('Apple'));
//-------------------------------------------------------
function intRevrs(numb) {
    split = numb.toString().split('').reverse().join('');
    return parseInt(split) * Math.sign(numb);
}
console.log(intRevrs(1234));
console.log(intRevrs(-1200));
//------------------------------------------------------
function fizzBuzz(numb) {
    for (i = 0; i < numb; i++) {
        if (i % 2 == 0 && i % 3 == 0) {
            console.log("Fizz Buzz");
        } else if (i % 3 == 0) {
            console.log("Buzz");
        } else if (i % 2 == 0) {
            console.log("Fizz");
        } else {
            console.log(i + " is not divisible by 2 and 3");
        }
    } return numb;
}
console.log(fizzBuzz(10));
//--------------------------------------------------------