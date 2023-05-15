function validarCredencialesFacil(correo, password) {

    var listaUsuarios = [
        { email: 'leontrollas.retbe', password: 'leonwasd' },
        { email: 'ares45.retbe', password: 'llll'},
        { email: 'chuchiperriman.retbe', password: 'leonyaresmejores'},
        { email: 'tamarita.retbe' , password: 'tamarita123'},
        { email: 'gomas.retbe' , password: 'XD'},
        { email: 'jaimebolado.retbe', password: 'SinEspecificar'},
        { email: 'yeronbailador.retbe', password: 'SinEspecificar'},
    ];

    for ( usuario in listaUsuarios) {
        if (usuario.email === correo && usuario.password === password) {
            return true;
        }  
    }

    if (correo === 'leontrollas.retbe' && password === 'leonwasd') {
        return true;
    } else if (correo === 'ares45.retbe' && password === 'llll') {
       return true;
    }  else if (correo === 'chuchiperriman.retbe' && password === 'leonyaresmejores') {
        return true;
    } else if (correo === 'tamarita.retbe' && password === 'tamarita123') {
        return true;
    } else if (correo === 'gomas.retbe' && password === 'XD') {
        return true;
    } else if (correo === 'jaimebolado.retbe' && password === 'SinEspecificar') {
        return true;
    } else if (correo === 'yeronbailador.retbe' && password === 'SinEspecificar') {
        return true;
    } else {
       alert('Usuario y contraseña incorrectos');
       return false;
    }
}

function ingresarFacil(correo) {
    if (correo === 'leontrollas.retbe') {
        window.location.href ='escritorio.html';
    } else {
        window.location.href ='escritorio.html';
    }
}

function iniciarSesion(){
    var sCorreo = '';
    var sContrasenna = '';
    var bAcceso = false;

    sCorreo = document.querySelector('#txtCorreo').value;
    sContrasenna = document.querySelector('#txtContrasenna').value;

    bAcceso = validarCredencialesFacil(sCorreo, sContrasenna);
    
    if(bAcceso == true){
        ingresarFacil(sCorreo);
    }
}


var boton = document.getElementById('btnIngresar');
boton.addEventListener('click', iniciarSesion);