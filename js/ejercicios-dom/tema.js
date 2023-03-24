const d = document;
export default function darkMode(btn,dataDark){
    const $themeBtn = d.querySelector(btn),
        $selectors = d.querySelectorAll("[data-dark]");
<<<<<<< HEAD
    // console.log($selectors);
=======
    console.log($selectors);
>>>>>>> 56c105c7ab39725506b9989bb1b357ab9581a3b4

    let moon = "🌙",
        sun = "☀️";

    const lightMode = ()=>{
        $selectors.forEach(el => el.classList.remove(dataDark));
        $themeBtn.textContent=moon;
        localStorage.setItem("theme","light");
    }

    const dartMode = ()=>{
        $selectors.forEach(el => el.classList.add(dataDark));
        $themeBtn.textContent=sun;
        localStorage.setItem("theme","dark");
    }

    d.addEventListener("click",(e)=>{
        if(e.target.matches(btn)){
<<<<<<< HEAD
            // console.log($themeBtn.textContent);
=======
            console.log($themeBtn.textContent);
>>>>>>> 56c105c7ab39725506b9989bb1b357ab9581a3b4
            if($themeBtn.textContent ===moon){
                dartMode();
            }else{
                lightMode();
            }
        }
    });
    

    d.addEventListener("DOMContentLoaded",(e)=>{
        if(localStorage.getItem("theme")===null)localStorage.setItem("theme","light");
        if(localStorage.getItem("theme")==="ligth") lightMode();
        if(localStorage.getItem("theme")==="dark") dartMode();
    })
}