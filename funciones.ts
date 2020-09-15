// funciones nombre
function add(a: number, b: number): number {
    return a + b;
}
// funciones anomimas
let funcionAnomina = function (a: number, b: number): number {
    return a + b;
}
// fecla gprda - arrow fat funnction
let a = (): number => {
    return 0;
}

// tipado
let myAdd: (a: number, b: number) => number = () => {
    return 0
}
myAdd(2, 3);

// PARAMETROS
// obligatorios

function construirNombre(nombre: string, apeliido: string) {
    return nombre + ' ' + apeliido;
}

//let a1 = construirNombre('haha');
let a2 = construirNombre('haha', 'a');
//let a3 =construirNombre('haha','a','a');

// OPcionales

function construirNombre2(nombre: string, apeliido?: string) {
    return nombre + ' ' + apeliido;
}
let a11 = construirNombre2('haha');
let a22 = construirNombre2('haha', 'a');
// Definidos
function construirNombre3(nombre: string, apeliido = 'kho') {
    return nombre + ' ' + apeliido;
}
let a111 = construirNombre2('haha');
let a222 = construirNombre2('haha', 'a');
let a333 = construirNombre2('haha', undefined); // => hahah kho

// parametros infinitos
function construirNombre4(nombre: string, ...restOfName: string[]) {
    return nombre + ' ' + restOfName.join(' ');
}
let a1111 = construirNombre4('haha', 'qw', '123', 'asa');

// PALABRA THIS
// fecha gorda captura el lugar donde se creo y no donde se invoco eso hace "function()"
let decks = {
    suits: ['corazones', 'espadas', 'diamantes'],
    card: Array(52),
    createCardPicker: function () {
        // return  function () { => error
        return  ()=> {
            let pickedCard = Math.floor(Math.random() * 32);
            let pickedSuit = Math.floor(pickedCard / 132);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 }
        }
    }
}

let cardPicker = decks.createCardPicker();
let pickedCard = cardPicker();

console.log("cardf: "+pickedCard.card+" of "+pickedCard.suit)

// THIS PARAMETERS
function f(this: void){}


interface Card {
    suit: string;
    card: number;
}

interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): ()=> Card
}

let decks2 = {
    suits: ['corazones', 'espadas', 'diamantes'],
    card: Array(52),
    createCardPicker: function (this: Deck) {
        // return  function () { => error
        return  ()=> {
            let pickedCard = Math.floor(Math.random() * 32);
            let pickedSuit = Math.floor(pickedCard / 132);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 }
        }
    }
}

let cardPicker2 = decks.createCardPicker();
let pickedCard2 = cardPicker();

console.log("cardf: "+pickedCard2.card+" of "+pickedCard2.suit)