document.addEventListener('DOMContentLoaded', function() {
    const botao = document.querySelector('#botao');
    botao.addEventListener('click', function(evento) {
        document.querySelector('#container01').classList.toggle('fade');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const pesquisar = document.querySelector('#pesquisa');
    pesquisar.addEventListener('click', function(evento) {
        document.querySelector('#pesquisar').classList.toggle('fade');
    });
});


function spot() {
    window.location.href = 'spotfy.html';
}

function cmd() {
    window.location.href = 'comand.html';
}

function comd() {
    window.location.href = 'comand.html';
}