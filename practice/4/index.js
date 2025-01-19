function Ap(no,comd,terms){
    var a=document.getElementById(no).value;
    var d=document.getElementById(comd).value;
    var n=document.getElementById(terms).value;
    var rega=/^[0-9]$/
    a=parseInt(a)
    d=parseInt(d)
    n=parseInt(n)
    if(rega.test(a)!=false&& rega.test(d)==true&&rega.test(n)==true){
    for (i=0;i<n;i++){
        document.getElementById('ap').value+=eval(a+(i*d))+" ";

    }
}
else{
    alert("invalid input");
}
}
