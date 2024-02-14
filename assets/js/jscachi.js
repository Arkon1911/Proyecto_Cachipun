// Solicitar al usuario las veces que desea que se repita el juego
let veces = parseInt(prompt("¿Cuántas veces quieres jugar contra la computadora?"));

// Validar que el número sea positivo y mayor que cero
if (veces > 0) {
  // Inicializar las variables para llevar el conteo de los puntos
  let puntosUsuario = 0;
  let puntosComputadora = 0;

  // Repetir el juego las veces que el usuario haya indicado
  for (let i = 0; i < veces; i++) {
    // Solicitar al usuario que indique su jugada
    let jugadaUsuario = prompt("Elige: piedra, papel o tijera").toLowerCase();
// Solicitar al usuario las veces que desea que se repita el juego
let veces = parseInt(prompt("¿Cuántas veces quieres jugar contra la computadora?"));

// Validar que el número sea positivo y mayor que cero
if (veces > 0) {
  // Inicializar las variables para llevar el conteo de los puntos
  let puntosUsuario = 0;
  let puntosComputadora = 0;

  // Repetir el juego las veces que el usuario haya indicado
  for (let i = 0; i < veces; i++) {
    // Solicitar al usuario que indique su jugada
    let jugadaUsuario = prompt("Elige: piedra, papel o tijera").toLowerCase();
    // Validar que la jugada del usuario sea válida
    if (jugadaUsuario === "piedra" || jugadaUsuario === "papel" || jugadaUsuario === "tijera") {
      // Generar una jugada automática para la máquina usando la función Math.random()
      let opciones = ["piedra", "papel", "tijera"];
      let jugadaComputadora = opciones[Math.floor(Math.random() * opciones.length)];

      // Mostrar las jugadas de ambos
      alert(`Tú eliges: ${jugadaUsuario}`);
      alert(`La computadora elige: ${jugadaComputadora}`);

      // Definir a un ganador considerando la jugada del usuario y la generada automáticamente para la máquina
      if (jugadaUsuario === jugadaComputadora) {   
        // Declarar un empate
        console.log("Es un empate.");
      } else if (
        (jugadaUsuario === "piedra" && jugadaComputadora === "tijera") ||
        (jugadaUsuario === "papel" && jugadaComputadora === "piedra") ||
        (jugadaUsuario === "tijera" && jugadaComputadora === "papel")
      ) {  
        // Felicitar al ganador en caso de ser el usuario
        alert("¡Ganaste esta ronda!");
        // Sumar un punto al usuario
        puntosUsuario++;
      } else {
        // Indicarle al usuario que ha perdido contra la máquina
        alert("Perdiste esta ronda.");
        // Sumar un punto a la computadora
        puntosComputadora++;
      }
    } else {
      // Indicar que la jugada del usuario no es válida
      alert("Jugada inválida. Por favor, elige piedra, papel o tijera.");
    }
  }
  // Mostrar el resultado final del juego
  alert(`El juego ha terminado. El resultado es:`);
  alert(`Tú: ${puntosUsuario} puntos`);
  alert(`Computadora: ${puntosComputadora} puntos`);

  // Determinar el ganador del juego
  if (puntosUsuario > puntosComputadora) {
    // Felicitar al usuario por ganar el juego
    alert("¡Felicidades! Has ganado el juego.");
  } else if (puntosUsuario < puntosComputadora) {
    // Indicar al usuario que ha perdido el juego
    alert("Lo siento. Has perdido el juego.");
  } else {
    // Declarar un empate en el juego
    alert("El juego ha quedado en empate.");
  }
} else {
  // Indicar que el número de veces no es válido
  alert("Número de veces no válido. Por favor, ingresa un número positivo y mayor que cero.");
}