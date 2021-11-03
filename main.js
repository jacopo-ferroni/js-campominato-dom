/**
 * L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l’utente clicca su ogni cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve scoprire tutte le bombe e comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. 
 * */

const btn = document.querySelector(`.btn`);
const mainContent = document.querySelector(`.main-content`);

btn.addEventListener(`click`, () => {
    console.log(`wuf`);
    mainContent.innerHTML = ``;
    const play = document.getElementById(`difficulty`).value;
    console.log(play);


    let box = 1;
    let boxPerSide = 1;


    switch (play) {

        case `1`:
            box = 100;
            boxPerSide = 10;
            break;

        case `2`:
            box = 81;
            boxPerSide = 9;
            break;

        case `3`:
            box = 49;
            boxPerSide = 7;
            break;
    }

    console.log(box);
    console.log(boxPerSide);

    // BISOGNA CREARE IL CONTAINER ESTERNO

    const container = document.createElement(`div`);
    container.classList.add(`grid`);

    mainContent.append(container);

    for(let i = 1; i <= box; i++) {

        const number = i;
        console.log(number);

        const nodo = document.createElement(`div`);
        nodo.classList.add(`box`);
        nodo.style.width = `calc(100% / ${boxPerSide})`;
        nodo.style.height = `calc(100% / ${boxPerSide})`;

        const span = document.createElement(`span`);
        span.append(number);
        nodo.append(span);

        container.append(nodo);

        nodo.addEventListener(`click`, function() {
            this.classList.add(`click`);
        });
    }
});
