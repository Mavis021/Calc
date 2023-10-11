var trigFlag = false;
var rootFlag = false;
var logFlag  = false;
var tempVal = "";
var fun = "";

// This function clear all the values
function clearScreen() {
    document.getElementById("inputText").value = "";
    document.getElementById("result").value = "";
}

function deleteOne(){
    var inputElement = document.getElementById("inputText");
    var inputVal = inputElement.value;

//check if input value is not empty
    if(inputVal.length > 1){
        //delete the last  
        inputElement.value = inputVal.slice(0,-1);
    }
    else{
        clearScreen();  //for complete new input after deletion
    }
    document.getElementById("result").value +=value;

}

// This function display values
function display(value) {

    document.getElementById("inputText").value += value;

    //check if trigonometric input is given
    if(trigFlag == false && rootFlag == false && logFlag == false){
    if(value == 'sin(' || value == 'cos(' || value == 'tan('){
        trigFlag = true;
        fun = value;    
    }
    else if( value == 'sqrt('){
        rootFlag = true;
    }
    else if(value == 'ln('){
        logFlag = true;
    }
    else{
    document.getElementById("result").value += value;
    }
    }
    else{
        if(value == ')'){
            if(trigFlag == true){
            calcTrig(fun,tempVal);
            trigFlag = false;
            }
            else if(rootFlag == true){
                squareRoot(tempVal);
                rootFlag = false;
            }
            else{
                naturalLog(tempVal);
                logFlag = false;
            }
            tempVal = "";
            return;
        }
        tempVal += value;
        console.log(angle);
    }
}

//natural log calculations
function naturalLog(v){
    document.getElementById("result").value += Math.log(v);
}

//squareroot Calculations
function squareRoot(v){
    document.getElementById("result").value += Math.sqrt(v);
}

//trigonometric calculation
function calcTrig(func,angle){
    switch(func){
        case 'sin(':
            document.getElementById("result").value += Math.sin(parseFloat(angle* (Math.PI/ 180)));
        break;
        case 'cos(': 
            document.getElementById("result").value += Math.cos(parseFloat(angle* (Math.PI/ 180)));
        break;
        case 'tan(':
            if(((angle > 90) && (((angle / 90) % 2) !== 0)) || (angle == 90)){
            document.getElementById("result").value = 'Math ERROR : Press AC to restart';
            }
            else{
            document.getElementById("result").value += Math.tan(parseFloat(angle * (Math.PI/180)));    
            }
        break;
        default:
            console.log("Error in trigonometric input");
        break;
    }
}

// function calcTrig(){
//     display('sin(');
    // var inputElement = document.getElementById("result");
    // var inputVal = inputElement.value;
    // var angle = 0;
    // var j = 1;
    // var i = 0;
    // while(inputVal != '('){
    //     angle += j * parseInt(inputVal.charAt(inputVal.length -1-i));
    //     inputElement.value = inputVal.slice(0,-1);
    //     i++;
    //     j *= 10;
    // }
    // for(let i = 0 ;i <4 ;i++){
    //     inputElement.value = inputVal.slice(0,-1);
    // }

    // inputElement.value += Math.sin(angle);

//}

// This function evaluates the expression and return result
function calculate() {
   // callCalc = true;
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}