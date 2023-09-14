(()=>{
    //Passo numero uno la estancia 

      const xhrTest = new XMLHttpRequest();
       
    //Es el evento mais usado para peticiones, el XMLHttpResquest tine varios eventos, para detectar un estado de peticion un error, un codigo de respuesta, el "readystatechange", funciona como todo estes eventos juntos

    //Passo numero dos assoignacion de evento 

        xhrTest.addEventListener('readystatechange',(e)=>{})

    //Passi tres le dasmos 2 estrucciones al evento

    //open() Que recibe dos parametros el primero qual metodo usariamos para enviar la peticion GET - POST, el segundo la url a la cual vamos hacer la peticion
    
        xhrTest.open("GET","https://jsonplaceholder.typicode.com/users")

    //Y como ultimo passo , Enviar la peticción, usando el metodo send()

        xhrTest.send();    
})();

(()=>{
    const xhr = new XMLHttpRequest,
    $xhr  = document.getElementById('xhr'),
    $fragment = document.createDocumentFragment();


    xhr.addEventListener('readystatechange',()=>{
        if(xhr.readyState !== 4)return; //pequena validacio para el codigo so returna quando la validacion se en estado 4 => finalizado

        if(xhr.status >=200 && xhr.status <300){
            // console.log('exito')
            let json = JSON.parse(xhr.responseText);
            json.forEach(el => {
                // console.log(el)
               let $infoList = document.createElement('li');
               $infoList.textContent = `Nombre: ${el.name}--- Email: ${el.email}--- Phone: ${el.phone}`;
               $fragment.appendChild($infoList);
            });
            $xhr.appendChild($fragment)
            // console.log(json)
        }else{
            let menssagen = xhr.statusText || "Error el la peticción"
            alert(xhr.status + menssagen)
            // console.log('error')
        }
        // console.log(xhr)
    })

    xhr.open("GET","https://jsonplaceholder.typicode.com/users");

    xhr.send();
})();
