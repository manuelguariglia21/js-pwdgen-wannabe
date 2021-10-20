//creo variabili nome, cognome, colore

const firstname = prompt("inserisci il tuo nome: ");
console.log('Name: ', firstname);
const lastname = prompt("inserisci il tuo cognome: ");
console.log('Lastname: ', lastname);
const color = prompt("inserisci il tuo colore preferito: ");
console.log('Color: ', color);

//creo variabile password

const yourpass = firstname + lastname + color + 21;

//stampo la password

document.getElementById('your-password').innerHTML = 
`
<h2>La tua password è: ${yourpass}</h2>
<p>La lunghezza della password generata è: ${yourpass.length}</p>

`;
