const resposeJS = (id,midiaQ,mobileContent,desktopContent)=>{
    const d = document,
    resposive = (e)=>{
        if(e.matches){
            d.getElementById(id).innerHTML = desktopContent;
        }else{
            d.getElementById(id).innerHTML = mobileContent;
        };
    }
    let breakpoit = window.matchMedia(midiaQ);
    breakpoit.addEventListener('change',(e)=>{
       resposive(e)
    });
    resposive(breakpoit);
};
export default resposeJS;