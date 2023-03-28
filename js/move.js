export default function moveCharacter({
    style,
    offsetWidth,
    offsetLeft,
    offsetParent
}, direction) {

    const WALL_WIDTH = document.querySelector('.sidewall li').clientWidth;

    const MOVE_AMOUNT = 25;

    switch (direction) {
        case 'ArrowRight':
            style.transform = 'scaleX(-1)';
            for (let i = 0; i < MOVE_AMOUNT; i++) {
                setTimeout(() => {
                    if (offsetLeft + offsetWidth + i > -WALL_WIDTH + offsetParent.offsetWidth)
                        return;
                    else
                        style.left = (offsetLeft + i) + 'px';
                }, 1);
            }
            return;
        case 'ArrowLeft':
            style.transform = 'scaleX(1)';
            for (let i = 0; i < MOVE_AMOUNT; i++) {
                setTimeout(() => {
                    if (offsetLeft - i - WALL_WIDTH < 0)
                        return;
                    else
                        style.left = (offsetLeft - i) + 'px';
                }, 1);
            }
            return;
    }
}