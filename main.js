const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const imageThree = document.querySelector(".image-3");
const imageFour = document.querySelector(".image-4");
const imageFive = document.querySelector(".image-5");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");
const texto = document.querySelector(".Text");
var press = "0"
function getRandomNumber(min, max) {
  // Calculate the random number between min and max (inclusive)
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}
btnNo.addEventListener("click", (eqewe) => {
  if (press == 0) {
    press = 1
    document.getElementById("Text").innerHTML = "Are You Sure?"
    imageOne.classList.add("hide");
    imageTwo.classList.remove("hide");
    imageThree.classList.add("hide");
    imageFour.classList.add("hide");
    imageFive.classList.add("hide");
  }else if (press == 1) {
    press = 2
    document.getElementById("Text").innerHTML = "Are You Sure You Sure? :("
    imageOne.classList.add("hide");
    imageTwo.classList.add("hide");
    imageThree.classList.remove("hide");
    imageFour.classList.add("hide");
    imageFive.classList.add("hide");
  }else if (press == 2) {
    press = 3
    document.getElementById("Text").innerHTML = "Maybe Should Think About it Some More... ;-;"
    imageOne.classList.add("hide");
    imageTwo.classList.add("hide");
    imageThree.classList.add("hide");
    imageFour.classList.remove("hide");
    imageFive.classList.add("hide");

    
    const containerHeight = container.getBoundingClientRect().height;
    const containerWidth = container.getBoundingClientRect().width;
    const btnHeight = btnNo.getBoundingClientRect().height;
    const btnWidth = btnNo.getBoundingClientRect().width;
    const btnTop = btnNo.getBoundingClientRect().top;
    const btnLeft = btnNo.getBoundingClientRect().left;
  
    let newTop = btnTop;
    let newLeft = btnLeft;
    while (Math.abs(newTop - btnTop) < containerHeight / 3) {
      newTop = getRandomNumber(0, containerHeight - btnHeight);
    }
  
    while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
      newLeft = getRandomNumber(0, containerWidth - btnWidth);
    }
  
    btnNo.style.top = Math.floor(newTop) + "px";
    btnNo.style.left = Math.floor(newLeft) + "px";
  }
})
btnNo.addEventListener("mouseover", (event) => {
  if (press >= 3) {
    const containerHeight = container.getBoundingClientRect().height;
    const containerWidth = container.getBoundingClientRect().width;
    const btnHeight = btnNo.getBoundingClientRect().height;
    const btnWidth = btnNo.getBoundingClientRect().width;
    const btnTop = btnNo.getBoundingClientRect().top;
    const btnLeft = btnNo.getBoundingClientRect().left;
  
    let newTop = btnTop;
    let newLeft = btnLeft;
    while (Math.abs(newTop - btnTop) < containerHeight / 3) {
      newTop = getRandomNumber(0, containerHeight - btnHeight);
    }
  
    while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
      newLeft = getRandomNumber(0, containerWidth - btnWidth);
    }
  
    btnNo.style.top = Math.floor(newTop) + "px";
    btnNo.style.left = Math.floor(newLeft) + "px";
  }
});



btnYes.addEventListener("click", (e) => {
  document.getElementById("Text").innerHTML = "AYEEEEE Be Ready By 11am On The 28th ✨"
  btnYes.classList.add("hide");
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.add("hide");
  imageThree.classList.add("hide");
  imageFour.classList.add("hide");
  imageFive.classList.remove("hide");
});
