const d = document;
const shortcuts = ()=>{
    d.addEventListener(`keyup`,(e)=>{
        if(e.ctrlKey && (e.key.toLowerCase() ==='i')){
            alert('Hello!!');
        };
        if(e.shiftKey && (e.key.toLowerCase() === 'p')){
            print();
        };
        if(e.shiftKey && (e.key.toLowerCase() === 'n')){
            prompt(`Como te llamas?`);
        };
    });
};

const playBall = (ball,cuadro)=>{
    let downTop = 0, leftRight = 0;
    let x=0 ,y=0;
    d.addEventListener('keydown',(e)=>{
        // // mi solucion
        // if(e.shiftKey && e.key.toLowerCase() == 'arrowdown'){
        //     ball.style.cssText = `transform: translate(${leftRight}px,${downTop+=5}px);`;
        // };
        // if(e.shiftKey && e.key.toLowerCase() === 'arrowup'){
        //     ball.style.cssText = `transform: translate(${leftRight}px,${downTop-=5}px);`;
        // };
        // if(e.shiftKey && e.key.toLowerCase() === 'arrowright'){
        //     ball.style.cssText = `transform: translate(${leftRight+=5}px,${downTop}px);`;
        // };
        // if(e.shiftKey && e.key.toLowerCase() === 'arrowleft'){
        //     ball.style.cssText = `transform: translate(${leftRight-=5}px,${downTop}px);`;
        // };
        //solución teacher 
        let limiteBall = ball.getBoundingClientRect(),
        limiteCuadro = cuadro.getBoundingClientRect();
        switch(e.key.toLowerCase()){
            case 'arrowleft':
                e.preventDefault();
                if(limiteBall.left > limiteCuadro.left){x--;}
            break;
            case 'arrowright':
                e.preventDefault();
                if(limiteBall.right < limiteCuadro.right){x++;}
            break;
            case `arrowup`:
                e.preventDefault();
                if(limiteBall.top > limiteCuadro.top){y--;}
            break;
            case `arrowdown`:
                e.preventDefault();
                if(limiteBall.bottom < limiteCuadro.bottom) y++;
            break;
            
        }
        ball.style.transform = `translate(${x*10}px,${y*10}px)`
    });
};
export{shortcuts,playBall};