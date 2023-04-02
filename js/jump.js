function canGoUp(offsetTop) {
    return [650, 510, 420, 370].indexOf(offsetTop) !== -1;
}

function jumpCharacter({style, offsetTop}) {
    /* 땅 위가 아니면 리턴 */
    if (!canGoUp(offsetTop)) return;

    const character = window.localStorage.getItem('character');

    switch (character) {
        case 'url("../img/icon/bubby06.png")':
            style.backgroundImage = 'url(../img/icon/bubby02.png)';
            break;
        case 'url("../img/icon/Kirby-Transparent-Background.png")':
            style.backgroundImage = 'url(****************여기에 점프하고 있는 커비 사진 경로 넣어주세요****************)';
            break;
        default:
            style.backgroundImage = 'url(../img/icon/bobby02.png)';
    }

    style.top = (offsetTop - 140) + 'px';

    jumpEnd(style);
}

function canGoDown(offsetTop) {
    return [510, 420, 370, 230].indexOf(offsetTop) !== -1;
}

function downJumpCharacter({style, offsetTop}) {
    if (!canGoDown(offsetTop)) return;

    const character = window.localStorage.getItem('character');

    switch (character) {
        case 'url("../img/icon/bubby06.png")':
            style.backgroundImage = 'url(../img/icon/bubby02.png)';
            break;
        case 'url("../img/icon/Kirby-Transparent-Background.png")':
            style.backgroundImage = 'url(****************여기에 점프하고 있는 커비 사진 경로 넣어주세요****************)';
            break;
        default:
            style.backgroundImage = 'url(../img/icon/bobby02.png)';
    }

    style.top = (offsetTop + 140) + 'px';

    jumpEnd(style);
}

function jumpEnd(style) {
    setTimeout(() => {

        const character = window.localStorage.getItem('character');

        switch (character) {
            case 'url("../img/icon/bubby06.png")':
                style.backgroundImage = 'url(../img/icon/bubby01.png)';
                break;
            case 'url("../img/icon/Kirby-Transparent-Background.png")':
                style.backgroundImage = 'url(****************여기에 오른쪽 보고있는 커비 사진 경로 넣어주세요****************)';
                break;
            default:
                style.backgroundImage = 'url(../img/icon/bobby01.png)';
        }
    }, 500);
}

export {jumpCharacter, downJumpCharacter};