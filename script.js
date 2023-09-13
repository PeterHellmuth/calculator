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
        return zeroError;
    } else{
        return numOne/numTwo;
    }
}

function operate(numOne, numTwo, operator){

    numOne = Number(numOne);
    numTwo = Number(numTwo);
    let returnNum = "";
    switch(operator){
        case "+":
            returnNum = add(numOne, numTwo);
            break;
        case "-":
            returnNum = subtract(numOne, numTwo);
            break;
        case "x":
            returnNum = multiply(numOne, numTwo);
            break;
        case "÷":
            returnNum = divide(numOne, numTwo);
            break;
    }

    if(returnNum.toString().length > maxDisplayLength){
        return (Math.round(returnNum*100000)/100000).toExponential(5);
    } else{
        return returnNum;
    }

}


let zeroError = "Nice try!"
let displayNum = "0";
let storedNum = " ";
let storedOperater = null;
const maxDisplayLength = 16;


let displayElem = document.getElementById("display");
let displayStoredElem = document.getElementById("displayStored");


let buttons = document.querySelectorAll(".button");
buttons.forEach((element) => {
    element.addEventListener("click", buttonClicked);
});

function buttonClicked(event){
    const button = event.target;
    if(button.classList.contains("number")){
        currentDisplayString = displayElem.innerText;
        if(displayNum == "0"){
            if(button.id != "0"){
                displayNum = button.id;
            }
        } else if(Number(displayNum)){
            if(displayNum.length < maxDisplayLength){
                displayNum += button.id;
            } else{
                displayNum = button.id;
            }
        } else if (storedOperater != null || displayNum == "ERROR" || displayNum == zeroError){
            displayNum = button.id;
        } else if(storedOperater == null){
            displayNum = button.id;
            
        }
    }else if(button.classList.contains("operator")){
        if(storedNum == " "){
            if(displayNum == "ERROR" || displayNum == zeroError){
                storedNum = "0";  
            } else{
                storedNum = displayNum;
            }
            storedOperater = button.id;
            displayNum = "0";
        } else if(storedOperater != null){
            if(displayNum == "0"){
                storedOperater = button.id;
                displayNum = "0";
            } else{
                storedNum = operate(storedNum, displayNum, storedOperater);
                storedOperater = button.id;
                displayNum = "0";
            }
        }
    } else if (button.id == "="){
        if(Number(storedNum) || storedNum == "0"){
            console.log(storedNum);
            console.log(displayNum);
            displayNum = operate(storedNum, displayNum, storedOperater);
            storedOperater = null;
            storedNum = " ";
        }
    } else if (button.id == "C"){
        displayNum = "0";
        storedNum = " ";
        storedOperater = null;
    }

    displayElem.innerText = displayNum;
    
    if(storedOperater != null){
        displayStoredElem.innerText = storedNum + storedOperater;
    } else{
        displayStoredElem.innerText = storedNum;
     }
     
}