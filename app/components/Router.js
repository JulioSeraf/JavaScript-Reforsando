import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
export function Router(){
    const d = document,
        w = window,
        $posts = d.getElementById("posts");

    let {hash} = location;
    // console.log(hash);
    // le asginamos el valor null a la section antes de cargar para que el contenido cargue linpiamente
    $posts.innerHTML = null;

    // usamos el hash para podermos canbiar de vista el la SPA
    if(!hash ||hash === "#/"){
        ajax({
            url:api.POSTS,
            cbSuccess:(posts)=>{
                console.log(posts)
                let html = "";
                posts.forEach(post => html += PostCard(post));
                d.querySelector(".loader").style.display = 'none';
                $posts.innerHTML = html;
            }
        });
    }else if(hash.includes("#/search")){
        $posts.innerHTML = "<h2>Section de Search</h2>"
    }else if(hash === "#/contacto"){
        $posts.innerHTML = "<h2>Section de Contacto</h2>"
    }else{
        $posts.innerHTML = "<h2>aqui cargara el contenido el post previamente selecionado </h2>"
    };

};