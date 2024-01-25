function aufgabe1(inputString) {
    // Verwende die split-Methode, um den String in ein Array von Zeichen zu zerlegen
    var characters = inputString.split('');
    
    // Verwende die reverse-Methode, um die Reihenfolge der Elemente im Array umzukehren
    var reversedCharacters = characters.reverse();
    
    // Verwende die join-Methode, um die umgekehrten Zeichen wieder zu einem String zusammenzufügen
    var reversedString = reversedCharacters.join('');
    
    // Gib den umgekehrten String in der Konsole aus
    console.log(reversedString);
}

//aufruf der Funktion
aufgabe1("javascript ist anstrengend xD"); 
