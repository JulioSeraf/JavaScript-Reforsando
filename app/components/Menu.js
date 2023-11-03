export function Menu(){
    const $menu = document.createElement("nav");
    $menu.classList.add("menu");
    $menu.innerHTML = `
    <a href="#/">HOME</a>
    <span></apan>;
    <a href="#/search">Búsqueda</a>
    <span></span>
    <a href="#/contanto">Contacto</a>
    <span></span>
    <a href="https://aprendejavascript.org" rel="noopener" target="_blanck">Apreder</a>
    `;
    return $menu; 
}