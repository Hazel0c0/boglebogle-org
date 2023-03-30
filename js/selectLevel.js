import { getUserId } from "./getParameter.js";

(() => {
    document.getElementById('userId').value = getUserId();
})();

const getId = getUserId();
console.log(getId);