// (()=>{

const $char = [...document.querySelectorAll('.char')];
const $bobby = document.querySelector('.bobby');

$char[1].onclick = () => {
  console.log($char);
  console.log($char[1]);
  console.log('bo : '+$bobby);
  // $bobby.style.backgroundImage = 'url(../img/icon/bubby06.png)';
  // $bobby.style.backgroundImage= 'url(../img//icon/bubby01.png)';
}
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