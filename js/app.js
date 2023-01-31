// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


// chiedere all'utente il numero di chilometri che vuole percorrere
const numberKm = parseFloat ( prompt ('Quanti chilometri desidera percorrere?'));
console.log('Km che vuole percorrere:' , numberKm , 'Km');

// chiedere all'utente la sua età
const userAge = parseInt ( prompt ('Inserisca la sua età'));
console.log('Età dell\'utente:' , userAge , 'anni');

// calcolare il prezzo totale del viaggio
let travelPrice;

travelPrice = numberKm * 0.21;
console.log('Prezzo pieno del biglietto:' , travelPrice , '€');

// calcolare gli sconti se ci sono

if (userAge < 18) {

    travelPrice = travelPrice * 0.8;
    console.log('Prezzo scontato del biglietto:' , travelPrice , '€');

}   else if (userAge > 65) {

    travelPrice = travelPrice * 0.6;
    console.log('Prezzo scontato del biglietto:' , travelPrice , '€');

}

// mostrare il prezzo finale con massimo due decimale

const finalPrice = document.getElementById('price-output');
finalPrice.innerHTML = travelPrice.toFixed(2) + ' €';
