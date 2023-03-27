import moveCharacter from "./move.js";
import jumpCharacter from "./jump.js";

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