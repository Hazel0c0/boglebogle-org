export default function moveCharacter({style, offsetWidth, offsetLeft, offsetParent}, direction) {

    const WALL_WIDTH = document.querySelector('.sidewall li').clientWidth;

    switch (direction) {
        case 'ArrowRight':
            style.transform = 'scaleX(-1)';
            if (offsetLeft + offsetWidth + 15 > -WALL_WIDTH + offsetParent.offsetWidth)
                style.left = (-WALL_WIDTH + offsetParent.offsetWidth - offsetWidth) + 'px';
            else
                style.left = (offsetLeft + 15) + 'px';
            return;
        case 'ArrowLeft':
            style.transform = 'scaleX(1)';
            if (offsetLeft - 15 - WALL_WIDTH < 0) 
                style.left = WALL_WIDTH + 'px';
            else 
                style.left = (offsetLeft - 15) + 'px';
            return;
    }
}