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
let a2 =construirNombre('haha','a');
//let a3 =construirNombre('haha','a','a');

// OPcionales

function construirNombre2(nombre: string, apeliido?: string) {
    return nombre + ' ' + apeliido;
}
let a11 = construirNombre2('haha');
let a22 =construirNombre2('haha','a');
// Definidos
function construirNombre3(nombre: string, apeliido = 'kho') {
    return nombre + ' ' + apeliido;
}
let a111 = construirNombre2('haha');
let a222 =construirNombre2('haha','a');
let a333 =construirNombre2('haha',undefined); // => hahah kho

// parametros infinitos
function construirNombre4(nombre: string, ...restOfName: string[]) {
    return nombre + ' ' + restOfName.join(' ');
}
let a1111 = construirNombre4('haha','qw','123','asa');

