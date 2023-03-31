import moveCharacter from "./move.js";
import {

    jumpCharacter,
    downJumpCharacter
} from "./jump.js";
import attack from "./attack.js";
import {
    getDifficulty,
} from "./getParameter.js";
import makeMonsters from "./makeMonster.js";
import moveMonster from "./monsterMove.js";

// main 메서드
(() => {

    let difficulty;

    switch (getDifficulty()) {
        case "상":
            difficulty = 3;
            break;
        case "하":
            difficulty = 1;
            break;
        default:
            difficulty = 2;
    }

    makeMonsters(difficulty);

    moveMonster(difficulty);

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


    setInterval(() => {
        const $monsters = document.querySelectorAll('.monster');

        if (!$monsters.length)
            makeMonsters(difficulty);
    }, 160);
})();