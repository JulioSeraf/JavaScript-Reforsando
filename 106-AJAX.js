                                                        //XMLHttpRequest
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

                                                        //Fetch:

    // Trabajar con fetch para hacer peticiones en mais sencillo ya que no tenemos que hacer ninguna estancia de ajax como con XMLHttpResquest 
(()=>{
    const $fetch = document.getElementById('fetch'),
    $fragment = document.createDocumentFragment();

   // Para trabajar con fetch invocamos su metodo el primero parametro es el recurso a cual va hacer referencia( neste caso la url del mismo exercio de XMLHttpResques), como segundo parametro recibe un objeto al cual assignamos las opciones que ya veremos mais adelante, una como ejemplo seria el metodo, pero como su metodo por defecto es GET no lo assignamos

   // EL metodo fetch trabaja com promessa, por esso trabajamos com los resultado com el metodo then(para respuestas positivas) y catch(para manipular los errores) y el finally(para respuesta idenpendente si es positivo o negatico => sempre se ejecutara)

       //el fetch teine el medoto json() para trabajar con aquivos json, el text() para trabajar con arquivos html o xml, el blob para img de text(formato dataury)
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.ok?res.json(): Promise.reject(res)) // el primero then es el que restiona el manejodel error y trasfomar el arquivo
    .then((json) =>{ // el Segundo es donde se cria el codigo que manipula el arquivo trasformado 
        console.log(json)
        json.forEach(obj => {
            let $li = document.createElement('li');
            $li.innerHTML =  `Nombre: ${obj.name}--- Email: ${obj.email}--- Phone: ${obj.phone}`;
            $fragment.appendChild($li);
        });
        $fetch.appendChild($fragment);
    })
    .catch(err => $fetch.innerHTML = `Error: ${err.status} (${err.statusText || 'Arquivo no identificado'})`) // el catch para cojer el erro el mostrarlo
    .finally(()=> console.log('Se ejecuta idenpendete si es un error o no')) // y finally para codigo sempre ejecutable

})();
                                            //API Fetch + Async-Await
(()=>{
    const $fetchAsync = document.getElementById('fetch-async'),
    $fragment = document.createDocumentFragment();
    
    async function peticion(){
        try{
            // Com async function podemos hacer uso del await, para esperar la peticion , assin no tenemos que criar un then() solo para converter el arquivo lo podemos hacer todo el el try{};
            let res = await fetch("https://jsonplaceholder.typicode.com/uses"),
            json = await res.json();
            //pero no podemos manipular el error para inviar la resposta para el catch  desde el AWait, para eso criamos un return pro catch com throw 
            if(!res.ok){
                // throw new Error('El objeto error solo acepta cadenas de texto')
                throw {status: res.status, statusText: res.statusText}
            }
            json.forEach(obj => {
                let $li = document.createElement('li');
                $li.innerHTML =  `Nombre: ${obj.name}--- Email: ${obj.email}--- Phone: ${obj.phone}`;
                $fragment.appendChild($li);
            });
            $fetchAsync.appendChild($fragment);
        }catch(err){
            $fetchAsync.innerHTML =  `Error: ${err.status} (${err.statusText || 'Arquivo no identificado'})`
        }finally{}

    };
     peticion();

})();