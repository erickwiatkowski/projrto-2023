'use strict';
export class Medicamento{
    constructor(medicamento, fabricante, data, imagem, link, descricao, egenerico, cidade) {
        this.medicamento = medicamento;
        this.fabricante = fabricante;
        this.data = data;
        this.imagem = imagem;
        this.link = link;
        this.descricao = descricao;
        this.egenerico = egenerico;
        this.cidade = cidade;
    }
}

window.onload = function () {
  fetch('http://localhost:3000/produtos')
    .then(response => response.json())
    .then(data => {
      const produtos = data || [];
      let html = '';
      produtos.forEach(produto => {
        html += `   
        <div class="col s12 m6 l4 xl3">
        <div class="card blue-grey darken-1">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="${produto.imagem}">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${produto.medicamento}<i class="material-icons right">more_vert</i></span>
      <p>${produto.fabricante}</p>
      <p>${produto.data}</p>
      <p><a href="${produto.link}">This is a link</a></p>
      <p>${produto.egenerico}</p>
      <p>${produto.cidade}</p>
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
