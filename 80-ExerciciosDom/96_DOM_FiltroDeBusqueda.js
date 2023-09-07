
export default function filtro(id,inputId){
    const d = document,
        $div = document.getElementById(id),
        $seach = document.getElementById(inputId),
        $pelis = $div.querySelectorAll('figure');
        let $noEncontrada = d.createElement('p');
        $div.insertAdjacentElement("beforebegin",$noEncontrada);
    d.addEventListener('keyup',(e)=>{
        let expReg = new RegExp($seach.value ,"gi");
        $pelis.forEach(peli =>{
            peli.style.display = 'none';
            if(peli.outerText.match(expReg)){
                console.log($noEncontrada)
                peli.style.display = 'block'
            }else{
                $noEncontrada.innerHTML = `<p> La Pelicula "${$seach.value}" no fue encontrada</p>`;
              }
         
            if($seach.value === '') peli.style.display = 'block';
        })
      
           
       
    })
}
