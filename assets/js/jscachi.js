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