console.log("lets write js code ");

async function getsongs() {
    let a = await fetch("http://127.0.0.1:5500/Video%2083/84/songs/")
    let response = await a.text();
    console.log(response)

   let element =document.createElement("div") 
   div.innerHTML=response;
   let as = div.getElementsByTagName("a");
   console.log(as)
for(let index=0; index<as.length;index++){
    const element =as [index];
    if(element.href.endsWith(".mp3")){
        songs.push(element.href)
    }
}

return songs 

}


async function main(params) {
 let songs= getsongs()
console.log(songs)   

// play th firts songs 
var audio=new Audio(songs[0]);
audio.play();

}
 main() 