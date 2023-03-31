export default function moveMonster(difficulty) {
  // 모든 몬스터 담은 배열

  let moveTime = 0;

  setInterval(() => {
    const $monsters = [...document.querySelectorAll('.monster:not(.getBubbled)')];

    $monsters.forEach($monster => {
      const moveRange = Math.floor(Math.random() * 31 + 20);

      let moveAmount = $monster.offsetLeft + Math.sin(moveTime) * moveRange * difficulty;
      if ($monster.offsetLeft + $monster.offsetWidth + moveAmount > $monster.parentElement.offsetWidth - 50) {
        $monster.style.left = `${$monster.parentElement.offsetWidth -50}px`;
        return;
      }
      
      if ($monster.offsetLeft - moveAmount < 50) {

      }

      $monster.style.left = `${moveAmount}px`;
    });
    moveTime++;
  }, 1000);
}