let number1 = 0;
let number2 = 0;
let operation = 0;
const plane = document.getElementById("Screen")
document.getElementById("1").addEventListener('click', function(){
    plane.innerHTML = plane.innerHTML + "1";
    if (operation < 1){
        number1 = number1 * 10;
        number1 += 1;
    }
    else{
        number2 = number2 * 10;
        number2 += 1;
    }
});
document.getElementById("2").addEventListener('click', function(){
    plane.innerHTML = plane.innerHTML + "2";
    if (operation < 1){
        number1 = number1 * 10;
        number1 += 2;
    }
    else{
        number2 = number2 * 10;
        number2 += 2;
    }
});
document.getElementById("3").addEventListener('click', function(){
    plane.innerHTML = plane.innerHTML + "3";
    if (operation < 1){
        number1 = number1 * 10;
        number1 += 3;
    }
    else{
        number2 = number2 * 10;
        number2 += 3;
    }
});
document.getElementById("4").addEventListener('click', function(){
    plane.innerHTML = plane.innerHTML + "4";
    if (operation < 1){
        number1 = number1 * 10;
        number1 += 4;
    }
    else{
        number2 = number2 * 10;
        number2 += 4;
    }
});
document.getElementById("5").addEventListener('click', function(){
    plane.innerHTML = plane.innerHTML + "5";
    if (operation < 1){
        number1 = number1 * 10;
        number1 += 5;
    }
    else{
        number2 = number2 * 10;
        number2 += 5;
    }
});
document.getElementById("6").addEventListener('click', function(){
    plane.innerHTML = plane.innerHTML + "6";
    if (operation < 1){
        number1 = number1 * 10;
        number1 += 6;
    }
    else{
        number2 = number2 * 10;
        number2 += 6;
    }
});
document.getElementById("7").addEventListener('click', function(){
    plane.innerHTML = plane.innerHTML + "7";
    if (operation < 1){
        number1 = number1 * 10;
        number1 += 7;
    }
    else{
        number2 = number2 * 10;
        number2 += 7;
    }
});
document.getElementById("8").addEventListener('click', function(){
    plane.innerHTML = plane.innerHTML + "8";
    if (operation < 1){
        number1 = number1 * 10;
        number1 += 8;
    }
    else{
        number2 = number2 * 10;
        number2 += 8;
    }
});
document.getElementById("9").addEventListener('click', function(){
    plane.innerHTML = plane.innerHTML + "9";
    if (operation < 1){
        number1 = number1 * 10;
        number1 += 9;
    }
    else{
        number2 = number2 * 10;
        number2 += 9;
    }
});
document.getElementById("0").addEventListener('click', function(){
    plane.innerHTML = plane.innerHTML + "0";
    if (operation < 1){
        number1 = number1 * 10;
        number1 += 0;
    }
    else{
        number2 = number2 * 10;
        number2 += 0;
    }
});
document.getElementById("operation+").addEventListener('click', function(){
    plane.innerHTML = plane.innerHTML + "+";
    operation += 1;
});
document.getElementById("operation-").addEventListener('click', function(){
    plane.innerHTML = plane.innerHTML + "-";
    operation += 2;
});
document.getElementById("operation*").addEventListener('click', function(){
    plane.innerHTML = plane.innerHTML + "*";
    operation += 3;
});
document.getElementById("operation/").addEventListener('click', function(){
    plane.innerHTML = plane.innerHTML + ":";
    operation += 4;
});
document.getElementById("count").addEventListener('click', function(){
    if (operation == 0){
        //nothing
    }
    else if (operation == 1){
        number1 += number2;
        plane.innerHTML = number1;
        number2 = 0;
        operation = 0;
    }
    else if (operation == 2){
        number1 = number1 - number2;
        plane.innerHTML = number1;
        number2 = 0;
        operation = 0;
    }
    else if (operation == 3){
        number1 = number1 * number2;
        plane.innerHTML = number1;
        number2 = 0;
        operation = 0;
    }
    else if (operation == 4){
        if (number2 != 0){
            number1 = number1 / number2;
            plane.innerHTML = number1;
            number2 = 0;
            operation = 0;
        }
        else{
            plane.innerHTML = "SYNTAX ERROR";
            number2 = 0;
            operation = 0;
        }
    }
});
document.getElementById("AC").addEventListener('click', function(){
    plane.innerHTML = "";
    number1 = 0;
});