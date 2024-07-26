let listaDeNumerosSorteados = [];
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;

console.log (numeroAleatorio)

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function atualizarHeader() {
    exibirTextoNaTela ('h1', "Jogo do Numero Secreto");
    exibirTextoNaTela ('p', "Escolha o numero entra 1 e 10");
}

atualizarHeader();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroAleatorio) {
        exibirTextoNaTela('h1', 'Acertou!!!');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `O numero secreto era ${numeroAleatorio}. Você acertou em ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas)
        console.log('O botão foi clicado');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroAleatorio) {
            exibirTextoNaTela ('p',`O numero secreto é menor que ${chute}`);    
        } else {
            exibirTextoNaTela ('p', `O numero secreto é maior que ${chute}`);
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt (Math.random () * 10 + 1)
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    console.log('O botão esta funcionando clicado');
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoNaTela ('h1', "Jogo do Numero Secreto");
    exibirTextoNaTela ('p', "Escolha o numero entra 1 e 10");
    document.getElementById('reiniciar').setAttribute('disabled', true);
}