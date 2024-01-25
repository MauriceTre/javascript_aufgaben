// Einlesen der Konsole
const readline = require('readline');

// Konfiguration des readline-Interfaces
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Funktion zur Umrechnung von Celsius in Fahrenheit
function celsiusToFahrenheit(celsius) {
  return celsius * 9/5 + 32;
}

// Eingabeaufforderung
rl.question('Bitte geben Sie die Temperatur in Celsius ein: ', (inputCelsius) => {
  // Konvertiere den Eingabe-String in eine Zahl (Float)
  const celsius = parseFloat(inputCelsius);

  // Überprüfe, ob die Eingabe eine gültige Zahl ist
  if (!isNaN(celsius)) {
    // Berechne die Temperatur in Fahrenheit
    const fahrenheit = celsiusToFahrenheit(celsius);

    // Gib das Ergebnis aus
    console.log(`${celsius} Grad Celsius entsprechen ${fahrenheit.toFixed(2)} Grad Fahrenheit.`);
  } else {
    console.log('Ungültige Eingabe. Bitte geben Sie eine Zahl ein.');
  }

  // Beende das readline-Interface
  rl.close();
});
