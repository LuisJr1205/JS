import KEYS_STRIPE from "./stripe_keys.js";

// console.log(KEYS_STRIPE);

const d = document,
    $productos = d.getElementById("productos"),
    $template = d.getElementById("producto-template").content,
    $fragment = d.createDocumentFragment(),
    fetchOptions = {
        headers: {
            Authorization:`Bearer ${KEYS_STRIPE.private}`,
        }
    };

    let products,prices;

    const moneyFormat = num => `${num.slice(0,-2)}.${num.slice(-2)}`

    Promise.all([
        // Se van ejecutando conforme se piden las peticiones 
        fetch("https://api.stripe.com/v1/products",fetchOptions),
        fetch("https://api.stripe.com/v1/prices",fetchOptions),
    ])
    .then((responses) => Promise.all(responses.map(res => res.json())))
    .then((json) =>{
        // console.log(json);
        products = json[0].data;
        prices = json[1].data;
        // console.log(prices);

        prices.forEach((element) => {
            let productData = products.filter(product => product.id === element.product);
            // console.log(productData);
            
            $template.querySelector(".producto").setAttribute("data-price",element.id);
            $template.querySelector("img").src = productData[0].images[0];
            $template.querySelector("img").alt = productData[0].name;
            $template.querySelector("figcaption").innerHTML = `
             ${productData[0].name}
             <br>
             ${moneyFormat(element.unit_amount_decimal)} ${element.currency}
            `;

            let $clone = d.importNode($template,true);
            $fragment.appendChild($clone);
        });
        $productos.appendChild($fragment);
    })
    .catch((error)=>{
        // console.log(error);
        let message = error.statusText || "Ocurrio un error al conectarse con Stripe";
        $productos.innerHTML = `<p>Error ${error.status}: ${message}</p>`;
    });



d.addEventListener("click",(e)=>{
    if(e.target.matches(".producto *")){
        // alert("A comprar");
        let price = e.target.parentElement.getAttribute("data-price"); 
        // console.log(precio);

        Stripe(KEYS_STRIPE.public)
         .redirectToCheckout({
            lineItems:[{price, quantity: 1 }],
            mode:"payment",//esto para pago recurrente
            successUrl:"http://127.0.0.1:5500/ejercicio-ajax/assets/pago_exitoso.html",
            cancelUrl:"http://127.0.0.1:5500/ejercicio-ajax/assets/pago_error.html",
         })
        .then((res) =>{
            console.log(res);
            if(res.error){
                $productos.insertAdjacentHTML("afterend",res.error.message);
            }
        });
    }
});