const d = document;
export default function userAgent(){
    const userA = navigator.userAgent,
        listInfo = d.querySelector('.listDeteccion')
    d.addEventListener('DOMContentLoaded',(e)=>{
        const isMobile = {
            android:()=> userA.match(/android/i),
            ios:()=> userA.match(/iphone|ipad|ipod/i),
            window: ()=> userA.match(/windows-phone/i),
            any: function(){
                return this.android()||this.ios()||this.window();
            }
        },
            isDesktop = {
                window: ()=> userA.match(/windows nt/i),
                mac: ()=> userA.match(/mac os/i),
                linux: ()=> userA.match(/linux/i),
                any: function(){
                    return this.window()||this.linux()||this.mac();
                }
            },
            isBrowser = {
                firefox :()=> userA.match(/firefox/i),
                chrome: ()=> userA.match(/chrome/i),
                MicrosoftEdge: ()=> userA.match(/Microsoft Edge/i),
                safari: ()=> userA.match(/safari/i),
                opera:()=> userA.match(/opera/i),
                any: function(){
                    return this.MicrosoftEdge()||this.chrome()||this.firefox()||this.opera()||this.safari();
                }
            };
            listInfo.innerHTML = `<ul>
            <li>User Agent: <strong>${userA}</strong></li>
            <li>Plataforma: <strong>${isMobile.any()?isMobile.any():isDesktop.any()}</strong></li>
            <li>Navegador: <strong>${isBrowser.any()}</strong></li>
            </ul>
            `
    });

   
};