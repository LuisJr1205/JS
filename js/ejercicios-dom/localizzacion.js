const d= document;

export default function geolocation(id) {
    const $id= d.getElementById(id),
    options = {
        // Que el dispositivo haga la mejor lectura posible que pueda
        enableHighAccuracy: true,
        // cuanto tiempo va a esperar para tomar la captura
        timeout:500,
        // Para que no guarde cache
        maximumAge:0
    };

    const success = (position) =>{
        let coords = position.coords;
<<<<<<< HEAD
        // console.log(position);
=======
        console.log(position);
>>>>>>> 56c105c7ab39725506b9989bb1b357ab9581a3b4
        $id.innerHTML = `
        <p>Tu posicion actual es:</p>
        <ul>
        <li>Latitud:${coords.latitude}</li>
        <li>Longitud:${coords.longitude}</li>
        <li>Precision:${coords.accuracy} metros</li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target ="_blank" rel="noopener">Ver en google maps</a>`
    }

    const error = (err) =>{
        $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
<<<<<<< HEAD
        // console.log(`Error ${err.code}: ${err.message}`);
=======
        console.log(`Error ${err.code}: ${err.message}`);
>>>>>>> 56c105c7ab39725506b9989bb1b357ab9581a3b4
    }


    navigator.geolocation.getCurrentPosition(success,error,options);

}