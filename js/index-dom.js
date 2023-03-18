import botonMenu from "./ejercicios-dom/menu.js";

const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    botonMenu(".panel-btn",".panel",".menu a");
});