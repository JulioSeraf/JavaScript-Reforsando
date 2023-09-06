
export default function redeDeteccion(){
    const d = document,
        n = navigator,
        w = window;
        const isOnline = ()=>{
            const red = n.onLine,
                $div = d.createElement('div');
            if(red){
                $div.innerHTML = 'Conexion Estabelecida';
                $div.classList.add('conexionOn');
                $div.classList.remove('conexionOff');
            }else if(!red){
                $div.innerHTML = 'Conexion Perdida';
                $div.classList.add('conexionOff');
                $div.classList.remove('conexionOn');
            }
            d.body.insertAdjacentElement('afterbegin',$div);
            setTimeout(()=>{d.body.removeChild($div)},2000);
        }
      w.addEventListener('online', (e)=> isOnline());
      w.addEventListener('offline', (e)=> isOnline());
        
};