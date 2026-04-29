const cards = document.querySelectorAll(".category-card");

function expandCard(id) {
  const clickedCard = document.getElementById(id);
  const isAlreadyOpen = clickedCard.classList.contains("expanded");

  
  cards.forEach(function(card) {
    card.classList.remove("expanded");
  });

 
  if (!isAlreadyOpen) {
    clickedCard.classList.add("expanded");
  }
}

let playingSong = null;

function playSong(songNumber) {
  const song = document.getElementById('song' + songNumber);
  const cassette = document.getElementById('cass' + songNumber);


  if (playingSong && playingSong !== song) {
    playingSong.pause();
    playingSong.currentTime = 0;

    document.getElementById('cass1').classList.remove('spin');
    document.getElementById('cass2').classList.remove('spin');
    document.getElementById('cass3').classList.remove('spin');
    document.getElementById('cass4').classList.remove('spin');
  }


  if (song.paused) {
    song.play();
    cassette.classList.add('spin');
    playingSong = song;
  } else {
    song.pause();
    cassette.classList.remove('spin');
  }
}
