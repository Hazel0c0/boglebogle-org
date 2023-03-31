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

$(document).ready(function(){
    $("#start").click(function(){
        if($("#nickName").val().length==0){alert("닉네임을 입력하세요"); $("#nickName").focus();return false;}
    });
});

