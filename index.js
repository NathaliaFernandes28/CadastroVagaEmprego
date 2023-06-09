const vagas = [];

function listarVagas() {
  const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
    textoFinal += indice + ".";
    textoFinal += vaga.nome;
    textoFinal += "(" + vaga.candidatos.length + "candidatos)\n";
    return textoFinal;
  }, "");

  alert(vagasEmTexto);
}

function novaVaga() {
  const nome = prompt("Informe um nome para vaga:");
  const descricao = prompt("Informe uma descrição para a vaga:");
  const dataLimite = prompt(
    "Informe uma data limite (dd/mm/aaaa) para a vaga:"
  );

  const confirmacao = confirm(
    " Deseja criar uma nova vaga com essas informações?\n " +
      "Nome:" +
      nome +
      "\n Descrição da vaga: " +
      descricao +
      "\n Data Limite da vaga: " +
      dataLimite
  );

  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] };
    vagas.push(novaVaga);
    alert("Vaga Criada!");
  }
}

function exibirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja exibir:");
  const vaga = vagas[indice];

  const candidatoEmTexto = vaga.candidatos.reduce(
    (textoFinal, candidato) => textoFinal + "\n - " + candidato,
    ""
  );

  alert(
    "Vaga n°" +
      indice +
      "\nNome: " +
      vaga.nome +
      "\nDescrição:" +
      vaga.descricao +
      "\nData Limite: " +
      vaga.dataLimite +
      "\nQuantidade de Candidatos: " +
      vagas.candidatos.length +
      "\nCandidatos inscritos: " +
      candidatosEmTexto
  );
}

function inscreverCandidato() {
  const candidato = prompt("Informe o nome do(a) candidato(a):");
  const indice = prompt(
    "Informe o índice da vaga para a qual o(a) candidato(a) deseja ser inscrever:"
  );
  const vaga = vagas[indice];

  const confirmacao = confirm(
    "Deseja inscrever o candidato(a)" +
      candidato +
      "na vaga" +
      indice +
      "?\n" +
      "Nome:" +
      vaga.nome +
      "\nDescrição:" +
      vaga.descricao +
      "\nData Limite " +
      vaga.dataLimite
  );
  if (confirmacao) {
    vaga.candidatos.push(candidato);
    alert("Inscrição Realizada! ");
  }
}
function excluirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja excluir:");
  const vaga = vagas[indice];

  const confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga" +
      indice +
      "?\n" +
      "Nome:" +
      vaga.nome +
      "\nDescrição:" +
      vaga.descricao +
      "\nData Limite:" +
      vaga.dataLimite
  );

  if (confirmacao) {
    vagas.splice(indice, 1);
    alert("Vaga Excluída! ");
  }
}
function exibirMenu() {
  const opcao = prompt(
    "Cadastro Vaga de Emprego\n\n" +
      "Escolha uma das opções" +
      "\n1. Listar Vagas disponíveis" +
      "\n2. Criar uma nova vaga" +
      "\n3. Visualizar uma vaga" +
      "\n4. Inscrever um(a) candidato(a)" +
      "\n5. Excluir uma vaga" +
      "\n6. Sair"
  );
  return opcao;
}
function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();

    switch (opcao) {
      case "1":
        listarVagas();
        break;
      case "2":
        novaVaga();
        break;
      case "3":
        exibirVaga();
        break;
      case "4":
        inscreverCandidato();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção Inválida!");
    }
  } while (opcao !== "6");
}

executar();
