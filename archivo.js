var botonEncriptar = document.querySelector(".Boton-encriptar");
var botonDesencriptar = document.querySelector(".Boton-desencriptar");
var munieco = document.querySelector(".contenedor-munieco");
var copiarTexto = document.querySelector(".Boton-copiar");
var limpiarTexto = document.querySelector(".Boton-limpiar");
var h3 = document.querySelector(".contenedor-h3");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
copiarTexto.onclick = copiar;
limpiarTexto.onclick = limpiar;

function encriptar(){
    ocultarAdelante();
    resultado.textContent = encriptarTexto(recuperarTexto());
}
function desencriptar(){
    ocultarAdelante();
    resultado.textContent = desencriptarTexto(recuperarTexto());
}
function copiar(){
    var resultado = document.querySelector(".texto-resultado");
    navigator.clipboard.writeText(resultado.textContent);
}
function recuperarTexto(){
    var area = document.querySelector(".area");
    document.getElementById("area").focus();
    return area.value;
}
function ocultarAdelante(){
    munieco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}
function limpiar(){
    var area = document.querySelector(".area");
    var resultado = document.querySelector(".texto-resultado");
    area.value ="";
    resultado.textContent="";
}
function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for (var i=0; i < texto.length; i++)    {

        if(texto[i]=="a") {
        textoFinal = textoFinal + "ai" }
     
        else if(texto[i]=="e"){
        textoFinal = textoFinal + "enter" }
    
        else if(texto[i]=="i"){
        textoFinal = textoFinal + "imes" }
    
        else if(texto[i]=="o"){
        textoFinal = textoFinal + "ober" }
    
        else if(texto[i]=="u"){
        textoFinal = textoFinal + "ufat" }
    
    else {
        textoFinal = textoFinal + texto[i];
    }
}
    return textoFinal  }

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for (var i=0; i < texto.length; i++)    {

        if(texto[i]=="a") {
        textoFinal = textoFinal + "a"
        i = i + 1; }
     
        else if(texto[i]=="e"){
        textoFinal = textoFinal + "e" 
        i = i + 4;}
    
        else if(texto[i]=="i"){
        textoFinal = textoFinal + "i" 
        i = i +3;}
    
        else if(texto[i]=="o"){
        textoFinal = textoFinal + "o" 
        i = i +3;}
    
        else if(texto[i]=="u"){
        textoFinal = textoFinal + "u" 
        i = i +3;}
    
    else {
        textoFinal = textoFinal + texto[i];
    }
}
    return textoFinal }



