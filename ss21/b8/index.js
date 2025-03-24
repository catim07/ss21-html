console.log("Các số Armstrong có 3 chữ số là:");
for (let num = 100; num < 1000; num++) {
    let temp = num;
    let sum = 0;
    let digit1 = temp % 10;
    temp = Math.floor(temp / 10);
    let digit2 = temp % 10;
    temp = Math.floor(temp / 10);
    let digit3 = temp;
    sum = (digit1 * digit1 * digit1) + (digit2 * digit2 * digit2) + (digit3 * digit3 * digit3);
    if (sum === num) {
        console.log(num);
    }
}
