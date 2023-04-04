export async function ajax(props) {
    let{url,cbSuccess} = props;

    await fetch(url)
    .then(res => res.ok? res.json():Promise.reject(res))
    .then(json => cbSuccess(json))
    .catch(error =>{
        let message = error.statusText || "Ocurrio un error al acceder API";
        document.getElementById("main").innerHTML = `
            <div class = "error">
                <p>Error ${error.statusText}:${message}</p>
            </div>
        `;
        document.querySelector(".loader").style.display = "none";
        console.log(error);
    })

}