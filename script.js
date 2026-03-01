document.addEventListener("DOMContentLoaded", () => {

let firstInput=document.getElementById("firstnumber");
let secondInput=document.getElementById("secondnumber");
let resultdisplay=document.getElementById("result");

let add=document.getElementById("add");
add.addEventListener("click", function(){
    let num1 =firstInput.value.trim(); let num2 =secondInput.value.trim();
if (num1 === "" ||num2 === ""){
    resultdisplay.textContent= "both fields are required"; return;}
if (num1.includes (" ") || num2.includes (" ") ){
resultdisplay.textContent = "Spaces are not allowed";return;}
    let number1=Number(num1);
let number2 =Number(num2);
let finalResult=number1+number2;
resultdisplay.textContent="Result: " + finalResult});


let subtract=document.getElementById("subtract");
subtract.addEventListener("click", function(){
    let num1 =firstInput.value.trim(); let num2 =secondInput.value.trim();
if (num1 === "" ||num2 === ""){
    resultdisplay.textContent= "both fields are required"; return;}
if (num1.includes (" ") || num2.includes (" ") ){
resultdisplay.textContent = "Spaces are not allowed";return;}
    let number1=Number(num1);
let number2 =Number(num2);
let finalResult=number1-number2;
resultdisplay.textContent="Result: " + finalResult});


let multiply=document.getElementById("multiply");
multiply.addEventListener("click", function(){
    let num1 =firstInput.value.trim(); let num2 =secondInput.value.trim();
if (num1 === "" ||num2 === ""){
    resultdisplay.textContent= "both fields are required"; return;}
if (num1.includes (" ") || num2.includes (" ") ){
resultdisplay.textContent = "Spaces are not allowed";return;}
    let number1=Number(num1);
let number2 =Number(num2);
let finalResult=number1*number2;
resultdisplay.textContent="Result: " + finalResult});


let divide=document.getElementById("divide");
divide.addEventListener("click", function(){
    let num1 =firstInput.value.trim(); let num2 =secondInput.value.trim();
if (num1 === "" ||num2 === ""){
    resultdisplay.textContent= "both fields are required"; return;}
if (num1.includes (" ") || num2.includes (" ") ){
resultdisplay.textContent = "Spaces are not allowed";return;}
    let number1=Number(num1);
let number2 =Number(num2);
let finalResult=number1/number2;
resultdisplay.textContent="Result: " + finalResult});


let square=document.getElementById("square")
square.addEventListener ("click", function (){
    let num1 =firstInput.value.trim(); let num2 =secondInput.value.trim();
if (num1==="" && num2===""){
resultdisplay.textContent = " At least one field is required";return;}
if (num1.includes (" ") || num2.includes (" ") ){
resultdisplay.textContent = "Spaces are not allowed";return;}
let output= "";
if (num1 !== ""){
let number1= Number(num1);
output+= " First number square: "+(number1*number1);}
if (num2 !==""){
let number2= Number(num2);
if (output !==""){
output+= "|";}
output+= " Second number square: "+(number2*number2)}
resultdisplay.textContent= output;});


let cube= document.getElementById("cube")
cube.addEventListener ("click", function (){
    let num1 =firstInput.value.trim(); let num2 =secondInput.value.trim();
if (num1==="" && num2===""){
resultdisplay.textContent = " At least one field is required";return;}
if (num1.includes (" ") || num2.includes (" ") ){
resultdisplay.textContent = "Spaces are not allowed";return;}
let output= "";
if (num1 !== ""){
let number1= Number(num1);
output+= " First number cube: "+(number1*number1*number1);}
if (num2 !==""){
let number2= Number(num2);
if (output !==""){
output+= "|";}
output+= " Second number cube: "+(number2*number2*number2)}
resultdisplay.textContent= output;});

let reset= document.getElementById("reset")
reset.addEventListener ("click", function(){
firstInput.value =""; secondInput.value ="";
resultdisplay.textContent = "";});

});

