const prompt = require("prompt-sync")({ sigint: true });

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let adivinanza = 0;

console.log("🎯 Adivina el número entre 1 y 100");
console.log("Pista: si estás cerca diré 'caliente', si estás lejos diré 'frío'");

while (adivinanza !== numeroSecreto) {
    adivinanza = parseInt(prompt("Escribe tu número: "));
    intentos++;

    if (adivinanza === numeroSecreto) {
        console.log(`🎉 ¡Acertaste en ${intentos} intentos!`);
        break;
    }

    let diferencia = Math.abs(adivinanza - numeroSecreto);
    if (diferencia <= 10) {
        console.log("🔥 Caliente");
    } else {
        console.log("❄️ Frío");
    }
}