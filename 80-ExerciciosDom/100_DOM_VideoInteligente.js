//usar Api intersectionObrever y visibilityChange
export default function videoInte(){
    const $video = document.querySelectorAll('video[data-smart-video]');
    function cb(entries){
        entries.forEach(entry => {
            (entry.isIntersecting)? entry.target.play():  entry.target.pause();;
            document.addEventListener('visibilitychange',()=>{
                if(document.hidden){
                    entry.target.pause();
                }else{
                    (entry.isIntersecting)?entry.target.play(): entry.target.pause();
                };
            });
        });
    };
    
    const observa = new IntersectionObserver(cb,{threshold: 0.5});
    $video.forEach(el => observa.observe(el));
}