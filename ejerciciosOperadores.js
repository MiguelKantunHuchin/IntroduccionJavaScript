num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

op = (num5 > num2 && num4 < num3) || (!(num1 === num2) || num3 != num3);

/*  (num5 > num2 && num4 < num3) {
    num5 > num2 es true
    num4 < num3 es false

    true and false es false

}

(!(num1 === num2) {

    (num1 === num2 es false,   not false es true)
    (num3 != num3 es false)
    
    false or true es true
}

resultado final{

    false or true es true
}

*/

console.log(op);