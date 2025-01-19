function subtraction(){
    var m=parseInt(document.getElementById("op1").value);
    var n=parseInt(document.getElementById("op2").value);

document.getElementById("res").innerText=m-n
}
function multiplication(){
    var m=parseInt(document.getElementById("op1").value);
    var n=parseInt(document.getElementById("op2").value);
    document.getElementById("res").innerText=m*n
}
function divide(){
var m=parseInt(document.getElementById("op1").value);
var n=parseInt(document.getElementById("op2").value);
document.getElementById("res").innerText=m/n
}
function addition(){
    var m=parseInt(document.getElementById("op1").value);
    var n=parseInt(document.getElementById("op2").value);
// console.log(m+n)
document.getElementById("res").innerText=m+n
}
