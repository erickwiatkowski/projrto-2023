  'use strict';
  
(function(){
    let tempodeuso = 0;
    let tempo = document.querySelector('#tempo');
    let teFuncao = function(){
      tempodeuso++;
      tempo.textContent = tempodeuso + ` segundos`;
  };
    setInterval(teFuncao , 1000);
  })();

  function imprimirValor(event){
    console.log(event.target.value);
  }
  function slideUpElement() {
    $('#rodape').slideUp();
  }
  function slideDownElement() {
    $('#rodape').slideDown();
  }
  // parte de baixo do arquivo
setTimeout( function (){
    let sistema= window.sistemadev;
    sistema.innerHTML  = 'Sistema desenvolvido pela Ek desenvolvimentos';
 $('.rodape > h5').css('font-weight', 'bold');
 const atual = document.querySelector('.cook');
 const proximo = atual.nextElementSibling;
 proximo.classList.add('blue');
 proximo.classList.add('lighten-4');
}, 2000);



document.addEventListener('mousemove', function(e) {
    const x = e.pageX;
    const y = e.pageY;

    const button = document.getElementById('mause');
    button.textContent = `Posição do mouse: X=${x}px, Y=${y}px`;
   
  });

  document.addEventListener('keypress', function(tcl) {
    if (tcl.charCode === 112) { 
      window.location.href = '/app/pages/cadasto.html';
    }
  });
  document.addEventListener('keydown', function (tecla){
    if(tecla.keyCode === 13){
        console.log(tecla.type);
    } 
  });

let links = document.getElementsByTagName('a');
for (let i = 0; i < links.length; i++) {
  links[i].classList.add('blue');
  links[i].classList.add('lighten-2');
}
 
function criarCookie() {
  const validador = window.prompt('Insira seu código validador:');
  const nome = validador;

  document.cookie = 'nome=' + nome;
  exibirCookies();
}

function getCookies() {
  const cookies = document.cookie.split('; ' );
  const cookieObj = {};

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=');
    const name = cookie[0];
    const value = cookie[1];
    cookieObj[name] = value;
  }

  return cookieObj;
}

function exibirCookies() {
  const cookiesList = document.getElementById("cookiesList");
  cookiesList.innerHTML = '';
  const cookies = getCookies();
  for (const name in cookies) {
    const value = cookies[name];
    const listItem = document.createElement('li');
    listItem.textContent = name + ': ' + value;
    cookiesList.appendChild(listItem);
  }
}
exibirCookies();
  
