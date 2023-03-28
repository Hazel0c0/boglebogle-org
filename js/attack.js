export default function attack({
  offsetTop,
  offsetLeft,
  style
}) {
  makeBubble(offsetTop, offsetLeft, style);
}

// 적을 감지하는 함수들


// 방울 만드는 함수들
function makeBubble(offsetTop, offsetLeft, style) {
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

  if (isLeft()) {
    for (let i = 0; i < BUBBLE_MOVE_AMOUNT; i++) {
      setTimeout(() => {
        if ($bubble.offsetLeft < 50) {
          return;
        }
        $bubble.style.left = `${$bubble.offsetLeft - i}px`;
      }, 20 * i);
    }
  } else {
    for (let i = 0; i < BUBBLE_MOVE_AMOUNT; i++) {
      setTimeout(() => {
        if ($bubble.offsetLeft + $bubble.offsetWidth > $bubble.offsetParent.offsetWidth - 50) {
          return;
        }
        $bubble.style.left = `${$bubble.offsetLeft + i}px`;
      }, 20 * i);
    }
  }
  removeBubble($bubble);
}

function removeBubble($bubble) {
  setTimeout(() => {
    $bubble.parentElement.removeChild($bubble);
  }, 700);
}