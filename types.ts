//  BOOLEAN
let isDone: boolean = true;

// NUMBER
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
// let big: bigint = 100n; //es2020 error

// STRING
let color: string = "blue";
color = 'red';

// ${} template string
let fullName: string = `Kevin jimenez`;
let age: number = 37;
let sentence: string = `Hola, mi nombre es ${fullName}.`
console.log(`Debera ser de ${age + 1} años el siguiente mes`)

let sentence2: string =
    'hola mi nombre es ' +
    fullName +
    ".\n\n" +
    "Debera ser de " +
    (age + 1) +
    " años el siguiente mes."
console.log(sentence2);

// ARRAY
//  firts way
let list: number[] = [1, 2, 3];
//  second way
let list2: Array<Number> = [1, 2, 3];

// TUPLA
// numero fijo de elementos, diferentes tipos (los tipos deben ser conocidos)
let tupla: [string, number];

tupla = ['hola', 21];
// tupla = [12, "kevin"]; error type
console.log(tupla[0].substring(1));
// console.log(tupla[1].substring(1)); error type

// ENUM
// inicia desde cero, los demas elementos se van enumerando ,1,2,3 .. etc
enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Red;
console.log('color es: ' + c)

enum Color2 {
    Red = 1,
    Green,
    Blue
}
let c2: Color2 = Color2.Red;
console.log('color 2 es: ' + c2)

enum Color3 {
    Red = 1,
    Green = 2,
    Blue = 3
}
let c3: Color3 = Color3.Red;
console.log('color 3 es: ' + c3)

// se puede obtener el nombre del elmento dependiendo de su valor;

let nombreColor: string = Color[2];
console.log('nombre color con valor 0 es: ' + nombreColor)


// UNKNOWN
// tipos de datos dinamicos
let notSure: unknown = 4
console.log(typeof notSure);
notSure = 'hola amiguitos';
console.log(typeof notSure);
notSure = true;
console.log(typeof notSure);

declare const maybe: unknown;
// puede ser string, number, object, bool
//const aNumber: number = maybe;

/*if (maybe === true) {
    const aBoolean: boolean = maybe
    //const aString: string = maybe
}*/

/*if (maybe === 'hola') {
    const aString: string = maybe
    //const aBoolean: boolean = maybe
}*/

// ANY => poderoso no todos los tipos estan disponibles
declare function obtenerValor(llave: string): any;
//const str: string = obtenerValor('hola')

let perdiendoTipo: any = 4;
// podria existi en timpo de ejecucio
// perdiendoTipo.ifItExists();
// perdiendoTipo.toFixed();

// let strictoTipado: unknown = 4;
// strictoTipado.toFixed();
let strictoTipadoObj: any = {};
// let d = strictoTipadoObj.a.b.c.f;/

// VOID
function cuidadoUsuario(): void {
    console.log('mensaje de espera');
}
cuidadoUsuario();
// declaraicon de variables de tipo void es inusual => para eso se usa null or undefined
let inusual: void = undefined;
inusual = null;

// NULL Y UNDEFINED

let u: undefined = undefined;
let n: null = null;

// NEVER
// tipo q nunca devuelve, el uso cuando bota una aception

function error(mensaje:string): never {
    throw new Error(mensaje);
}

function fail(): never {
    return error("algo fallo");
}

function loopInfinito(): never {
    while (true) {
        
    }
}

// OBJECT
declare function create(o: object | null): void;

//create({prop: 0});
//create(null);
// error
// create(34);

// TYPE ASSERTIONS
// cambio de tipo 'confia en mi compilador'
// opcion 1
let algunValor: unknown = "es un string"
let strLenght: number = (algunValor as string).length;
console.log(strLenght);
// opcion 0
let algunValor2: unknown = "es un string"
let strLenght2: number = (<string>algunValor2).length;
console.log(strLenght2);