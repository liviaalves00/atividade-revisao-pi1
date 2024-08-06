function main() {
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("botaoErro").addEventListener("click", function () {
      exibirError("Eroo!");
    });
    var botaoExibir = document.getElementById("botaoExibir");
    botaoExibir.addEventListener("click", exibirConteudoInput);
    var botaoEngajamento = document.getElementById("botaoEngajamento");
    botaoEngajamento.addEventListener("click", calcularInteracao);
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

  if (!conteudo){
    exibirError("Input está vazio!!")
  }
  document.getElementById("conteudo").innerHTML = conteudo;
}

function calcularInteracao(){
  var conteudo = document.getElementById("calcularEngajamento").va

}

main();
