// (()=>{
//   const $monster = document.querySelector('.monster');

  
//   for(let i=0; i<10; i++ ){
//     setTimeout(() => { 
//       $monster.style.transform= `translate(${10*i}px)`;
//       console.log($monster.style.left); 
//       console.log('+');
//     }, 500);
//   }
// });



(() => {

  const $monster = document.querySelector('.monster');

  for (let i = 1; i <= 5; i++) {
    setInterval(() => {

      $monster.style.left = `${$monster.offsetLeft + i}px`;

    }, 2000);

    // clearInterval();
  }
})();



/*
    setTimeout(function() {
      console.log('Works!');
    }, 1000);


    // if ($monster.style.left === `475px`) {
    //   console.log('if');
    for (let i = 1; i <= 5; i++) {
      setTimeout(() => {

        // if ($bubble.offsetLeft + $bubble.offsetWidth 
        //       > $bubble.offsetParent.offsetWidth - 50) return;


        $monster.style.left = `${$monster.offsetLeft - i}px`;

      }, 20 * i);
    }
    // }
*/