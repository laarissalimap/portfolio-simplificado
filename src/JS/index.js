/*
Objetivo 1: quando o usuario clicar no botão de mostrais mais deve abrir os projetos que estão escondidos em html

    passo 1: pega ro botão mostrar mais no JS para poder verificar quando o usuario clicar em cima dele

    passo 2: identificar o clique no botão

    passo 3: adicionar a classe "ativo" nos projetos escondidos 

Objetivo 2: esconder o botão de mostrar mais

    passo 1: pegar o botão e esconder ele
*/

//Objetivo 1: quando o usuario clicar no botão de mostrais mais deve abrir os projetos que estão escondidos em html
// passo 1: pega ro botão mostrar mais no JS para poder verificar quando o usuario clicar em cima dele

const botaoMostarPojetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostarPojetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
});

function esconderBotao() {
    botaoMostarPojetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetosInativos => {
        projetosInativos.classList.add('ativo');
    });
}
