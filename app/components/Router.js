import api from "../helpers/wp_api.js";
import { PostCard } from "./PostCard.js";
export function Router(){
    ajax({
        url:api.POSTS,
        cbSuccess:(posts)=>{
            console.log(posts)
            let html = "";
            posts.forEach(post => html += PostCard(post));
            d.querySelector(".loader").style.display = 'none';
            d.getElementById('posts').innerHTML = html;
        }
    });
};