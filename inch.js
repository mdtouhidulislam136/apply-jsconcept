// inch to feet
var inches = 132;
var feet = inches/12;
console.log(feet);

function inchToFeet(inch) {
var feet = inch/12;
return feet;
}


var scale = 300;
var feet = inchToFeet(scale)
console.log(feet)
var cale = 30;
var feet = inchToFeet(cale)
console.log(feet)
var ale = 200;
var feet = inchToFeet(ale)
console.log(feet)


// mile to km

function mileToKm (mile) {
var km = mile * 1.60934;
return km;
}

var marathon = mileToKm(130);
console.log('marathon in km' , marathon)