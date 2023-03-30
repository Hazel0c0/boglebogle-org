import { getUserId } from "./getParameter.js";

(() => {
    document.getElementById('userId').value = getUserId();
})();