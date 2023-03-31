import { getUserId } from "./getParameter.js";
import addMonsterImage from "./file.js";

(() => {
    const userId = getUserId();

    document.getElementById('userIdShow').textContent = userId;
    document.getElementById('userId').value = userId;

    addMonsterImage();
})();