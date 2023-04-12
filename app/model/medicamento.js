export class Medicamento {
    constructor(medicamento, fabricante, datadecompra) {
        this.medicamento = medicamento;
        this.fabricante = fabricante;
        this.datadecompra = datadecompra;
    }
}


let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

window.onload = function() {
    let listaProdutos = document.getElementById("lista-produtos");
    for (let i = 0; i < produtos.length; i++) {
      let produto = produtos[i];
      let listItem = document.createElement("li");
      let produtoInfo = document.createTextNode(produto.medicamento + " - " + produto.fabricante + " - " + produto.dataCompra);
      listItem.appendChild(produtoInfo);
      listaProdutos.appendChild(listItem);
    }}