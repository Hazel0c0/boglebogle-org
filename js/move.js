import isMeetMonster from "./meetMonster.js";

export default function moveCharacter({
  style,
  offsetWidth,
  offsetLeft,
  offsetParent,
}, direction) {
  // 벽 두께
  const WALL_WIDTH = document.querySelector('.sidewall li').clientWidth;

  // 움직이는 정도
  const MOVE_AMOUNT = 25;

  isMeetMonster();

  switch (direction) {
    case 'ArrowRight':
      style.transform = 'scaleX(-1)';
      for (let i = 1; i <= MOVE_AMOUNT; i++) {
        setTimeout(() => {
          if (offsetLeft + offsetWidth + i > -WALL_WIDTH + offsetParent.offsetWidth)
            return;

          style.left = (offsetLeft + i) + 'px';
        }, 1);
      }
      return;
    case 'ArrowLeft':
      style.transform = 'scaleX(1)';
      for (let i = 1; i <= MOVE_AMOUNT; i++) {
        setTimeout(() => {
          if (offsetLeft - i - WALL_WIDTH < 0)
            return;

          style.left = (offsetLeft - i) + 'px';
        }, 1);
      }
      return;
  }

}