"use strict";
// TIPADO
/*function imprimirLabel(labelObj: { label: string }) {
    console.log(labelObj);
    console.log(labelObj.label);
}

let myObj = { size: 12, label: 'kevin' }
imprimirLabel(myObj);*/
exports.__esModule = true;
function imprimirLabel(labelObj) {
    console.log(labelObj);
    console.log(labelObj.label);
}
var myObj = { size: 12, label: 'kevin' };
imprimirLabel(myObj);
function crearCuadrado(conf) {
    var nuevoCuadrado = { color: 'blanco', area: 100 };
    if (conf.color) {
        nuevoCuadrado.color = conf.color;
    }
    if (conf["with"]) {
        nuevoCuadrado.area = conf["with"];
    }
    return nuevoCuadrado;
}
var miCuadrado = crearCuadrado({ color: 'rojo' });
console.log(miCuadrado);
;
var ptn = { x: 3, y: 10 };
console.log(ptn);
// tbm se puede realiza con arreglom los cuales no se pueden modificar
var a = [1, 23, 4];
var ro = a;
// retornar a la normalidad
a = ro;
function crearCuadrado2(conf) {
    return { color: conf.color || 'red', area: conf["with"] ? conf["with"] * conf["with"] : 23 };
}
var squareOptions = { colour: 'red' };
var miCuadrado2 = crearCuadrado2(squareOptions);
console.log(miCuadrado2);
var myBusqueda;
// los params puede ser cualquiera pero el tipo no
myBusqueda = function (fuente, subString) {
    var resultado = fuente.search(subString);
    return resultado > -1;
};
myBusqueda('qwerty', 'qwe');
var myArreglo;
myArreglo = ['qw', 'qw', 'qe'];
myArreglo[0];
var myArray = ['alice', 'bob'];
var CLock = /** @class */ (function () {
    function CLock(h, m) {
        this.currentTIme = new Date();
    }
    return CLock;
}());
// interfaz con metodos para la clase
var CLock2 = /** @class */ (function () {
    function CLock2(h, m) {
        this.currentTIme = new Date();
    }
    CLock2.prototype.setTime = function (d) {
        this.currentTIme = d;
    };
    return CLock2;
}());
function createClock(ctor, hour, min) {
    return new ctor(hour, min);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log('beeeeeeep beeeeeeep');
    };
    return DigitalClock;
}());
var AnalogiClock = /** @class */ (function () {
    function AnalogiClock(h, m) {
    }
    AnalogiClock.prototype.tick = function () {
        console.log('beeeeeeep beeeeeeep');
    };
    return AnalogiClock;
}());
var digital = createClock(DigitalClock, 12, 23);
var analogico = createClock(AnalogiClock, 12, 23);
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.tick = function () {
        console.log('kho kho');
    };
    return Clock;
}());
var cuadrado = {};
cuadrado.color = 'rojo';
cuadrado.tamanoLado = 23;
var cuadrado2 = {};
cuadrado2.color = 'rojo';
cuadrado2.lada = 2;
cuadrado2.penWidth = 23;
function getCOunter() {
    // let couter = ((inicuio: number)=>{}) as counter;
    var couter = function (inicuio) { };
    couter.intervalo = 123;
    couter.reset = function () {
        console.log('khe');
    };
    return couter;
}
var c = getCOunter();
c(10);
c.reset();
c.intervalo = 5.8;
console.log(c.reset());
