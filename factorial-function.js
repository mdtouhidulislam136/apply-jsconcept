function factorialcal (number) {
    let factorial = 1;
for (let i= 1; i<=number; i++ )
{
    factorial = factorial * i;
}
return factorial;
}

var fac= factorialcal(9);

console.log(fac)

