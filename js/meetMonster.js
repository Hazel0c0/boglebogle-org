import addScore from "./addscore.js";
import {
  getUserId
} from "./getParameter.js";

export default check;

function check() {
  const touchMonster = isMeetMonster();
  if (touchMonster) {
    meetMonster(touchMonster);
  }
}

function meetMonster($monster) {

  if ($monster.classList.contains('getBubbled')) {
    addScore();
    $monster.classList.add('die');
    setTimeout(() => {
      $monster.parentElement.removeChild($monster);
    }, 1000);
  } else {
    window.location.href = `../html/gameover.html?userId=${getUserId()}&score=${document.getElementById('score').textContent}`;
  }
}

function isMeetMonster() {
  const $bobby = document.getElementById('bobby');
  const $monsters = [...document.querySelectorAll('.monster')];
  const {
    offsetLeft,
    offsetTop,
    offsetWidth
  } = {
    $bobby
  };

  let touchMonster = null;

  // 캐릭터와 몬스터가 만나는 것 감지 순서대로 
  // 기준은 캐릭터와 층이 같은 몬스터
  //    왼쪽에서 오른쪽
  //    오른쪽에서 왼쪽
  $monsters
    .filter($monster => $monster.offsetTop === offsetTop)
    .forEach(($monster) => {
      if ($monster.monOffsetLeft > offsetLeft + offsetWidth &&
        $monster.monOffsetLeft + $monster.monOffsetwidth < offsetLeft)
        touchMonster = $monster;
    });

  return touchMonster;
}