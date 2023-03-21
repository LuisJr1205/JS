const d = document;
let x = 0, y=0;

export function shorCuts(e) {
    // console.log(e);
    // console.log(e.type);
    if (e.key === "a" && e.altKey) {
        alert("Haz lanzado una alerta con el teclado");
    }
    if (e.key === "c" && e.altKey) {
        confirm("Haz lanzado una confirmacion con el teclado");
    }
    if (e.key === "p" && e.altKey) {
        prompt("Haz lanzado un aviso con el teclado");
    }
}

export function moveBall(e, ball, stage) {
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        limitsBall = $ball.getBoundingClientRect(),
        limitsStage = $stage.getBoundingClientRect();
    console.log(e.keyCode);
    console.log(limitsBall,limitsStage);

    switch (e.keyCode) {
        // Izquierda con codigo 
        case 37:
            if(limitsBall.left > limitsStage.left){
                e.preventDefault();
                x--
            }    
            break;
        // Arriba con codigo 
        case 38:    
            if(limitsBall.top > limitsStage.top){
                e.preventDefault();    
                y--
            }    
            break;
        // Derecha con codigo 
        case 39:   
            if(limitsBall.right < limitsStage.right){
                e.preventDefault();    
                x++
            }    
            break;
        // Abajo con codigo
        case 40:   
            if(limitsBall.bottom < limitsStage.bottom){
                e.preventDefault();    
                y++
            }    
            break;
        default:
            break;
    }
    $ball.style.transform = `translate(${x*1}px,${y*1}px)`;
}

