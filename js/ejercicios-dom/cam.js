const d = document;
export default function webCam(id) {
    const $video = d.getElementById(id);
    // console.log(navigator.mediaDevices);
    if(navigator.mediaDevices.getUserMedia){
        navigator.mediaDevices
        .getUserMedia({video:true,audio:false})
        .then(strem=>{
            // console.log(strem);
            $video.srcObject = strem;
            $video.play();
        })
        .catch((err) => {
            $video.insertAdjacentHTML("beforebegin",`<p>Ha ocurido un error<mark>${err}</mark></p>`);
            // console.log(`Ha ocurido un error ${err}`);
            
        });
    }
}