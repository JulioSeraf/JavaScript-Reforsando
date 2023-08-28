const $section = document.querySelectorAll('section');
document.addEventListener('click',(e)=>{
    if(e.target.matches('main #button-hamburg')){
     menuHamburg();
    }
    selectEjercicio(e)
})
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
    let top = 0;

    console.log(e.target)
     switch(e.target.id){
        case 'eje1':
        $section[2]'
        break;
        case 'eje2':
      
        break;
        case 'eje3':

        break;
        case 'eje4':

        break;
        case 'eje5':

        break;

     }
}
