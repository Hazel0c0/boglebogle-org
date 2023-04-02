export default function attack({
  offsetTop,
  offsetLeft,
  style
}) {
  makeBubble(offsetTop, offsetLeft, style);
  setTimeout(() => {
    const character = window.localStorage.getItem('character');

    switch (character) {
        case 'url("../img/icon/bubby06.png")':
            style.backgroundImage = 'url(../img/icon/bubby01.png)';
            break;
        case 'url("../img/icon/Kirby-Transparent-Background.png")':
            style.backgroundImage = 'url(****************여기에 오른쪽 보고있는 있는 커비 사진 경로 넣어주세요****************)';
            break;
        default:
            style.backgroundImage = 'url(../img/icon/bobby01.png)';
    }
  }, 500);
}

// 적을 감지하는 함수
function touchesMonster($bubble, $monster) {

  return ($bubble.offsetLeft > $monster.offsetLeft - 20 &&
      $bubble.offsetLeft < $monster.offsetLeft + 20) &&
    ($bubble.offsetTop > $monster.offsetTop - 20 &&
      $bubble.offsetTop < $monster.offsetTop + 20);

}

// 방울 만드는 함수들
function makeBubble(offsetTop, offsetLeft, style) {

  /* 공격 모션 */
  const character = window.localStorage.getItem('character');

  switch (character) {
    case 'url("../img/icon/bubby06.png")':
      style.backgroundImage = 'url(../img/icon/bubby-03.png)';
      break;
    case 'url("../img/icon/Kirby-Transparent-Background.png")':
      style.backgroundImage = 'url(****************여기에 공격하고 있는 커비 사진 경로 넣어주세요****************)';
      break;
    default:
      style.backgroundImage = 'url(../img/icon/bobby03.png)';
  }

  const $playGround = document.querySelector('.content');

  const $bubble = document.createElement('div');
  $bubble.classList.add('bubble');
  $bubble.style.position = 'absolute';
  $bubble.style.top = offsetTop + 'px';

  const isLeft = () => style.transform === 'scaleX(1)';

  if (isLeft())
    $bubble.style.left = (offsetLeft - 50) + 'px';
  else
    $bubble.style.left = (offsetLeft + 50) + 'px';

  $playGround.appendChild($bubble);

  moveBubble($bubble, isLeft);
}

function moveBubble($bubble, isLeft) {

  // 물방울 움직이는 거리
  const BUBBLE_MOVE_AMOUNT = 25;

  // 적 DOM
  const $monsters = [...document.querySelectorAll('.monster')];

  if (isLeft()) {
    for (let i = 1; i <= BUBBLE_MOVE_AMOUNT; i++) {
      setTimeout(() => {

        let touchFlag = false;

        if ($bubble.offsetLeft < 50) return;

        $monsters.forEach($monster => {
          if (touchesMonster($bubble, $monster)) {
            touchFlag = true;
            $monster.innerHTML = `<div class="inBubble"></div>`;
            $monster.classList.add('getBubbled');
            return;
          }
        });

        if (touchFlag) $bubble.parentElement.removeChild($bubble);

        $bubble.style.left = `${$bubble.offsetLeft - i}px`;

      }, 20 * i);
    }
  } else {
    for (let i = 1; i <= BUBBLE_MOVE_AMOUNT; i++) {
      setTimeout(() => {

        let touchFlag = false;

        if ($bubble.offsetLeft + $bubble.offsetWidth > $bubble.offsetParent.offsetWidth - 50) return;

        $monsters.forEach($monster => {
          if (touchesMonster($bubble, $monster)) {
            touchFlag = true;
            $monster.innerHTML = `<div class="inBubble"></div>`;
            $monster.classList.add('getBubbled');
            return;
          }
        });

        if (touchFlag) $bubble.parentElement.removeChild($bubble);

        $bubble.style.left = `${$bubble.offsetLeft + i}px`;

      }, 20 * i);
    }
  }
  removeBubble($bubble);
}

function removeBubble($bubble) {
  setTimeout(() => {
    $bubble.classList.add('getUp');
  }, 600);
  setTimeout(() => {
    $bubble.parentElement.removeChild($bubble);
  }, 3600);
}