import selectLevel from "./selectLevel.js";

// main 메서드
(() => {
    console.log(window.localStorage.getItem('character'));
    
    selectLevel();
})();