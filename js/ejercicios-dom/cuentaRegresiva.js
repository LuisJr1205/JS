const d = document;
export  default function cuentaRegresiva(container,limitDate, finalMessage) {
    const $countdown = d.getElementById(container),
        countdownDate = new Date(limitDate).getTime();

    let countdownTime = setInterval(() => {
        let now = new Date().getTime(),
            limitTime = countdownDate - now,
            days = Math.floor(limitTime/(1000*60*60*24)),
            hour = ("0" + Math.floor(limitTime % (1000*60*60*24)/(1000*60*60))).slice(-2),
            minutes = ("0" + Math.floor(limitTime % (1000*60*60)/(1000*60))).slice(-2),
            seconds = ("0" + Math.floor(limitTime % (1000*60)/(1000))).slice(-2);
    
    $countdown.innerHTML = `<h3>${days} dias ${hour}:${minutes}:${seconds}</h3>`;
<<<<<<< HEAD
    // console.log(countdownDate, now, limitTime);
=======
    console.log(countdownDate, now, limitTime);
>>>>>>> 56c105c7ab39725506b9989bb1b357ab9581a3b4
    if(limitTime<0){
        clearInterval(countdownTime);
        $countdown.innerHTML=`<h3>${finalMessage}</h3>`
    }        


    }, 1000);
}