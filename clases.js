var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Greeter = /** @class */ (function () {
    function Greeter(mensaje) {
        this.greeting = mensaje;
    }
    Greeter.prototype.greey = function () {
        return 'holaaaa, ' + this.greeting;
    };
    return Greeter;
}());
var greeting = new Greeter('kevin');
// al instanciar un nuevo objeto (clase) se imprime un json con el valor del constructor
console.log(greeting);
// HERENCIA
var Animal = /** @class */ (function () {
    function Animal(nombreAnimal) {
        this.nombre = nombreAnimal;
    }
    //
    Animal.prototype.mover = function (distnaciaEnMetros) {
        if (distnaciaEnMetros === void 0) { distnaciaEnMetros = 0; }
        console.log(distnaciaEnMetros, this.nombre);
    };
    return Animal;
}());
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Perro.prototype.ladrar = function () {
        console.log('woof!, woof!');
    };
    return Perro;
}(Animal));
var Serpiente = /** @class */ (function (_super) {
    __extends(Serpiente, _super);
    function Serpiente(name) {
        return _super.call(this, name) || this;
    }
    Serpiente.prototype.mover = function (distancia) {
        if (distancia === void 0) { distancia = 5; }
        console.log('moveeeerr....');
        _super.prototype.mover.call(this, distancia);
    };
    return Serpiente;
}(Animal));
var Caballo = /** @class */ (function (_super) {
    __extends(Caballo, _super);
    function Caballo(name) {
        return _super.call(this, name) || this;
    }
    Caballo.prototype.mover = function (distancia) {
        if (distancia === void 0) { distancia = 5; }
        console.log('galopar....');
        _super.prototype.mover.call(this, distancia);
    };
    return Caballo;
}(Animal));
var sam = new Serpiente('Python');
var tom = new Caballo('Spirit');
sam.mover();
tom.mover(34);
/*
const dog = new Perro();
dog.ladrar();
dog.mover(12);
dog.ladrar();
*/
// #<nombreVariable> => typescritpt => _<nombreVaroable>
// USANDO UNA CLASES EN UNA INTERFAZ
var Punto = /** @class */ (function () {
    function Punto() {
    }
    Punto.prototype.hola = function () {
        console.log('hola');
    };
    return Punto;
}());
var puntos3D = { x: 1, y: 2, z: 3, hola: function () {
        console.log('kho');
    } };
console.log(puntos3D.hola());
