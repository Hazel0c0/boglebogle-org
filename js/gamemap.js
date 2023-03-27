

// main 메서드
(() => {
    document.addEventListener('keydown' ,e => {
        const keyName = e.key;
        const $bobby = document.getElementById('bobby');
        switch (keyName) {
            case 'ArrowRight':
                $bobby.style.transform = 'scaleX(-1)';
                $bobby.style.left = ($bobby.offsetLeft + 10) + 'px';
                return;
            case 'ArrowLeft':
                $bobby.style.transform = 'scaleX(1)';
                $bobby.style.left = ($bobby.offsetLeft - 10) + 'px';
                return;
        }
    });
})();