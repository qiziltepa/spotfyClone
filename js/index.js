function MusicItem(musicname,artist,seen,musicNamIid,artistId,seenId,src,href){
    
// variable create
var a=document.createElement('a'),
pName=document.createElement('p'),
pArtist=document.createElement('p'),
pSeen=document.createElement('p'),
div=document.createElement('div'),
img=document.createElement('img'),
i=document.createElement('i'),
col=document.querySelector("#col-1");


var divImg=document.createElement('div'),
divPlay=document.createElement('div'),
divText=document.createElement('div');


divImg.className='item-img'
divText.className='item-text'
divPlay.className='item-play'
divImg.appendChild(img)
divText.appendChild(pName)
divText.appendChild(pArtist)
divText.appendChild(divPlay);
pArtist.className="text-artist text"
pArtist.innerText=`${artist}`
pName.className='text-music text';
pName.id=`${musicNamIid}`;
pArtist.id=`${artistId}`;
pName.innerText=`${musicname}`

divPlay.innerHTML=`<i class="material-icons play"
style="font-size: 36px; color: green;">play_circle_filled</i>
<i class="material-icons seen" style="font-size: 15px;">remove_red_eye</i>`
pSeen.id=`${seenId}`,
pSeen.innerText=seen;
divPlay.appendChild(pSeen);
img.setAttribute('src',`${src}`)
a.className="music"
a.setAttribute('href',`${href}`)
div.className='item'
a.appendChild(div)
div.appendChild(divImg);
div.appendChild(divText);
col.appendChild(a);
}
//musicLength bu - musiclar uzunligi bo'yichadir
var musicLength=15;
for(var i=0;i<musicLength;i++){
    MusicItem("Rap God","Eminem",1000,"musicName-1","artist-1","seen-1","./img/back-image.jpg","https://open.spotify.com")
}