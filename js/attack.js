function attack() {
  const $player = document.querySelector('.player');

  const waterballoon=document.querySelector('$waterballoon');


  document.keyup = (e) => {
    const key = document.getElementById(e.key);
    if (key==='b') {
      waterballoon.style.zIndex='9999';
    } 
  };
}