const d = document;
    // ua = navigator.userAgent;

export default function userInfo(id) {
    const $id = d.getElementById(id),
        isMobile = {
            android: ()=> navigator.userAgent.match(/android/i),
            ios: ()=> navigator.userAgent.match(/iphone|ipad|ipod/i),
            windows: ()=> navigator.userAgent.match(/windows phone/i),
            any: function () {
                return this.android()||this.ios()||this.windows();
            },
        },
        isDesktop = {
            linux: ()=> navigator.userAgent.match(/linux/i),
            mac: ()=> navigator.userAgent.match(/mac os/i),
            windows: ()=> navigator.userAgent.match(/windows nt/i),
            any: function () {
                return this.linux()||this.mac()||this.windows();
            },
        },
        isBrowser = {
            chrome: ()=> navigator.userAgent.match(/chrome/i),
            safari: ()=> navigator.userAgent.match(/safari/i),
            firefox: ()=> navigator.userAgent.match(/firefox/i),
            opera: ()=> navigator.userAgent.match(/opera|opera mini/i),
            ie: ()=> navigator.userAgent.match(/msie|iemobile/i),
            edge: ()=> navigator.userAgent.match(/edge/i),
            any: function () {
                return( 
                    this.ie()||
                    this.edge()||
                    this.chrome()||
                    this.safari()||
                    this.firefox()||
                    this.opera()
                    );
            },
        };

    $id.innerHTML = `
    <ul>
        <li>User Info: <b>${navigator.userAgent}</b></li>
        <li>Plataforma: <b>${isMobile.any()? isMobile.any(): isDesktop.any()}</b></li>
        <li>Navegador: <b>${isBrowser.any()}</b></li>
    </ul>`;
// PARA CONTENIDO EXCLUSIVO DE ALGUN LUGAR
    if(isBrowser.chrome()){
        $id.innerHTML += `<p> <mark>Este un texto que solo se ve en Chrome</p> </mark>`;
    }
    if(isBrowser.firefox()){
        $id.innerHTML += `<p> <mark>Este un texto que solo se ve n firefox</p> </mark>`;
    }
    if(isDesktop.linux()){
        $id.innerHTML += `<p> <mark>Descarga el software para linux</p> </mark>`;
    }
    if(isDesktop.mac()){
        $id.innerHTML += `<p> <mark>Descarga el software para Mac OS</p> </mark>`;
    }
    if(isDesktop.windows()){
        $id.innerHTML += `<p> <mark>Descarga el software para Windows</p> </mark>`;
    }

// Para las redirecciones
    if(isMobile.android()){
        window.location.href = "https://jonmircha.com"
    }
}