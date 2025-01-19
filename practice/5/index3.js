function towerofhanoi(n,from_rod,to_rod,aux_rod){

    if(n==0){
        return;
    }
    towerofhanoi(n-1,from_rod,aux_rod,to_rod);
    document.getElementById('hanoi').value+="move disc "+n+ " from rod "+from_rod+ " to rod "+ to_rod +"\n"
    towerofhanoi(n-1,aux_rod,to_rod,from_rod)
}
function operate(){
var N=parseInt(document.getElementById('inp').value);
towerofhanoi(N,'A','C','B')
}