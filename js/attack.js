export default function attack({offsetTop, offsetLeft, style}) {
    makeBubble(offsetTop, offsetLeft, style);
}

function makeBubble(offsetTop, offsetLeft, style) {
    const $playGround = document.querySelector('.content');

    const $bubble = document.createElement('div');
    $bubble.classList.add('bubble');
    $bubble.style.position = 'absolute';
    $bubble.style.top = offsetTop + 'px';

    const isRight = () => style.transform === 'scaleX(1)';

    if (isRight())
        $bubble.style.left = (offsetLeft - 50) + 'px';
    else
        $bubble.style.left = (offsetLeft + 50) + 'px';
    
    $playGround.appendChild($bubble);

    moveBubble($bubble, isRight);
}

function moveBubble($bubble, isRight) {
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      $bubble.style.left = `${$bubble.offsetLeft + i}px`;
    }, 10 * i);
  }
}

// (() => {

//   document.addEventListener('keyup', e => {
//     const $waterballoon = document.querySelector('.waterballoon');
//     // if (e.key !== 'b') return;

//     if (e.key === 'b') {

//       $waterballoon.style.zIndex = '999';

//       for (let i = 20; i < 850; i++) {
//         setTimeout(() => {
//           console.log(`i: ${i}`)
//           $waterballoon.style.left = `${i}px`
//         },  0.7*i);
//       }
//     }
//   })
// })();