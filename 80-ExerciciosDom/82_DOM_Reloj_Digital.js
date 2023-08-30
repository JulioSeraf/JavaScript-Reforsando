const relojDigital = function(butOn, butOff,painel){
    const d = document;
    let digital;
    
    d.addEventListener('click',(e)=>{
       digital = setInterval(()=>{
            let reloj= new Date().toLocaleTimeString();
            painel.innerHTML = reloj;
        },1000)
        if(e.target.matches(`#${butOn.id}`)|| e.target.matches(`.${butOn.id}`)){
            painel.style.display = `flex`;
            butOn.disabled = true;
            butOff.disabled = false;
            digital;
        };
        if(e.target.matches(`#${butOff.id}`)|| e.target.matches(`.${butOff.id}`)){
            butOn.disabled = false;
            butOff.disabled = true;
            painel.style.display = `none`;
        };
    })
    
}
export default relojDigital;