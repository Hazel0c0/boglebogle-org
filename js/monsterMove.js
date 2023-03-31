export default function moveMonster(difficulty) {
  // 모든 몬스터 담은 배열

  let moveTime = 0;

  setInterval(() => {
    const $monsters = [...document.querySelectorAll('.monster:not(.getBubbled)')];

    $monsters.forEach($monster => {
      const moveAmount = Math.floor(Math.random() * 31 + 20);
      $monster.style.left = `${$monster.offsetLeft + Math.sin(moveTime) * moveAmount * difficulty}px`;
    });
    moveTime++;
  }, 1000);
}