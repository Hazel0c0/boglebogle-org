function getDifficulty() {
    const difficulty = new URL(window.location.href).searchParams.get('difficulty');

    return difficulty;
}

function getUserId() {
    const userId = new URL(window.location.href).searchParams.get('userId');
    return userId;
}

function getScore() {
    const score = new URL(window.location.href).searchParams.get('score');
    return score;
}

export {getDifficulty, getUserId, getScore};