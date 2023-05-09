
let slide = document.querySelector(".content-section-one__slider")
let slideIndividual = document.querySelectorAll(".content-slide")
let contador = 1;
let width = slideIndividual[0].clientWidth;
let intervalo = 5000;

window.addEventListener("resize",function(){
    width = slideIndividual[0].clientWidth;
    })


setInterval(function(){
    slides();
},intervalo);


function slides(){
    slide.style.transform = "translate("+(-width*contador)+"px)";
    slide.style.transition = "transform .9s";
    contador++;

    if(contador == slideIndividual.length)
    setTimeout(function(){
        slide.style.transform = "translate(0px)";
        slide.style.transition = "transform 0s";
        contador=1;
        

    },1500)
}




