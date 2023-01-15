var businessman = 850;
var minister = 650;
var sochib = 750;

var max = Math.max(businessman, minister, sochib);
console.log(max);


if(businessman > minister) {
    if(businessman > sochib) {
        console.log("Businessman is bigger");
    }

    else {
        console.log("Sochib is bigger");
    }
}

else {
    if(businessman > sochib) {
        console.log("Minuster is bigger");
    }

    else {
        console.log("Sochib is bigger");
    }

}