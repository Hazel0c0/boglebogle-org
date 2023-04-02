export default function makeMonsters(difficulty, monsterImgSrc) {

    switch (difficulty) {
        case 3:
            for (let i = 0; i < 4; i++) {
                makeSingleMonster(650 - 140 * i, 400, monsterImgSrc);
            }
        case 2:
            for (let i = 0; i < 4; i++) {
                makeSingleMonster(650 - 140 * i, 600, monsterImgSrc);
            }
        case 1:
            for (let i = 0; i < 4; i++) {
                makeSingleMonster(650 - 140 * i, 800, monsterImgSrc);
            }
            break;  
    }

}

function makeSingleMonster(top, left, monsterImgSrc) {
    const $playGround = document.querySelector('.content');
    const $monster = document.createElement('div');
    $monster.classList.add('monster');
    $monster.style.position = 'absolute';

    // 몬스터 사진 지정
    if (!!monsterImgSrc) {
        $monster.style.background = `url(${monsterImgSrc}) no-repeat center / cover`;
    }

    // 위치 지정
    $monster.style.left = `${left}px`;
    $monster.style.top = `${top}px`;

    $playGround.appendChild($monster);
    
}