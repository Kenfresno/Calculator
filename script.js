//Basic operations for calculator//
const add = function(x,y) {
    return x + y;
};
const substract = function(x,y) {
    return x-y;
};
const multiply = function(x,y) {
    return x * y;
};
const divide = function(x,y) {
    return x / y;
};

//Initialize two variables to hold numbers//
var x = 0;
var y = 0;
//Initialize variable to hold which operator user selected, set initial result to 0//
var operator = "";
var result = 0;

//First check if user clicked the operator-buttons//
//If any condition is true, store current value on calculator screen//
//Store selected operator and clear the input screen//
function opr(val){
    if (val === "+"){
        operator = val;
        x = +document.getElementById("result").value;
        document.getElementById("result").value = "";  
        return;      
    } else if (val === "-"){
        operator = val;
        x = +document.getElementById("result").value;
        document.getElementById("result").value = ""; 
        return;       
    } else if (val === "*"){
        operator = val;
        x = +document.getElementById("result").value;
        document.getElementById("result").value = "";
        return;        
    } else if (val === "/"){
        operator = val;
        x = +document.getElementById("result").value;
        document.getElementById("result").value = "";
        return;   
    }
    document.getElementById("result").value += val;
    y = +document.getElementById("result").value;
};

function clr(){
    document.getElementById("result").value = ""
    x = 0;
    y = 0;
    operator = "";
};

function solve(){
    if (operator === "+"){
        result = add(x,y);
        document.getElementById("result").value = result;
    } else if (operator === "-") {
        result = substract(x,y);
        document.getElementById("result").value = result;
    } else if (operator === "*") {
        result = multiply(x,y);
        document.getElementById("result").value = result;
    } else if (operator === "/") {
        result = divide(x,y);
        document.getElementById("result").value = result;
    } else return
};