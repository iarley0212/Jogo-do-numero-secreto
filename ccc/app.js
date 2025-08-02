let listaDeNumerosSorteados =[];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroMaximo}.`);
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if ( chute == numeroSecreto) {
        exibirTextoNaTela('h1', `Você acertou o número secreto ${numeroSecreto}!`);
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentaivas = `Você descobriu o númeo secreto em com ${tentativas} ${palavraTentativas}.`;
        exibirTextoNaTela('p', mensagemTentaivas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}.`);
        } else{
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}.`);
        }
        tentativas++;
        limparcampo();
    }
}
S
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroMaximo) {
        listaDeNumerosSorteados = [];
    }



    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparcampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo () {
    numeroSecreto = gerarNumeroAleatorio();
    limparcampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}