// (()=>{

// const $char = [...document.querySelectorAll('.char')];


// $char[1].onclick = (e) => {

  
//   console.log($char);
//   console.log($char[1]);
//   console.log('bo : '+$bobby);

  // $bobby.style.backgroundImage = 'url(../img/icon/bubby06.png)';
  // $bobby.style.backgroundImage= 'url(../img//icon/bubby01.png)';
// }
// });
// let selec;
// for (let char of $char) {
//   char.onclick = () => {
//     selec=char.style.background;
//   }

//   console.log(char);
//   console.log(char.style.background);
// }
// $bobby.style.background=selec;
export default function selectCharacter() {
  const $characters = [...document.querySelectorAll('.char')];
  const $showCharacterZone = document.querySelector('.showSelectedChar');

  $characters.forEach($char => {
    $char.onclick = e => {
      const characterUrl = $char.style.backgroundImage
      $showCharacterZone.style.backgroundImage = characterUrl;
      window.localStorage.setItem('character', characterUrl);
    }
  })
}