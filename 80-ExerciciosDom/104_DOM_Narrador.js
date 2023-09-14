export default function speaker(select,texto,but){
    const d = document,
        synth = window.speechSynthesis,
        $select = d.querySelector(select),
        $text = d.querySelector(texto),
        $butNarrador = d.querySelector(but),
        $optiones = d.createDocumentFragment(),
        leitor= new SpeechSynthesisUtterance();
        let voices = null;
    d.addEventListener("DOMContentLoaded",()=>{ 
        synth.addEventListener('voiceschanged',(e)=>  {
            voices = synth.getVoices();
            voices.forEach(voz =>{
                const $options = d.createElement('option');
                $options.textContent = `${voz.name}:( ${voz.lang})`;
                $optiones.appendChild($options)
            });
            $select.appendChild($optiones);
        });
    });
    d.addEventListener('change',(e)=>{
        if(e.target === $select){
            leitor.voice = voices.find(voice => `${voice.name}:( ${voice.lang})` === e.target.value );
        };
    });
    d.addEventListener('click',(e)=>{
        if(e.target.matches(but)){
            leitor.text = $text.value;
            synth.speak(leitor)
        }
    })

        
}