class Greeter {
    greeting: string;

    constructor(mensaje: string) {
        this.greeting = mensaje;
    }

    greey() {
        return 'holaaaa, ' + this.greeting
    }

}

let greeting = new Greeter('kevin');
// al instanciar un nuevo objeto (clase) se imprime un json con el valor del constructor
console.log(greeting);

// HERENCIA

class Animal {

    //
    nombre: string;
    constructor(nombreAnimal: string) {
        this.nombre = nombreAnimal;
    }
    //

    mover(distnaciaEnMetros: number = 0) {
        console.log(distnaciaEnMetros, this.nombre);
    }
}

class Perro extends Animal {
    ladrar() {
        console.log('woof!, woof!');
    }
}

class Serpiente extends Animal {
    constructor(name: string) {
        super(name);
    }

    mover(distancia = 5) {
        console.log('moveeeerr....');
        super.mover(distancia);
    }
}

class Caballo extends Animal {
    constructor(name: string) {
        super(name);
    }

    mover(distancia = 5) {
        console.log('galopar....');
        super.mover(distancia);
    }
}

let sam = new Serpiente('Python');
let tom: Animal = new Caballo('Spirit')

sam.mover();
tom.mover(34)

/*
const dog = new Perro();
dog.ladrar();
dog.mover(12);
dog.ladrar();
*/

// #<nombreVariable> => typescritpt => _<nombreVaroable>

// USANDO UNA CLASES EN UNA INTERFAZ

class Punto {
    x: number;
    y: number;
    hola(){        
    }
}

interface Punto3d extends Punto{
    z: number;
}

let puntos3D:Punto3d = {x:1, y:2, z:3, hola: ()=>{console.log('kho');
}}
console.log(puntos3D.hola());
