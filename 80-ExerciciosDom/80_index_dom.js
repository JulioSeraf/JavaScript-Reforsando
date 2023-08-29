import menuHamburg from "./81_Menu_Hamburg.js";
menuHamburg(`#menu-hamburg`,'#button-hamburg');
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
selectEjercicio();
