// (() => {
//   const $monster = [...document.querySelectorAll('.monster:nth-child(odd)')];

//   console.log($monster);
//   // console.log($monster2);
//   let moveAmount = 0;

//   setInterval(() => {
//     $monster.style.left = `${$monster.offsetLeft + Math.sin(moveAmount) * 180}px`;

//     moveAmount++;
//   }, 900); //<- 속도조절

//   setTimeout(() => {

//     setInterval(() => {
//       $monster2.style.left = `${$monster2.offsetLeft - Math.sin(moveAmount) * 150}px`;
//     }, 800);
//   }, 500); //지연

//   setInterval(() => {
//     $monster3.style.left = `${$monster3.offsetLeft + Math.sin(moveAmount) * 100}px`;
//   }, 900);
// })();

export default function moveMonster(difficulty) {
  // 모든 몬스터 담은 배열
  const $monsters = [...document.querySelectorAll('.monster')];

  let moveAmount = 0;

  $monsters.forEach($monster => {
    setInterval(() => {
      $monster.style.left = `${$monster.offsetLeft + Math.sin(moveAmount) * 50}px`;
      moveAmount++;
    }, 1000);
  });

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
