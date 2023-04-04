import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./postCard.js";
import { Post } from "./post.js";

const d = document;

export async function Router() {
    const d = document,
        w = window,
        $main = d.getElementById("main");
    
    let {hash}=location;
    console.log(hash);

    $main.innerHTML = null;

    if(!hash || hash ==="#/"){
        await ajax({
            url:api.POSTS,
            cbSuccess:(posts)=>{
                // console.log(posts);
                let html = "";
                posts.forEach(post => html += PostCard(post));
                $main.innerHTML = html; 
            },
        });
    }else if(hash.includes("#/search")){
        let query = localStorage.getItem("wpSearch");
        if(!query) return false;
         await ajax({
            url:`${api.SEARCH}${query}`,
            cbSuccess:(search) =>{
                console.log(search);
            }
         });


    }else if(hash.includes("#/contacto")){
        $main.innerHTML = "<h2>Seccion de contacto</h2>";
    }else{
        await ajax({
            url:`${api.POST}/${localStorage.getItem("wpPostId")}`,
            cbSuccess:(post)=>{
                // console.log(post);
                $main.innerHTML = Post(post); 
            },
        });
    }
    d.querySelector(".loader").style.display = "none";
    
}