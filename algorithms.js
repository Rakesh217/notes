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
function chkAnag(word1, word2) {
    if (word1.length == word2.length) {
        split1 = word1.split(' ');
        split2 = word2.split(' ');
        for (i = 0; i < split1.length; i++) {
            if (split1[i] == split2[i]) {
            }
        } return true;
    } else {
        return 'This is not a anagram.'
    }
}
console.log(chkAnag('Hello World', 'Iaman Crawl'));
//---------------------------------------------------------
function arrChunk(arr, chunk) {
    let tempArr1 = [];
    let tempArr2 = [];
    tempArr1 = arr.splice(0, chunk);
    tempArr2 = arr;
    return tempArr1 + "  " + tempArr2;
}
console.log(arrChunk([1, 2, 3, 4], 2));
//---------------------------------------------------------
function fibonacci(num) {
    let temp = 0;
    for (i = 0; i <= num; i++) {
        temp += i;
    }
    return temp;
}
console.log(fibonacci(10));
//---------------------------------------------------------