const form = document.getElementById('form-numbers')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const campoA = document.getElementById('first-number')
    const campoB = document.getElementById('second-number')
    const containerMensagemSucesso = document.querySelector('.sucess-message')
    const containerMensagemErro = document.querySelector('.error-message')

    function compararNumeros(numeroA, numeroB){
        return numeroA > numeroB
    }

    if (compararNumeros(parseInt(campoA.value), parseInt(campoB.value))){
        containerMensagemSucesso.style.display = 'block'
        containerMensagemErro.classList.remove('error')
        campoA.value = ""
        campoB.value = ""
    } else {
        containerMensagemErro.classList.add('error')
        containerMensagemSucesso.style.display = 'none'
    }



})