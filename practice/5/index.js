// function fibonacci() {
//     var number = parseInt(document.getElementById('no').value); 
//     var a = 0;
//     var b = 1;
//     var fibsequence = "";
//     fibsequence += a + ", " + b + ", ";
    
//     if (number <= 2) {
//         document.getElementById('fib').value = fibsequence;
//         return;
//     }
    
//     for (var i = 2; i < number; i++) {
//         var c = a + b;
//         fibsequence += c;
//         if (i < number - 1) fibsequence += ", "; 
//         a = b;
//         b = c;
//     }
    
//     document.getElementById('fib').value = fibsequence;
// }

function fibonacci(n,a,b){
    if(n==1){
       
       return 0
    }
    
    var c =a+b
    document.getElementById('fib').value+=c+" "
    fibonacci(n-1,b,c)
}
function start(){
var a=0
var b=1
var n = parseInt(document.getElementById('no').value); 
document.getElementById('fib').value+=0+" "
document.getElementById('fib').value+=1+" "
fibonacci(n-1,a,b)
}