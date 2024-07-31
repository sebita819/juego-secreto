//Variables
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);



//Funciones

function asignarTextoElmento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;
} 

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    //Este bloque realiza la comparación

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElmento('p',`Acertaste el número ${intentos} ${(intentos === 1) ? 'vez': 'veces'}`);
        
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{

        //El usuario no acertó.

        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElmento('p','EL número secreto es menor');

        }else{
            asignarTextoElmento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();

    }

    return;

}

function limpiarCaja() {
     document.querySelector('#valorUsuario').value = '';
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
     asignarTextoElmento('p','Ya se sortaron todos los números posibles');

    } else {
        //si el numero generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;   
        }
    }
}

function condicionesIniciales(){
    asignarTextoElmento('h1','Juego del número secreto');
asignarTextoElmento('p',`Indica un número del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos = 1;

} 

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensajes de intervalo de números
    //Generar el número aleatorio 
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true');



    
    
}

condicionesIniciales();


