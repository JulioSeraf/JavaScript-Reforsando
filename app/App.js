import api from "./helpers/wp_api.js"
import { ajax } from "./helpers/ajax.js"
import { Title } from "./components/title.js";
import { Loader } from "./components/Loader.js";
export function App(){
    const d = document,
    $root = d.getElementById("root");
    $root.insertAdjacentElement("afterbegin",Title());
    $root.appendChild(Loader())
    ajax({
        url:api.POSTS,
        cbSuccess:(posts)=>{
            console.log(posts)
        }
    });

    ajax({
        url:api.CATEGORIES,
        cbSuccess:(categorie)=>{
            console.log(categorie)
        }
    });
};