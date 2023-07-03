'use strict';
import { Medicamento } from "/app/model/medicamento.js";

let usuario = window.prompt('Insira seu nome: ');
let usuariosemespaco = usuario.trim();
let acesso = usuariosemespaco.toUpperCase();
if (acesso === 'ERIC') {
  window.alert('Bem vindo !!!');
  $(document).ready(function() {
    // Aplicar a máscara de data no campo desejado usando o plugin
    $('#data-de-compra').mask('00/00/0000');
  });
  let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

  let cadastroForm = document.getElementById('cadastro-form');

  cadastroForm.addEventListener('submit', validar);

  function validar(e) {
    e.preventDefault();
    var form = document.forms[0]; 
    var newmedicamento = form.elements[0].value;
    let newfabricante = document.getElementsByName('fabricante')[0].value;
    let validade = document.getElementsByName('data-de-vencimento')[0].value;
    let newimagem = $('#imagem').val();
    let newlink = document.getElementsByName('link')[0].value;
    let newdescricao = document.getElementsByName('descricao')[0].value;
    let cep = document.getElementsByName('cep')[0].value;
    let cidade = '';
    let egenerico = 'Medicamento não é generico';
    const meuCheckbox = document.querySelector('#egenerico');
        const isChecked = meuCheckbox.checked;
        if (isChecked) {
          egenerico = 'Medicamento é generico';
        } else {
          egenerico = 'Medicamento não é generico';;}

    

    if (newmedicamento.trim() === '') {
      window.alert('Campo do nome é inválido');
      return false;
    }
    if (newfabricante.trim() === '') {
      window.alert('Campo do fabricante é inválido');
      return false;
    }
    if (validade.trim() === '') {
      window.alert('Campo do data de compra é inválido');
      return false;
    }

    let dataAtual = new Date();
    let ano = dataAtual.getFullYear();
    let mes = dataAtual.getMonth() + 1;
    let dia = dataAtual.getDate();
    let hora = dataAtual.getHours();
    let minutos = dataAtual.getMinutes();
    let segundos = dataAtual.getSeconds();
    let compra = `Medicamento comprado ${dia}/${mes}/${ano} as:${hora}:${minutos}:${segundos}`;
   
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response => response.json())
  .then(data => {
    if (data.cep) {
      cidade = ` ${data.localidade}`; 
      cadastrar(newmedicamento, newfabricante, validade, 
        newimagem, newlink, newdescricao, egenerico, cidade, compra);
    } else {
      cidade = 'CEP não encontrado ou inválido.';
      cadastrar(newmedicamento, newfabricante, validade, 
        newimagem, newlink, newdescricao, egenerico, cidade, compra);

    }
  })
  .catch(error => {
    console.error('Erro:', error);
  });
  return true;
  }

  function cadastrar(newmedicamento, newfabricante, validade, 
    newimagem, newlink, newdescricao, egenerico, cidade, compra) {
     let medicamento = newmedicamento.charAt(0).toUpperCase() + newmedicamento.slice(1);
    let fabricante = newfabricante.charAt(0).toUpperCase() + newfabricante.slice(1);
    let newProduto = new Medicamento(medicamento, fabricante, validade, 
      newimagem, newlink, newdescricao, egenerico, cidade, compra);

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
      window.location.href = '../../index.html'; // Redireciona para a página inicial
    })
    .catch(error => {
      console.error('Erro ao cadastrar o medicamento:', error);
    });
  }
} else {
  window.alert('Usuário não possui acesso a esta aba');
  window.location.href = '../../index.html';
}
