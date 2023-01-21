var botonEncriptar = document.querySelector(".Boton-encriptar");
var botonDesencriptar = document.querySelector(".Boton-desencriptar");
var munieco = document.querySelector(".contenedor-munieco");
var copiarTexto = document.querySelector(".Boton-copiar");
var limpiarTexto = document.querySelector(".Boton-limpiar");
var h3 = document.querySelector(".contenedor-h3");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");
var limpiar1 = document.querySelector(".contenedor-resultados");
var limpiar2 = document.querySelector(".contenedor-copiar");
/*const tarjeta1 = document.querySelector(".section1")*/

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
copiarTexto.onclick = copiar;
limpiarTexto.onclick = limpiar;

/*function validarTexto(){
     let erroresPrevios = tarjeta1.querySelector(".error");
    for (let error of erroresPrevios){
        tarjeta1.removeChild(error);
    }
    var mensajes = area.value;
    let letrasValidas = "abcdefghijklmnñopqrstuvwxyz ";
    let mensajeError = document.createDocumentFragment();
    for (let letra of mensajes) {
    if (!letrasValidas.includes(letra)){
    let p = document.createElement("p");
    p.setAtribute("class","error");
    p.textContent = "Las letras mayusculas no son validas";
    mensajeError = appendChild(p);     }
                                }
    tarjeta1.appendChild(mensajeError);
    if (mensajeError.replaceChildren.length === 0) {
        return true;      }
        return false; 
}*/
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
    var area = document.querySelector(".area");
    navigator.clipboard.writeText(resultado.textContent);
    area.value="";
    area.focus();
}
function recuperarTexto(){
    var area = document.querySelector(".area");
    return area.value;
}
function mostrarAtras(){
    munieco.classList.add("mostrar");
    h3.classList.add("mostrar");
    parrafo.classList.add("mostrar");
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
    area.focus();
    resultado.textContent="";
    mostrarAtras();
}
function encriptarTexto(mensaje){
    /*if (!validarTexto()) return;*/
    var texto = mensaje;
    texto = texto.toLowerCase()
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
    /*if (!validarTexto()) return;*/
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



