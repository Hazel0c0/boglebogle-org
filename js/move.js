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

  // kill

  // y축 값 넣기
  //사라지게하기 
  // 높이 줄이기
    const $monsters = [...document.querySelectorAll('.monster')];
    const $bobby = document.getElementById('bobby');

       console.log($monsters[0]);
    
    for (let i = 0; i < $monsters.length; i++) {
       console.log("보비 위치 "+$bobby.offsetLeft);
       if($bobby.offsetLeft>=$monsters[i].offsetLeft ){
            console.log("몬 위치" + $monsters[i].offsetLeft);
            console.log("몬" + $monsters[i]);
            $monsters[i].classList.add('die');
        };
      }


    //   if($bobby.offsetLeft>=$monsters[0].offsetLeft){
    //     console.log("몬 위치" + $monsters[0].offsetLeft);
    //     console.log("몬" + $monsters[0]);
    //     $monsters[0].classList.add('die');
    // };
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