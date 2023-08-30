const alarme = function(ative,desative,som){
    const d = document;
    let alarmeTiempo;
    const $alarm = document.createElement('audio');
    $alarm.src = som;
    d.addEventListener('click',(e)=>{
        if(e.target.matches(`.${ative.id}`) || (e.target.matches(`#${ative.id}`))){
            alarmeTiempo = setTimeout(()=>{
                $alarm.play();
            },1000)
            e.target.disabled = true;
            desative.disabled = false;
        }
        if(e.target.matches(`.${desative.id}`) || (e.target.matches(`#${desative.id}`))){
            clearTimeout(alarmeTiempo)
            $alarm.pause();
            ative.disabled = false;
            e.target.disabled = true;
            $alarm.currentTime = 0;
        }
    })
}
export default alarme;