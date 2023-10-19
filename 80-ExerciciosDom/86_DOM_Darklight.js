const darkLigth = (btn)=>{
    const btnDarkLight = document.querySelector(btn),
        d = document,
        lS = localStorage;
        const temaLigth = ()=>{  
            document.body.classList.remove('bodyDark');
            btnDarkLight.classList.remove('btnDark');
            btnDarkLight.querySelector('img').setAttribute('src','img/eclipse.png');  
        };
        const temaDark = ()=>{ 
            document.body.classList.add('bodyDark');
            btnDarkLight.classList.add('btnDark');
            btnDarkLight.querySelector('img').setAttribute('src','img/sol.png');
        };
        d.addEventListener('click',(e)=>{
            if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
                if(btnDarkLight.classList.contains('btnDark')){
                    lS.setItem('thema','ligth');
                  temaLigth();
                }else{
                    lS.setItem('thema','dark');
                   temaDark();
                };
            };
        });
        // localstorage para thema dark/light
        d.addEventListener('DOMContentLoaded',()=>{
            if(lS.getItem('thema') === null) lS.setItem('thema','light');
            if(lS.getItem('thema')==='light') temaDark();
            if(lS.getItem('thema') === 'dark') temaDark();
        });
};

export default darkLigth;