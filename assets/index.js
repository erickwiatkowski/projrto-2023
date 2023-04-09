
(function(){
    let tempodeuso = 0;
    let tempo = document.querySelector('#tempo');
    setInterval(function(){
        tempodeuso++;
        tempo.textContent = tempodeuso + ` segundos`;
        
    }, 1000)
  })();
  
setInterval(function (){
    let sistema= window.sistemadev;
    sistema.innerHTML  = 'Sistema desenvolvido pela Ek desenvolvimentos';
},10000);

document.addEventListener('mousemove', function(rato) {
    const x = rato.pageX;
    const y = rato.pageY;

    const button = document.getElementById('myButton');
    button.textContent = `Posição do mouse: X=${x}px, Y=${y}px`;
  });

  document.addEventListener('keydown', function(tcl) {
    if (tcl.key === 'Escape') { 
      window.location.href = "/app/pages/cadasto.html";
    }
  });
  
 
  