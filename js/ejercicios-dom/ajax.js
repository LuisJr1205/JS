(()=>{
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById("xhr"),
        $fragment = document.createDocumentFragment();

    // console.log(xhr);

    xhr.addEventListener("readystatechange",(e)=>{
        if(xhr.readyState !==4) return;
        // console.log(xhr);
        if (xhr.status >= 200 && xhr.status<300){
            // console.log("Exito");
            // console.log(xhr.responseText);
            let json = JSON.parse(xhr.responseText);
            // console.log(json);

            json.forEach(element => {
                const $li = document.createElement("li");
                $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
                $fragment.appendChild($li);

            });

            $xhr.appendChild($fragment);
        } else{
            // console.log("error");
            let message = xhr.statusText || "Ocurrio un error";
            $xhr.innerHTML = `Error ${xhr.status}:${message}`;
        }
        // Esto es para veer que lo que esta fuera del if y del if else se ejecuta 
        // console.log("Este mensaje cargara de cualrquier forma");
        // console.log(xhr);
    });
    // Para llamar a la api publica
    xhr.open("GET","https://jsonplaceholder.typicode.com/users");
    // Para llamar a ala api local o archivo local
    // xhr.open("GET","sounds/user.json");

    xhr.send();
})();

//***************************  FETCH **************************************

(()=>{
    const $fetch = document.getElementById("fetch"),
        $fragment = document.createDocumentFragment();

    // Metodo get esta por default
    // fetch("sounds/user.json")
    fetch("https://jsonplaceholder.typicode.com/users")
    // Puede quedar escrito de la siguiente manera
    // ,then(()=>res.ok? res.json():Promise.reject(res));
    .then((res) =>{
        // console.log(res);
        return res.ok ?res.json(): Promise.reject(res);
    })
    .then((json)=>{
        // console.log(json);
        json.forEach(element => {
            const $li = document.createElement("li");
            $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
            $fragment.appendChild($li);
        });
        $fetch.appendChild($fragment);
    })
    .catch((err) =>{
        // console.log("Estamos en el catch",error);
        let message = err.statusText || "Ocurrio un error";
        $fetch.innerHTML = `Error ${err.status}:${message}`;
    })
    .finally(()=>{}); 
    // console.log("Esto se ejecutara independientemente de la promesa"));

})();


//***************************  FETCH  ASYN-AWAIT**************************************

(()=>{
    const $fetchAsync = document.getElementById("fetch-async"),
        $fragment = document.createDocumentFragment();

    async function getData() {
        try {
            let res = await fetch("https://jsonplaceholder.typicode.com/users"),
            json = await res.json();

        // console.log(res,json);

        // if(!res.ok) throw new Error("Ocurrio un Error");
        if(!res.ok) throw{status: res.status, statusText:res.statusText}

        json.forEach((element) => {
            const $li = document.createElement("li");
            $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
            $fragment.appendChild($li);
        });
        $fetchAsync.appendChild($fragment);

        } catch (error) {   
            console.log(error);
            let message = error.statusText || "Ocurrio un error";
            $fetchAsync.innerHTML = `Error ${error.status}: ${message}`;         
        } finally{
            // console.log("Esto se ejecutara sin importar el try catch")
        }
    }
    
    getData();
})();

// ************************** AJAX: LIBRERRIA AXIO **********************

(()=>{
    const $axios = document.getElementById("axios"),
        $fragment = document.createDocumentFragment();
    
    axios
    // .get("sounds/user.json")
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) =>{
        // console.log(res);
        let json = res.data;
        json.forEach(element => {
            const $li = document.createElement("li");
            $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
            $fragment.appendChild($li);
        });
        $axios.appendChild($fragment);
    })
    .catch((error) =>{
        // console.log(error.response)
        let message = error.response.statusText || "Ocurrio un error";
            $axios.innerHTML = `Error ${error.response.status}: ${message}`;   
    })
    .finally(()=>{
        // console.log("Esto se ejecutara no importando el resultado");
    });
})();

// *************************AXIO ASYN-AWAIT *****************************
(()=>{
    const $axiosAsync = document.getElementById("axios-async"),
        $fragment = document.createDocumentFragment();

    async function getData() {
        try {
            let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
            json = await res.data;
        // console.log(res,json);
        json.forEach(element => {
            const $li = document.createElement("li");
            $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
            $fragment.appendChild($li);
        });
        $axiosAsync.appendChild($fragment);
            
        } catch (error) {
            let message = error.response.statusText || "Ocurrio un error";
            $axiosAsync.innerHTML = `Error ${error.response.status}: ${message}`;  
        }finally{
        console.log("Esto se ejecutara no importando el resultado");
        }
    }

    getData();
})();