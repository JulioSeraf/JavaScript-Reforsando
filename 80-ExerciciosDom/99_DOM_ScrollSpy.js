export default function scrollSpy(){
    const d = document;
    d.addEventListener('DOMContentLoaded',()=>{
        const viewSections = d.querySelectorAll('main section'),
            menuHamburg = d.querySelectorAll('#menu-hamburg a');
        const obeservar = new IntersectionObserver((entries)=>{
            entries.forEach((entry) =>{
                if(entry.isIntersecting){
                    menuHamburg.forEach(el => (entry.target.id === el.dataset.sec) ? el.classList.add('painelSpy'):el.classList.remove('painelSpy')) 
                };
            });
            
        },{ threshold:0.5});
        viewSections.forEach((e)=>{
            obeservar.observe(e);
        });
    });
    
};