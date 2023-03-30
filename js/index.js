(() => {
    const $start = document.querySelector('.start');

    $start.onmouseover = e => {
        $start.classList.add('hovered');
    };

    const removeHover = e => {
        $start.classList.remove('hovered');
    };

    $start.onmousedown = removeHover;
    $start.onmouseout = removeHover;
})();



