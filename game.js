const prompt = require("prompt-sync")({ sigint: true });
let rangoMaximo = parseInt(prompt("Elige el rango máximo (por defecto 100): ")) || 100;
const numeroSecreto = Math.floor(Math.random() * rangoMaximo) + 1;

let intentos = 0;
let adivinanza = 0;

console.log("🎯 Bienvenido al juego: Adivina el número secreto");
console.log("Te daré pistas: 'Caliente' si estás cerca, 'Frío' si estás lejos");

while (adivinanza !== numeroSecreto) {
    adivinanza = parseInt(prompt("Escribe tu número: "));
    if (isNaN(adivinanza) || adivinanza < 1 || adivinanza > 100) {
    console.log("⚠️ Por favor ingresa un número válido entre 1 y 100");
    continue;
    }
    intentos++;

    if (adivinanza === numeroSecreto) {
        console.log(`🎉 ¡Acertaste en ${intentos} intentos!`);
        break;
    }
    if (intentos >= 10) {
    console.log(`❌ Has perdido. El número secreto era ${numeroSecreto}`);
    break;
    }

    let diferencia = Math.abs(adivinanza - numeroSecreto);
    if (diferencia <= 10) {
        console.log("🔥 Caliente");
    } else {
        console.log("❄️ Frío");
    }
}