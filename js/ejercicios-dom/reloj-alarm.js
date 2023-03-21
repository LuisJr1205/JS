const d = document;
export function clock(clock,btnStart,btnStop) {
    let clockTime;
    d.addEventListener("click",(e)=>{
        if(e.target.matches(btnStart)){
            clockTime = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML=`<h3>${clockHour}</h3>`;
            }, 1000);
            e.target.disabled = true;
        }
        if(e.target.matches(btnStop)){
            clearInterval(clockTime);
            d.querySelector(clock).innerHTML=null;
            d.querySelector(btnStart).disabled=false;
        }
    })
}


export function alarm(sound,btnStart,btnStop) {
    let alarmTime;
    const $alarm = d.createElement("audio");
    $alarm.src=sound;
    d.addEventListener("click", (e)=> {
        if (e.target.matches(btnStart)) {
            alarmTime = setTimeout(() => {
                $alarm.play();
            }, 2000);
            e.target.disabled = true;
        }

        if (e.target.matches(btnStop)) {
            clearTimeout(alarmTime);
            $alarm.pause();
            $alarm.currentTime =0;
            d.querySelector(btnStart).disabled=false;
        }

    })
}