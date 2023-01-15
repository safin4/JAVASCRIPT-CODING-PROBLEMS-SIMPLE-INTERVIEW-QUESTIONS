function reverseString(srt) {
    var reverse = "";
    for (var i = 0; i < srt.length; i++) {
        var char = srt[i];
        reverse = char + reverse;
    }
    return reverse;
}

var statement = "Hello Allien bhai brother.";
var forAlien = reverseString(statement);
console.log(forAlien);

var foodVlog = reverseString("Ki khawa jai... Khuda lagche");
console.log(foodVlog);