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



var lista = [];
var i= 0;
while (i < 16) {
var num=Math.round(Math.random()*100);
   if (!lista.includes(num)) {
 lista.push(num);
i++;
}
}

console.log(lista);




 var userlist = [];
 var x = 0;
 while (x < 85) {
 var numeroutente = parseInt(prompt('Inserisci un numero da 1 a 100'))
 if (userlist.includes(numeroutente)) {
 console.log('numero già inserito');
 } else if (lista.includes(numeroutente)) {
          console.log('Hai perso');
     x == 85;
      } else {
          userlist.push(numeroutente);
           console.log(userlist);
          x++;
      }
  }

 console.log(userlist);
