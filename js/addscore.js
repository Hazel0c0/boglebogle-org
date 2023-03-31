export default function addScore() {
  const $myscore = document.querySelector('.score span');
  $myscore.innerText = +$myscore.innerText + 100;
}