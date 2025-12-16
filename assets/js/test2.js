




// al click del bottone 






const selettoreCssSecondiRimasti = "header > .contenitore > span.timer";

// INPUT
// devo avere un selettore css in cui iniettare/aggiornare
// il contenuto
// parametro = input
const attivaCountdownUIIn = function ({ countdownSecondi }) {
  // vado a prendere il node html dei "secondi rimasti"
  const secondiRimastiEl = document.querySelector(selettoreCssSecondiRimasti);
  // calcoli i secondi rimanenti
  const secondiRimanenti = calcolaSecondiRimanenti(countdownSecondi);
  // aggiorno il testo dei "secondi rimasti" con i secondi rimanenti
  secondiRimastiEl.innerText = secondiRimanenti;
};

/**
 * Ritorna un intero che rappresenta il numero di secondi rimanenti
 * rispetto al numero massimo di secondi (countdown)
 * Esempio:
 * countdownSecondi = 60
 *
 */
const calcolaSecondiRimanenti = function () {};

// quando clicco su risposta o timer scade, passa alla prossima domanda,
// quindi riaggiorna il timer

const haCliccatoRisposta = function () {};


// attivaCountdownUIIn("header > .contenitore > span.timer")

// array di domande. ogni domanda è un oggetto
// // [
//          {
//  countdownSecondi: int
//          }
//      ]

// questions.forEach((question) => {
attivaCountdownUIIn({
  countdownSecondi: question.countdownSecondi,
});
// });

// il contenuto è un numero

// il numero è un secondo che deriva dalla sottrazione costante
// di un tempo

// il tempo significa che ho un inizio e una fine
// l'inizio = 60 secondi (ad esempio)
// la fine = 0 secondi

// quale modifica devo fare all'UI
