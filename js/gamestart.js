import moveCharacter from "./move.js";
import {

    jumpCharacter,
    downJumpCharacter
} from "./jump.js";
import attack from "./attack.js";
import makeMonsters from "./makeMonster.js";
import moveMonster from "./monsterMove.js";

export default function gamestart(difficulty, monsterImgSrc) {

    makeMonsters(difficulty, monsterImgSrc);

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

        // 방울의 갯수 제한
        else if (keyName === ' ' && document.querySelectorAll('.bubble').length < 4 - difficulty) {
            attack($bobby);
        }
    });


    setInterval(() => {
        const $monsters = document.querySelectorAll('.monster');

        if (!$monsters.length)
            makeMonsters(difficulty);
    }, 160);
}