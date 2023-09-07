export default function sorteoDigital(id,lista){
    const d = document,
        $list = d.querySelectorAll(lista);
    d.addEventListener('click',(e)=>{
        if(e.target.matches(id)){
            let nu = Math.round(Math.random()*$list.length)
            alert(`Parabéns has ganado el Curso de: "${$list[nu].textContent}", Felicidades!!`);
        };
    })
}