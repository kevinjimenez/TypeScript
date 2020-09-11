//  BOOLEAN
var isDone = true;
// NUMBER
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// let big: bigint = 100n; //es2020 error
// STRING
var color = "blue";
color = 'red';
// ${} template string
var fullName = "Kevin jimenez";
var age = 37;
var sentence = "Hola, mi nombre es " + fullName + ".";
console.log("Debera ser de " + (age + 1) + " a\u00F1os el siguiente mes");
var sentence2 = 'hola mi nombre es ' +
    fullName +
    ".\n\n" +
    "Debera ser de " +
    (age + 1) +
    " años el siguiente mes.";
console.log(sentence2);
// ARRAY
//  firts way
var list = [1, 2, 3];
//  second way
var list2 = [1, 2, 3];
// TUPLA
// numero fijo de elementos, diferentes tipos (los tipos deben ser conocidos)
var tupla;
tupla = ['hola', 21];
// tupla = [12, "kevin"]; error type
console.log(tupla[0].substring(1));
// console.log(tupla[1].substring(1)); error type
// ENUM
// inicia desde cero, los demas elementos se van enumerando ,1,2,3 .. etc
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Red;
console.log('color es: ' + c);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
var c2 = Color2.Red;
console.log('color 2 es: ' + c2);
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 3] = "Blue";
})(Color3 || (Color3 = {}));
var c3 = Color3.Red;
console.log('color 3 es: ' + c3);
// se puede obtener el nombre del elmento dependiendo de su valor;
var nombreColor = Color[2];
console.log('nombre color con valor 0 es: ' + nombreColor);
// UNKNOWN
// tipos de datos dinamicos
var notSure = 4;
console.log(typeof notSure);
notSure = 'hola amiguitos';
console.log(typeof notSure);
notSure = true;
console.log(typeof notSure);
//const str: string = obtenerValor('hola')
var perdiendoTipo = 4;
// podria existi en timpo de ejecucio
// perdiendoTipo.ifItExists();
// perdiendoTipo.toFixed();
// let strictoTipado: unknown = 4;
// strictoTipado.toFixed();
var strictoTipadoObj = {};
// let d = strictoTipadoObj.a.b.c.f;/
// VOID
function cuidadoUsuario() {
    console.log('mensaje de espera');
}
cuidadoUsuario();
// declaraicon de variables de tipo void es inusual => para eso se usa null or undefined
var inusual = undefined;
inusual = null;
// NULL Y UNDEFINED
var u = undefined;
var n = null;
// NEVER
// tipo q nunca devuelve, el uso cuando bota una aception
function error(mensaje) {
    throw new Error(mensaje);
}
function fail() {
    return error("algo fallo");
}
function loopInfinito() {
    while (true) {
    }
}
//create({prop: 0});
//create(null);
// error
// create(34);
// TYPE ASSERTIONS
// cambio de tipo 'confia en mi compilador'
// opcion 1
var algunValor = "es un string";
var strLenght = algunValor.length;
console.log(strLenght);
// opcion 0
var algunValor2 = "es un string";
var strLenght2 = algunValor2.length;
console.log(strLenght2);
