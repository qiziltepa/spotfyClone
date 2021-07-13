var id=0,
cols="col-"+id,
part=document.createElement('div'),
divInfo=document.createElement('div'),
col=document.createElement('div');
col.id=cols;
col.className='col'


h2=document.createElement('h2'),
h2.innerText="Favorite"
h2.className='information';
h2.id='info'


part.appendChild(divInfo)
divInfo.className='info';
divInfo.innerHTML=`<p class="text" id="prev" onclick="plusDivs(-1,'col0')"><i class="material-icons">navigate_before</i></p><p class="text" id="next" onclick="plusDivs(1,'col0')"><i class="material-icons">navigate_next</i></p>`;
divInfo.insertAdjacentElement('afterbegin',h2)
part.className='part part-'+id;
part.id='part-'+id;
part.appendChild(col)
console.log(part);

function MusicItem(musicname,artist,seen,musicNamIid,artistId,seenId,src,href){
    
// variable create
var a=document.createElement('a'),
pName=document.createElement('p'),
pArtist=document.createElement('p'),
pSeen=document.createElement('p'),
div=document.createElement('div'),
img=document.createElement('img'),
i=document.createElement('i'),
divImg=document.createElement('div'),
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
var m=document.getElementById('main');
m.appendChild(part);
// its is example for test

MusicItem("The Real Slim Shady","Eminem",1200,"musicName-1","artist-1","seen-1","./img/back-image.jpg","https://open.spotify.com")
MusicItem("Without me","EminemEminemm",1000,"musicName-1","artist-1","seen-1","./img/back-image.jpg","https://open.spotify.com")
MusicItem("Rap God","Eminem",1100,"musicName-1","artist-1","seen-1","./img/back-image.jpg","https://open.spotify.com")

// module exports from here to server

module.exports.MusicItem=MusicItem;