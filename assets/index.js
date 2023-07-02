  'use strict';
  
  (function() {
    let tempodeuso = 0;
    let teFuncao = function() {
      tempodeuso++;
      let tempo = tempodeuso + ` segundos`;
      document.getElementById('usox').innerHTML = tempo;
    };
    setInterval(teFuncao, 1000);
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
  const atual = document.querySelector('.cook');
 const proximo = atual.nextElementSibling;
 proximo.classList.add('blue');
 proximo.classList.add('lighten-4');
$('h4').css('color', '#26a69a');
 $('.rodape > h5').css('font-weight', 'bold');
 $('div + p').css('color', 'blue');
 $('div button').css('color', 'purple');
 $('#cookies').parent().css('background-color', '#bbdefb');
 $('#topo').next().css('background-color', '#e1f5fe');
 $('#botoes-rodape').children().css('background-color', '#64b5f6');
 
 $('#apagar').on('click', function() {
  // Código a ser executado quando o mouse passar sobre o elemento
  $(this).css('background-color', 'red');
});
let clicks = 0;
$('#apagar').on('dblclick', function() {
  clicks++;
  if (clicks === 2) {
    $(this).css('background-color', 'blue'); // Exemplo: Alterando a cor de fundo para vermelho
    clicks = 0; // Reinicia o contador de cliques
  }});

 let dataAtual = new Date();
 let hora = dataAtual.getHours();
 let minutos = dataAtual.getMinutes();
 let segundos = dataAtual.getSeconds();

 let mensagem = 'sistema iniciado ' + hora + ':' + minutos + ':' + segundos + ';';
 localStorage.setItem('chave', mensagem);
 console.log('sistema ok');
 $('#hora').text('Sistema acessado as: '+hora+' : '+minutos+' : '+segundos+';');
 $('#click-aqui').focus(function() {
  $(this).val('Você foi enganado');
});
}, 500);



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
  
