function checkPrime(prime){
    let start = 2;
    //A quick check if the num is a prime by starting at the square root of the number
    //Its now O(sqrt(n))
    while(start <= Math.sqrt(prime)){if(prime%start++<1) return false;}
    return prime > 1
}

function createPrimes(max, min=2){
    //Constraints listed in the file
    if(min<=2) return false;
    if(100<=max) return false;
    if(max-min<=35) return false;
    //[...Array(max).keys()] is just a fancy way of creating an array of integers
    //Filter just a nifty function that'll remove items that don't pass a function
    //In this case, it's just checking if its a prime.
    return [...Array(max).keys()].splice(min, max).filter(_=>{
        return checkPrime(_)
    });
}

function createCombinations(primes){
    let combinations = [];
    //This just creates the combinations of numbers
    primes.map(_=>{
        for(var i = 0; i < primes.length; i++){
            if(!(_==primes[i])){ //This check makes sure its unique and doesn't include repeats with itself. 
                combinations.push(`${_}${primes[i]}`)
            }
        }
    })
    return combinations
}

function fibonacci(min, max, length){
    //This generates the fibonacci sequence from the min and max value
    //Tbh, stolen from: 
    //https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e
    var a=parseInt(max), b=min, temp;
    while(length >= 0){
        temp = a;
        a = a + b;
        b = temp;
        length--;
    }
    return b
}

function start(n2, n1){
    let primes = createPrimes(n2, n1);
    let combinations = createCombinations(primes);
    //Gets new primes from the combinations.
    let newPrimes = combinations.filter(_=>checkPrime(_));
    //The numbers are already sorted, so the min value is the first value.
    let smallest = primes[0];
    //Same goes for largest, but the last value.
    let largest = newPrimes[newPrimes.length-1];
    let lastNumFib = fibonacci(smallest, largest, newPrimes.length)
    console.log(`1st Prime List: ${primes}\n\nCombination of all primes: ${combinations}\n\n2nd prime list: ${newPrimes}\n\n
Smallest: ${smallest}\n\nLargest: ${largest}\n\nTherefore, the last number of a Fibonacci series i.e. ${newPrimes.length}th Fibonacci number in the series that has ${smallest} and
${largest} as the first 2 numbers is ${lastNumFib}`)
}

start(80, 17)
