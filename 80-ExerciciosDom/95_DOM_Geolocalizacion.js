export default function geolocalizar(div){
    const d = document,
    n = navigator;
    d.addEventListener('DOMContentLoaded',()=>{
        const $div = d.getElementById(div);
        const options= {
            enableHighAccuracy:true,
            timeout: 5000,
            maximumAge:0
        }
        const success = (position)=>{
            const cord = position.coords;
           $div.innerHTML = `
           <ul>
           <li>Latidud:  <strong>${cord.latitude}</strong></li>
           <li>Longitud: <strong>${cord.longitude}</strong></li>
           <li>Presición: <strong>${cord.accuracy}</strong></li>
           </ul>
           <a href="https://www.google.es/maps/@${cord.latitude},${cord.longitude},15z" target="_blank" rel="noopener">Ver en Googles Maps</a>
           `
        };
            
        const err = (err)=>{
            $div.innerHTML = `Error ${err.message}`
        };
        n.geolocation.getCurrentPosition(success,err,options)
        
    })
}