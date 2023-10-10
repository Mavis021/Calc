
// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}

function deleteOne(){
    var inputElement = document.getElementById("result");
    var inputVal = inputElement.value;

//check if input value is not empty
    if(inputVal.length > 0){
        //delete the last  
        inputElement.value = inputVal.slice(0,-1);
    }
}
// This function display values
function display(value) {
    document.getElementById("result").value += value;
}

// function calcTrig(){
//     var inputElement = document.getElementById("result");
//     var inputVal = inputElement.value;

//     var angle = 0;
//     var j = 1;
//     var i = 0;
//     while(inputVal != '('){
//         angle += j * inputVal.charAt(inputVal.length -1-i);
//         inputElement.value = inputVal.slice(0,-1);
//         i++;
//         j *= 10;
//     }
//     for(let i = 0 ;i <4 ;i++){
//         inputElement.value = inputVal.slice(0,-1);
//     }

//     inputElement.value += Math.sin(angle);

// }

function calcSin(){
    try{
        const angle = parseFloat(document.getElementById("result").value);
        const res = Math.sin(angle* (Math.PI/ 180));
        document.getElementById("result").value = res;
    }
    catch(error){
        document.getElementById("result").value = 'Error';
    }
    }

// This function evaluates the expression and return result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}