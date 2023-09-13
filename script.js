function add(numOne, numTwo){
    return numOne+numTwo;
}

function subtract(numOne, numTwo){
    return numOne-numTwo;
}

function multiply(numOne, numTwo){
    return numOne*numTwo;
}

function divide(numOne, numTwo){
    if(numTwo == 0){
        return "ERROR";
    } else{
        return numOne/numTwo;
    }
}

function operate(numOne, numTwo, operator){
    switch(operator){
        case "+":
            return add(numOne, numTwo);
        case "-":
            return subtract(numOne, numTwo);
        case "x":
            return multiply(numOne, numTwo);
        case "÷":
            return divide(numOne, numTwo);
        default:
            return "ERROR";
    }
}


let numOne = 0;
let numTwo = 0;
let operator = "";

console.log(operate(5, 7, "+"));
console.log(subtract(25,20));
console.log(multiply(5.5,7));
console.log(divide(5.5,7));