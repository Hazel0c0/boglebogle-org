import isMeetMonster from "./meetMonster.js";

export default function moveMonster(difficulty) {
  // 모든 몬스터 담은 배열

  let moveTime = 0;

  setInterval(() => {
    const $monsters = [...document.querySelectorAll('.monster:not(.getBubbled)')];

    $monsters.forEach($monster => {
      const moveRange = Math.floor(Math.random() * 200 * difficulty + 20);

      const indexOfMonster = $monsters.indexOf($monster);

      const triFunction = indexOfMonster % 2 == 0 ? Math.sin(moveTime) : Math.cos(moveTime);

      let moveAmount = $monster.offsetLeft + triFunction * moveRange * difficulty * 3;

      if (moveAmount > $monster.parentElement.offsetWidth - 50) {
        $monster.style.left = `${$monster.parentElement.offsetWidth - 100}px`;
        return;
      }

      if (moveAmount < 50) {
        $monster.style.left = `50px`;
        return;
      }

      $monster.style.left = `${moveAmount}px`;
      
      isMeetMonster();
    });
    moveTime++;
  }, 1000);
}