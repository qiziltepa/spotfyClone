var col=document.createElement('div');
function MusicItem(musicname,artist,seen,id,src,href){
// variable create
var a=document.createElement('a'),
pName=document.createElement('p'),
pArtist=document.createElement('p'),
pSeen=document.createElement('p'),
div=document.createElement('div'),
img=document.createElement('img'),
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
pName.id=`musicName-${id}`;
pArtist.id=`artist-${id}`;
pName.innerText=`${musicname}`

divPlay.innerHTML=`<i class="material-icons play"
style="font-size: 36px; color: green;">play_circle_filled</i>
<i class="material-icons seen" style="font-size: 15px;">remove_red_eye</i>`
pSeen.id=`seen-${id}`,
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
function PartItemCreator(id,info){
    col=document.createElement('div');
    var cols="col-"+id;
    part=document.createElement('div'),
    divInfo=document.createElement('div'),
    part.appendChild(divInfo)
    col.id=cols;
    col.className='col'
    h2=document.createElement('h2'),
    h2.innerText=`${info}`
    h2.className='information';
    h2.id='info-'+id
    part.appendChild(divInfo)
    divInfo.className='info';
    divInfo.innerHTML=`<p class="text" id="prev" onclick="plusDivs(-1,'col-`+id+`')"><i class="material-icons">navigate_before</i></p>
    <p class="text" id="next" onclick="plusDivs(1,'col-`+id+`')"><i class="material-icons">navigate_next</i></p>`;
    divInfo.insertAdjacentElement('afterbegin',h2)
    part.className='part part-'+id;
    part.id='part-'+id;
    part.appendChild(col)
    var m=document.getElementById('main');
    m.appendChild(part);
    }


    //Example 
    PartItemCreator(1,"For You");
    //Add ItemMusic
    MusicItem("Rap God","Eminem",1200,1,"./img/back-image.jpg","https://open.spotify.com")
    MusicItem("Without Me","Eminem",1200,1,"./img/windows.jpg","https://open.spotify.com")
    MusicItem("The Real Slim Shady","Eminem",1200,1,"./img/back-image.jpg","https://open.spotify.com")
    MusicItem("Rap God","Eminem",1200,1,"./img/windows.jpg","https://open.spotify.com")
    MusicItem("Without Me","Eminem",1200,1,"./img/back-image.jpg","https://open.spotify.com")
    MusicItem("The Real Slim Shady","Eminem",1200,1,"./img/windows.jpg","https://open.spotify.com")
    MusicItem("Rap God","Eminem",1200,1,"./img/back-image.jpg","https://open.spotify.com")
    MusicItem("Without Me","Eminem",1200,1,"./img/back-image.jpg","https://open.spotify.com")
    //Add music 

    PartItemCreator(2,"Favorite");
    // Add new Music
    MusicItem("The Real Slim Shady","Eminem",1200,2,"./img/back-image.jpg","https://open.spotify.com")