export const PI = Math.PI;

export let usuario = "Luis";
let password = "Barcelona";
// Para exportar variables default se hace despues de la declaracion
// export default password;


// No se puede exportar dos veces de manera default
export default function saludar() {
    console.log("Hola Modulos +ES6")
}

export class Saludar {
    constructor(){
        console.log("Hola mundo soy Luis");
    }
}
