'use strict';
export class Medicamento{
    constructor(medicamento, fabricante, vencimento, imagem, link, descricao, egenerico, cidade,  compra) {
        this.medicamento = medicamento;
        this.fabricante = fabricante;
        this.vencimento = vencimento;
        this.imagem = imagem;
        this.link = link;
        this.descricao = descricao;
        this.egenerico = egenerico;
        this.cidade = cidade;
        this.compra = compra;
    }
}

window.onload = function () {
  fetch('https://my-json-server.typicode.com/erickwiatkowski/projrto-2023/produtos')
    .then(response => response.json())
    .then(data => {
      const produtos = data || [];
      let html = '';
      produtos.forEach(produto => {
        html += `   
        <div class="col s12 m6 l4 xl3">
        <div class="card blue">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="${produto.imagem}">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${produto.medicamento}<i class="material-icons right">more_vert</i></span>
      <p>Medicamento Produzido por: ${produto.fabricante}</p>
      <p>${produto.egenerico}</p>
      <p>Cede da fabricante: ${produto.cidade}</p>
      <p>${produto.compra}</p>
      <p>Data de vencimento do produto: ${produto.vencimento}</p>
      <p><a href="${produto.link}">Acesse para mais informações</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">${produto.medicamento}<i class="material-icons right">close</i></span>
      <p>${produto.descricao}</p>
    </div>
  </div>      
            </div>
        `;
      });
      document.getElementById('lista-produto').innerHTML = html;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};
