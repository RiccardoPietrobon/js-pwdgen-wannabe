//richiesta nome
let name = prompt("Qual è il tuo nome?");

//richiesta nome
let surname = prompt("Qual è il tuo cognome?");

//richiesta nome
let color = prompt("Qual è il tuo colore preferito?");

//cifra costante
const number = 23;

// messaggio finale
const welcome_msg = `${name}${surname}${color}${number}`;
document.getElementById('my_message').innerHTML = welcome_msg;


//piccolo bonus

//richiesta nazione
let stato = prompt("Qual è la tua nazione?")
//mia nazione
const my_nazione = `${stato}`;
document.getElementById('nazione').innerHTML = my_nazione;

//richiesta regione
let region = prompt("Qual è la tua regione?")
//mia regione
const my_regione = `${region}`;
document.getElementById('regione').innerHTML = my_regione;

//richiesta provincia
let contea = prompt("Qual è la tua provincia?")
//mia provincia
const my_provincia = `${contea}`;
document.getElementById('provincia').innerHTML = my_provincia;

//richiesta comune
let city = prompt("Qual è la tua comune?")
//mia comune
const my_comune = `${city}`;
document.getElementById('comune').innerHTML = my_comune;
