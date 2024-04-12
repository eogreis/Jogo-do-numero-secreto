let listaDeNumerosSortiados = []; // lista
let quantidadeDeNumeros = 10; 
let numeroSecreto = gerarNumeroAleatorio(); //função
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;   
    responsiveVoice.speak(texto, 'Brazilian Portuguese Voice', {rate:1.2}); // Voz femimina na velocidade 1.2
}

function exibirMensagemInical() {
    exibirTextoNaTela('h1', 'Jogo do número secreto 2.0');
    exibirTextoNaTela('p', 'Escolha número entre 1 e 10');
}

exibirMensagemInical();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!'); 
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else  {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor ');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo(); 
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * quantidadeDeNumeros + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSortiados.length;

    if (quantidadeDeElementosNaLista == quantidadeDeNumeros) {
        listaDeNumerosSortiados = [];
    }

    if(listaDeNumerosSortiados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSortiados.push(numeroEscolhido);
        console.log(listaDeNumerosSortiados)
        return numeroEscolhido;  
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reinciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInical();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}