const scrollBtn = (btn)=>{
    const d = document;
    d.addEventListener('scroll',()=>{
        if(scrollY >= 600){
            btn.style.display = 'block'
        }else{
            btn.style.display = 'none';
        };  
    });
    d.addEventListener('click', (e)=>{ 
        if(e.target.matches("#"+btn.id) || e.target.matches("#"+btn.id +' *')){
            scroll({
                top:0,
                left:0,
                behavior:"smooth"
            });
        };
    });
};
export default scrollBtn;