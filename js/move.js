export default function moveCharacter({style, offsetWidth, offsetLeft, offsetParent}, direction) {
    switch (direction) {
        case 'ArrowRight':
            style.transform = 'scaleX(-1)';
            if (offsetLeft + offsetWidth + 15 > 0 + offsetParent.offsetWidth)
                style.left = (0 + offsetParent.offsetWidth - offsetWidth) + 'px';
            else
                style.left = (offsetLeft + 15) + 'px';
            return;
        case 'ArrowLeft':
            style.transform = 'scaleX(1)';
            if (offsetLeft - 15 < 0) 
                style.left = 0;
            else 
                style.left = (offsetLeft - 15) + 'px';
            return;
    }
}