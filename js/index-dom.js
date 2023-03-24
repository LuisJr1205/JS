import botonMenu from "./ejercicios-dom/menu.js";
import { clock,alarm } from "./ejercicios-dom/reloj-alarm.js";
import { shorCuts, moveBall } from "./ejercicios-dom/pacman.js";
import cuentaRegresiva from "./ejercicios-dom/cuentaRegresiva.js";
import scrollTop from "./ejercicios-dom/btntop.js";
import darkMode from "./ejercicios-dom/tema.js";
import responsiveMedia from "./ejercicios-dom/responsive.js";
import tester from "./ejercicios-dom/prueba_responsive.js";
import userInfo from "./ejercicios-dom/dispositivo.js";
import network from "./ejercicios-dom/conexion.js";
import webCam from "./ejercicios-dom/cam.js";
import geolocation from "./ejercicios-dom/localizzacion.js";
import searchFilters from "./ejercicios-dom/busqueda.js";
import sorteo from "./ejercicios-dom/sorteo.js";
import slider from "./ejercicios-dom/slider.js";
import scrollSpy from "./ejercicios-dom/scroll_spia.js";
import smartVideo from "./ejercicios-dom/video.js";
import formValidation from "./ejercicios-dom/validacionformulario.js";
import narrador from "./ejercicios-dom/narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    botonMenu(".panel-btn",".panel",".menu a");
    clock("#reloj","#start-reloj","#end-reloj");
    alarm("sounds/samsung-lg-galaxy-alarm.mp3","#star-alarm","#end-alarm");
    cuentaRegresiva("countdown","May 12, 2023","Feliz Cumpleaños Luis Madero");
    scrollTop(".scroll-btn");
    // darkMode(".dark-mode","dark-theme");
    responsiveMedia("youtube","(min-width: 1024px)",`<a href="https://youtu.be/PMZy53PHbY0" target="_blank" rel="noopener">Ver Video</a>`,`<iframe width="560" height="315" src="https://www.youtube.com/embed/7ZPAe4uFM4U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
    responsiveMedia("gmaps","(min-width: 1024px)", `<a href="https://goo.gl/maps/M3uFcUMD7nPmNmKV8" target="_blank" rel="noopener">Ver Mapa</a>`,`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1197.2830673317599!2d-99.12487608896129!3d19.262312675086818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0138ed3fa331%3A0x5c7225987d97600a!2sClub%20de%20F%C3%BAtbol%20Cruz%20Azul%20S.A%20de%20C.V!5e0!3m2!1ses-419!2smx!4v1679441419829!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    tester("responsive-tester");
    userInfo("user-info");
    webCam("webcam");
    geolocation("geolocation");
    searchFilters(".card-filter",".card");
    sorteo("#ganador",".player");
    slider();
    scrollSpy();
    smartVideo();
    formValidation();
    sorteo("#ganador",".player");
});


d.addEventListener("keydown",(e)=>{
    shorCuts(e);
    moveBall(e,".ball",".stage");
});

darkMode(".dark-mode","dark-theme");
network();
narrador();
