const form = document.getElementById('formulario')
let campoA = document.getElementById('campoa')
let campoB = document.getElementById('campob')


form.addEventListener('submit', function(e){
    e.preventDefault();

    let numeroA = Number(campoA.value)
    let numeroB = Number(campoB.value)
    
    if(numeroA < numeroB) {
        const mensagemSucesso = document.querySelector('.certo')
        mensagemSucesso.innerHTML = `Seu campo foi validado`
        mensagemSucesso.style.display = 'block'
        
        campoA.style = ''
        document.querySelector('.erro').style.display = 'none'

        campoA.value = '';
        campoB.value = '';
    }else {
        campoA.style.border = '1px solid red'
        document.querySelector('.erro').style.display = 'block'
        campoB.style = ''
    }
    
})



/*function validaNumero(numeroA, numeroB) {
    if(numeroA < numeroB) {
        const mensagemErro = document.querySelector('.certo')
        mensagemErro.innerHTML = `Valido`
        mensagemErro.style.display = 'block'


        numeroA.value = '';
        numeroB.value = '';
    }else {
        const mensagemSucesso = document.querySelector('.certo')
        mensagemSucesso.innerHTML = `invalido`
        mensagemSucesso.style.display = 'block'
    }
    }
    */