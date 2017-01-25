function ItunesController(){
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e){
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs);
  }

  function drawSongs(songList){
    
    var template = `<div class=><h2>Showing ${songList.length} results for <i>${songList[0].artist}</i></h2><ul>`
    for(var i = 0; i < songList.length; i++){
      var song = songList[i]
      
      template += `<li>${song.title}, ${song.collection}, $${song.price}, <audio controls
  src='${song.preview}'></audio>, <img src='${song.albumArt}'> </li>`
      template+=`</ul>`
      document.getElementById('songs').innerHTML =template
    }
    
    
    console.log(songList);
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