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

// main 메서드
(() => {
  makeMonsters(getDifficulty());

  moveMonster(getDifficulty());

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
            window.location.href = `../gameover.html?userId=${getUserId()}`;
    });


    setInterval(() => {
        const $monsters = document.querySelectorAll('.monster:not(.getBubbled)');

        if (!$monsters.length)
            makeMonsters(getDifficulty());
    }, 160);
})();