import addScore from "./addscore.js";
import {
  getUserId
} from "./getParameter.js";

function meetMonster($monster) {

  console.log("이벤트 발생");
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
  const $monsters = [...document.querySelectorAll('.monster')];

  // 캐릭터와 몬스터가 만나는 것 감지 순서대로 
  $monsters
    .forEach($monster => {
      
      const {
        offsetLeft,
        offsetTop,
        offsetWidth,
        offsetHeight
      } = document.getElementById('bobby');

      if (offsetLeft + offsetWidth - $monster.offsetLeft > 0 &&
          $monster.offsetLeft + $monster.offsetWidth - offsetLeft > 0 &&
          offsetTop + offsetHeight - $monster.offsetTop > 0 &&
          $monster.offsetTop + $monster.offsetHeight - offsetTop > 0) {
        meetMonster($monster);
      }
    });
}