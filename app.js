let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
   let campo = document.querySelector(tag)
   campo.innerHTML = texto;
   responsiveVoice.speak(texto , 'Portuguese Female' , 
   {rate:2.1});
}

exibirTextoNaTela('h1' , 'Jogo do número secreto');
exibirTextoNaTela('p' , 'Escolha um número entre 1 e 10');

function verificaChute() {
   let chute = document.querySelector('input').value;
   
   if (chute == numeroSecreto) {
        exibirTextoNaTela('h1' , 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p' , mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
      if (chute > numeroSecreto) {
         exibirTextoNaTela('p', 'O número secreto é menor ');
      } else {
         exibirTextoNaTela('p' , 'O número é maior');
      }
      tentativas++;
      limparCaixaDeNumero(); 
   }
}

exibirMensagemInicial();

function exibirMensagemInicial() {
   exibirTextoNaTela('h1' , 'Jogo do número secreto');
   exibirTextoNaTela('p' , 'Escolha um número entre 1 e 10');
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt( Math.random() * numeroLimite + 1 );
    let quantidadeElementosDaLista = listaDeNumerosSorteados.length;
    if (quantidadeElementosDaLista == numeroLimite) {
      listaDeNumerosSorteados = []
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
      return gerarNumeroAleatorio();
    } else {
      listaDeNumerosSorteados.push(numeroEscolhido)
      return numeroEscolhido;
    }
}

function limparCaixaDeNumero() {
   let caixa = document.querySelector('input');
   caixa.value = '';
}

function reiniciarJogo() {
   numeroSecreto = gerarNumeroAleatorio();
   limparCaixaDeNumero();
   tentativas = 1;
   exibirMensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled' , true);
}
