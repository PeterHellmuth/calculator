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
let displayNum = "0";

let displayElem = document.getElementById("display");


let buttons = document.querySelectorAll(".button");
buttons.forEach((element) => {
    element.addEventListener("click", buttonClicked);
});

function buttonClicked(event){
    const button = event.target;
    let currentDisplayString = "0";
    if(button.classList.contains("number")){
        currentDisplayString = displayElem.innerText;
        if(currentDisplayString == "0"){
            if(button.id != "0"){
                currentDisplayString = button.id;
            }
        } else{
            currentDisplayString += button.id;
        }
    }else{

    }

    displayElem.innerText = currentDisplayString;
}