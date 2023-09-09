export default function scrollSpy(){
    const d = document;
    d.addEventListener('DOMContentLoaded',()=>{
        const viewSections = d.querySelectorAll('main section'),
            menuHamburg = d.querySelector('#menu-hamburg');
        const obeservar = new IntersectionObserver((entries)=>{
            entries.forEach((entry) =>{
                if(entry.isIntersecting){
                    menuHamburg.querySelector('#'+ entry.target.id).classList.add('painelSpy');
                }else{
                    menuHamburg.querySelector('#'+ entry.target.id).classList.remove('painelSpy');
                };
            });
            
        },{ threshold:0.5});
        viewSections.forEach((e)=>{
            obeservar.observe(e);
        });
    });
    
};