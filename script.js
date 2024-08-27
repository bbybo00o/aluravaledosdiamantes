const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){ 
    const avanca = document.querySelectorAll('.ativo');
    const ProximoPasso = `passo-`+ this.getAttribute('data-proximo');
   
    atual.classList.remove('ativo');
    document.getElementById(ProximoPasso).classList.add(`.ativo');
     })
})