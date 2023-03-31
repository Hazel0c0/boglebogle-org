
import makeMonsters from "./makeMonster.js";

const fileInput = document.getElementById("chooseFile");
//값이 변경될때 호출 되는 이벤트 리스너
fileInput.addEventListener('change', function (e) {
  console.log(e.target.files)

  let file = e.target.files[0]; //선택된 파일
  const reader = new FileReader();
  reader.readAsDataURL(file); //파일을 읽는 메서드

  newMon(reader.result);

  // 받은 파일은 변수에 담아주고 난이도 선택후 넘겨주기

  /*
  reader.onload = function () {
    let $monster = [...document.querySelectorAll('.monster')];
    console.log($monster);
    for (let i = 0; i < $monster.length; i++) {
    console.log($monster[i]);
    }
    // photoFrame[0].style.background = `url(${reader.result}) no-repeat center / 100px 100px`;
    // photoFrame.className = "photoFrame";
    // document.getElementById("pictures").appendChild(photoFrame);
  }
  */
})


