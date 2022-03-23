// Avalição das Estrelas

var stars = document.querySelectorAll('.estrelas')

document.addEventListener('click', function(s){
    var classStar = s.target.classList;
    if(!classStar.contains('ativa')){
        stars.forEach(function(star){
            star.classList.remove('ativa');
        });

        classStar.add('ativo');
        console.log(s.target.getAttribute('data-avaliaçao'));
    }
});
