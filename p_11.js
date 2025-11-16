function isPrime(num) {
    if (num <= 1) {
        return false; //negative 
    }
    
    for (i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false; 
        }
    }


    return true; 
}


number = 17;
if (isPrime(number)) {
    console.log(number+ " is a prime number.")
} else {
    console.log(" is not a prime number.");
}