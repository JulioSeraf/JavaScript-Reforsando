import { Loader } from "./components/Loader.js";
import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Router } from "./components/Router.js";
import { InfinteScroll } from "./helpers/InfiniteScroll.js";
export function App(){
    const $root = document.getElementById("root");
    $root.innerHTML = null;
    $root.appendChild(Header());
    $root.appendChild(Main())
    $root.appendChild(Loader());
    Router();
    InfinteScroll();
};