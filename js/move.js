export default function moveCharacter({style, offsetWidth, offsetLeft, offsetParent}, direction) {

    const WALL_WIDTH = document.querySelector('.sidewall li').clientWidth;


    // 지원 몬스터 kill

    const $bobby = document.getElementById('bobby');
    const $monster = document.querySelector('.area');

    console.log($monster);

    $monster.classList.add('monsterMove');

    // 몬스터 죽이기
    if($bobby.offsetLeft>=$monster.offsetLeft){
        console.log('meet');
        
        // $monster.style.zIndex='-100';
  
        // $mst.style.removechild
      };

    

    // end kill
    



    switch (direction) {
        case 'ArrowRight':
            style.transform = 'scaleX(-1)';
            if (offsetLeft + offsetWidth + 15 > -WALL_WIDTH + offsetParent.offsetWidth)
                style.left = (-WALL_WIDTH + offsetParent.offsetWidth - offsetWidth) + 'px';
            else
                style.left = (offsetLeft + 15) + 'px';
            return;
        case 'ArrowLeft':
            style.transform = 'scaleX(1)';
            if (offsetLeft - 15 - WALL_WIDTH < 0) 
                style.left = WALL_WIDTH + 'px';
            else 
                style.left = (offsetLeft - 15) + 'px';
            return;
    }
}