export default function attack({
  offsetTop,
  offsetLeft,
  style
}) {
  makeBubble(offsetTop, offsetLeft, style);
}

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
  if (isLeft()) {
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        if ($bubble.offsetLeft < 50) return;
        $bubble.style.left = `${$bubble.offsetLeft - i}px`;
      }, 20 * i);
    }
  } else {
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        if ($bubble.offsetLeft + $bubble.offsetWidth > $bubble.offsetParent.offsetWidth - 50) return;
        $bubble.style.left = `${$bubble.offsetLeft + i}px`;
      }, 20 * i);
    }
  }
}