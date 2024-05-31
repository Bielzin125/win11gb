const button = document.querySelector('#botao');
document.addEventListener('click', function(event){
    document.querySelector('#container01')
        .classList.toggle('fade');
        

});

function spot() {
    window.location.href = 'spotfy.html'
}