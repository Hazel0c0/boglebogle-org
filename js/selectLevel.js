import { getUserId } from "./getParameter.js";

(() => {
    const userId = getUserId();

    document.getElementById('userIdShow').textContent = userId;
    document.getElementById('userId').value = userId;
})();

// console.log(getUserId());