'use strict';
export class Medicamento{
    constructor(medicamento, fabricante, data) {
        this.medicamento = medicamento;
        this.fabricante = fabricante;
        this.data = data;
    }
}

window.onload = function () {
  fetch('https://erickwiatkowski.github.io/projrto-2023/db.json')
    .then(response => response.json())
    .then(data => {
      const produtos = data || [];
      let html = '';
      produtos.forEach(produto => {
        html += `
          <div class="row">
            <div class="col s12 m12">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">${produto.medicamento}</span>
                  <p>${produto.fabricante}</p>
                  <p>${produto.data}</p>
                </div>
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
