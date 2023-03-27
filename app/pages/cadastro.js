
var pessoas = JSON.parse(localStorage.getItem("pessoas")) || [];

function cadastrar() {
  // Captura os dados do formulário e cria um novo objeto
  var newNome = document.getElementById("new-nome").value;
  var newIdade = document.getElementById("new-idade").value;
  var newFoto = document.getElementById("new-foto").value;
  var newPessoa = { nome: newNome, idade: newIdade, foto: newFoto };

  // Adiciona o objeto no array de pessoas
  pessoas.push(newPessoa);

  // Atualiza a tabela HTML
  var tableBody = document.getElementById("pessoas-table-body");
  var row = tableBody.insertRow();

  var nomeCell = row.insertCell(0);
  nomeCell.innerHTML = newPessoa.nome;

  var idadeCell = row.insertCell(1);
  idadeCell.innerHTML = newPessoa.idade;

  var fotoCell = row.insertCell(2);
  var foto = document.createElement("img");
  foto.src = newPessoa.foto;
  fotoCell.appendChild(foto);

  // Atualiza a última pessoa cadastrada
  ultimaPessoa = newPessoa;
  var ultimaPessoaDiv = document.getElementById("ultima-pessoa");
  ultimaPessoaDiv.innerHTML = "Última pessoa cadastrada: " + ultimaPessoa.nome;

  // Salva o array no localStorage
  localStorage.setItem("pessoas", JSON.stringify(pessoas));

  setTimeout(function() {
    window.location.href = "/index.html";
  }, 3000);
}


// Exibe as pessoas cadastradas ao carregar a página
for (var i = 0; i < pessoas.length; i++) {
  var pessoa = pessoas[i];
  var tableBody = document.getElementById("pessoas-table-body");
  var row = tableBody.insertRow();

  var nomeCell = row.insertCell(0);
  nomeCell.innerHTML = pessoa.nome;

  var idadeCell = row.insertCell(1);
  idadeCell.innerHTML = pessoa.idade;

  var fotoCell = row.insertCell(2);
  var foto = document.createElement("img");
  foto.src = pessoa.foto;
  fotoCell.appendChild(foto);
  
  }