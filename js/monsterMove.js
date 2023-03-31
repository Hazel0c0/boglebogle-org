export default function moveMonster(difficulty) {
  // 모든 몬스터 담은 배열

  let moveTime = 0;

  setInterval(() => {
    const $monsters = [...document.querySelectorAll('.monster:not(.getBubbled)')];

    $monsters.forEach($monster => {
      const moveAmount = Math.floor(Math.random() * 31 + 20);
      $monster.style.left = `${$monster.offsetLeft + Math.sin(moveTime) * moveAmount * difficulty}px`;
    });
    moveTime++;
  }, 1000);

  // const $monster = [...document.querySelectorAll('.monster:nth-child(odd)')];

  // console.log($monster);
  // // console.log($monster2);
  // let moveAmount = 0;

  // setInterval(() => {
  //   $monster[0].style.left = `${$monster[0].offsetLeft + Math.sin(moveAmount) * 180}px`;

  //   moveAmount++;
  // }, 900); //<- 속도조절

  // setTimeout(() => {

  //   setInterval(() => {
  //     $monster[1].style.left = `${$monster[1].offsetLeft - Math.sin(moveAmount) * 150}px`;
  //   }, 800);
  // }, 500); //지연

  // setInterval(() => {
  //   $monster[2].style.left = `${$monster[2].offsetLeft + Math.sin(moveAmount) * 100}px`;
  // }, 900);
}