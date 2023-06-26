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
  $(document).ready(function() {
    $('data-de-compra').mask('00/00/0000');
  });

  function validar() {
    let newmedicamento = document.getElementsByName('medicamento')[0].value;
    let newfabricante = document.getElementsByName('fabricante')[0].value;
    let newcompra = document.getElementsByName('data-de-compra')[0].value;

    if (newmedicamento.trim() === '') {
      window.alert('Campo do nome é inválido');
      return false;
    }
    if (newfabricante.trim() === '') {
      window.alert('Campo do fabricante é inválido');
      return false;
    }
    if (newcompra.trim() === '') {
      window.alert('Campo do data de compra é inválido');
      return false;
    }

    cadastrar();
    return true;
  }

  function cadastrar() {
    let newmedicamento = document.getElementsByName('medicamento')[0].value;
    let newfabricante = document.getElementsByName('fabricante')[0].value;
    let newcompra = document.getElementsByName('data-de-compra')[0].value;
    let medicamento = newmedicamento.charAt(0).toUpperCase() + newmedicamento.slice(1);
    let fabricante = newfabricante.charAt(0).toUpperCase() + newfabricante.slice(1);
    let newProduto = new Medicamento(medicamento, fabricante, newcompra);

    produtos.push(newProduto);

    // Salva o array no localStorage
    localStorage.setItem('produtos', JSON.stringify(produtos));

    // Faz a requisição POST para o JSON Server
    fetch('http://localhost:3000/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduto),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Medicamento cadastrado com sucesso!');
      if (window.confirm('Deseja cadastrar um novo produto?')) { 
        window.location.href = 'cadastro.html';
      } else {
        setTimeout(() => {
          window.location.href = '/index.html';
        }, 3000);
      }
    })
    .catch(error => {
      console.error('Erro ao cadastrar o medicamento:', error);
    });
  }
} else {
  window.alert('Usuário não possui acesso a esta aba');
  window.location.href = '/index.html';
}
