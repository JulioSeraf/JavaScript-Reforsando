export default function menuHamburg(painel,painelBut,painelButOff){
    const d = document,
        $butP = document.querySelector(painelBut);
    d.addEventListener('click',(e)=>{
        //active/ desactive painel
        if(e.target.matches(painelBut)|| e.target.matches(`${painelBut} *`)){
           d.querySelector(painel).classList.toggle("isactive");
           if(d.querySelector(painel).classList.contains("isactive")){
            $butP.querySelector('img').setAttribute('src','img/x.png')
           }else{
            $butP.querySelector('img').setAttribute('src','img/menu-hamburguer.png'); 
           }
        };
        if(e.target.matches(painelButOff)){
            document.querySelector(painel).classList.remove('isactive');
            $butP.querySelector('img').setAttribute('src','img/menu-hamburguer.png'); 
        };
    });
};
