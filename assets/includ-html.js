document.addEventListener("DOMContentLoaded",(e)=>{
    console.log("julio")
    const includHTML = (el,url)=>{
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange",(e)=>{
            if(xhr.readyState !== 4) return;
            if(xhr.status >=200 && xhr.status < 300){
                el.outerHTML = xhr.responseText;
            }else{
                let errMsg = xhr.statusText || "Error al ejecutar el arquivo, verifique que estas haciendo la petición por http o https";
                el.outerHTML = `<div><p>ERROR: ${xhr.status} - ${errMsg} </p></div>`
            }});
        xhr.open("GET",url);
        xhr.send();
    };
    document.querySelectorAll("[data-includ]").forEach(el => includHTML(el,el.getAttribute("data-includ")))
})