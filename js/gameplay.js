import moveCharacter from "./move.js";
import {

    jumpCharacter,
    downJumpCharacter
} from "./jump.js";
import attack from "./attack.js";
import {
    getDifficulty,
    getUserId
} from "./getParameter.js";
import makeMonsters from "./makeMonster.js";
import addScore from "./addscore.js";
import moveMonster from "./monsterMove.js";
import meetMonster from "./meetMonster.js";

// main 메서드
(() => {

    let difficulty;

    switch (getDifficulty()) {
        case "상": difficulty = 3; break;
        case "하": difficulty = 1; break;
        default: difficulty = 2;
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

        else if (keyName === '0')
            addScore();

        else if (keyName === 'z')
            window.location.href = `../html/gameover.html?userId=${getUserId()}&score=${document.getElementById('score').textContent}`;
    });


    setInterval(() => {
        const $monsters = document.querySelectorAll('.monster:not(.getBubbled)');

        if (!$monsters.length)
            makeMonsters(difficulty);
    }, 160);
})();