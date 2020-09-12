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
myBusqueda = function () {
    //let resultado = fuente.search(subString);
    //return resultado > -1;
    return false;
};
