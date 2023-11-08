import { App } from "./App.js";
import api from "./helpers/wp_api.js";
document.addEventListener("DOMContentLoaded",App);
// el evento de hashchange es para detectar el cambio de la url, el envento cargar le la pagina asignada a la #(hash) de la url
window.addEventListener("hashchange",()=> {
    api.page = 1;
    App();
})