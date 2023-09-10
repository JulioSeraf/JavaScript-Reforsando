//usar Api intersectionObrever y visibilityChange
export default function videoInte(vid){
    const $video = document.querySelector(vid);
    function cb(entries){
        entries.forEach(entry => {
            (entry.isIntersecting)?$video.play(): $video.pause();
            document.addEventListener('visibilitychange',()=>{
                if(document.hidden){
                    $video.pause();
                }else{
                    (entry.isIntersecting)?$video.play(): $video.pause();
                };
            });
        });
    };
    
    const observe = new IntersectionObserver(cb,{threshold: 0.5});
    observe.observe($video);
}