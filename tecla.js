function presionar_tecla(){

    tecla_esc = event.keyCode;

    if (tecla_esc == 27) {
        window.location.href = 'boot.html'
    }

}

window.onkeydown = presionar_tecla;