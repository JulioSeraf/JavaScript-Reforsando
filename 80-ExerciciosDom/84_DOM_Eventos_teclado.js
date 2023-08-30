const d = document;
const tecladoAtajo = ()=>{
    d.addEventListener(`keyup`,(e)=>{
        console.log(e.key.toLowerCase())
        if(e.ctrlKey && (e.key.toLowerCase() ==='i')){
            alert('Hello!!');
        };
        if(e.shiftKey && (e.key.toLowerCase() === 'p')){
            print();
        };
        if(e.shiftKey && (e.key.toLowerCase() === 'n')){
            prompt(`Como te llamas?`);
        };
    })
};
let downTop = 0, leftRight = 0;
const playBall = (ball)=>{
    d.addEventListener('keydown',(e)=>{
        console.log(downTop,leftRight)
        console.log(e.key)
        if(e.shiftKey && e.key.toLowerCase() == 'arrowdown'){
            ball.style.cssText = `transform: translate(${leftRight}px,${downTop+=3}px);`;
        }
        if(e.shiftKey && e.key.toLowerCase() === 'arrowup'){
            ball.style.cssText = `transform: translate(${leftRight}px,${downTop-=2}px);`;
        }
        if(e.shiftKey && e.key.toLowerCase() === 'arrowright'){
            ball.style.cssText = `transform: translate(${leftRight+=2}px,${downTop}px);`;
        }
        if(e.shiftKey && e.key.toLowerCase() === 'arrowleft'){
            ball.style.cssText = `transform: translate(${leftRight-=2}px,${downTop}px);`;
        }
        
    })
}
export{tecladoAtajo,playBall};