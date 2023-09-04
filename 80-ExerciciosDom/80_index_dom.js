import menuHamburg from "./81_Menu_Hamburg.js";
import relojDigital from "./82_DOM_Reloj_Digital.js";
import alarme from "./83_DOM_Alarma.js";
import {shortcuts,playBall} from "./84_DOM_Eventos_teclado.js";
import { countDown } from "./85_DOM_CountDown.js";
import scrollBtn from "./85_DOM_Scroll.js";
import darkLigth from "./86_DOM_Darklight.js";
// reloj
const reloj = document.querySelector('.reloj'),
relojOn = document.querySelector('#relojOn'),
relojOff = document.querySelector('#relojOff');
//alarme 
const som = 'sons/alarme.mp3',
    alarmeOn = document.getElementById('alarmeOn'),
    alarmeOff = document.getElementById('alarmeOff');

//atajo teclado================
const $ball = document.getElementById('ball'),
    $cuadro = document.getElementById('cuadro');
//CountDown===================
const $date = document.getElementById('date'),
    $enviar = document.getElementById('enviar'),
    msgFinal = document.querySelector('.count');
//rollagem de scroll===============
const $scrollBtn = document.getElementById('scrollBtn');
export function selectEjercicio(){
    document.addEventListener('click',(e)=>{
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
$ball.setAttribute
selectEjercicio();
//Llamadas de functione ============
relojDigital(relojOn,relojOff,reloj)
alarme(alarmeOn,alarmeOff,som);
shortcuts();
playBall($ball,$cuadro);
menuHamburg(`#menu-hamburg`,'#button-hamburg','.button-inMenu');
countDown(msgFinal);
scrollBtn($scrollBtn);
darkLigth('.btnLight')