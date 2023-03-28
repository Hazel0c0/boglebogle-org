function canGoUp(offsetTop) {
    return [650, 510, 420, 370].indexOf(offsetTop) !== -1;
}

function jumpCharacter({style, offsetTop}) {
    /* 땅 위가 아니면 리턴 */
    if (!canGoUp(offsetTop)) return;

    style.backgroundImage = 'url(../img/icon/bobby02.png)';
    style.top = (offsetTop - 140) + 'px';

    jumpEnd(style);
}

function canGoDown(offsetTop) {
    return [510, 420, 370, 230].indexOf(offsetTop) !== -1;
}

function downJumpCharacter({style, offsetTop}) {
    if (!canGoDown(offsetTop)) return;

    style.backgroundImage = 'url(../img/icon/bobby02.png)';
    style.top = (offsetTop + 140) + 'px';

    jumpEnd(style);
}

function jumpEnd(style) {
    setTimeout(() => style.backgroundImage = 'url(../img/icon/bobby01.png)', 500);
}

export {jumpCharacter, downJumpCharacter};