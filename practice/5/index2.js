function prime(){
    var psequence=""
    var n= parseInt(document.getElementById('inp').value)
    for(i=2;i<=n;i++){
        var temp=0
        for(j=2;j<=i;j++){
            if(i%j==0){
                temp=temp+1;

            }
        }
        if(temp==1){
          psequence+=i+" ";
        //   document.getElementById('prime').value=psequence;
        }
    }
    document.getElementById('prime').value=psequence;
}