import { Medicamento } from "../model/medicamento.js";

let usuario = prompt("Insira seu nome: ");
let usuariosemespaco = usuario.trim()
let acesso = usuariosemespaco.toUpperCase();
if (acesso === 'ERIC') {
  alert('Bem vindo !!!')
  

  let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

  let botaoCadastrar = document.getElementById("botao-cadastrar");
  botaoCadastrar.addEventListener("click", cadastrar);

  function cadastrar() {
       let newmedicamento = document.getElementsByName("medicamento")[0].value;
       let medicamento = newmedicamento.charAt(0).toUpperCase() + newmedicamento.slice(1);
    let newfabricante = document.getElementsByName("fabricante")[0].value;
    let fabricante = newfabricante.charAt(0).toUpperCase() + newfabricante.slice(1);
    let newcompra = document.getElementsByName("data-de-compra")[0].value;
    let newProduto = new Medicamento(medicamento, fabricante, newcompra);
    // Adiciona o objeto no array de produtos
    produtos.push(newProduto);

    

    // Salva o array no localStorage
    localStorage.setItem("produtos", JSON.stringify(produtos));

    alert('Medicamento cadastrado com sucesso ! ')
    if(confirm('deseja cadastrar um novo produto')){
    } else {
      setTimeout( ()=> {
        window.location.href = "/index.html";
      }, 3000);
    }
  }

 
} else {
  alert('Usuário não possui acesso a esta aba')
  window.location.href = "/index.html";
}