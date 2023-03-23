const d=document;

export default function sorteo(btn,selector) {
    const ganador =(selector)=>{
        const $players = d.querySelectorAll(selector),
            random = Math.floor(Math.random()*$players.length),
            winner = $players[random];

            console.log($players,random,winner);
            return `El ganador es: ${winner.textContent}`;
    }

    d.addEventListener("click",(e)=>{
        if(e.target.matches(btn)){
            let result = ganador(selector);
            alert(result);
        }
    });
}



/*
const ganadorComentarios =(selector)=>{
        const $players = d.querySelectorAll(selector),
            random = Math.floor(Math.random()*$players.length),
            winner = $players[random];

            console.log($players,random,winner);
            return `El ganador es: ${winner.textContent}`;

ganadorComentarios("ytd-comment-thread-renderer #author-text span")
    }*/