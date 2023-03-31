export default function makeMonsters(difficulty) {

    switch (difficulty) {
        case 3:
            for (let i = 0; i < 4; i++) {
                makeSingleMonster(650 - 140 * i, 400);
            }
        case 2:
            for (let i = 0; i < 4; i++) {
                makeSingleMonster(650 - 140 * i, 600);
            }
        case 1:
            for (let i = 0; i < 4; i++) {
                makeSingleMonster(650 - 140 * i, 800);
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