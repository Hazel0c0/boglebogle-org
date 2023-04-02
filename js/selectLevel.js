import {
    getUserId
} from "./getParameter.js";

import gamestart from "./gamestart.js";

export default function selectLevel() {
    const userId = getUserId();

    document.getElementById('userIdShow').textContent = userId;
    document.getElementById('userId').value = userId;

    const levelBtns = [...document.querySelectorAll('.level')];

    for (let i = 0; i < 3; i++) {
        levelBtns[i].onclick = e => {
            document.querySelector('.wrap').style.display = 'block';
            document.querySelector('.selectLevel').style.display = 'none';
            gamestart(3 - i);
        }
    }
}