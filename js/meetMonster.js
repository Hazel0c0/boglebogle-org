import addScore from "./addscore.js";
import {
  getUserId
} from "./getParameter.js";

function meetMonster($monster) {

  if ($monster.classList.contains('getBubbled')) {
    $monster.classList.add('die');
    setTimeout(() => {
      $monster.parentElement.removeChild($monster);
    }, 100);
    addScore();

  } else {
    window.location.href = `../html/gameover.html?userId=${getUserId()}&score=${document.getElementById('score').textContent}`;
  }
}

export default function isMeetMonster() {
  const $bobby = document.getElementById('bobby');
  const $monsters = [...document.querySelectorAll('.monster')];
  const {
    offsetLeft,
    offsetTop,
    offsetWidth
  } = $bobby;

  // 캐릭터와 몬스터가 만나는 것 감지 순서대로 
  // 기준은 캐릭터와 층이 같은 몬스터
  //    왼쪽에서 오른쪽
  //    오른쪽에서 왼쪽
  $monsters
    .filter($monster => $monster.offsetTop === offsetTop)
    .forEach($monster => {
      if ((offsetLeft > $monster.offsetLeft && offsetLeft < $monster.offsetLeft + $monster.offsetWidth) ||
        offsetLeft + offsetWidth > $monster.offsetLeft && offsetLeft + offsetWidth < $monster.offsetLeft + $monster.offsetWidth) {
        meetMonster($monster);
      }
    });
}