import { App } from "./App.js";
document.addEventListener("DOMContentLoaded",App);
// el evento de hashchange es para detectar el cambio de la url, el envento cargar le la pagina asignada a la #(hash) de la url
window.addEventListener("hashchange",App)