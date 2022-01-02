module.exports = function toReadable (number) {
    const numStr = String(number);
    
    let str = ""
    const a = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const b = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if ( number === 0){
        str = "zero";
    } else if  (numStr.length === 1){
        str = `${a[number]}`;
    } else if  (numStr.length === 2){
        if (number < 20) {
            str = `${a[number]}`;
        } else {
            str = `${b[numStr[0]]} ${a[numStr[1]]}`
        }
        
    } else if (numStr.length === 3){
        const num = numStr[1] + numStr[2]
        if (+num < 20) {
            str = `${a[numStr[0]]} hundred ${a[+num]}`
        } else {
            str = `${a[numStr[0]]} hundred ${b[numStr[1]]} ${a[numStr[2]]}`
        }
        
    }
    return str.trim();
}
