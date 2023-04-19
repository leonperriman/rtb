var inputComando = document.getElementById("comando");
var botonEjecutar = document.getElementById("botonEjecutar");

// Borrar después de pruebas
inputComando.value = '/ban chuchi';

botonEjecutar.addEventListener('click', function() {
   var comando = inputComando.value;
   var listaPartes = comando.split(' '); // [0,1,2,3,4,5] -> comando[0]

   if (listaPartes[0] === '/ban') {
      alert("El usuario " + listaPartes[1] + " ha sido baneado.")
   }
});
