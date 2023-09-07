export default function ScrollSpy(id,idRigth,idLeft){
    const d = document,
        $screen = d.querySelector(id),
        imgs = ["asia","grey-heron","pied-kingfisher","shark"]
        let cont = 0;
    d.addEventListener(`click`,(e)=>{
        if(e.target.matches(idRigth) && cont < imgs.length){
            $screen.style.cssText = `background-image:url(img/imgS/${imgs[cont++]}.jpg); transition:1s;`
            console.log(cont)
        }
        if(e.target.matches(idLeft) && cont >= 0){
            $screen.style.cssText = `background-image:url(img/imgS/${imgs[cont--]}.jpg); transition:1s;`
            console.log()
        }   
    })
 
}