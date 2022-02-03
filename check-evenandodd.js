// normal system
const num1 = 4;

const remainder = num1 % 2;


if (remainder == 0 ) {
    console.log('This number is even')
}

else {
    console.log('This number is odd')
}

// using function

function checkRemainder (num1) {

if (num1 %2 == 1){
    return true;
}

return false;

}

 var result = checkRemainder(13);

 console.log(result)

