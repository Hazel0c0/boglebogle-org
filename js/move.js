export default function moveCharacter({
  style,
  offsetWidth,
  offsetLeft,
  offsetParent
}, direction) {
  // 벽 두께
  const WALL_WIDTH = document.querySelector('.sidewall li').clientWidth;


  // 움직이는 정도
  const MOVE_AMOUNT = 25;

  // 지원
 
  const $monster = document.querySelector('.monster');
  // console.log('무브에서 동작중');
  


  // if ($monster.style.left==='500px'){ 
  //   setTimeout(() => { 
  //     $monster.style.left = `${$monster.offsetLeft - 10}px`;
  //     console.log('-');
  //   }, 10);
  // }

    // 움직이는 정도
    
    // // 몬스터 죽이기
    // const $bobby = document.getElementById('bobby');
    // const $monster = document.querySelector('.monsters');

    // console.log($monster);

    // $monster.classList.add('monsterMove');


    // // 몬스터 죽이기
    // if($bobby.offsetLeft>=$monster.offsetLeft){
    //     console.log('meet');
    //     // $monster.style.zIndex='-100';
    //     // $mst.style.removechild
    //   };


    // // end kill


  // end kill



  switch (direction) {
    case 'ArrowRight':
      style.transform = 'scaleX(-1)';
      for (let i = 1; i <= MOVE_AMOUNT; i++) {
        setTimeout(() => {
          if (offsetLeft + offsetWidth + i > -WALL_WIDTH + offsetParent.offsetWidth)
            return;
          style.left = (offsetLeft + i) + 'px';
        }, 1);
      }
      return;
    case 'ArrowLeft':
      style.transform = 'scaleX(1)';
      for (let i = 1; i <= MOVE_AMOUNT; i++) {
        setTimeout(() => {
          if (offsetLeft - i - WALL_WIDTH < 0)
            return;
          style.left = (offsetLeft - i) + 'px';
        }, 1);
      }
      return;
  }

}