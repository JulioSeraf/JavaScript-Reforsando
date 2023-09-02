const countDown = (finalMsg)=>{
    let time = setInterval(()=>{
           const countDown = new Date(2024,0,14).getTime();
            let now = new Date().getTime();
            let limiteTime = countDown - now;
            let dias = Math.floor(limiteTime/(1000*60*60*24)),
            horas =( "0" + Math.floor(limiteTime % (1000*60*60*24)/ (1000*60*60))).slice(-2),
            minutos = ("0"+ Math.floor(limiteTime % (1000*60*60)/ (1000*60))).slice(-2),
            segundos = Math.floor(limiteTime % (1000*60)/ (1000));
            finalMsg.innerHTML = `Faltan: ${dias} dias, ${horas} horas, ${minutos} minutos y ${segundos} segundos`;
            if(limiteTime < 0){
                clearInterval(time);
                finalMsg.innerHTML = `Contagem Terminada!!`;
            }
        },1000);

       
        // e.preventDefault();
    };
export{countDown};  


