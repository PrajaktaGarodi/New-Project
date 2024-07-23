function add(event){
    event.preventDefault();
   var a = parseInt(document.getElementById("num1").value);
   var b = parseInt(document.getElementById("num2").value);
   var sum = a+b;
   document.getElementById("result").innerHTML = "addition : "+sum;
}
function sub(event){
    event.preventDefault();
   var a = parseInt(document.getElementById("num1").value);
   var b = parseInt(document.getElementById("num2").value);
   var sum = a-b;
   document.getElementById("result").innerHTML = "substractuion : "+sum;
}
function mul(event){
    event.preventDefault();
   var a = parseInt(document.getElementById("num1").value);
   var b = parseInt(document.getElementById("num2").value);
   var sum = a*b;
   document.getElementById("result").innerHTML = "multipilcation : "+sum;
}
function div(event){
    event.preventDefault();
   var a = parseInt(document.getElementById("num1").value);
   var b = parseInt(document.getElementById("num2").value);
   var sum = a/b;
   document.getElementById("result").innerHTML = "division : "+sum;
}
