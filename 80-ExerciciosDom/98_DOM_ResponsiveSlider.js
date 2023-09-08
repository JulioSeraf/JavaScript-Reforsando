export default function responsiveSlider(id,idRigth,idLeft,tex,img){
    const d = document,
        $screen = d.querySelector(id),
         text = ` Lorem ipsum dolor, sit amet consectetur adipisçicing elit. Tenetur hic doloremque molestiae enim voluptatem, praesentium consequuntur blanditiis consequatur corrupti quod quisquam vitae dolor at! Dolorum minus et eveniet dolorem ut?`,
        imgs = ["img/imgS/asia.jpg",{p:text},"img/imgS/grey-heron.jpg",{p:text},"img/imgS/pied-kingfisher.jpg",{p:text},"img/imgS/shark.jpg",{p:text}],
        $text = d.querySelector(tex),
        $imagem = d.querySelector(img);
        function nextImg(cont){
            if(typeof imgs[cont] === 'string'){ 
                $imagem.classList.remove('elementOff');
                $text.classList.add('elementOff');
                $imagem.src = imgs[cont];
            }else{
                $text.classList.remove('elementOff');
                $imagem.classList.add('elementOff');
                $text.textContent = imgs[cont].p;
            };
        };
        let cont =0;
    d.addEventListener(`click`,(e)=>{
     if(e.target.matches(idRigth) && cont < 7){
        cont++
        nextImg(cont);
     }
     if(e.target.matches(idLeft) && cont > 0){
        cont--;
        nextImg(cont);
     };
    });
};