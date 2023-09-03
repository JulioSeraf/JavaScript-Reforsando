const darkLigth = (btn)=>{
    const btnDarkLight = document.querySelector(btn),
        d = document;
        d.addEventListener('click',(e)=>{
            if(e.target.matches(btn)){
                console.log(btnDarkLight)

                document.body.classList.toggle('bodyDark')
            btnDarkLight.classList.toggle('btnDark');
            }
          
        })

}

export default darkLigth;