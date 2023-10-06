const d = document,
    $template = d.getElementById('milk-template').content,
    $fragmento = d.createDocumentFragment(),
    $sectionMain = d.querySelector('.milkshakes'),
    fetchOptions = {
        headers:{//usamos la option header con la propriesas authorization: bearer (mais la llave secreta de stripe) para acesseder a los productos, sin essa autorizacion nos lanza un error 401(no autorizado)
            authorization:"Bearer (llave secreta aqui)"
        }
    };
    let prices,
        productos;
    const insertProductoYPrice = (prices,productos) => {
        // console.log(productos,prices)
        prices.forEach(price => {
            let productoData = productos.filter(producto => producto.id === price.product);
            console.log(price);
            $template.querySelector('.shake').setAttribute('data-price',price.id);
            $template.querySelector('img').src = productoData[0].images[0];
            $template.querySelector('img').alt = productoData[0].name;
            $template.querySelector('figcaption').textContent = `${productoData[0].name}: ${price.unit_amount_decimal.slice(0,1) + ',' + price.unit_amount_decimal.slice(1,3)} ${price.currency}.`
            let $clone = d.importNode($template,true);
            $fragmento.appendChild($clone);
        });
        $sectionMain.appendChild($fragmento);
    }
    // Para hacer varias peticiones de un sola vez usamos el metodo all() del Objeto Promise, el orden que hacemosos la peticion en el array sera la orde criada para trabajar com dichas peticiones 

    Promise.all([
        fetch("https://api.stripe.com/v1/products",fetchOptions),
        fetch("https://api.stripe.com/v1/prices",fetchOptions)])
        .then((response )=> Promise.all(response.map(res => res.json())))
        .then(json => {
            productos = json[0].data;
            prices = json[1].data;
            insertProductoYPrice(prices,productos);
        })
        .catch(err =>{ 
            let errMsg = err.statusText || "Ocurrió un error al conectarse con la API de Stripe";
            // $shake.innerHTML = `<p>Error: ${err.status} - ${errMsg}</p>`;
            });
                                            
