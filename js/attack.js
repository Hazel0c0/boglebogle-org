(() => {

  document.addEventListener('keyup', e => {
    const $waterballoon = document.querySelector('.waterballoon');
    // if (e.key !== 'b') return;

    if (e.key === 'b') {

      $waterballoon.style.zIndex = '999';

      for (let i = 20; i < 850; i++) {
        setTimeout(() => {
          console.log(`i: ${i}`)
          $waterballoon.style.left = `${i}px`
        }, 0.5 * i);
      }
    }
  })
})();