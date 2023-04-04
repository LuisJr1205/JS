import { Menu } from "./menu.js";
import { SearchForm } from "./searchForm.js";
import { Title } from "./title.js";

export function Header() {
    const $header = document.createElement("header");
    $header.classList.add("header");
    $header.appendChild(Title());
    $header.appendChild(Menu());
    $header.appendChild(SearchForm());
    return $header;
}