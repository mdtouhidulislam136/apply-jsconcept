function leapYear (year) {
    if(year % 4 == 0){
        return true;
    }

    return false;
}

const isMyYearLeapYear = leapYear(2024);
console.log(isMyYearLeapYear); 