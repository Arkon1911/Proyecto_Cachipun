// Solicitar al usuario las veces que desea que se repita el juego
let veces = parseInt(prompt("¿Cuántas veces quieres jugar contra la máquina?"));

// Validar que el número sea positivo
if (veces > 0) {
  // Inicializar las variables para llevar la cuenta de los puntos
  let puntosUsuario = 0;
  let puntosMaquina = 0;

  // Repetir el juego las veces indicadas
  for (let i = 0; i < veces; i++) {
    // Solicitar al usuario que indique su jugada
    let jugadaUsuario = prompt("Elige: piedra, papel o tijeras").toLowerCase();

    // Validar que la jugada del usuario sea válida
    if (jugadaUsuario === "piedra" || jugadaUsuario === "papel" || jugadaUsuario === "tijeras") {
      // Generar una jugada automática para la máquina
      let opciones = ["piedra", "papel", "tijeras"];
      let jugadaMaquina = opciones[Math.floor(Math.random() * opciones.length)];

      // Mostrar las jugadas
      console.log("Tú eliges: " + jugadaUsuario);
      console.log("La máquina elige: " + jugadaMaquina);

      // Definir a un ganador considerando la jugada del usuario y la generada automáticamente para la máquina
      if (jugadaUsuario === jugadaMaquina) {
        // Declarar un empate
        console.log("Es un empate.");
      } else if (
        (jugadaUsuario === "piedra" && jugadaMaquina === "tijeras") ||
        (jugadaUsuario === "papel" && jugadaMaquina === "piedra") ||
        (jugadaUsuario === "tijeras" && jugadaMaquina === "papel")
      ) {
        // Felicitar al ganador en caso de ser el usuario
        console.log("¡Ganaste! " + jugadaUsuario + " le gana a " + jugadaMaquina + ".");
        // Sumar un punto al usuario
        puntosUsuario++;
      } else {
        // Indicarle al usuario que ha perdido contra la máquina
        console.log("Perdiste. " + jugadaMaquina + " le gana a " + jugadaUsuario + ".");
        // Sumar un punto a la máquina
        puntosMaquina++;
      }
    } else {
      // Indicar que la jugada del usuario es inválida
      console.log("Jugada inválida. Por favor, elige piedra, papel o tijeras.");
    }
  }

  // Mostrar el resultado final del juego
  console.log("Fin del juego.");
  console.log("Tus puntos: " + puntosUsuario);
  console.log("Puntos de la máquina: " + puntosMaquina);

  if (puntosUsuario > puntosMaquina) {
    // Felicitar al usuario por ganar el juego
    console.log("¡Felicidades! Has ganado el juego.");
  } else if (puntosUsuario < puntosMaquina) {
    // Consolar al usuario por perder el juego
    console.log("Lo siento. Has perdido el juego.");
  } else {
    // Declarar un empate en el juego
    console.log("Has empatado el juego.");
  }
} else {
  // Indicar que el número de veces no es válido
  console.log("Número de veces no válido. Por favor, ingresa un número positivo.");
}