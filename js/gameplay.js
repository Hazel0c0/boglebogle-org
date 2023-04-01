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

    const $bobby = document.querySelector('.bobby');

    const $char = [...document.querySelectorAll('.char')];
console.log($bobby);
// 로컬스토리지
    localStorage.setItem("Bo3", $bobby);
    const bo = localStorage.getItem("Bo3");
    console.log(bo);

    $char[1].onclick = (e) => {
        $bobby.style.backgroundImage = 'url(../img//icon/bubby01.png)';
    }
    // sessionStorage.setItem('bobby2'
    // , $bobby.style.backgroundImage= 'url(../img//icon/bubby01.png)');

    // var Bo2 = sessionStorage.getItem('bobby2');
    // console.log('세션2 : ' + Bo2);

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