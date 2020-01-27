function isPrime(num){
    for(i = 2; i < num; i++){
        if(num % i == 0){
            return "Not Prime";
        }else{
            return "Prime";
        }
    }
}
console.log(isPrime(5));