const $linkSection = document.querySelectorAll('#menu-hamburg button');
document.addEventListener('click',(e)=>{
    if(e.target.matches('main #button-hamburg')){
     menuHamburg();
    }
    selectEjercicio(e)
})
$linkSection.forEach(but=>{
    but.addEventListener('click',(e)=>{
       
    
    });
});
const menuHamburg = function(){
    const menuHamburg = document.getElementById('menu-hamburg')
    console.log(menuHamburg.style.top)
    if(menuHamburg.style.top === ''){
     menuHamburg.style.top = '0%'
    }else if(menuHamburg.style.top === '0%'){
     menuHamburg.style.top = '';
    };
};
const selectEjercicio = function(e){
    const $sections = document.querySelectorAll('section');
     switch(e.target.id){
        case 'eje1':
            scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              })
              menuHamburg();
        break;
        case 'eje2':
            scroll({
                top: 600,
                left: 0,
                behavior: "smooth",
              })
              menuHamburg();
        break;
        case 'eje3':
            scroll({
                top: 1210,
                left: 0,
                behavior: "smooth",
              });
              menuHamburg();
        break;
        case 'eje4':
            scroll({
                top: 1817,
                left: 0,
                behavior: "smooth",
              });
              menuHamburg();
        break;
        case 'eje5':
            scroll({
                top: 2433,
                left: 0,
                behavior: "smooth",
              });
              menuHamburg();
        break;
}
}
