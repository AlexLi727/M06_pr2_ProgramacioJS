let Lista = document.getElementById("taula_propietats");
Lista.innerHTML = `
<table border = 1px solid black>
<tr>
<th> 1 </th> <th> 2 </th>
</tr>

<tr>
<td>Valor máxim que pot tenir un número JS</td>
<td>`+Number.MAX_VALUE+`</td>
</tr>

<tr>
<td>Altura total de la pantalla</td> 
<td>`+screen.height+`</td>
</tr>

<tr>
<td> Altura interna de la finestra </td>
<td>`+window.innerHeight+`</td>
</tr>

<tr>
<td>URL de la web</td>
<td>`+document.URL+`</td>
</tr>
</table>
`;



function setTimer(){
    let minutos = document.getElementById("minutos");
    let segundos = document.getElementById("segundos");
    let newMin = document.getElementById("setMin").value;
    let newSec = document.getElementById("setSec").value.toString();
    minutos.innerHTML = newMin
    segundos.innerHTML = newSec
    if(isNaN(parseInt(newMin))){
        minutos.innerHTML = 0;
    }
    if(isNaN(parseInt(newSec))){
        segundos.innerHTML = "00";
    }
}
function startTimer(){
        let minutos = parseInt(document.getElementById("minutos").textContent);
        let segundos = parseInt(document.getElementById("segundos").textContent);
    let countdown = window.setInterval(function (){
        
        segundos--;
        if(segundos == 0 && minutos == 0){
            clearInterval(countdown);
        }
        if(segundos == -1){
            segundos = 59;
            minutos--;
            document.getElementById("minutos").innerHTML = minutos;
        }
        if(segundos == 0 && minutos == 0){
            clearInterval(countdown);
        }
        document.getElementById("segundos").innerHTML = segundos;
        

        
    }
    ,1000)
}