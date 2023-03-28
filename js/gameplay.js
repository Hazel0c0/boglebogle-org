import moveCharacter from "./move.js";
import {jumpCharacter, downJumpCharacter} from "./jump.js";
import attack from "./attack.js";

// main 메서드
(() => {
    const $bobby = document.getElementById('bobby');
    
    document.addEventListener('keydown', e => {
        const keyName = e.key;
        if (keyName === 'ArrowRight' || keyName === 'ArrowLeft')
            moveCharacter($bobby, keyName);
        else if (keyName === 'ArrowUp')
            jumpCharacter($bobby);
        else if (keyName === 'ArrowDown')
            downJumpCharacter($bobby);
        else if (keyName === ' ')
            attack($bobby);
    });
})();