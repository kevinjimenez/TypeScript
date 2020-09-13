// TIPADO
/*function imprimirLabel(labelObj: { label: string }) {
    console.log(labelObj);
    console.log(labelObj.label);
}

let myObj = { size: 12, label: 'kevin' }
imprimirLabel(myObj);*/

import { Interface } from "readline";

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
myArreglo = ['qw', 'qw', 'qe'];

myArreglo[0];


interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

// mismo tipo de indice
interface notOkay {
    [x: number]: Animal;
    // [x: string]: Dog
}
// el retorno de los tipo debe ser el mismo
interface NumberDictonary {
    [index: string]: number;
    lengyh: number
    // name: string
}
// la union de tipos ayuda, el retorno de los tipo debe ser el mismo
interface NumberOrStringDictonary {
    [index: string]: number | string;
    lengyh: number;
    name: string;
}
// indices de lectura 
interface ReadonlyStringArray {
    readonly [index: number]: string
}

let myArray: ReadonlyStringArray = ['alice', 'bob']
// myArray[2] = "jko";

// TIPOS CLASES
interface ClockInterface {
    currentTIme: Date;
}

class CLock implements ClockInterface {
    currentTIme: Date = new Date();
    constructor(h: number, m: number) { }
}

interface ClockInterface2 {
    currentTIme: Date;
    setTime(d: Date): void;
}
// interfaz con metodos para la clase
class CLock2 implements ClockInterface2 {
    currentTIme: Date = new Date();
    constructor(h: number, m: number) { }

    setTime(d: Date) {
        this.currentTIme = d;
    }
}

// error con instancia
interface ClockConstructor {
    new(hour: number, min: number);
}

/*class clock3 implements ClockConstructor {
    currentime: Date;
    constructor(h: number, m: number) { }
}*/

// correcion con la instancia
interface ClockConstructor2 {
    new(hour: number, min: number): ClockInterface4;
}

interface ClockInterface4 {
    tick(): void
}

function createClock(
    ctor: ClockConstructor2,
    hour: number,
    min: number
): ClockInterface4 {
    return new ctor(hour, min);
}

class DigitalClock implements ClockInterface4 {
    constructor(h: number, m: number) { }
    tick() {
        console.log('beeeeeeep beeeeeeep');
    }
}

class AnalogiClock implements ClockInterface4 {
    constructor(h: number, m: number) { }
    tick() {
        console.log('beeeeeeep beeeeeeep');
    }
}

let digital = createClock(DigitalClock, 12, 23);
let analogico = createClock(AnalogiClock, 12, 23);

// 2da forma

interface ClockConstructor3 {
    new(hour: number, min: number): ClockInterface4;
}

interface ClockInterface4 {
    tick(): void
}

const Clock: ClockConstructor3 = class Clock implements ClockInterface4 {
    constructor(h: number, m: number) { }
    tick() {
        console.log('kho kho');
    }
}
// EXTENCION DE INTERFACES

interface forma {
    color: string;
}

interface cuadrado extends forma {
    tamanoLado: number;
}

let cuadrado = {} as cuadrado
cuadrado.color = 'rojo';
cuadrado.tamanoLado = 23;

interface penStroke {
    penWidth: number;
}

interface cuadrado2 extends forma, penStroke {
    lada: number
}
let cuadrado2 = {} as cuadrado2;
cuadrado2.color = 'rojo';
cuadrado2.lada = 2;
cuadrado2.penWidth = 23;

// TIPOS HIBRIDOS
interface counter{
    (inicio: number): string;
    intervalo: number;
    reset(): void;
}

function getCOunter(): counter{
    // let couter = ((inicuio: number)=>{}) as counter;
    let couter = function(inicuio: number){} as counter;
    couter.intervalo = 123;
    couter.reset = ()=>{
        console.log('khe')
    };
    return couter;
}

let c = getCOunter();
c(10)
c.reset()
c.intervalo = 5.8;
// console.log(c.reset())

// HERENCIA DE CLASES EN INTERFACES

class control {
    private state: any;
}

interface SeleccionBoton extends control {
    select(): void;
}

class button extends control implements SeleccionBoton{    
    select(){

    }
}
// dee ser heradero del padre
/*class imagen implements SeleccionBoton{
    select(){

    }
}*/
