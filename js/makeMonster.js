// 기본 난이도 1
export default function makeMonsters(difficulty = 1) {

    switch (difficulty) {
        case "상":
            for (let i = 0; i < 4; i++) {
                makeSingleMonster(650 - 140 * i, 800);
            }
        case "중":
            for (let i = 0; i < 4; i++) {
                makeSingleMonster(650 - 140 * i, 600);
            }
        case "하":
            for (let i = 0; i < 4; i++) {
                makeSingleMonster(650 - 140 * i, 400);
            }
            break;
    }
}

function makeSingleMonster(top, left) {
    const $playGround = document.querySelector('.content');
    const $monster = document.createElement('div');
    $monster.classList.add('monster');
    $monster.style.position = 'absolute';

    // 위치 지정
    $monster.style.left = `${left}px`;
    $monster.style.top = `${top}px`;

    $playGround.appendChild($monster);
}