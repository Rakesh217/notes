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