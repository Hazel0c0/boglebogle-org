(() => {
  const $monster = document.querySelector('.area1');
  const $monster2 = document.querySelector('.area1-2');

  let moveAmount = 0;

  setInterval(() => {
      $monster.style.left = `${$monster.offsetLeft + Math.sin(moveAmount) * 180}px`;
      
      moveAmount++;
  }, 900);

  setInterval(() => {
    $monster2.style.left='600px';
      $monster2.style.left = `${$monster2.offsetLeft - Math.sin(moveAmount) * 180}px`;
  }, 900);
})();
