document.addEventListener("DOMContentLoaded",(e)=>{
    const includeHtml = (element,url) =>{
        const xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", (e)=>{
            if(xhr.readyState !==4) return;
// Se usa outer para reemplazar en vez de agregar con el inner
            if(xhr.status >= 200 && xhr.status < 300){
                element.outerHTML = xhr.responseText;
            }else{
                let message = xhr.statusText || "Error al cargar el archivo, peticion por http o https solamente";
                element.outerHTML = `<div><p>Error $${xhr.status}: ${message}</p></div>`;
            }
        });

        xhr.open("GET",url);
        xhr.setRequestHeader("Content-type","text/html; charset=utf-8");
        xhr.send();
    };

    document
    .querySelectorAll("[data-include]")
    .forEach(element => includeHtml(element,element.getAttribute("data-include")));
});