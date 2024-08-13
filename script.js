function main() {
  document.addEventListener("DOMContentLoaded", function () {
    // 1 QUESTAO
    document.getElementById("botaoErro").addEventListener("click", function () {
      exibirError("Erro!");
    });

    // 2 QUESTAO
    var botaoExibir = document.getElementById("botaoExibir");
    botaoExibir.addEventListener("click", exibirConteudoInput);

    // 3 QUESTAO
    var botaoEngajamento = document.getElementById("botaoCalcular");
    botaoEngajamento.addEventListener("click", calcularInteracao);

    // 4 QUESTAO
    var botaoUpload = document.getElementById("botaoUpload");
    botaoUpload.addEventListener("click", uploadArquivo);

    // 5 QUESTAO
    var selectImg = document.getElementById("selectImg");
    selectImg.addEventListener("change", trocarImagem);

    // 6 QUESTAO
    var redesSociaisBtn = document.getElementById("redesSociaisBtn");
    redesSociaisBtn.addEventListener("click", exibirRedesSociais);

    // 7-8 QUESTAO
    var hashtagBtn = document.getElementById("hashtagBtn");
    hashtagBtn.addEventListener("click", exibirHashtags);

    // 9 QUESTAO
    var hashtagRemover = document.getElementById("hashtagRemover");
    hashtagRemover.addEventListener("click", removeHashtag);
  });
}

//1QUESTAO
function exibirError(conteudo) {
  var container = document.getElementById("containerError");
  var mensagem = document.getElementById("mensagemError");

  container.classList.remove("oculto");
  mensagem.textContent = conteudo;

  setTimeout(function () {
    container.classList.add("oculto");
  }, 3000);
}
// 2QUESTAO
function exibirConteudoInput() {
  var conteudo = document.getElementById("caixaDeTexto").value.trim();

  if (!conteudo) {
    exibirError("Input está vazio!!");
  }
  document.getElementById("conteudo").innerHTML = conteudo;
}

// 3QUESTAO
function calcularInteracao() {
  var interacoes = document.getElementById("interacoes").value;
  var visualizacoes = document.getElementById("visualizacoes").value;
  var resultado = document.getElementById("resultado");

  if (!interacoes || !visualizacoes) {
    exibirError("Preencha todos os campos");
    return;
  }

  if (isNaN(Number(interacoes)) || isNaN(Number(visualizacoes))) {
    exibirError("Os valores inseridos não são números");
    return;
  }

  var engajamento = (interacoes / visualizacoes) * 100;

  resultado.textContent = engajamento.toFixed(2) + "%";
}

// 4QUESTAO
function uploadArquivo() {
  var arquivo = document.getElementById("uploadImage").files[0];
  var resultado = document.getElementById("resultadoImg");
  var reader = new FileReader();

  if (!arquivo) {
    exibirError("Por favor, selecione um arquivo.");
    return;
  }

  reader.onload = function (e) {
    resultado.src = e.target.result;
    resultado.style.display = "block";
  };

  reader.readAsDataURL(arquivo);
}

// 5QUESTAO
function trocarImagem() {
  var select = this.value;
  var resultado = document.getElementById("selectImgResult");

  resultado.src = select;
}

// 6QUESTAO
function exibirRedesSociais() {
  var redesSociais = document.getElementsByName("redesSociais");
  var redesSelecionadas = document.getElementById("redesSelecionadas");

  var mensagem = [];

  redesSociais.forEach((rede) => {
    if (rede.checked) {
      mensagem.push(rede.value);
    }
  });

  if (mensagem.length === 0) {
    exibirError("Selecione pelo menos uma rede social");
    return;
  }

  redesSelecionadas.textContent = "Redes selecionadas: " + mensagem.join(", ");
}

// 7-8QUESTAO

function exibirHashtags() {
  var hashtags = document.getElementById("hashtags");
  var hashtagInput = document.getElementById("hashtagInput").value.trim();

  if (!hashtagInput) {
    exibirError("Digite uma hashtag");
    return;
  }

  if (hashtagInput.length <= 2) {
    exibirError("Hashtag muito curta, digite pelo menos 3 caracteres");
    return;
  }

  if (hashtags.children.length > 0) {
    for (let child of hashtags.children) {
      if (child.value === hashtagInput) {
        exibirError("Hashtag já existe");
        return;
      }
    }
  }

  if (hashtags.children.length >= 5) {
    exibirError("Limite de 5 hashtags atingido");
    return;
  }

  var option = document.createElement("option");
  option.textContent = hashtagInput;
  option.value = hashtagInput;

  hashtags.appendChild(option);
}

// 9QUESTAO
function removeHashtag() {
  var hashtags = document.getElementById("hashtags");
  var selected = hashtags.selectedOptions;

  if (selected.length === 0) {
    exibirError("Selecione uma hashtag para remover");
    return;
  }

  for (let option of selected) {
    hashtags.removeChild(option);
  }
}

main();
