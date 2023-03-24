const d = document;


export default function scrollSpy() {
    const $sections = d.querySelectorAll("section[data-scroll-spy]");
    const cb = (entries)=>{
        // console.log("entries",entries);
        entries.forEach((entry) =>{
            const id = entry.target.getAttribute("id");
            // console.log(id);
            // console.log("entry",entry);
            if(entry.isIntersecting){
                // console.log(id);
                d.querySelector(`a[href="#${id}"][data-scroll-spy]`).classList.add("active");
            }else{
                d.querySelector(`a[href="#${id}"][data-scroll-spy]`).classList.remove("active");
            }
        });
    };
    const observer = new IntersectionObserver(cb,{
        // root
        // Para que sea mas chico 
        // rootMargin:"-250px"    
        threshold:0.6,
    });
    
    $sections.forEach((el) => observer.observe(el));
}