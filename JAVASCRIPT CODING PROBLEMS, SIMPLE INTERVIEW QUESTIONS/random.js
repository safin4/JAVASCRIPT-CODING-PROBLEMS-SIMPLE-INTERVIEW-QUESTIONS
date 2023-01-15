var num = 2.12458;
var result1 = Math.floor(num);
var result2 = Math.ceil(num);
var result3 = Math.round(num);
for(var i = 0; i < 10; i++) {
    var dice = Math.random() * 10;
    var output = Math.round(dice);
    console.log(result1, result2, result3, dice, output);
};
