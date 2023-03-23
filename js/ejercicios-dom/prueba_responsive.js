const d = document;

export default function tester(form) {
    const $form = d.getElementById(form);
    let testeo;

    d.addEventListener("submit",(e)=>{
        if(e.target === $form){
            e.preventDefault();
            testeo = window.open($form.direccion.value,"Testeo",`innerWidth=${$form.ancho.value},innerHeight=${$form.alto.value}`);
        }
    });

    d.addEventListener("click",(e)=>{
        if(e.target === $form.cerrar){
            testeo.close();
        }
    })
}