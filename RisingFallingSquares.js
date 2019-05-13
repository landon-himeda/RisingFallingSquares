function risingFallingSquares(num) {
    var arr = [];
    rRisingFallingSquares(num, 1, 2);
    return arr;

    function rRisingFallingSquares(num, current, increment) {
        if (current <= 0) {
            return;
        }
        console.log(`Pushing ${Math.pow(current, 2)}, current = ${current}, increment = ${increment}`);
        arr.push(Math.pow(current, 2));
        if ((current + 1 === num) && (num % 2 === 0)) {
            console.log(`Current + 1 === num, current set to num, increment set to -2`);
            current = num;
            increment = -2;
        } else if ((current === num) && (num % 2 === 1)) {
            console.log(`Current === num, current set to num - 1, increment set to -2`);
            current = num - 1;
            increment = -2;
        } else {
            console.log(`Current incremented`);
            current += increment;
        }
        rRisingFallingSquares(num, current, increment);
    }
}

console.log(risingFallingSquares(5));
console.log(risingFallingSquares(4));