const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateRandomPassword(length) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:'\",.<>/?";
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

rl.question('Bitte geben Sie die gewünschte Länge des Passworts ein: ', (inputLength) => {
  const length = parseInt(inputLength);

  if (!isNaN(length) && length > 0) {
    const password = generateRandomPassword(length);
    console.log(`Generiertes Passwort: ${password}`);
  } else {
    console.log('Ungültige Eingabe. Bitte geben Sie eine positive Zahl ein.');
  }

  rl.close();
});
