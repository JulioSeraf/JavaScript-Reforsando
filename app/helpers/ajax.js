export function ajax(props){
    
    let {url,cbSuccess} = props;

    fetch(url)
    .then(res => res.ok? res.json():Promise.reject(res))
    .then(json => cbSuccess(json))
    .catch(err =>{
        let errMsg =  err.statusText || "Ocurrió un error al acceder a la API.";
        document.getElementById('main').innerHTML = `
        <div class="error">
            <p>Error ${err.status}: ${errMsg}</p>
        </div>`;
        document.querySelector(".loader").style.display = "none";

        console.log(err);
    });
};