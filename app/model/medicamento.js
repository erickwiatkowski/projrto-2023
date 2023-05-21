"use strict";
export class Medicamento{
    constructor(medicamento, fabricante, data, egenerico) {
        this.medicamento = medicamento;
        this.fabricante = fabricante;
        this.data = data;
        this.egenerico = egenerico;
    };
};


let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

window.onload = function() {
    const listaProdutos = document.getElementById("lista-produtos");
produtos.forEach(produto => {
  let listItem = document.createElement("li");
  let produtoInfo = document.createTextNode(`${produto.medicamento} - ${produto.fabricante} - ${produto.data} - ${produto.egenerico}`);
  listItem.appendChild(produtoInfo);
  listaProdutos.appendChild(listItem);
});
}
