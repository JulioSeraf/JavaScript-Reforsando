const countDown = ($date,$enviar,finalMsg)=>{
    const d = document;
    const countDown = new Date(2024,0,14).getTime();
    setInterval(()=>{
            let now = new Date().getTime();
            let limiteTime = countDown - now;
            let dias = Math.floor(limiteTime/(1000*60*60*24)),
            horas = Math.floor(limiteTime % (1000*60*60*24)/ (1000*60*60)),
            minutos = Math.floor(limiteTime % (1000*60*60)/ (1000*60)),
            segundos = Math.floor(limiteTime % (1000*60)/ (1000));
            finalMsg.innerHTML = `Faltan: ${dias} dias, ${horas} horas, ${minutos} minutos y ${segundos} segundos`;
        },1000);
        // e.preventDefault();
    };
export{countDown};  


