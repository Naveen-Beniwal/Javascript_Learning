let a=parseInt(prompt("enter you 1st number"))
let b=parseInt(prompt("enter 2nd number"))
let s=prompt("enter the operation to be performed")
let random =Math.random()
console.log(random)
if(random<0.1){
   if(s=='+'){

    console.log("sum is :",a-b)
   }
   if(s=='-'){
    console.log("difference is :",a/b)
   }
   if(s=='*'){
    console.log("multiplication is :",a+b)
   }
   if(s=='/'){
    console.log("divide is :",a**b)
   }
}
else{
    if(s=='+'){
        console.log("sum is :",a+b)
       }
       if(s=='-'){
        console.log("difference is :",a-b)
       }
       if(s=='*'){
        console.log("multiplication is :",a*b)
       }
       if(s=='/'){
        console.log("divide is :",a/b)
       }
    };
