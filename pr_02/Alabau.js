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
    let newSec = document.getElementById("setSec").value;
    minutos.innerHTML = newMin
    segundos.innerHTML = newSec
    if(isNaN(parseInt(newMin))){
        minutos.innerHTML = 0;
    }
    if(isNaN(parseInt(newSec))){
        segundos.innerHTML = 0;
    }
}
function startTimer(){
        let minutos = parseInt(document.getElementById("minutos").textContent);
        let segundos = parseInt(document.getElementById("segundos").textContent);
        let audio = document.getElementById("audio1");
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
            audio.load();
            audio.play();
            document.getElementById("stopMusic").style.display = "inline";
        }

        document.getElementById("segundos").innerHTML = segundos;

        document.getElementById("stop").addEventListener("click", function(){
            clearInterval(countdown);
            document.getElementById("stop").style.display = "none";
            document.getElementById("reset").style.display = "inline";
        });
        
        document.getElementById("reset").addEventListener("click", function(){
            document.getElementById("stop").style.display = "inline";
            document.getElementById("reset").style.display = "none";
            document.getElementById("minutos").innerHTML = 0;
            document.getElementById("segundos").innerHTML = 0;
        })

        document.getElementById("stopMusic").addEventListener("click", function(){
            audio.pause();
        })
    }
    ,1000);
}

let Alarm_hrs = 25;
let Alarm_min = 60;
let Alarm_sec = 60;
let audio2 = document.getElementById("audio2");
let clock = window.setInterval(function(){
    let time = new Date();
    let rellotge = document.getElementById("reloj");
    
    
    rellotge.innerHTML = time.getHours()+`:` +time.getMinutes()+`:`+ time.getSeconds();
    document.getElementById("setAlarm").addEventListener("click", function(){
        Alarm_hrs = document.getElementById("alarmHrs").value;
        Alarm_min = document.getElementById("alarmMin").value;
        Alarm_sec = document.getElementById("alarmSec").value;
    });
    if(Alarm_hrs == time.getHours() && Alarm_min == time.getMinutes() && Alarm_sec == time.getSeconds()){
        audio2.play();
        document.getElementById("stopMusic2").style.display = "inline";
        document.getElementById("unstopMusic").style.display = "none";

    }
    document.getElementById("stopMusic2").addEventListener("click", function(){
        audio2.pause();
        document.getElementById("unstopMusic").style.display = "inline";
        document.getElementById("stopMusic2").style.display = "none";
    });

    document.getElementById("unstopMusic").addEventListener("click", function(){
        audio2.play();
        document.getElementById("unstopMusic").style.display = "none";
        document.getElementById("stopMusic2").style.display = "inline";
    })
    document.getElementById("selectSong").addEventListener("click", function(){
        song = document.getElementById("playlist").value
        
        switch(song){
            case "OneStepCloser":
                audio2.src = "One Step Closer.mp3";
                break;
            case "AllStar":
                audio2.src = "SmashMouth-AllStar_64kb.mp3";
                break;
        }
    });
    
}, 1000);
function changeVolume(){
    audio2.volume = document.getElementById("volume").value;
}



