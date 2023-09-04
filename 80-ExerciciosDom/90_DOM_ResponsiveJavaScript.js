const resposeJS = ($contener)=>{
    const videoMap = [
        `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/6IwUl-4pAzc?si=RU6vZsYqzUlV2WKe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12569647.411982726!2d-14.318149723014361!3d39.722540636276776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc42e3783261bc8b%3A0xa6ec2c940768a3ec!2zRXNwYcOxYQ!5e0!3m2!1ses!2ses!4v1693845883403!5m2!1ses!2ses" width="500" height="150" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    ],
    $fragmento = document.createDocumentFragment();
    addEventListener('resize',(e)=>{
         if(matchMedia("(min-width:400px").matches && 
        $contener.childElementCount < videoMap.length + 1){
           videoMap.forEach(el => {
            let divs = document.createElement('div');
            divs.innerHTML = el;
            $fragmento.appendChild(divs)
        })
        $contener.appendChild($fragmento);
    }else if(matchMedia('(max-width: 400px)').matches){
        let divs = $contener.querySelectorAll('div');
        divs.forEach(div => {
            let link = document.createElement('a');
            $contener.replaceChild(link,div);
        })
    }
    });
   
}
export default resposeJS;