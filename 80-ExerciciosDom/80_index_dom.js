import menuHamburg from "./81_Menu_Hamburg.js";
import relojDigital from "./82_DOM_Reloj_Digital.js";
import alarme from "./83_DOM_Alarma.js";
import {shortcuts,playBall} from "./84_DOM_Eventos_teclado.js";
import { countDown } from "./85_DOM_CountDown.js";
import scrollBtn from "./85_DOM_Scroll.js";
import darkLigth from "./86_DOM_Darklight.js";
import resposeJS from "./90_DOM_ResponsiveJavaScript.js";
import responsiveTest from "./91_DOM_ResponsiveTest.js";
import userAgent from "./92_DOM_ DetecciónDispositivosUserAgent.js";
import redeDeteccion from "./93_DOM_DeteccionDeEstadoRede.js";
import webcam from "./94_DOM_DeteccionDespositivosMedias.js";
import geolocalizar from "./95_DOM_Geolocalizacion.js";
import filtro from "./96_DOM_FiltroDeBusqueda.js";
import sorteoDigital from "./97_DOM_SorteoDigital.js";
import ScrollSpy from "./98_DOM_ScrollSpy.js";
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
//resposive JavaScript
const $contener = document.querySelector('#section4');
const videoMap = [
    `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/6IwUl-4pAzc?si=RU6vZsYqzUlV2WKe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12569647.411982726!2d-14.318149723014361!3d39.722540636276776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc42e3783261bc8b%3A0xa6ec2c940768a3ec!2zRXNwYcOxYQ!5e0!3m2!1ses!2ses!4v1693845883403!5m2!1ses!2ses" width="500" height="150" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
],
linksArray = [
   " <a href ='https://www.youtube.com/watch?v=6IwUl-4pAzc' target='_blank'> Ver Video <a/>", 
   "<a href ='https://www.google.com/maps/place/Sevilla/@37.3750035,-6.2504149,11z/data=!3m1!4b1!4m15!1m8!3m7!1s0xc42e3783261bc8b:0xa6ec2c940768a3ec!2zRXNwYcOxYQ!3b1!8m2!3d40.463667!4d-3.74922!16zL20vMDZta2o!3m5!1s0xd126c1114be6291:0x34f018621cfe5648!8m2!3d37.3890924!4d-5.9844589!16zL20vMDlmM2M?hl=es&entry=ttu' target='_blank'> Ver Mapa <a/>"
];


export function selectEjercicio(){
    let painel = document.querySelector('.painel');
    let buttons = painel.querySelectorAll('button');
    function scrollMove(x){
        let conttTop = 0;
        scroll({
            top: conttTop + 615*x,
            left: 0,
            behavior: "smooth",
            })
    }
    document.addEventListener('click',(e)=>{
        for(let i = 1; i <= buttons.length; i++){
            switch(e.target.id){
                case `eje${i}`:scrollMove(i-1)
                break;
            }
        }
    });
};
//Llamadas de functione ============
    selectEjercicio();
    relojDigital(relojOn,relojOff,reloj)
    alarme(alarmeOn,alarmeOff,som);
    shortcuts();
    playBall($ball,$cuadro);
    menuHamburg(`#menu-hamburg`,'#button-hamburg','.button-inMenu');
    countDown(msgFinal);
    scrollBtn($scrollBtn);
    resposeJS("youtube",'(max-width: 400px)',videoMap[0],linksArray[0]);
    resposeJS("gmaps",'(max-width: 400px)',videoMap[1],linksArray[1]);
    darkLigth('.btnLight');
    responsiveTest('responsiveTester');
    userAgent();
    redeDeteccion();
    webcam('webcam');
    geolocalizar('geo');
    filtro('cards','seach');
    sorteoDigital('#sortear', '.premio');
    ScrollSpy('.screen','#right',"#left");