function getArraySum(numbers) {
    var sum = 0;
    for(i = 0; i <numbers.length; i++) {
        var element = numbers[i];
        sum = sum +element;
    }
    return sum;
}

var numbers = [45, 65, 78, 12, 3, 56, 68];
var result = getArraySum(numbers);
console.log("Total of the numbers :", result);

var total = getArraySum([43, 65, 12, 41, 86]);
console.log("Total of the numbers :", total);