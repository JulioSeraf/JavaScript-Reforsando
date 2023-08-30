import menuHamburg from "./81_Menu_Hamburg.js";
import relojDigital from "./82_DOM_Reloj_Digital.js";
import alarme from "./83_DOM_Alarma.js";
// reloj
const reloj = document.querySelector('.reloj'),
relojOn = document.querySelector('#relojOn'),
relojOff = document.querySelector('#relojOff');
//alarme 
const som = document.getElementById('alarme'),
    alarmeOn = document.getElementById('alarmeOn'),
    alarmeOff = document.getElementById('alarmeOff');
relojDigital(relojOn,relojOff,reloj)
alarme(alarmeOn,alarmeOff,som);
menuHamburg(`#menu-hamburg`,'#button-hamburg','.button-inMenu');
export function selectEjercicio(){
    document.addEventListener('click',(e)=>{
        console.log()
        switch(e.target.id){
            case 'eje1':
                scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                    })
            break;
            case 'eje2':
                scroll({
                    top: 600,
                    left: 0,
                    behavior: "smooth",
                    })
            break;
            case 'eje3':
                scroll({
                    top: 1210,
                    left: 0,
                    behavior: "smooth",
                    });
            break;
            case 'eje4':
                scroll({
                    top: 1817,
                    left: 0,
                    behavior: "smooth",
                    });
            break;
            case 'eje5':
                scroll({
                    top: 2433,
                    left: 0,
                    behavior: "smooth",
                    });
            break;
        };
       
    });
};
selectEjercicio();
setInterval(() => {
    new Date().toLocaleTimeString()
}, 1000);
