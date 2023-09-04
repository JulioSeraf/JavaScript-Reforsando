const darkLigth = (btn)=>{
    const btnDarkLight = document.querySelector(btn),
        d = document;
        d.addEventListener('click',(e)=>{
            if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
                document.body.classList.toggle('bodyDark');
                btnDarkLight.classList.toggle('btnDark');
                if(btnDarkLight.classList.contains('btnDark')){
                   btnDarkLight.querySelector('img').setAttribute('src','img/eclipse.png');  
                }else{
                    btnDarkLight.querySelector('img').setAttribute('src','img/sol.png');
                }
                
                
            }
        } )

}

export default darkLigth;