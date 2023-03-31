(() => {
  document.querySelector(".here").addEventListener('click', () => {
    let selectFile = document.querySelector("#chooseFile").files[0];
    console.log(selectFile);
    const file = URL.createObjectURL(selectFile);
    document.querySelector(".monsters").style.background = `url(${file}) `;
    console.log("성공");
  })
});