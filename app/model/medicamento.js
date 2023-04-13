export class Medicamento {
    constructor(medicamento, fabricante, data) {
        this.medicamento = medicamento;
        this.fabricante = fabricante;
        this.data = data;
    }
}


let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

window.onload = function() {
    const listaProdutos = document.getElementById("lista-produtos");
produtos.forEach(produto => {
  let listItem = document.createElement("li");
  let produtoInfo = document.createTextNode(`${produto.medicamento} - ${produto.fabricante} - ${produto.data}`);
  listItem.appendChild(produtoInfo);
  listaProdutos.appendChild(listItem);
});
}

console.log(produtos.length);