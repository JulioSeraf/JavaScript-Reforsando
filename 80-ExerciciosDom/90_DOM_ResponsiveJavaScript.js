const resposeJS = (id,midiaQ,mobileContent,desktopContent)=>{
    const d = document;
    let breakpoit = window.matchMedia(midiaQ);
    // function vM(){
    //     videoMap.forEach(el => {
    //         let divs = document.createElement('div');
    //         divs.innerHTML = el;
    //         $fragmento.appendChild(divs)
    //     });
    // };

    // vM();
    // $contener.appendChild($fragmento);
    // addEventListener('resize',(e)=>{
    //     $contener.querySelectorAll('div')
    //      if(matchMedia("(min-width:300px)").matches && 
    //         $contener.childElementCount < videoMap.length + 1){
    //         vM();
    //         $contener.appendChild($fragmento);

    //     }else if(matchMedia('(max-width: 300px)').matches){
    //         let divs = $contener.querySelectorAll('div');

    //         divs.forEach(div => {
    //             let link = document.createElement('a');
    //             $contener.replaceChild(link,div);
    //         });
    //     };
    // })}
    breakpoit.addEventListener('change',(e)=>{
        if(e.matches){
            d.getElementById(id).innerHTML = desktopContent;
        }else{
            d.getElementById(id).innerHTML = mobileContent;
        }
    })
}
export default resposeJS;