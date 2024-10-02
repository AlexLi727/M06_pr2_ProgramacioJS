console.log("Hola!");//mostrar missatge per consola
let div = document.getElementById("div_text");
div.innerHTML = "Hello there! <h1> HTML </h1>";//atribut per modificar el div
div.innerText += "Hello there! <h1> HTML </h1>";//Ignora el tag

//alert("Popupfeo alert");
/*let numero = window.prompt("Indica un numero payaso:");
let resultat = document.getElementById("div_numero");
resultat.innerText = numero;*/

let input_numero1 = document.getElementById("input_numero1");//devuelve el input
let numero1 = input_numero1.value;
let input_numero2 = document.getElementById("input_numero2");//devuelve el input
let numero2 = input_numero2.value;

let resultat = document.getElementById("div_numero");
//resultat.innerText = numero;

function sumaValors() {
    let num1 = input_numero1.value;
    let num2 = document.getElementById("input_numero2").value;
    if (isNaN(num1) || isNaN(num2)) {
        num1 = 0;
        num2 = 0;
    }
    resultat.innerText = parseFloat(num1) + parseFloat(num2);
}
let audio = document.getElementById("audio1");
function playAudio() {
    audio.play();
}
function playNext() {
    audio.src = "DRUMC0.WAV";
    audio.play();
}
/*-----------------------------*/

/*1. Exercici01.html
Crea un document HTML amb un div amb id “llista_propietats”. Programa amb JS que es creï una
llista amb els següents missatges i amb els valors obtinguts dinàmicament:*/
//a. Valor mínim que pot tenir un número JS
//b. Amplada total de la pantalla
//c. Amplada interna de la finestra
//d. Títol de la web
//e. Hora actual 
mostraLlista();
window.setInterval(mostraLlista, 1000);//va sense parentesis perque es un objecte executable
function mostraLlista() {
    let llista = document.getElementById("llista_propietats");
    let data = new Date();
    llista.innerHTML = `<ol>
                    <li>Valor mínim que pot tenir un número JS: `+ Number.MIN_VALUE + `</li>
                    <li>Amplada total de la pantalla: `+ screen.width + `</li>
                    <li>Amplada interna de la finestra: `+ window.innerWidth + `</li>
                    <li>Títol de la web: `+ document.title + `</li>
                    <li>Hora actual: `+ data.getDate()
        + `/` + data.getMonth()
        + `/` + data.getFullYear()
        + ` - ` + data.getHours()
        + `:` + data.getMinutes()
        + `:` + data.getSeconds() + `</li>
                    </ol>`;
}

function clk_btn_stopAudio(){
    audio.pause();
    audio.currentTime=0;
}

function clk_btn_mute(){
    audio.muted=!audio.muted;
}

function clk_btn_volUp(){
    audio.volume += 0.2;
}

function clk_btn_volDown(){
    audio.volume -= 0.2;
}

function change_inp_vol(){
    audio.volume = document.getElementById("vol").value;
}

function si(){
    audio.currentTime = document.getElementById("time").value;
}

audio.addEventListener("canplaythrough", function (){
    console.log(document.getElementById("audio1").duration);
    time.max=audio.duration;
})
