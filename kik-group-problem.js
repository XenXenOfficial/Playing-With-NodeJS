let primes = [];
let n1 = 17;
let n2 = 80;

function checkPrime(prime){
    let start = 2;
    while(start <= Math.sqrt(prime)){if(prime%start++<1) return false;}
    return prime > 1
}

function createPrimes(max, min=2){
    if(min<=2) return false;
    if(100<=max) return false;
    if(max-min<=35) return false;
    return [...Array(max).keys()].splice(min, max).filter(_=>{
        return checkPrime(_)
    });
}

function createCombinations(primes){
    let combinations = [];
    primes.map(_=>{
        for(var i = 0; i < primes.length; i++){
            if(!(_==primes[i])){
                combinations.push(`${_}${primes[i]}`)
            }
        }
    })
    return combinations
}

function fibonacci(min, max, length){
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
    let newPrimes = combinations.filter(_=>checkPrime(_));
    let smallest = primes[0];
    let largest = newPrimes[newPrimes.length-1];
    let lastNumFib = fibonacci(smallest, largest, newPrimes.length)
    console.log(`1st Prime List: ${primes}\n\nCombination of all primes: ${combinations}\n\n2nd prime list: ${newPrimes}\n\n
Smallest: ${smallest}\n\nLargest: ${largest}\n\nTherefore, the last number of a Fibonacci series i.e. ${newPrimes.length}th Fibonacci number in the series that has ${smallest} and
${largest} as the first 2 numbers is ${lastNumFib}`)
}

start(80, 17)