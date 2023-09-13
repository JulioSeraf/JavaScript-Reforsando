export default function scrollSpy(){
    const d = document;
    d.addEventListener('DOMContentLoaded',()=>{
        const viewSections = d.querySelectorAll('main section'),
            menuHamburg = d.querySelectorAll('#menu-hamburg a');
            console.log(menuHamburg)
        const obeservar = new IntersectionObserver((entries)=>{
            entries.forEach((entry) =>{
                if(entry.isIntersecting){
                    // viewSections.forEach((el, index) => )
                    // menuHamburg.querySelector('#'+ entry.target.id).classList.add('painelSpy');
                }else{
                    viewSections.forEach((el, index) => menuHamburg[index].classList.remove('painelSpy'))
                    // menuHamburg.querySelector('#'+ entry.target.id).classList.remove('painelSpy');
                };
            });
            
        },{ threshold:0.5});
        viewSections.forEach((e)=>{
            obeservar.observe(e);
        });
    });
    
};