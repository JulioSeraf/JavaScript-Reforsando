export default function menuHamburg(painel,painelBut,painelButOff){
    const d = document;
    d.addEventListener('click',(e)=>{
        //active/ desactive painel
        if(e.target.matches(painelBut)){
           d.querySelector(painel).classList.toggle("isactive")
        };
        if(e.target.matches(painelButOff)){
            document.querySelector(painel).classList.remove('isactive')
        };
    });
};
