document.addEventListener("DOMContentLoaded", () => {

let firstInput=document.getElementById("firstnumber");
let secondInput=document.getElementById("secondnumber");
let resultdisplay=document.getElementById("result");

let add=document.getElementById("add");
add.addEventListener("click", function(){
    let num1 =firstInput.value.trim(); let num2 =secondInput.value.trim();
if (num1 === "" ||num2 === ""){
    resultdisplay.textContent= "both fields are required"; return;}
let number1=Number(num1);
let number2 =Number(num2);
let finalResult=number1+number2;
resultdisplay.textContent="Result: " + finalResult});





});