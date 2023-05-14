function irAlLogin() {
    window.location.href = './login.html'
}

function cambioTexto () {
    var tag = document.getElementById('textoActualizar');
    tag.innerText = 'Iniciando';
    setTimeout(irAlLogin, 2000);
}

setTimeout(cambioTexto,4000)
