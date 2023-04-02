import selectCharacter from "./selectCharacter.js";

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


    // 캐릭터 선택
    selectCharacter();


// const $char = [...document.querySelectorAll('.char')];
// const $bobby = document.querySelector('.bobby');

// sessionStorage.setItem('bobby', $bobby)

// var Bo = sessionStorage.getItem('bobby');
// var Bo2 = sessionStorage.getItem('bobby2');
// console.log('세션 : ' + Bo);
// console.log('세션2 : ' + Bo2);

// let Bo3 = localStorage.getItem("Bo3");
// console.log('세션3 : ' + Bo3);

// $char[1].onclick = (e) => {
//   console.log($char);
//   console.log($char[1]);
//   console.log('bo : '+Bo3);

//   // $bobby.style.backgroundImage = 'url(../img/icon/bubby06.png)';
//   Bo3.style.backgroundImage= 'url(../img//icon/bubby01.png)';
// }

// 에러발생?
// $(document).ready(function(){
//     $("#start").click(function(){
//         if($("#nickName").val().length==0){alert("닉네임을 입력하세요"); $("#nickName").focus();return false;}
//     });
// });


})();

