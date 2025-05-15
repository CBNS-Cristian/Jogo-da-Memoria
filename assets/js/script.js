const imagens = [
    './assets/imgs/cyclist.png',
    './assets/imgs/cyclist.png',
    './assets/imgs/bodybuilder.png',
    './assets/imgs/bodybuilder.png',
    './assets/imgs/cricket-player.png',
    './assets/imgs/cricket-player.png',
    './assets/imgs/formula-1.png',
    './assets/imgs/formula-1.png',
    './assets/imgs/gymnast.png',
    './assets/imgs/gymnast.png',
    './assets/imgs/hockey-player.png',
    './assets/imgs/hockey-player.png',
    './assets/imgs/karate.png',
    './assets/imgs/karate.png',
    './assets/imgs/motorcyclist.png',
    './assets/imgs/motorcyclist.png',
    './assets/imgs/swimmer.png',
    './assets/imgs/swimmer.png',
    './assets/imgs/shooter.png',
    './assets/imgs/shooter.png',
    './assets/imgs/sumotori.png',
    './assets/imgs/sumotori.png',
    './assets/imgs/basketball-player.png',
    './assets/imgs/basketball-player.png',
    
];

let caixaAberta = [];
const jogoGeral = document.querySelector('.jogo');
const posicaoAleatoria = [...imagens].sort(() => Math.random() - 0.5);

for(let i = 0; i < imagens.length; i++){
    let caixa = document.createElement('div');
    let caixaImagem = document.createElement('img');
    caixaImagem.src=posicaoAleatoria[i]

    caixa.classList.add('quadrado');
    caixa.appendChild(caixaImagem);

    caixa.onclick = abrirCaixa; 

    jogoGeral.appendChild(caixa);
};

function abrirCaixa(){
    if(this.classList.contains('quadradoAberto') || this.classList.contains('quadradoCorreto')){
        return
    }
    if(caixaAberta.length < 2){
        this.classList.add('quadradoAberto');
        caixaAberta.push(this);
    }
    if(caixaAberta.length === 2){
        setTimeout(checarIgual, 500);
    }
    console.log(caixaAberta);
}

function checarIgual(){
    if(caixaAberta[0].innerHTML === caixaAberta[1].innerHTML){
        caixaAberta[0].classList.add('quadradoCorreto');
        caixaAberta[1].classList.add('quadradoCorreto');
    }else{
        caixaAberta[0].classList.remove('quadradoAberto');
        caixaAberta[1].classList.remove('quadradoAberto');
    }
    caixaAberta= [];

    if(document.querySelectorAll('.quadradoCorreto').length === imagens.length){
        window.alert('Parabéns! Você conseguiu encontrar todos os pares!');
    }
}