let a=parseInt(prompt("enter 1st number"))
let b=parseInt(prompt("enter 2nd number"))
if(a>b){
    document.querySelector("h1").innerText="A is greater than B"
}
if(a<b){
    document.querySelector("h1").innerText="B is greater than A"
}
if(a==b){
    document.querySelector("h1").innerText="A is equal to B"
}