"use strict";
(function(){
    let tempodeuso = 0;
    let tempo = document.querySelector('#tempo');
    let teFuncao = function(){
      tempodeuso++;
      tempo.textContent = tempodeuso + ` segundos`;
      
  }
    setInterval( teFuncao , 1000)
  })();

  function imprimirValor(event) {
    console.log(event.target.value);
  }
  // parte de baixo do arquivo
setTimeout( function (){
    let sistema= window.sistemadev;
    sistema.innerHTML  = 'Sistema desenvolvido pela Ek desenvolvimentos';
}, 2000);

document.addEventListener('mousemove', function(e) {
    const x = e.pageX;
    const y = e.pageY;

    const button = document.getElementById('mause');
    button.textContent = `Posição do mouse: X=${x}px, Y=${y}px`;
   
  });

  document.addEventListener('keypress', function(tcl) {
    if (tcl.charCode === 112) { 
      window.location.href = "/app/pages/cadasto.html";
    }
  });
  document.addEventListener("keydown", function (tecla){
    if(tecla.keyCode === 13){
        console.log(tecla.type)
    }; 
  });

let links = document.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
  links[i].classList.add("blue");
  links[i].classList.add("lighten-2");
}
 
  