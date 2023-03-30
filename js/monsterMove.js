
(() => {
  // const $monster = [...document.querySelectorAll('.monster:nth-child(odd)')];

  const $monster = document.querySelector('.area1');
  const $monster2 = document.querySelector('.area1-2');
  const $monster3 = document.querySelector('.area2');
console.log($monster);
// console.log($monster2);
  let moveAmount = 0;

  setInterval(() => {
      $monster.style.left = `${$monster.offsetLeft + Math.sin(moveAmount) * 180}px`;
      
      moveAmount++;
  }, 900);//<- 속도조절

  setTimeout(() => {
    
    setInterval(() => {
      $monster2.style.left = `${$monster2.offsetLeft - Math.sin(moveAmount) * 150}px`;
    }, 800);
  }, 500);//지연

  setInterval(() => {
      $monster3.style.left = `${$monster3.offsetLeft + Math.sin(moveAmount) * 100}px`;
  }, 900);
})();
