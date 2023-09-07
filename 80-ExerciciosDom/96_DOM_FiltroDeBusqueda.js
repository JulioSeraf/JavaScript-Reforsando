
export default function filtro(id,inputId){
    const d = document,
        $div = document.getElementById(id),
        $seach = document.getElementById(inputId),
        $pelis = $div.querySelectorAll('figure');
    d.addEventListener('keyup',(e)=>{

        if(e.key === 'Escape') $seach.value = '';
        
        let expReg = new RegExp($seach.value ,"gi");
        $pelis.forEach(peli =>{
            (peli.outerText.match(expReg))
            ?peli.classList.remove('filter')
            :peli.classList.add('filter');
        })
      
           
       
    })
}
