// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.
// *ricordatevi come detto che è facile che i tempi della cancellazione degli elementi in pagina, usando i prompt si sfasino ed è facile che lo vediate funzionare in modo corretto solo su Firefox. Questo è legato al funzionamento del browser e del prompt relativo.
// Prompt non lo userete poi lavorando effettivamente. (o perlomeno ce lo auguriamo :sorriso_con_goccia_sudore:)

// Iniziamo col collegare due variabili all'html 

let contNumber = document.getElementById("textnumber");
let contNumberKnow = document.getElementById("numberknow")

// adesso creiamo un array dove andremo ad inserire i 5 numeri casuali
let numPc = [];
// creiamo e stampiamo i numeri in pagina
for (let i = 0; i < 5; i++) {
    // Creiamo 5 numeri massimo di 9
    let numPc = parseInt(Math.floor(Math.random() * 9));
    console.log(numPc);
    // li stampiamo in pagina
    contNumber.innerHTML += numPc
}

// Adesso mettiamo un timer di 30 secondi dove alla fine di essi verrà chiesto all'utente i numeri che ovviamente saranno oscurati

setTimeout(hiddenNumber, 500);
setTimeout(numberUser, 1000)

// creiamo la funzione per nascondere i numeri aggiungendo una classe al "contNumber" 

function hiddenNumber() {
    contNumber.classList.add("hidden");
}

// Adesso chiediamo all'utente i 5 numeri

let numUtente = [];
function numberUser() {
    for (let i = 0; i < 5; i++) {
        let numListUser = prompt("inserisci un numero alla volta")
        if (numPc.includes(numListUser)) {
            numUtente.push(numListUser);
        }
    }
    if (numUtente = "") {
        contNumberKnow.innerHTML = "non hai indovinato nessun numero"
    }else {
        contNumberKnow.innerHTML = "hai indovinato questi numeri", numUtente
    }
}


