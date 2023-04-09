let Usuario = prompt("Insira seu nome: ");

if (Usuario === 'Eric') {
  alert('Bem vindo !!!')

  let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

  function cadastrar() {
       let newmedicamento = document.getElementsByName("medicamento")[0].value;
    let newfabricante = document.getElementsByName("fabricante")[0].value;
    let newcompra = document.getElementsByName("data-de-compra")[0].value;
    let newProduto = { medicamento: newmedicamento, fabricante: newfabricante, dataCompra: newcompra };

    // Adiciona o objeto no array de produtos
    produtos.push(newProduto);

    // Salva o array no localStorage
    localStorage.setItem("produtos", JSON.stringify(produtos));

    alert('Medicamento cadastrado com sucesso ! ')
    if(confirm('deseja cadastrar um novo produto')){
    } else {
      setTimeout(function() {
        window.location.href = "/index.html";
      }, 3000);
    }
  }

  // Exibe os produtos cadastrados ao carregar a página
  let listaProdutos = document.getElementById("lista-produtos");
  for (let i = 0; i < produtos.length; i++) {
    let produto = produtos[i];
    let listItem = document.createElement("li");
    let produtoInfo = document.createTextNode(produto.medicamento + " - " + produto.fabricante + " - " + produto.dataCompra);
    listItem.appendChild(produtoInfo);
    listaProdutos.appendChild(listItem);
  }
} else {
  alert('Usuário não possui acesso a esta aba')
  window.location.href = "/index.html";
}
