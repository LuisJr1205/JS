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




