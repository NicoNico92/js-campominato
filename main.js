//PROVA UNO
// var lista = []
//
// var i= 0;
// while (i < 16) {
// var num=(Math.round(Math.random()*100)
//    if (num !== lista [i]) {
//  lista.push(num);
// i++;
// }
// }

do {
    var livelloDifficoltà = parseInt(prompt('Seleziona il livello di difficoltà inserendo un numero 0=difficoltà facile, 1=difficoltà medio, 2=difficoltà elevata'))
} while (livelloDifficoltà<0 || livelloDifficoltà>2 || isNaN(livelloDifficoltà));

console.log('Hai selezionato il livello di difficoltà ' + livelloDifficoltà)

switch (livelloDifficoltà) {
  case 0:
  var max = 100;
    console.log();
    break;
  case 1:
  var max = 80;
    console.log();
    break;
  case 2:
  var max = 50;
    console.log();
}

console.log("Desidera qualcos'altro ?");

//creo un array 'mine' vuoto
var mine = [];
var i = 0;
while (i < 16) {
    var minaGenerata = generaNumeroRandom(1,max);
    if (!mine.includes(minaGenerata)) {
        mine.push(minaGenerata);
        i++;
    }
}

function generaNumeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

console.log(mine);

 var userlist = [];
 var x = 1;
 var tentativiPossibili = max - 16;
 var bombaCalpestata = false;
 while (x <= tentativiPossibili && bombaCalpestata == false) {
     var numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 100'))
     if (userlist.includes(numeroUtente)) {
         console.log('numero già inserito');
     } else if (numeroNonValido(numeroUtente)) {
         console.log('numero non valido');
     } else if (isNaN(numeroUtente)) {
         console.log('non hai inserito un numero');
     } else if (mine.includes(numeroUtente)) {
         console.log('Hai perso');
         x = tentativiPossibili + 1;
         bombaCalpestata = true;
// Se la x raggiunge la quota dei tentativiPossibili, invia messaggio di vittoria, pusha l'ultimo numero nella userlist e aumenta di 1 la var x per far interrompere il ciclo
     } else if (x == tentativiPossibili) {
         console.log('Hai vinto');
         userlist.push(numeroUtente);
         x++;
     }
     else {
         userlist.push(numeroUtente);
         console.log(userlist);
         x++;
     }
 }

 console.log(userlist);
 console.log('Hai indovinato ' + userlist.length + ' numeri')

   function numeroNonValido(numeroUtente) {
       if (numeroUtente < 1 || numeroUtente> 100) {
       return true;
       } else {
          return false;
      }}
