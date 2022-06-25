"use strict"

const sonido = document.createElement("iframe");

const instrumento= document.querySelector("#crashwav")
const h1 = document.querySelector("h1");

console.log(instrumento);


//elimino imagen del iframe
sonido.height= "0";
sonido.width= "0";


//añado evento al click
window.addEventListener("load", function(){
    document.querySelector("#crashwav").addEventListener("click", sonarCrashWav)
})

//añado sonido y guardo en local Storage
function sonarCrashWav(){
    sonido.setAttribute("src", "/crash.wav");
    document.body.appendChild(sonido);
    localStorage.setItem("save1", "valor1");
}


//añado pulsar en teclas del teclado qwertyuio:
document.addEventListener("keydown", (e)=>{
    console.log(e);
    if(e.code === "KeyQ"){
    console.log("has apretado la q");
    sonarCrashWav(e)
    } 
})



//2
window.addEventListener("load", function(){
    document.querySelector("#hihatclosewav").addEventListener("click", sonarHithatclose)
})

function sonarHithatclose(){
    sonido.setAttribute("src", "/hihat-close.wav");
    document.body.appendChild(sonido);
    localStorage.setItem("save2", "valor2");
}

document.addEventListener("keydown", (e)=>{
    console.log(e);
    if(e.code === "KeyW"){
    sonarHithatclose(e)
    } 
})


//3
window.addEventListener("load", function(){
    document.querySelector("#hihatopenwav").addEventListener("click", sonarHithatopen)
})

function sonarHithatopen(){
    sonido.setAttribute("src", "/hihat-open.wav");
    document.body.appendChild(sonido);
    localStorage.setItem("save3", "valor3");
}

document.addEventListener("keydown", (e)=>{
    console.log(e);
    if(e.code === "KeyE"){
    sonarHithatopen(e)
    } 
})


//4
window.addEventListener("load", function(){
    document.querySelector("#kickwav").addEventListener("click", sonarKick)
})

function sonarKick(){
    sonido.setAttribute("src", "/kick.wav");
    document.body.appendChild(sonido);
    localStorage.setItem("save4", "valor4");
}

document.addEventListener("keydown", (e)=>{
    console.log(e);
    if(e.code === "KeyR"){
    sonarKick(e)
    } 
})

//5
window.addEventListener("load", function(){
    document.querySelector("#ridewav").addEventListener("click", sonarRide)
})

function sonarRide(){
    sonido.setAttribute("src", "/ride.wav");
    document.body.appendChild(sonido);
    localStorage.setItem("save5", "valor5");
}

document.addEventListener("keydown", (e)=>{
    console.log(e);
    if(e.code === "KeyT"){
    sonarRide(e)
    } 
})


//6
window.addEventListener("load", function(){
    document.querySelector("#snarewav").addEventListener("click", sonarSnare)
})

function sonarSnare(){
    sonido.setAttribute("src", "/snare.wav");
    document.body.appendChild(sonido);
    localStorage.setItem("save6", "valor6");
}

document.addEventListener("keydown", (e)=>{
    console.log(e);
    if(e.code === "KeyY"){
    sonarSnare(e)
    } 
})


//7
window.addEventListener("load", function(){
    document.querySelector("#tomhighwav").addEventListener("click", sonarTomhigh)
})

function sonarTomhigh(){
    sonido.setAttribute("src", "/tom-high.wav");
    document.body.appendChild(sonido);
    localStorage.setItem("save7", "valor7");
}

document.addEventListener("keydown", (e)=>{
    console.log(e);
    if(e.code === "KeyU"){
    sonarTomhigh(e)
    } 
})


//8
window.addEventListener("load", function(){
    document.querySelector("#tomlowwav").addEventListener("click", sonarTomlow)
})

function sonarTomlow(){
    sonido.setAttribute("src", "/tom-low.wav");
    document.body.appendChild(sonido);
    localStorage.setItem("save8", "valor8");
}

document.addEventListener("keydown", (e)=>{
    console.log(e);
    if(e.code === "KeyI"){
    sonarTomlow(e)
    } 
})

//9
window.addEventListener("load", function(){
    document.querySelector("#tommidwav").addEventListener("click", sonarTommid)
})

function sonarTommid(){
    sonido.setAttribute("src", "/tom-mid.wav");
    document.body.appendChild(sonido);
    localStorage.setItem("save9", "valor9");
}

document.addEventListener("keydown", (e)=>{
    console.log(e);
    if(e.code === "KeyI"){
    sonarTommid(e)
    } 
})




//recuperar valores de local Storage 

/*function recuperarValores (e){
    localStorage.getItem(e);
}
recuperarValores() */


