// TIPADO
/*function imprimirLabel(labelObj: { label: string }) {
    console.log(labelObj);
    console.log(labelObj.label);
}

let myObj = { size: 12, label: 'kevin' }
imprimirLabel(myObj);*/
// INTERFACES
interface LabeledValUe {
    label: string;
}

function imprimirLabel(labelObj: LabeledValUe) {
    console.log(labelObj);
    console.log(labelObj.label);
}

let myObj = { size: 12, label: 'kevin' }
imprimirLabel(myObj);

// PROPIEDADES OPCIONALES

interface confiCuadrado {
    color?: string,
    with?: number
}

function crearCuadrado(conf: confiCuadrado): { color: string, area: number } {

    let nuevoCuadrado = { color: 'blanco', area: 100 };
    if (conf.color) {
        nuevoCuadrado.color = conf.color;
    }
    if (conf.with) {
        nuevoCuadrado.area = conf.with;
    }

    return nuevoCuadrado;
}
let miCuadrado = crearCuadrado({ color: 'rojo' });
console.log(miCuadrado);

// PROPIEDADES SOLO DE LECTURA
interface punto {
    readonly x: number,
    readonly y: number,
};

let ptn: punto = { x: 3, y: 10 };
console.log(ptn);
// tbm se puede realiza con arreglom los cuales no se pueden modificar
let a: number[] = [1, 23, 4];
let ro: ReadonlyArray<number> = a;
// retornar a la normalidad
a = ro as number[];

// EXCESO DE VERIFICAION DE PROPIEDADES
interface confiCuadrado2 {
    color?: string;
    with?: number;
    [propName: string]: any; // se puede agregar cualquie propiedad sin importar el tipo
}

function crearCuadrado2(conf: confiCuadrado2): { color: string, area: number } {

    return { color: conf.color || 'red', area: conf.with ? conf.with * conf.with : 23 };
}
let squareOptions = { colour: 'red' }
let miCuadrado2 = crearCuadrado2(squareOptions);
console.log(miCuadrado2)

// TIPADO FUNCIONES
interface funcionBuscar {
    (fuents: string, subString: string): boolean;
}

let myBusqueda: funcionBuscar;
// los params puede ser cualquiera pero el tipo no
myBusqueda = (fuente: string, subString: string): boolean => {
    let resultado = fuente.search(subString);
    return resultado > -1;
}

myBusqueda('qwerty', 'qwe');
// TIPOS INDEXABLES

interface StringArray {
    [indece: number]: string;
}

let myArreglo: StringArray;
myArreglo = ['qw','qw','qe'];

myArreglo[0];

