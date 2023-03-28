function canGoUp(offsetTop) {
    return [650, 510, 420, 370].indexOf(offsetTop) !== -1;
}

function jumpCharacter({style, offsetTop}) {
    /* 땅 위가 아니면 리턴 */
    if (!canGoUp(offsetTop)) return;

    style.top = (offsetTop - 140) + 'px';
}

function canGoDown(offsetTop) {
    return [510, 420, 370, 230].indexOf(offsetTop) !== -1;
}

function downJumpCharacter({style, offsetTop}) {
    if (!canGoDown(offsetTop)) return;

    style.top = (offsetTop + 140) + 'px';
}

export {jumpCharacter, downJumpCharacter};