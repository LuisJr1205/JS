import { Header } from "./components/header.js";
import { Loader } from "./components/loader.js";
import { Main } from "./components/main.js";
import { Router } from "./components/Router.js";
import { infiniteScroll } from "./helpers/infinitescroll.js";

export function App(){
    const $root = document.getElementById("root");

    $root.innerHTML = null;
    $root.appendChild(Header());
    $root.appendChild(Main());
    $root.appendChild(Loader());
    
    Router();
    infiniteScroll();
}