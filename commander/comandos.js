var inputComando = document.getElementById("comando");
var botonEjecutar = document.getElementById("botonEjecutar");

// Borrar después de pruebas
//inputComando.value = '/ban chuchi';

botonEjecutar.addEventListener('click', function() {
   var comando = inputComando.value;
   var listaPartes = comando.split(' '); // [0,1,2,3,4,5] -> comando[0]

   if (listaPartes[0] === '/ban') {
      alert(listaPartes[1] + " ha sido baneado")
   }

   if (listaPartes[0] === '/add') {
      alert(listaPartes[1] + " ha sido añadido")
   }

   if (listaPartes[0] === '/lock') {
      alert("El sistema ha sido bloqueado")
   }

      if (listaPartes[0] === '/unlock') {
         alert("El sistema ha sido desbloqueado")
      } 

      if (listaPartes[0] === '/notes') {
         alert("La nota de " + listaPartes[1] + " del " + listaPartes[2] + " es un " + listaPartes[3])
      }

      if (listaPartes[0] === '/bdb') {
         alert(listaPartes[1] + " ha sido " + listaPartes[2])
      }

      if (listaPartes[0] === '/comment') {
         alert("El comentario " + listaPartes[1] + listaPartes[2] + listaPartes[3] + listaPartes[4] + listaPartes[5] + " ha sido fijado")
      }
//else {
//      alert ('Comando no encontrado')
//   }
});
   