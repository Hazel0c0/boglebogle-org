export default function makeMonsters(difficulty = 1) {

    switch (difficulty) {
        case 3:
            for (let i = 0; i < 4; i++) {
                makeSingleMonster(650 - 140 * i, 800);
            }
        case 2:
            for (let i = 0; i < 4; i++) {
                makeSingleMonster(650 - 140 * i, 600);
            }
        case 1:
            for (let i = 0; i < 4; i++) {
                makeSingleMonster(650 - 140 * i, 400);
            }
            break;
    }
}
