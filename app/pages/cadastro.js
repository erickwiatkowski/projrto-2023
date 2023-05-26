'use strict';
import { Medicamento } from "../model/medicamento.js";

let usuario = window.prompt('Insira seu nome: ');
let usuariosemespaco = usuario.trim();
let acesso = usuariosemespaco.toUpperCase();
if (acesso === 'ERIC') {
  window.alert('Bem vindo !!!');

  let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

  let botaoCadastrar = document.getElementById('botao-cadastrar');
  
  botaoCadastrar.addEventListener('click', validar);

function validar(){
  let newmedicamento = document.getElementsByName('medicamento')[0].value;
  let newfabricante = document.getElementsByName('fabricante')[0].value;
  let newcompra = document.getElementsByName('data-de-compra')[0].value;

  if(newmedicamento === ' '){
    window.alert('Campo do nome é invalido');
    return false;
  }
  if(newfabricante === ' '){
    window.alert('Campo do fabricante é invalido');
    return false;
  }
  if(newcompra === ' ' ){
    window.alert('Campo do data de compra é invalido');
    return false;
  }
  cadastrar();
  return true;
}
function cadastrar(){{
  let newmedicamento = document.getElementsByName('medicamento')[0].value;
  let newfabricante = document.getElementsByName('fabricante')[0].value;
  let newcompra = document.getElementsByName('data-de-compra')[0].value;
  let medicamento = newmedicamento.charAt(0).toUpperCase() + newmedicamento.slice(1);
  let fabricante = newfabricante.charAt(0).toUpperCase() + newfabricante.slice(1);
  let newProduto = new Medicamento(medicamento, fabricante, newcompra);

    produtos.push(newProduto);
  }
    
    // Salva o array no localStorage
    localStorage.setItem('produtos', JSON.stringify(produtos));

    window.alert('Medicamento cadastrado com sucesso ! ');
    if (window.confirm('deseja cadastrar um novo produto')) { 
      window.location.href ='cadasto.html';
    } else {
      setTimeout(() => {
        window.location.href = '/index.html';
      }, 3000);
    }
  }} else {
    window.alert('Usuário não possui acesso a esta aba');
  window.location.href = '/index.html';
}
