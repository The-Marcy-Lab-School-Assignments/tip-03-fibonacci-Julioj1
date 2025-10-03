// Prints the first n Fibonacci numbers
const printFibonacci = (n) => {
    let a = 0
    let b = 1
    for (let i = 0; i < n; i++) {
        console.log(a);
        let next = a + b; // add the current 2 number together.
        a = b; // store the value of b into the variable a 
        b = next; // store the value of next into the variable b
    }
}

printFibonacci(5);  // should print 0, 1, 1, 2, 3
printFibonacci(10); // should print 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
