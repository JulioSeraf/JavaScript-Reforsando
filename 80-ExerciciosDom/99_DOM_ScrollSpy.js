export default function scrollSpy(){
    const d = document;
    d.addEventListener('scroll',()=>{
        const viewSections = d.querySelectorAll('main section'),
            menuHamburg = d.querySelectorAll('.button-inMenu');
        const obeservar = new IntersectionObserver((entries)=>{
            entries.forEach((entry, index) =>{
                if(entry.isIntersecting){
                    menuHamburg[index].classList.add('painelSpy');
                }else{
                    menuHamburg[index].classList.remove('painelSpy');
                };
            });
            
        },{threshold:0.5});
        viewSections.forEach((e)=>{
            obeservar.observe(e);
        });
    });
    
};