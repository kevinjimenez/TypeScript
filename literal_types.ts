// Literal Narrowing
// We're making a guarantee that this variable
// helloWorld will never change, by using const.

// So, TypeScript sets the type to be "Hello World" not string
const helloWorld = "Hello World";

// On the other hand, a let can change, and so the compiler declares it a string
let hiWorld = "Hi World";

// String Literal Types

type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';
class elementoUI{
    animacion(dx: number, dy: number, easing: Easing){
        if(easing === 'ease-in'){}
        else if(easing === 'ease-out'){}
        else if(easing === 'ease-in-out'){}
        else{}
    }    
}
let boton = new elementoUI();
boton.animacion(0,0,'ease-in');
// boton.animacion(0,0,'aaaa');