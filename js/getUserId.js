import {getUserId}  from "./getParameter.js";

const getId = getUserId();
// console.log(getId);

const addId = document.getElementById('userId');
addId.textContent = getId;