const d = document,
    $template = d.getElementById('milk-template').content,
    $fragmento = d.createDocumentFragment(),
    $sectionMain = d.querySelector('.milkshakes'),
    fetchOptions = {
        headers:{//usamos la option header con la propriesas authorization: bearer (mais la llave secreta de stripe) para acesseder a los productos, sin essa autorizacion nos lanza un error 401(no autorizado)
            authorization:"Bearer (Llave Secreta aqui)"}
    };
    let prices,
        productos;
    const formMoney = num => `${num.slice(0,1) + ',' + num.slice(1,3)}`
    const insertProductoYPrice = (prices,productos) => {
        // console.log(productos,prices)
        prices.forEach(price => {
            let productoData = productos.filter(producto => producto.id === price.product);
            // console.log(price);
            $template.querySelector('.shake').setAttribute('data-price',price.id);
            $template.querySelector('img').src = productoData[0].images[0];
            $template.querySelector('img').alt = productoData[0].name;
            $template.querySelector('figcaption').textContent = `${productoData[0].name}: ${formMoney(price.unit_amount_decimal)} ${price.currency}.`
            let $clone = d.importNode($template,true);
            $fragmento.appendChild($clone);
        });
        $sectionMain.appendChild($fragmento);
    }
    // Para hacer varias peticiones de un sola vez usamos el metodo all() del Objeto Promise, el orden que hacemosos la peticion en el array sera la orde criada para trabajar com dichas peticiones 

    Promise.all([
        fetch("https://api.stripe.com/v1/products",fetchOptions),
        fetch("https://api.stripe.com/v1/prices",fetchOptions)])
        .then((response )=> Promise.all(response.map(res => res.ok?res.json():Promise.reject(res))))
        .then(json => {
            productos = json[0].data;
            prices = json[1].data;
            insertProductoYPrice(prices,productos);
        })
        .catch(err =>{ 
            let errMsg = err.statusText || "Ocurrió un error al conectarse con la API de Stripe";
            $sectionMain.innerHTML = `<p>Error: ${err.status} - ${errMsg}</p>`;
            });
    d.addEventListener("click",(e)=>{
        console.log(e.target)
        // adicionamos * al final del selector para indicar que busquel el selector com todos los hijos dentro
        if(e.target.matches(".milkshakes *")){
            // mandamos buscar el id de price que lo hemos puesto en el template com un elemento data-price
            let price = e.target.parentElement.getAttribute("data-price");
            // y lo enviamos para stripe, invocamos el objeto stripe que esta en la libreria de stripe del script que tenemos de stripe

            //Y insertamos la llave publica dentro de objeto
            // lo enviamos por el metodo redirectToCheckout(), lo envia al formulario que ee la parte que trabaja stripe con seguracia, este metodo trabaja con promise 
            Stripe("llave publica aqui").redirectToCheckout({
                // passamos el parametro lineitems que es un array que recibe, objetos donde indicamos el conjunto de precio que pagara el usuario por cada item, si es mas de un item ponemos mas de un objeto, pero como solo vamos atrabajar con uno solo pongo uno un objeto
                // este objeto recibe un parametro price: donde indicamos el id del precio del producto y quantuty: que recibe, quantos producto cobramos con este precio, neste caso indicamos uno.
                lineItems:[{price, quantity:1}],
                mode: "subscription",// este parametro es para se selecionamos el modo de pago por mes.
                successUrl:"http://127.0.0.1:5500/assets/132_SuccessStripe.html",// este parametro es donde ponemos nuestra pagina de se el pago ocurreo con sucesso
                cancelUrl:"http://127.0.0.1:5500/assets/132_CancelStripe.html" // y este si ocurreo un error o fue cancelada

            }).then(res=>{
                //si las respuesta es correcta redireciona el id de pricio a una pagina que tenemos que tener preparada con stripe, si salta error como nos dise la documentacion de stripe esta es la forma correta de manipularlo 
                if(res.error){
                    $sectionMain.insertAdjacentHTML("afterend",res.error.message)
                }
            })
        };
    });
                                            
