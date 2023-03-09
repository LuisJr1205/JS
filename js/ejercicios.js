// Mis propuestas con respecto a los ejercicios
function cuentaCaracteres(cadena="") {
    if(!cadena){
        console.warn("No ingresaste ninguna cadena");
    }else{
        console.info(`La cadena que me mandaste "${cadena}" tiene ${cadena.length} caracteres`);
    }
}

function dividirCadena(cadena, indicador) {
    let cadenanueva = cadena.substring(0,indicador);
    console.log(cadenanueva);
}

function arrayCadena(cadena, caracter) {
    let array = cadena.split(caracter)
    console.log(array);
}

const cadenarepetida = (cadena, indicador) => cadena.repeat(indicador);

let numeros = [1,2,3,4,5,6,9]

cuentaCaracteres("Hola Mi nombre es Luis");

dividirCadena("Hola Mundo", 15);

arrayCadena("Hola me llamo luis Enrique Madero", " ");

console.log(cadenarepetida("Luis ", 3));

// Ejercicios no 5-8

const invertirTexto = (cadena ="") => 
    (!cadena)
    ?console.warn("No ingresaste ninguna cadena")
    :console.info(cadena.split("").reverse().join(""));

invertirTexto("Anita lava la tina");

const palabrasRepetidas = (cadena="", palabra="") =>{
    if(!cadena) return console.warn("No ingresaste ningun texto");

    if(!palabra) return console.warn("No ingresaste una palabra para evaluar");

    let i=0,
        contador = 0;

    while (i !==-1){
        i = cadena.indexOf(palabra,i);
        if(i !== -1){
            i++;
            contador++;
        }
    }
    return console.info(`La palabra ${palabra} se repite ${contador}`);
}

palabrasRepetidas("Hola Mundo mundo mundo", "mundo");

const palindromo = (palabra="")=>{
    if(!palabra) return console.warn("No ingresaste ningun texto");

    palabra = palabra.toLowerCase();
    let alReves = palabra.split("").reverse().join("");

    return(palabra===alReves)
     ?console.info(`Si es palindromo, palabr original ${palabra}, Palabra al reves ${alReves}`)
     :console.info(`No es palindromo, palabr original ${palabra}, Palabra al reves ${alReves}`);
}

palindromo("eye");

const eliminarCaracteres = (texto ="", patron="") =>
    (!texto)
     ?console.warn("No ingresaste ninguna cadena")
     :(!patron)
      ?console.warn("No ingresaste ningun patron")
      :console.info(texto.replace(new RegExp(patron,"ig"),""))

eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5","xyz");

// Ejercicios del 9 al 11

// La forma en que la hace el video
const aleatorio = () => console.info(Math.round((Math.random()*100)+500))
aleatorio();

// La forma que se hizo conforme la documentacion de MDN
const numeroRandom = function(){
    let min = 501,
        max = 601;
    return Math.round(Math.random() * (max -min) + min);
}

console.info(numeroRandom());

const capicua = (numero=0) =>{
    if(!numero) return console.warn("No ingresaste un numero");
    
    if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado NO es un numero`);

    numero = numero.toString();
    let alReves = numero.split("").reverse().join("");

    return(numero === alReves)
     ?console.info(`Si es capicua, numero original ${numero}, numero al reves ${alReves}`)
     :console.info(`No es capicua, numero original ${numero}, numero al reves ${alReves}`);
       
}

capicua(200);

const numeroFactorial = (numero=undefined)=>{
    if(numero===undefined) return console.error("No ingresaste el numero a evaluar");

    if(typeof numero !== "number") return console.error("El valor ingreasado no es un numero");

    if(numero===0) return console.error("No se puede obtener el factiral de 0");

    if(Math.sign(numero) === -1) return console.error("No se puede obtener el factorial de un numero negativo");

    let factorial =1;
    for (let i = 1; i <= numero ; i++) {
        factorial = factorial * i;
    }

    return console.info(`El factorial del numero ${numero} es ${factorial}`);
}

numeroFactorial();
numeroFactorial(0);
numeroFactorial(-5);
numeroFactorial("2");
numeroFactorial(3);






// ------------------------------------------------
// Forma de validar y con arrow function
// operador ternario con lo que se hace la condicon y con funcion expresada y arrow function
// 
/*const contarCaracteres = (cadena ="") =>
    (!cadena)
    ? console.warn("No ingresaste ninguna cadena")
    :console.info(`La cadena que me mandaste "${cadena}" tiene ${cadena.length} caracteres`);

contarCaracteres("Feliz cumpleaños");

const recordarTexto = (cadena="",longitud=undefined) =>
    (!cadena)
        ? console.warn("No ingresaste ninguna cadena de texto")
        :(longitud === undefined) 
         ? console.warn("No ingresaste la longitud a recortar")
         :console.info(cadena.slice(0,longitud));

recordarTexto("Hola Mundo");

const cadenaArreglo = (cadena="",separador = undefined) =>
    (!cadena)
     ? console.warn("No ingresaste ninguna cadena")
      :(separador === undefined)
       ? console.warn("No ingresaste el caracter separador")
        :console.info(cadena.split(separador));
        
cadenaArreglo("Luis,Enrique,Madero,Morales",",")

const repetirTexto = (texto="", veces= undefined) =>{
    if(!texto) return console.warn("No ingresaste ningun texto");

    if(veces === undefined) return console.error("No ingresaste el numero de veces a repetir el texto");

    if(veces === 0)return console.error("El numero de veces no puede ser 0");

    if(Math.sign(veces) === -1) return console.error("El numero de veces no puede ser negativo");

    for (let i = 1; i <= veces; i++) {
        console.info(`${texto},${i}`);
    }
}

repetirTexto("Hola Mundo",3);
repetirTexto("Hola mundo",0);
repetirTexto("Hola mundo",-10);
repetirTexto("",10);*/

