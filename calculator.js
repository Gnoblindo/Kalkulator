let number1 = 0;
let number2 = 0;
let operation = 0;
const plane = document.getElementById("Screen")

const numbers = document.querySelectorAll('.numbers');

numbers.forEach(number => {
    number.addEventListener('click', function() {
        const curr = parseInt(this.textContent);
        plane.innerHTML = plane.innerHTML + curr;
        if (operation < 1){
            number1 = number1 * 10;
            number1 += curr;
        }
        else{
            number2 = number2 * 10;
            number2 += curr;
        }

    });
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