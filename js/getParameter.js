function getDifficulty() {
    const difficulty = new URL(window.location.href).searchParams.get('difficulty');
    return difficulty ? difficulty : 1;
}

function getUserId() {
    const userId = new URL(window.location.href).searchParams.get('userId');
    return userId;
}

export {getDifficulty, getUserId};