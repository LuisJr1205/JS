// Con est se puede hacer hablar a la computadora
// console.log(window);
//         console.log(document);

//         let texto =  "Hola soy Lionel Andres Messi el mejor jugador de la historia"
//         const hablar = (texto)=>speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

//         hablar(texto);
/*
console.log("***************Elementos del documento********************");
console.log(document);
console.log(document.head);
console.log(document.body);
// Etiqueta HTML y nos trae el tipo de documento
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
    console.log(document.getSelection().toString());
}, 3000);
// Para escribir desde JS en el HTML
document.write("<h2>Hola Mundo desde el DOM</h2>");

*/
// -----------------------MANEJO DEL DOM------------------------------------------------
// Manejo del DOM
// los comentarios del HTML son un nodo, etiquetas, textos parrafos, encabezzados
/*
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
// Estos tres metodos han sido reemplazados por los siguientes
// Si es un id usamos el
console.log(document.querySelector("#menu"));
// Pero solo nos trae el priemro que se encuentra con el All trae a todos  regresa una nodelist
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach(el => console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li"));

console.log(document.getElementById("menu")); 
*/

//---------------------------- ATRIBUTOS-------------------------------------------
/*
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));
// Para cambiar el lenguaje desde JS
document.documentElement.lang = "es";
console.log(document.documentElement.lang);
// otra forma de cambiar el atributo 
document.documentElement.setAttribute("lang","es-MX");
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target","_blank");
$linkDOM.setAttribute("rel","noopener");
$linkDOM.setAttribute("href","https://youtube.com/jonmircha");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

// DATA Attributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description","Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscribete a mi canal";
console.log($linkDOM.dataset.description);
*/

// -------------------------------DOM: ESTILOS Y VARIABLES CSSS---------------------------
/*
const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));
// Modidicar un atributo
$linkDOM.style.setProperty("text-decoration","none");
$linkDOM.style.setProperty("display","block");
$linkDOM.style.width="50%";
$linkDOM.style.textAlign="center";
$linkDOM.style.marginLeft="auto";
$linkDOM.style.marginRight="auto";
$linkDOM.style.padding="1rem";
$linkDOM.style.borderRadius=".5rem";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(window.getComputedStyle($linkDOM));

// VARIABLES CSS - CUSTOM PROPERTIES CSS
const $html = document.documentElement,
    $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor,varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

// Para cambiar valores de la variables
$html.style.setProperty("--dark-color","#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color",varDarkColor);
*/

// ---------------------------------------DOM CLASES CSSS----------------------------

/*
const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);
console.log($card.classList);
// Para saber si tiene esa clase dento
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
// Togle funciona como interruptor si tiene la clase se la quita si no la tiene se la coloca
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
// Para reemplazar las clases
$card.classList.replace("rotate-45","rotate-135");
$card.classList.add("opacity-80","sepia");
$card.classList.remove("opacity-80","sepia");
$card.classList.toggle("opacity-80","sepia");

*/


//------------------------------- DOM TEXTO y HTML--------------------------------------
/*const $whatIsDOM = document.getElementById("que-es");

let text = `
    <p>
    EL modelo de Objetos del documento (<b><i>DOM- Document Object Model </i></b>) es un API para
    documentos HTML y XML.
    </p>
    <p>
    Este provee una representacio estructural del documento, permitiendo modificar su contenido y presentacion visual mediante codigo JS.
    </p>
    <p>
    <mark>EL DOM no es parte de la especificacion de JavaScript, es una API para los navegadores </mark>
    </p>`;

//Este no forma parte del estandar 
$whatIsDOM.innerText = text;
// este si forma parte del estandar y es solo para el texto
$whatIsDOM.textContent = text;
// Para reenderizar conforme a html
$whatIsDOM.innerHTML = text;
// Remplaza 
$whatIsDOM.outerHTML = text;
*/


//--------------------------------- DOM TRAVERSING-------------------------------------
// Directamente a las etiquetas 
// Para elementos que estan dentro de una seccion
/*const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
// Para saber que etiqueta continua y la anterior
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
// para buscar el padre mas inmediato
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));
*/

// --------------------------CREANDO ELEMENTOS Y FRAGMENTOS-----------------------------
// Creacion de todo lo que puedo ir agregando al dom
/*
const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("Animals"),
    $cards = document.querySelector(".cards"),
    $figure2 = document.createElement("figure");

$img.setAttribute("src","https://placeimg.com/200/200/animals");
$img.setAttribute("alt","Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

// Esta es otra manera de hacerlo
$figure2.innerHTML=`<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>`;
$figure2.classList.add("card");
$cards.appendChild($figure2);

// Practica de crear una lista
const estaciones =["Primavera","Verano","Otoño","Invierno"],
    $ul = document.createElement("ul");

document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);

estaciones.forEach(el=> {
    const $li = document.createElement("li");
    $li.textContent=el;
    $ul.appendChild($li);
});

//Otro ejemplo o practica mas de otra forma
const continentes =["Africa","America","Asia","Europa","Oceania"],
    $ul2 = document.createElement("ul");

document.write("<h3>Continentes del mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML="";
continentes.forEach((el) => ($ul2.innerHTML +=`<li>${el}</li>`));

// FRAGAMENTOS
const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
    $ul3=document.createElement("ul"),
    $fragment = document.createDocumentFragment();

meses.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);
*/

// -------------------------------DOM: TEMPLATES HTML--------------------------
/*
const $cards = document.querySelector(".cards"),
    $template = document.getElementById("template-card").content,
    $fragment = document.createDocumentFragment(),
    cardContent =[
        {
            title:"Tecnologia",
            img:"https://placeimg.com/200/200/tech",
        },
        {
            title:"Animales",
            img:"https://placeimg.com/200/200/animals",
        },
        {
            title:"Arquitectura",
            img:"https://placeimg.com/200/200/arch",
        },
        {
            title:"Gente",
            img:"https://placeimg.com/200/200/people",
        },
        {
            title:"Naturaleza",
            img:"https://placeimg.com/200/200/nature",
        },
    ];

cardContent.forEach(el =>{
    $template.querySelector("img").setAttribute("src",el.img);
    $template.querySelector("img").setAttribute("alt",el.title);
    $template.querySelector("figcaption").textContent =el.title;

    // Para clonar el template
    let $clone = document.importNode($template,true);
    $fragment.appendChild($clone);
});

$cards.appendChild($fragment);
*/


// -------------------------------MODIFICANDO ELEMENTOS (OLD STYLE)------------------------------
/*
const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure"),
    $cloneCards = $cards.cloneNode(true);

$newCard.innerHTML=`<img src="https://placeimg.com/200/200/any" alt="Any">
            <figcaption>Any</figcaption>`;

$newCard.classList.add("card");
// Reemplazar por un elemento
// $cards.replaceChild($newCard,$cards.children[2]);
// Colocarlo primero
// $cards.insertBefore($newCard,$cards.firstElementChild);
// ELiminar algun elemento que ya este
// $cards.removeChild($cards.lastElementChild);
document.body.appendChild($cloneCards);
*/

// ---------------------------------MODIFICADO ELEMENTOS NEW STYLE------------------------
/*
.insertAdjacent...
.insertAdjacentElement(posicion,el);
.insertAdjacentHTML(posicion,html);
.insertAdjacentText(posicion,text);

Posiciones
beforebegin(hermano anterior)
afterbegin(primerhijo)
beforeend(ultimo hijo)
afterend(hermano siguiente)
*/
/*
const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");
// Para usar lo que es adjacent
// $newCard.innerHTML=`<img src="https://placeimg.com/200/200/any" alt="Any">
            // <figcaption>Any</figcaption>`;

let $contentCard = `<img src="https://placeimg.com/200/200/any" alt="Any">
                <figcaption></figcaption>`;

$newCard.classList.add("card");
$newCard.insertAdjacentHTML("beforeend",$contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any");
// $cards.insertAdjacentElement("afterbegin",$newCard);
// Otra forma de agregar por medio de otro comando
$cards.prepend($newCard);
// Ultimo hijo
$cards.append($newCard);
// Hermano anterior
// $cards.before($newCard);
// Hemano posterior
$cards.after($newCard);
*/

// -----------------------------------MANEJADORES DE EVENTOS---------------------------------
// Event handler (Manejador de eventos)
/*
function holaMundo() {
    alert("Hola Mundo");
    console.log(event);
}

function saludar(nombre = "Desconocid@") {
    alert(`Hola ${nombre}`);
}

const $eventoSemantico = document.getElementById("evento-semantico"),
    $eventoMultiple = document.getElementById("evento-multiple"),
    $eventoRemover = document.getElementById("evento-remover");


$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function (e){
    alert("Hola mundo manejador de eventos semantico");
    console.log(e);
    console.log(event);
};

$eventoMultiple.addEventListener("click",holaMundo);
$eventoMultiple.addEventListener("click",(e)=>{
    alert("Hola mundo manejador de eventos multiples");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
});

// Eventos con parametros
$eventoMultiple.addEventListener("click",()=>{
    saludar();
    saludar("Luis");
});

// Remover eventos
const removerDobleClick = (e) =>{
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("dblclick",removerDobleClick);
    $eventoRemover.disabled = true;
}


$eventoRemover.addEventListener("dblclick",removerDobleClick);
*/

// ---------------------------------FLUJO DE EVENTOS(BURBUJA Y CAPTURA)---------------
// La propagacion se da del elemento mas interno al externo se le llama fase de burbuja
/*
const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
    $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
    // Con este se detiene la propagacion
    e.stopPropagation();
}

console.log($divsEventos);

$divsEventos.forEach(div => {
    // Fase de burbuja desde el mas interno al mas externo, con el false o sin 
    div.addEventListener("click",flujoEventos);
    // div.addEventListener("click",flujoEventos,false);
    // Fase de captura del elemento mas externo al mas interno
    // div.addEventListener("click",flujoEventos,true);
    // Otra forma de colocarlo es
    // div.addEventListener("click",flujoEventos,{
    //     capture: false, //o con true
    //     once:true,
    // });


});

$linkEventos.addEventListener("click",(e)=>{
    alert("Hola soy tu amigo Lionel Messi");
    // Cancelar el evento que tiene por default
    e.preventDefault();
    e.stopPropagation();
});

*/
// -------------------------------------DOOM: Delegacion de eventos-------------------------
/*
function flujoEventos(e) {
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
}

document.addEventListener("click",(e)=>{
    console.log("Click en",e.target);

    if (e.target.matches(".eventos-flujo div")) {
        flujoEventos(e);
    }

    if (e.target.matches(".eventos-flujo a")) {
        alert("Hola soy tu amigo Lionel Messi");
        e.preventDefault();
    }
});

*/
// ----------------------------------BOM: PROPIEDADES Y EVENTOS -----------------------------------
/*window.addEventListener("resize",(e)=>{
    console.clear();
    console.log("***********Evento Resize**************");
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);
    console.log(e);
})

window.addEventListener("scroll",(e)=>{
    console.clear();
    console.log("***********Evento Scroll**************");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
})

window.addEventListener("load",(e)=>{
    console.log("***********Evento Load**************");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
})

document.addEventListener("DOMContentLoaded",(e)=>{
    console.log("***********Evento DOMContentLoaded**************");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
})
*/

//--------------------------------------BOM: METODOS--------------------------------
// window.alert("Alerta");
// alert("Alerta");
// window.confirm("Confirmacion");
// confirm("Confirmacion");
// window.prompt("Aviso");
// prompt("Aviso");
/*
const $btnAbrir = document.getElementById("abrir-ventana"),
    $btnCerrar = document.getElementById("cerrar-ventana"),
    $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click",(e)=>{
   ventana = window.open("https://jonmircha.com");
});

$btnCerrar.addEventListener("click",(e)=>{
    ventana.close();
 });

 $btnImprimir.addEventListener("click",(e)=>{
    window.print();
 });
*/


// --------------------------------------BOM: URL, Historial y Navegador----------------------------
/*
console.log("**************Objeto URL(location)**************");
console.log(location);
// Me da la ruta en donde se origina
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search);
console.log(location.pathname);
*/
/*
console.log("**************Objeto Historial(history)**************");
console.log(history);
// Cuantas paginas he visitado
console.log(history.length);
// history.forward(1);
// history.go(-3);
// history.back(2);
*/

console.log("**************Objeto Navegador(Navigayor)**************");
console.log(navigator);
// informacion de la conexion del usuario
console.log(navigator.connection);
console.log(navigator.geolocation);
// Informacion sobre los dispositivos camaras, microdfonos etc
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
// Para saber si pierde o no el usuario la conexion
console.log(navigator.onLine);
// Nos sirve para convertir una web app en un aplicaion instalable
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
// Informacion del usuario y la plataforma sobre el navegador
console.log(navigator.userAgent);
















