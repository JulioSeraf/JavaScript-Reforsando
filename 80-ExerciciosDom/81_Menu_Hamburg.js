export default function menuHamburg(painel,painelBut){
    const d = document;
    d.addEventListener('click',(e)=>{
        console.log(painel, painelBut)
        if(e.target.matches(painelBut)){
           d.querySelector(painel).classList.toggle("isactive")
        };
    });
};
