const d = document,
    $shake = d.getElementById('shake'),
    $template = d.getElementById('milk-template').contain,
    $fragmento = d.createDocumentFragment(),
    fetchOptions = {
        headers:{//usamos la option header con la propriesas authorization: bearer (mais la llave secreta de stripe) para acesseder a los productos, sin essa autorizacion nos lanza un error 401(no autorizado)
            authorization:"Bearer (llave secreta aqui)"
        }
    };
    let prices,
        productos;
    // Para hacer varias peticiones de un sola vez usamos el metodo all() del Objeto Promise, 
    Promise.all(
        fetch("https://api.stripe.com/v1/products",fetchOptions),
        fetch("https://api.stripe.com/v1/prices",fetchOptions))
        .then(res => Promise.all(response.map(res => res.json())))
        .then(json => console.log(json))
                                                  //Peticon de Productos 
