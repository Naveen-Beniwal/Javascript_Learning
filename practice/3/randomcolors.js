function getRandomColors() {
    var letter = "ABCDEF0123456789";
    var colors = "#";
    for (var i = 0; i < 6; i++) {
        colors += letter[Math.floor(Math.random() * 16)];
    }
    return colors;
}
function changecolor(){
var elementsWithClassB = document.getElementsByClassName("b");
for (var i = 0; i < elementsWithClassB.length; i++) {
    elementsWithClassB[i].style.backgroundColor = getRandomColors();
}
}
