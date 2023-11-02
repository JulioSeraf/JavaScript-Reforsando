export function ajax(props){
    let {url,cbSuccess} = props;

    fetch(url)
    .then(res => res.ok? res.json():Promise.reject(res))
    .then(json => cbSuccess(json))
    .catch(err =>{
        let errMsg =  err.statusText || "Ocurrió un error al acceder a la API.";
        document.getElementById('root').innerHTML = `
        <div class="error">
            <p>Error ${err.status}: ${errMsg}</p>
        </div>`;

        console.log(err);
    });
};