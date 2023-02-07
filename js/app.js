console.log ('While VS For')

//1. Dichiriamo due variabili con numeri dispari e numeri inseriti dall'utente

let dispari = [];
let conto = 0;

//2. Ciclo while con richiesta utente di inserimento numero

while (conto < 10) {
    let userNumber = prompt(" inserisci un numero:");
    userNumber = parseInt(userNumber);

    //SE numero pari o undefined uso continue per continuare il ciclo while
      //ALTRIMENTI se è dispari se il resto x 2 non è guale a 0, lo incrementa insieme ai num dispari
      if (userNumber % 2 !== 0) {
        dispari.push(userNumber);
        conto++;
      }
    } 
    
    
//3. SE ottenuti 10 numeri dispari, stampo in console uno alla volta

console.log("I numeri dispari che hai inserito sono:");
for (let i = 0; i < dispari.length; i++) {
  console.log(dispari[i]);
}