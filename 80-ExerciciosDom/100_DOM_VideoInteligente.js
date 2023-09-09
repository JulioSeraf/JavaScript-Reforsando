//usar Api intersectionObrever y visibilityChange
export default function videoInte(vid){
    const $video = document.querySelector(vid);
    function cb(entries){
        console.log(entries)
        entries.forEach(entry => {
            if(entry.isIntersecting){
                console.log($video)
                $video.src += '?autoplay=0'
            }else{
                $video.pause;
            };
        });
    }
    const observe = new IntersectionObserver(cb,{threshold: 0.5});

    observe.observe($video)
}