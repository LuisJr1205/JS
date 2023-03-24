const d = document;
export default function webCam(id) {
    const $video = d.getElementById(id);
    // console.log(navigator.mediaDevices);
    if(navigator.mediaDevices.getUserMedia){
        navigator.mediaDevices
        .getUserMedia({video:true,audio:false})
        .then(strem=>{
<<<<<<< HEAD
            // console.log(strem);
=======
            console.log(strem);
>>>>>>> 56c105c7ab39725506b9989bb1b357ab9581a3b4
            $video.srcObject = strem;
            $video.play();
        })
        .catch((err) => {
            $video.insertAdjacentHTML("beforebegin",`<p>Ha ocurido un error<mark>${err}</mark></p>`);
<<<<<<< HEAD
            // console.log(`Ha ocurido un error ${err}`);
=======
            console.log(`Ha ocurido un error ${err}`);
>>>>>>> 56c105c7ab39725506b9989bb1b357ab9581a3b4
            
        });
    }
}