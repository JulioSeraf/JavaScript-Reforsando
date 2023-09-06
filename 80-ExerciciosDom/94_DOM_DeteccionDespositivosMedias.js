const d = document,
    w = document,
    n = navigator;
export default function webcam(webcam){
    const $videos = d.getElementById(webcam);
    if(n.mediaDevices.getUserMedia){
        n.mediaDevices.getUserMedia({video:true,audio:false}).then((strem)=>{
            $videos.srcObject = strem;
            $videos.play();
        }).catch((err)=> {
            $videos.insertAdjacentHTML('beforeBegin',`<p>Sucedio el seguinte error ${err}</p>`);
        });
    };
};