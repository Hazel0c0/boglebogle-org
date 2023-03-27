
function moveCharacter({style, offsetWidth, offsetLeft, offsetParent}, direction) {
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

function jumpCharacter({classList, style}) {
    /* 현재 점프중이면 리턴 */
    if (classList.contains('jumpright') || classList.contains('jumpleft'))
        return;

    /* 점프 */
    if (style.transform === 'scaleX(1)')
        classList.add('jumpright');
    else 
        classList.add('jumpleft');

    /* 착지 */
    setTimeout(() => {
        classList.remove('jumpright', 'jumpleft');
    }, 1000);
}

// main 메서드
(() => {
    const $bobby = document.getElementById('bobby');
    
    document.addEventListener('keydown', e => {
        const keyName = e.key;
        if (keyName === 'ArrowRight' || keyName === 'ArrowLeft')
            moveCharacter($bobby, keyName);
        else if (keyName === 'ArrowUp')
            jumpCharacter($bobby);
    });
})();