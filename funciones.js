// funciones nombre
function add(a, b) {
    return a + b;
}
// funciones anomimas
var funcionAnomina = function (a, b) {
    return a + b;
};
// fecla gprda - arrow fat funnction
var a = function () {
    return 0;
};
// tipado
var myAdd = function () {
    return 0;
};
myAdd(2, 3);
// PARAMETROS
// obligatorios
function construirNombre(nombre, apeliido) {
    return nombre + ' ' + apeliido;
}
//let a1 = construirNombre('haha');
var a2 = construirNombre('haha', 'a');
//let a3 =construirNombre('haha','a','a');
// OPcionales
function construirNombre2(nombre, apeliido) {
    return nombre + ' ' + apeliido;
}
var a11 = construirNombre2('haha');
var a22 = construirNombre2('haha', 'a');
// Definidos
function construirNombre3(nombre, apeliido) {
    if (apeliido === void 0) { apeliido = 'kho'; }
    return nombre + ' ' + apeliido;
}
var a111 = construirNombre2('haha');
var a222 = construirNombre2('haha', 'a');
var a333 = construirNombre2('haha', undefined); // => hahah kho
// parametros infinitos
function construirNombre4(nombre) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return nombre + ' ' + restOfName.join(' ');
}
var a1111 = construirNombre4('haha', 'qw', '123', 'asa');
// PALABRA THIS
// fecha gorda captura el lugar donde se creo y no donde se invoco eso hace "function()"
var decks = {
    suits: ['corazones', 'espadas', 'diamantes'],
    card: Array(52),
    createCardPicker: function () {
        var _this = this;
        // return  function () { => error
        return function () {
            var pickedCard = Math.floor(Math.random() * 32);
            var pickedSuit = Math.floor(pickedCard / 132);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = decks.createCardPicker();
var pickedCard = cardPicker();
console.log("cardf: " + pickedCard.card + " of " + pickedCard.suit);
// THIS PARAMETERS
function f() { }
var decks2 = {
    suits: ['corazones', 'espadas', 'diamantes'],
    card: Array(52),
    createCardPicker: function () {
        var _this = this;
        // return  function () { => error
        return function () {
            var pickedCard = Math.floor(Math.random() * 32);
            var pickedSuit = Math.floor(pickedCard / 132);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker2 = decks.createCardPicker();
var pickedCard2 = cardPicker();
console.log("cardf: " + pickedCard2.card + " of " + pickedCard2.suit);
