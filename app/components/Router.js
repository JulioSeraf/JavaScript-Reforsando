import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";
import { SearchCard } from "./SearchCard.js";
import { ContactForm } from "./ContactForm.js";
// Transformamos nuetra fuction Runter y la peticion ajax en asincrona para espera la peticion y la respuesta de la peticion  para despues aplicar la el diplay none al loader

export async function Router(){
    const d = document,
        w = window,
        $main = d.getElementById("main");

    let {hash} = location;
    // console.log(hash);
    // le asginamos el valor null a la section antes de cargar para que el contenido cargue linpiamente
    $main.innerHTML = null;

    // usamos el hash para podermos canbiar de vista el la SPA
    if(!hash ||hash === "#/"){
        await ajax({
            url:api.POSTS,
            cbSuccess:(posts)=>{
                console.log(posts)
                let html = "";
                posts.forEach(post => html += PostCard(post));
                // d.querySelector(".loader").style.display = 'none';
                $main.innerHTML = html;
            }
        });
    }else if(hash.includes("#/search")){
        let querry = localStorage.getItem("wpSearch");

        if(!querry){
            d.querySelector(".loader").style.display = "none";
            return false
        };
    
        await ajax({
            url:api.SEARCH + querry,
            cbSuccess:(search)=>{
                console.log(search.length)
                let html = "";
                if(search.length === 0 ){
                    html = `<p class="error">No encontramos resultado con la palabra <mark>${querry}</mark></p>`
                }else{
                    search.forEach(post => html += SearchCard(post));
                };
                $main.innerHTML = html;
            }
        });
    }else if(hash === "#/contacto"){
        $main.appendChild(ContactForm());
    }else{
        // $main.innerHTML = "<h2>aqui cargara el contenido el post previamente selecionado </h2>"
        await ajax({
            url:api.POST +'/'+localStorage.getItem("wpPostId")+"?_embed",
            cbSuccess:(post)=>{
                console.log(post)
                $main.innerHTML = Post(post);
            }
        });
      
    };
    d.querySelector(".loader").style.display = 'none';
};