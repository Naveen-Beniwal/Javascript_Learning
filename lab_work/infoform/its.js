const namecheck = (nameid) => {
  var validn = /^[A-Z]{1}[a-z]* [A-Z]{1}[a-z]*$/;
  var yourfirstname = document.getElementById(nameid).value;

  if (validn.test(yourfirstname) == false) {
    if (validn.test(yourfirstname) == false) {
      document.getElementById(nameid).style.backgroundColor = "red";
    }
  } else {
    document.getElementById(nameid).style.backgroundColor = "#fff";
  }
};

const mobilecheck = (mobileid) => {
  var validno = /^[6-9]{1}[0-9]{9}$/;
  var yournumber = document.getElementById(mobileid).value;
  if (validno.test(yournumber) == false) {
    document.getElementById(mobileid).style.backgroundColor = "red";
  } else {
    document.getElementById(mobileid).style.backgroundColor = "#fff";
  }
};

const checkemail=(mailid)=>{
      var youremail=document.getElementById(mailid).value
      var validem= /^[A-Za-z0-9!-_#]{2,16}@gmail.com$/
      if(validem.test(youremail)==false){
        document.getElementById(mailid).style.backgroundColor = "red";
      }
      else{
        document.getElementById(mailid).style.backgroundColor = "#fff";
      }
}
const show=(passid)=>{
  var password=document.getElementById(passid)
  if(password.type==="password"){
    password.type="text"
  }
  else{
    password.type="password"
  }
}
const checkpassword=(passid)=>{
  var validpas=/^[0-9A-Za-z#@!$_-]{8,}$/
  var yourpassword=document.getElementById(passid).value
  if(validpas.test(yourpassword)==false){
    document.getElementById(passid).style.backgroundColor = "red";
  }
  else{
    document.getElementById(passid).style.backgroundColor = "#fff";
  }
}



document.getElementById("name1").addEventListener("input", function () {
  namecheck("name1");
});

document.getElementById("mobile1").addEventListener("input", function () {
  mobilecheck("mobile1");
});
document.getElementById("gmail").addEventListener("input", function () {
  checkemail("gmail");
});
document.getElementById('passwrd').addEventListener("input",function(){
  checkpassword("passwrd");
} )



var myInput = document.getElementById("passwrd");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}


myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

myInput.onkeyup = function() {
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
 
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}