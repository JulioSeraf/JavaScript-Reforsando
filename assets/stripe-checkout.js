const d = document,
    $shake = d.getElementById('shake'),
    $template = d.getElementById('milk-template').contain,
    $fragmento = d.createDocumentFragment();
    const clone =
                                                  //Peticon de Productos 
fetch("https://api.stripe.com/v1/products",({
    headers:{//usamos la option header con la propriesas authorization: bearer (mais la llave secreta de stripe) para acesseder a los productos, sin essa autorizacion nos lanza un error 401(no autorizado)
        authorization:"Bearer (Llave secreta aqui)"
    }
})).then(res => res.ok?res.json():Promise.reject(res))
.then(json =>{
    json.data.forEach(producto => {
        // console.log(producto.images[0])
        $shake.querySelector('img').src = producto.images[0],
        $shake.querySelector('figcaption').textContent = producto.name,
        $template.appendChild($shake);
        let $clone = d.importNode($template,true);
        $fragmento.appendChild($clone);
    });
    d.getElementById("milkshake").appendChild($fragmento)
})
.catch(err => {
    let errMansage = err.statusText || "Detectado"

})

                                                //Peticion de precios 
fetch("https://api.stripe.com/v1/prices",({
    headers:{//usamos la option header con la propriesas authorization: bearer (mais la llave secreta de stripe) para acesseder a los productos, sin essa autorizacion nos lanza un error 401(no autorizado)
        authorization:"Bearer (Llave secreta aqui)"
    }
})).then(res => res.ok?res.json():Promise.reject(res)).then(res => console.log(res))