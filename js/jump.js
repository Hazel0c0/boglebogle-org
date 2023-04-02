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
        case 'url("../img/icon/Kirby_right.png")':
            style.backgroundImage = 'url(../img/icon/Kirby_jump.png)';
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
        case 'url("../img/icon/Kirby_right.png")':
            style.backgroundImage = 'url(../img/icon/Kirby_left.png)';
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
            case 'url("../img/icon/Kirby_right.png")':
                style.backgroundImage = 'url(../img/icon/Kirby_right.png)';
                break;
            default:
                style.backgroundImage = 'url(../img/icon/bobby01.png)';
        }
    }, 500);
}

export {jumpCharacter, downJumpCharacter};