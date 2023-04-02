import { getScore, getUserId } from "./getParameter.js";

(() => {
    document.querySelector('#userId span').textContent = getScore();

    document.getElementById('restart').onclick = e => {
        window.location.href = `../html/gameplay.html?userId=${getUserId()}`;
    };
    
    document.querySelector('#gameOverId').textContent = getUserId();
    document.querySelector('#gameOverScore').textContent = getScore();
})();