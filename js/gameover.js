import { getScore, getUserId } from "./getParameter.js";

(() => {
    document.querySelector('#userId span').textContent = getScore();

    document.getElementById('restart').onclick = e => {
        window.location.href = `../selectLevel.html?userId=${getUserId()}`;
    };
})();