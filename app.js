function ItunesController(){
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e){
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs);
  }

  function drawSongs(songList){
    
    var template = `<div class='container'><div class='row'><div class='col-sm-12'><h2 class='center'>Showing ${songList.length} results for <i>${songList[0].artist}</i></h2></div></div><div class='row'>`
    for(var i = 0; i < songList.length; i++){
      var song = songList[i]
      
      template += `<div class='col-sm-4'><div class='song card'> <span class='iwt'><audio id='song${i}' src='${song.preview}'></audio><button onclick='document.getElementById("song${i}").play()'><span class='glyphicon glyphicon-play'></span></button><span><b>Title: ${song.title}</b></span></span><span>Album: ${song.collection}</span><span>Price: $${song.price}</span><div class='img-container'><img src='${song.albumArt}'></div> </div></div>`
    }

      template+=`</div></div>`
      document.getElementById('songs').innerHTML =template
    
//     <audio id="demo" src="http://tiedostot.wikidot.com/local--files/start/a-molli2.wav" type="audio/wav"></audio>
// <div>
//   <button onclick="document.getElementById('demo').play()">A minor triad</button>
// </div>

    // This is where you task begins
    
 
    
    
  }
  
}



var itunesCtrl = new ItunesController()


  // this.drawDC = function(){
  //   var dcChars= comicService.getCharacters('dc')
  //   var template = `<ul>`
  //   for(var char of dcChars){
  //     var url = char.image || 'http://placehold.it/80x80'
  //     template+=`<li>${char.name} <img src="${url}" width="80"></li>`
  //   }
  //   template+=`</ul>`
  //   document.getElementById('dc').innerHTML = template
  // }