const d = document;

export default function slider() {
    const $siguiente = d.querySelector(".slider-btns .next"),
        $anterior = d.querySelector(".slider-btns .prev"),
        $diapositivas = d.querySelectorAll(".slider-slide");
    let i = 0;

    d.addEventListener("click",(e)=>{
        if(e.target === $anterior){
            e.preventDefault();
            $diapositivas[i].classList.remove("active");
            i--;
            if(i<0){
                i = $diapositivas.length-1;
            }
            $diapositivas[i].classList.add("active");

        }


        if(e.target === $siguiente){
            e.preventDefault();
            $diapositivas[i].classList.remove("active");
            i++;
            if(i>=$diapositivas.length){
                i = 0;
            }
            $diapositivas[i].classList.add("active");
        }
    });

}