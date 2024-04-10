var elementosDuvidas = document.querySelectorAll('.duvidas')

elementosDuvidas.forEach(function(duvidas) {
   duvidas.addEventListener('click',function (){
    duvidas.classList.toggle('ativa')
   })
})