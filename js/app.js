var Numero0 = document.getElementById("0");
var Numero1 = document.getElementById("1");
var Numero2 = document.getElementById("2");
var Numero3 = document.getElementById("3");
var Numero4 = document.getElementById("4");
var Numero5 = document.getElementById("5");
var Numero6 = document.getElementById("6");
var Numero7 = document.getElementById("7");
var Numero8 = document.getElementById("8");
var Numero9 = document.getElementById("9");
var On = document.getElementById("on");
var Punto = document.getElementById("punto");
var Sign = document.getElementById("sign");
var igual = document.getElementById("igual");
var sumar = document.getElementById("mas");
var por = document.getElementById("por");
var menos = document.getElementById("menos");
var dividido = document.getElementById("dividido");
var n1 = document.getElementById("display");
var n2 ="";



function Eventos(){
    
 
    Numero0.addEventListener("click", function(){
        
        // document.getElementById("display").innerHTML +="0"
        if (document.getElementById("display").textContent.length < 8){
            if (document.getElementById("display").textContent == "0"){
                document.getElementById("display").textContent = 0;
            } else {
                document.getElementById("display").textContent += 0;
            }
            }
            })
    Numero1.addEventListener("click", function(){
        // document.getElementById("display").innerHTML +="1"
        
        if(document.getElementById("display").textContent.length < 8){
         if(document.getElementById("display").textContent == "0"){
            document.getElementById("display").innerHTML = 1;
         }else{
            document.getElementById("display").innerHTML += 1;
         }
         }
    })
    Numero2.addEventListener("click", function(){
        if(document.getElementById("display").textContent.length < 8){
            if(document.getElementById("display").textContent == "0"){
                document.getElementById("display").innerHTML = 2;
            }else{
                document.getElementById("display").innerHTML += 2;
            }
            }
       
    })
    Numero3.addEventListener("click", function(){
        // document.getElementById("display").innerHTML +="3"
        if(document.getElementById("display").textContent.length < 8){
            if(document.getElementById("display").textContent == "0"){
                document.getElementById("display").innerHTML = 3;
            }else{
                document.getElementById("display").innerHTML += 3;
            }
            }
    })
    Numero4.addEventListener("click", function(){
        // document.getElementById("display").innerHTML +="4"
        if(document.getElementById("display").textContent.length < 8){
            if(document.getElementById("display").textContent == "0"){
                document.getElementById("display").innerHTML = 4;
            }else{
                document.getElementById("display").innerHTML += 4;
            }
            }
    })
    Numero5.addEventListener("click", function(){
        // document.getElementById("display").innerHTML +="5"
        if(document.getElementById("display").textContent.length < 8){
            if(document.getElementById("display").textContent == "0"){
                document.getElementById("display").innerHTML = 5;
            }else{
                document.getElementById("display").innerHTML += 5;
            }
            }
    })
    Numero6.addEventListener("click", function(){
        // document.getElementById("display").innerHTML +="6"
        if(document.getElementById("display").textContent.length < 8){
            if(document.getElementById("display").textContent == "0"){
                document.getElementById("display").innerHTML = 6;
            }else{
                document.getElementById("display").innerHTML += 6;
            }
            }
    })
    Numero7.addEventListener("click", function(){
        // document.getElementById("display").innerHTML +="7"
        if(document.getElementById("display").textContent.length < 8){
            if(document.getElementById("display").textContent == "0"){
                document.getElementById("display").innerHTML = 7;
            }else{
                document.getElementById("display").innerHTML += 7;
            }
            }
    })
    Numero8.addEventListener("click", function(){
        // document.getElementById("display").innerHTML +="8"
        if(document.getElementById("display").textContent.length < 8){
            if(document.getElementById("display").textContent == "0"){
                document.getElementById("display").innerHTML = 8;
            }else{
                document.getElementById("display").innerHTML += 8;
            }
            }
    })
    Numero9.addEventListener("click", function(){
        // document.getElementById("display").innerHTML +="9"
        if(document.getElementById("display").textContent.length < 8){
            if(document.getElementById("display").textContent == "0"){
                document.getElementById("display").innerHTML = 9;
            }else{
                document.getElementById("display").innerHTML += 9;
            }
            }
    })
    
    On.addEventListener("click", function(){
        document.getElementById("display").innerHTML ="0"
        
    })
    Punto.addEventListener("click", function(){
        if(document.getElementById("display").textContent.length < 8){
            if(document.getElementById("display").textContent.indexOf(".") == -1){
                document.getElementById("display").innerHTML += ".";
            }
        }
    })

    Sign.addEventListener("click", function(){
        display.textContent = parseFloat(display.textContent)*-1;
        
    })
}
Eventos()

var botones = document.getElementsByClassName("tecla");
for (let i = 0; i < botones.length; i++) {
botones[i].addEventListener("mousedown", function () {
botones[i].style.transform = "scale(.95, .95)";
});
botones[i].addEventListener("mouseup", function () {
botones[i].style.transform = "scale(1, 1)";
});
};

igual.onclick = myFunction;
var operacion;




sumar.addEventListener("click", function(){suma()});
function suma(){
    operacion = "1";
    n2 = n1.textContent;
    n1.innerText = "";
    return;
}
menos.addEventListener("click", function(){resta()});
function resta(){
    operacion = "2";
    n2 = n1.textContent;
    n1.innerText = "";
    return;
}
por.addEventListener("click", function(){multiplica()});
function multiplica(){
    operacion = "3";
    n2 = n1.textContent;
    n1.innerText = "";
    return;
}
dividido.addEventListener("click", function(){divide()});
function divide(){
    operacion = "4";
    n2 = n1.textContent;
    n1.innerText = "";
    return;
}



function myFunction(){
    switch(operacion){
        case "1":
            resultado = parseFloat(n1.textContent) + parseFloat(n2);
        break;
        case "2":
            resultado = parseFloat(n2) - parseFloat(n1.textContent);
        break;
        case "3":
            resultado = parseFloat(n2) * parseFloat(n1.textContent);
        break;
        case "4":
            resultado = parseFloat(n2) / parseFloat(n1.textContent);
        break;
    }
    document.getElementById("display").innerHTML = resultado;
}


