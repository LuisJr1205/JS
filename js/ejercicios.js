// Mis propuestas con respecto a los ejercicios
// Ejercicios no.1
function cuentaCaracteres(cadena="") {
    if(!cadena){
        console.warn("No ingresaste ninguna cadena");
    }else{
        console.info(`La cadena que me mandaste "${cadena}" tiene ${cadena.length} caracteres`);
    }
}

cuentaCaracteres("Hola Mi nombre es Luis");

// Ejercicio no.2
function dividirCadena(cadena, indicador) {
    let cadenanueva = cadena.substring(0,indicador);
    console.log(cadenanueva);
}

dividirCadena("Hola Mundo", 15);

// Ejercicio no.3
function arrayCadena(cadena, caracter) {
    let array = cadena.split(caracter)
    console.log(array);
}

arrayCadena("Hola me llamo luis Enrique Madero", " ");

// Ejercicio no.4
const cadenarepetida = (cadena, indicador) => cadena.repeat(indicador);

console.log(cadenarepetida("Luis ", 3));

// Ejercicios no 5-8
// Ejercicio 5
const invertirTexto = (cadena ="") => 
    (!cadena)
    ?console.warn("No ingresaste ninguna cadena")
    :console.info(cadena.split("").reverse().join(""));

invertirTexto("Anita lava la tina");

// Ejercicio 6
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

// Ejercicio 7
const palindromo = (palabra="")=>{
    if(!palabra) return console.warn("No ingresaste ningun texto");

    palabra = palabra.toLowerCase();
    let alReves = palabra.split("").reverse().join("");

    return(palabra===alReves)
     ?console.info(`Si es palindromo, palabr original ${palabra}, Palabra al reves ${alReves}`)
     :console.info(`No es palindromo, palabr original ${palabra}, Palabra al reves ${alReves}`);
}

palindromo("eye");

// Ejerccicio 8
const eliminarCaracteres = (texto ="", patron="") =>
    (!texto)
     ?console.warn("No ingresaste ninguna cadena")
     :(!patron)
      ?console.warn("No ingresaste ningun patron")
      :console.info(texto.replace(new RegExp(patron,"ig"),""))

eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5","xyz");

// Ejercicios del 9 al 11

// Ejercicio 9
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

// Ejercicio 10
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

// Ejercicio 11
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

numeroFactorial(3);

// EJERCICIOS 12 - 14

// Ejercicio 12
const numerosPrimos = (numero=undefined) =>{
    if(numero===undefined) return console.error("No ingresaste el numero a evaluar");

    if(typeof numero !== "number") return console.error("El valor ingreasado no es un numero");

    if(Math.sign(numero) === -1) return console.error("El numero ingresado es negativo, no se puede realizar el procesos");

    if (numero === 0 || numero ===1 || numero === 4) return console.info(`El numero ${numero} no es un numero primo`);

    for (let i = 2; i < numero ; i++) {
        if (numero % i ===0) return console.info(`El numero ${numero} no es un numero primo`);
        
    }

    return console.info(`El numero ${numero} si es un numero primo`);

}

numerosPrimos(2);

// Ejercicio 13
const numeroPar = (numero= undefined) =>{
    if(numero===undefined) return console.error("No ingresaste el numero a evaluar");

    if(typeof numero !== "number") return console.error("El valor ingreasado no es un numero");

    if(numero===0) return console.error("El numero cero no es par o impar");

    if(Math.sign(numero) === -1) return console.error("El numero ingresado es negativo, no se puede realizar el procesos");

    let residuo = numero % 2;

    if (residuo === 0) {
        return console.info(`El numero ${numero} es numero par`);
    }else{
        return console.info(`El numero ${numero} es un numero impar`);
    }
}

numeroPar(2);

// Ejercicio 14

const conversionTemperaturas = (temperatura = undefined, unidades=undefined) =>{
    if(temperatura===undefined) return console.error("No ingresaste la temperatura");

    if(typeof temperatura !== "number") return console.warn("El dato no es numerico");

    if(unidades === undefined) return console.warn("No ingresaste el tipo de grado a convertir");

    if(typeof unidades !== "string") return console.warn("El dato no es una cadena");

    // VAlidacion de la s letras y el tamño, extra a lo que ya tenia.
    if (unidades.length !==1 || !/(C|F)/.test(unidades)) return console.warn("Valor de unidad no reconocido");
    
    if (unidades ==="F") {
        let gradoCentigrados = (temperatura-32) * (5/9);
        return console.info(`${temperatura}° F = ${gradoCentigrados}°C`);
    }else{
        let gradoFarenheit = (temperatura*(9/5)) + 32;
        return console.info(`${temperatura}°C = ${gradoFarenheit}°F`);
    }

}
conversionTemperaturas(100,"C");
conversionTemperaturas(32,"F");


// EJERCICIOS 15-17

// Ejercicio 15

const conversionesBase = (numero=undefined, base=undefined)=>{
    if(numero===undefined) return console.error("No ingreaste el numero");

    if(typeof numero !== "number") return console.warn("El dato del numero no es numerico");

    if(Math.sign(numero) === -1) return console.error("El numero ingresado es negativo, no se puede realizar el procesos");

    if(base===undefined) return console.error("No ingresaste la base");

    if(typeof base !== "number") return console.warn("El dato de la base no es numerico");

    if(Math.sign(base) === -1) return console.error("El numero ingresado es negativo, no se puede realizar el procesos");

    if (base !==10 && base !==2) return console.warn("Base no permitida");

    if(base === 10){
        return console.info(`${numero} base ${base}= ${numero.toString(2)} base 2`);
        // ${numero.toString(2)}

    } else{
        return console.info(`${numero} base ${base}= ${parseInt(numero.toString(),base)} base 10`);
    }
    

}

conversionesBase(100,2);
conversionesBase(4,10);


// Ejercicio 16

const descuento = (precio=undefined, descuento=undefined) => {
    if(precio === undefined) return console.error("No ingreaste el precio");

    if(typeof precio !== "number") return console.warn("El dato del precio no es numerico");

    if(Math.sign(precio) === -1) return console.error("El precio no puede ser negativo");

    if(descuento===undefined) return console.error("No ingresaste el descuento ");

    if(typeof descuento !== "number") return console.warn("El dato del descuento no es numerico");

    if(Math.sign(descuento) === -1) return console.error("El descuento no puede ser negativo");

    return console.info(`Precio sin descuento ${precio}, precio con descuento de ${descuento} %  es ${precio =precio - (precio * descuento/100)}`);
}
descuento(100,10);

// Ejercicio 17

const aniosCuenta = (fecha=undefined) =>{
    if(fecha === undefined) return console.error("No ingreaste el precio");

    if(!fecha instanceof Date) return console.warn("No es una fecha");

    // Forma del video
    let hoyMenosFecha = new Date().getTime()-fecha.getTime(),
        // Convierte la fecha a milisegundos
        aniosEnMS = 1000*60*60*24*365,
        aniosHumanos = Math.floor(hoyMenosFecha/aniosEnMS);

    return(Math.sign(aniosHumanos)=== -1)
        ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
        : (Math.sign(aniosHumanos)===1)
         ? console.info(`Han pasado ${Math.abs(aniosHumanos)} años desde ${fecha.getFullYear()}`)
         : console.info(`Estamos en el año actual ${fecha.getFullYear()}`);
    // Mi forma de hacer
    // return console.info(`Usted tiene ${new Date().getFullYear() - fecha.getFullYear()}  años`);

}

aniosCuenta(new Date(1984,4,23));
aniosCuenta(new Date(2024,2,9));

// Ejercicio 18
const vocalesConsonantes= (texto=undefined) =>{
    if(texto === undefined) return console.error("No ingresaste un texto a evaluar");

    if(typeof texto !== "string") return console.warn("No es una cadena");

    let vocales = texto.match(/[aeiouáéíóú]/ig);
    let consonantes = texto.match(/[bcdfghjklmnñpqrstvwxyz]/ig);

    return console.info(`Vocales:${vocales.length} Consonantes:${consonantes.length}`);
    
    // Forma de hacer conforme al video
    /* let vocales = 0,
        consonantes = 0;
        texto = texto.toLocaleLowerCase();
        for (let letra of cadena){
            if(/[aeiouáéíóú]/.test(letra)) vocales++;
            if(/[bcdfghjklmnñpqrstvwxyz]/test(letra)) consonantes++;

        return console.info({
            cadena,
            vocales,
            consonantes
        })
        }*/
} 

vocalesConsonantes("Hola Mundo");

// EJERCICIO 19

const validarNombre = (nombre=undefined) =>{
    if(nombre === undefined) return console.error("No ingresaste un texto a evaluar");

    if(typeof nombre !== "string") return console.warn("No es una cadena");

    let expReg = /[A-Za-zÑñÁÉÍÓÚáéíóú\s]+$/g.test(nombre);

    return(expReg) 
    ?console.info(`${nombre} El nombre es valido`)
    :console.info(`${nombre} El nombre NO es valido`);

}
validarNombre();
validarNombre(3);
validarNombre("Luis Enrique");

// EJERCICIO 20

const validaCorreo = (correo = undefined)=>{
    if(correo === undefined) return console.error("No ingresaste un correo");

    if(typeof correo !== "string") return console.warn("No es una cadena");
    
    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(correo);

    return(expReg) 
    ?console.info(`${correo} El email es valido`)
    :console.info(`${correo} El email NO es valido`);

}

validaCorreo("usuario@dominio.com");

// Esta parte fue mas para tener una funcion que le eniviaramos la cdena y la exprecion con la que se va aevaluar.
// Fusion de lasn funciones de correo y nombre ingresando la cadena y la expresion regular.

const validaPatron = (cadena = "", patron=undefined)=>{
    if(!cadena) return console.warn("No ingresaste una cadena");

    if(typeof cadena !== "string") return console.warn("No es una cadena");

    if(patron === undefined) return console.error("No ingresaste un patron a evaluar");

    if(!(patron instanceof RegExp)) return console.error("No ingresaste un patron");

    let expReg = patron.test(cadena);

    return(expReg) 
    ?console.info(`${cadena} Cumple con el patrón ingresado`)
    :console.info(`${cadena} NO cuimple con el patrón ingresado`);
}

validaPatron("Luis Enrique",/[A-Za-zÑñÁÉÍÓÚáéíóú\s]+$/g);
validaPatron("luismadero47@gmail.com",/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i);
validaPatron("luismadero47@gmail",new RegExp(/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,'i'));


// EJERCICIO 21

const elevarCuadrado = (arreglo = undefined) =>{
    if(arreglo === undefined || typeof arreglo === "string") return console.error("No ingresaste una arreglo");

    if(!(arreglo instanceof Array)) return console.warn("No es un arreglo");

    if (arreglo.length ===0 ) return console.warn("La cadena esta vacia");

    for (let num  of arreglo) {
        if(typeof num !== "number") return console.warn(`El valor ${num}, no es un numero`);
    }

    let nuevoArreglo=[];
    for (let i = 0; i < arreglo.length; i++) {
        nuevoArreglo[i] = Math.pow(arreglo[i],2);    
    }
    
    return console.info(`El primer arreglo es:${arreglo}, arreglo elevado al cuadrado${nuevoArreglo}`);

    //otra formad de colocarlo es con el .map
    // const nuevoArreglo = arreglo.map(el => el*el);
    // return console.info(`El primer arreglo es:${arreglo}, arreglo elevado al cuadrado${nuevoArreglo}`);

}

elevarCuadrado([1,4,5]);

//EJERCICIO 22
const numeroAltoBajo = (arreglo=undefined) =>{
    if(arreglo === undefined || typeof arreglo === "string") return console.error("No ingresaste una arreglo");

    if(!(arreglo instanceof Array)) return console.warn("No es un arreglo");

    if (arreglo.length ===0 ) return console.warn("La cadena esta vacia");

    for (let num  of arreglo) {
        if(typeof num !== "number") return console.warn(`El valor ${num}, no es un numero`);
    }

    return console.info(`El numero mas alto es:${Math.max(...arreglo)} el numero mas bajo es:${Math.min(...arreglo)} de la cadena ${arreglo}`);
}
// numeroAltoBajo("hjagda");
numeroAltoBajo([1,4,5,99,-60]);

// EJERCICIO 23
const arregloPares = (arreglo=undefined) =>{
    if(arreglo === undefined || typeof arreglo === "string") return console.error("No ingresaste una arreglo");

    if(!arreglo instanceof Array) return console.warn("No es un arreglo");

    if (arreglo.length ===0 ) return console.warn("La cadena esta vacia");
    
    for (let num  of arreglo) {
        if(typeof num !== "number") return console.warn(`El valor ${num}, no es un numero`);
    }


    //  let    residuo=0,
    //         p=0,ip=0,
    //         arregloPar=[],
    //         arregloImpar=[];
    // for (let i = 0; i < arreglo.length; i++) {
    //     residuo = arreglo[i] % 2;
    //     if (residuo === 0) {
    //         arregloPar[p]= arreglo[i];
    //         p++;
    //     }else{
    //         arregloImpar[ip]= arreglo[i];
    //         ip ++;
    //     }
 
    // }

    // return console.info(`Par:${arregloPar} impar: ${arregloImpar}`);


    // Otra forma de hacerlo con los nuevos metodos
    return console.info({
        pares: arreglo.filter(num => num % 2 ===0),
        impares: arreglo.filter(num => num % 2 ===1)
    })
}

arregloPares([1,2,3,4,5,6,7,8,9,0]);

console.clear();

// EJERCICIO 24

const arregloOrdernado = (arreglo=undefined) =>{
    if(arreglo === undefined || typeof arreglo === "string") return console.error("No ingresaste una arreglo");

    if(!arreglo instanceof Array) return console.warn("No es un arreglo");

    if (arreglo.length ===0 ) return console.warn("La cadena esta vacia");
    
    for (let num  of arreglo) {
        if(typeof num !== "number") return console.warn(`El valor ${num}, no es un numero`);
    }

    return console.info({
        // arreglo, 
        ascendente : arreglo.map(el => el).sort(),
        descendente : arreglo.map(el => el).sort().reverse()
    });
}

arregloOrdernado([7,5,7,8,6]);

// EJERCICIO 25

const arregloDuplicados = (arreglo = undefined) =>{
    if(arreglo === undefined || typeof arreglo === "string") return console.error("No ingresaste una arreglo");

    if(!arreglo instanceof Array) return console.warn("No es un arreglo");

    if (arreglo.length ===0 ) return console.warn("Arreglo vacio");

    if (arreglo.length ===1 ) return console.warn("El arreglo debe tener al menos 2 elementos");

    let nuevo = arreglo.filter((element,i)=>{
        return arreglo.indexOf(element) === i;
      })

    return console.info(`El arreglo sin duplicados es ${nuevo}`);    

    // Otras 2 formas de resolverlo, evalua por elemento como un for anidado
    /*return console.info({
        original: arreglo,
        sinDuplicados: arreglo.filter((value,index,self)=>self.indexOf(value)===index)
    })*/

    // EL set me permite formar un arreglo sin duplicaciones

    /*return console.info({
        original: arreglo,
        sinDuplicados: [... new Set(arreglo)]
    })*/


}

arregloDuplicados(["x", 10, "x", 2, "10", 10, true, true]);

// EJERCICIO 26

const promedioArreglo = (arreglo=undefined) =>{
    if(arreglo === undefined || typeof arreglo === "string") return console.error("No ingresaste una arreglo");

    if(!arreglo instanceof Array) return console.warn("No es un arreglo");

    if (arreglo.length ===0 ) return console.warn("La cadena esta vacia");

    for (let num  of arreglo) {
        if(typeof num !== "number") return console.warn(`El valor ${num}, no es un numero`);
    }

    // let promedio = arreglo.reduce((acumulado,actual)=>acumulado+actual)/arreglo.length;

    // return console.info(`El promedio del arreglo es ${promedio}`)

    // Otra forma de hacerlo

    return console.info(
        arreglo.reduce((total,num, index, arreglo)=>{
            total +=num;
            if(index === arreglo.length-1){
                return `El promedio de ${arreglo.join(" + ")} es ${total/arreglo.length}`;
            }else{
                return total;
            }
        })
    )


}

promedioArreglo([9,8,7,6,5,4,3,2,1,0]);
console.clear();

// Ejercicio 27 creacion de una clase
class Pelicula{
    constructor({id,titulo,director,anio,paises,generos,calificacion}){
        this.id=id;
        this.titulo=titulo;
        this.director=director;
        this.anio=anio;
        this.paises=paises;
        this.generos=generos;
        this.calificacion=calificacion;

        this.validarId(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarAnio(anio);
        this.validarPais(paises);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);
    }

//atributo estatico 
static get listaGeneros(){
    return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News","Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
}
// Elemento estatico
static generosAceptados(){
    return console.info(`Los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`);
}

    
validarCadena (propiedad, valor){
        if(!valor) return console.warn(`${propiedad} esta vacio`);

        if(typeof valor !== "string") return console.error(`${propiedad} "${valor}" no es una cadena de texto`);
    
        return true;
}  

validarNumeros (dato,valor){
        if(!valor) return console.warn(`${dato} esta vacio`);

        if(typeof valor !== "number") return console.error(`${dato} "${valor}" no es un numero`);
    
        return true;
}

validarArreglos (nom,arreglo){
    if(!arreglo) return console.warn(`${nom} esta vacio`);

    if(!(arreglo instanceof Array)) return console.warn(`${nom}No es un arreglo`);

    if(arreglo.length === 0) return console.error(`El arreglo ${nom} esta vacio`);

    for (let num  of arreglo) {
        if(typeof num !== "string") return console.warn(`El valor ${num}, del arreglo no es un ${nom}`);
    }

    return true;
}



validarId (id) {
    if(this.validarCadena("ID",id))
        if (!(/^([a-z]){2}([0-9]){7}$/i.test(id))) return console.error(`"ID "${id}" no es valido, dee tener 9 caracteres 2 letras minusculas y 7 numeros`);    
}

validarTitulo (titulo){
    if(this.validarCadena("Titulo",titulo))
    if (titulo.length > 100 ) return console.error("El titulo no debe de exceder mas de 100 cacteres");
    
}

validarDirector(director){
    if(this.validarCadena("Director",director))
    if (director.length > 50 ) return console.error("El Director no debe de exceder mas de 50 cacteres");
}

validarAnio(anio){
    if(this.validarNumeros("Año",anio))
    if (!(/^([0-9]){4}$/.test(anio))) return console.error(`Año "${anio}" no es valido, debe ser un numero de 4 digitos`);    
}

validarPais (paises){
    if(this.validarArreglos("Paises",paises));
}

validarGeneros (generos){
    if(this.validarArreglos("Generos",generos)){
        for (let genero of generos) {
            // console.log(genero, Pelicula.listaGeneros.includes(genero));
            if(!Pelicula.listaGeneros.includes(genero)){
                console.error(`Genero incorrectos"${generos.join(", ")}"`);
                Pelicula.generosAceptados();

            }
        }
    }

}

validarCalificacion (calificacion){
    if(this.validarNumeros("Calificacion",calificacion));
    
    if (calificacion <0 || calificacion >10 ){
        return console.error(`El valor de la calificaion debe de ser entre 0 y 10`);
    }else{
        this.calificacion = calificacion.toFixed(1);
    }
    /*if(this.validarNumeros("Calificacion",calificacion))
        return (calificacion<0 || calificaion>10)
        ? console.error(`La calificacion tiene que estar en un rango entre 0 y 10`)
        : this.calificacion =calificacion.toFixed(1)*/

}

verDatos (){
    console.info(`ID: ${this.id}
    Titulo: ${this.titulo}
    Director: ${this.director}
    Año: ${this.anio}
    Paises: ${this.paises.join("-")}
    Generos: ${this.generos.join(", ")}
    Calificacion ${this.calificacion}`)
}

}

// Pelicula.generosAceptados();
// const peli = new Pelicula({
//     id: "AQ1234567",
//     titulo: "Ant Man:Quantunmania",
//     director: "Kevin Fage",
//     anio: 2009,
//     paises: ["Estados Unidos"],
//     generos: ["Action","Adventure","Fantasy"],
//     calificacion: 7.25,
// });

// peli.verDatos();

// console.log(peli);

const pruebaPeliculas=[
    {
        id:"AE7654321",
        titulo: "Avengers: End Game",
        director: "Anthony y Joe Russo",
        anio: 2019,
        paises: ["Estados Unidos"],
        generos: ["Action","Adventure","Drama"],
        calificacion: 8.4
    },
    {
        id:"CE3215648",
        titulo: "CREED III",
        director: "Michael B. Jordan",
        anio: 2023,
        paises: ["Estados Unidos"],
        generos: ["Sport","Drama"],
        calificacion: 7.3
    },
    {
        id:"HU7654521",
        titulo: "Hasta el ultimo hombre",
        director: "Mel Gibson",
        anio: 2019,
        paises: ["Estados Unidos","Australia"],
        generos: ["Biography","History","Drama"],
        calificacion: 8.1
    }
];

pruebaPeliculas.forEach(element => new Pelicula(element).verDatos());












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