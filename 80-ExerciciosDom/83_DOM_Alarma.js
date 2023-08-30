const alarme = function(ative,desative,som){
    const d = document;
    d.addEventListener('click',(e)=>{
        console.log(ative.id)
        if(e.target.matches(`.${ative.id}`) || (e.target.matches(`#${ative.id}`))){
        
        }
    })
}
export default alarme;