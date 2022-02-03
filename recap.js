var time = "10. 15 pm";
var price = 150;
//array

var student_name = ['robin', 'Mahmudul', 'shishir', 'sadaf', 'sajal', 'hasan', 'alamin', 'raju', 'humaon', 'mohasin']

console.log(student_name.indexOf('humaon'))

var element_length = student_name.length;

console.log(element_length);

var changeArrayValue = student_name[8] = "bilgrates";
console.log(student_name);

student_name.unshift('Dubai kesto');
console.log(student_name);

student_name.shift();
console.log(student_name);

// conditionals
var price = 20;
if (price > 20 ) {
    console.log('I can buy this product');
}

else{
    console.log('I can not buy it ');
}

// loop

var i = 0;
while (i<10) {
    console.log('I am a good boy')
    i++
}

// using for loop we can write while loop code in one line
for (var i =0; i<10; i++ ) {
console.log('Love you')
}

//function

function nam() {

}

nam();

// let const

// value of varable could change

var price = 20;
price = 30;
price = 30;

// value of the variable will not change

const nam = "md touhiudl Islam";