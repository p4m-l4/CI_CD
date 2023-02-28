const validate = () =>{
let val = 0;

var num1 = document.calculate.num1;
var num2 = document.calculate.num2;
var operator = document.calculate.operator;


// Error

var num1Error = document.getElementById('num1err');
var num2Error = document.getElementById('num2err');
var operatorError = document.getElementById('operatorerr');


////////////////////////////////////////////////////////////////////////////////////
const Numerics = [0-9]+ ;
if(num1.value==''){
    num1.style.border='5px solid red';
    num1Error.textContent ='This field is required.'
    num1Error.style='color: red; , font-size:10;'
    val++
}else if(!(num1.value.match(Numerics))){
    num1.style.border='1px solid red';
    num1Error.textContent ='This field is alphabetic.'
    num1Error.style='color: red; , font-size:10;'
    return false;
}else{
    num1.style.border='1px solid green';
    num1Error.textContent ='';
}


if(num2.value==''){
    num2.style.border='5px solid red';
    num2Error.textContent ='This field is required.'
    num2Error.style='color: red; , font-size:10;'
    val++
}else if(!(num2.value.match(Numerics))){
    num2.style.border='1px solid red';
    num2Error.textContent ='This field is alphabetic.'
    num2Error.style='color: red; , font-size:10;'
    return false;
}else{
    num2.style.border='1px solid green';
    num2Error.textContent ='';
}
}


if(operator.value==''){
    operator.style.border='5px solid red';
    operatorError.textContent ='This field is required.'
    operatorError.style='color: red; , font-size:10;'
    val++
}else if(!(operator.value.match(Numerics))){
    operator.style.border='1px solid red';
    operatorError.textContent ='This field is alphabetic.'
    operatorError.style='color: red; , font-size:10;'
    return false;
}else{
    operator.style.border='1px solid green';
    operatorError.textContent ='';
}