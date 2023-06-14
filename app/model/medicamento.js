'use strict';
export class Medicamento{
    constructor(medicamento, fabricante, data) {
        this.medicamento = medicamento;
        this.fabricante = fabricante;
        this.data = data;
    }
}


let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

window.onload = function() {
  //  const listaProdutos = document.getElementById('lista-produto');

    let html ='';
produtos.forEach(produto => {
 html +=`
 <div class="row">
 <div class="col s5 m5">
   <div class="card blue-grey darken-1">
     <div class="card-content white-text">
       <span class="card-title">${produto.medicamento}</span>
       <p>${produto.fabricante}</p>
       <p>${produto.data}</p>
     </div>
   </div>
 </div>
</div> `;
});
document.getElementById('lista-produto').innerHTML = html;
};
// <h4>${produto.medicamento} - ${produto.fabricante} - ${produto.data}</h4>
//let listItem = document.createElement('li');
  //let produtoInfo = document.createTextNode
  //(`${produto.medicamento} - ${produto.fabricante} - ${produto.data}`);
  //listItem.appendChild(produtoInfo);
//  listaProdutos.appendChild(listItem);