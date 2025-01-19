let str1="crazy"
let str2="amazing"
let str3="fire"

let sh1="engine"
let sh2="foods"
let sh3="garments"

let wrd1="bros"
let wrd2="limited"
let wrd3="hub"
let first,second,third
let random=Math.random()

if(random<0.33){
    first=str1
}
else if(random>0.33 && random<0.66){
    first=str2
}
else{
    first=str3
}
// second
random=Math.random()

if(random<0.33){
    second=sh1
}
else if(random>0.33 && random<0.66){
    second=sh2
}
else{
    second=sh3
}
random=Math.random()

if(random<0.33){
    third=wrd1
}
else if(random>0.33 && random<0.66){
    third=wrd2
}
else{
    third=wrd3
}
console.log(`${first} ${second} ${third}`)