//h1 tranistion
const slidingText = function () {
  const title = document.querySelector(".hero h1");

  const txts = document.querySelector(".animate-text").children,
    txtsLen = txts.length;
  let index = 0;

  function animateText() {
    for (let i = 0; i < txtsLen; i++) {
      txts[i].classList.remove("text-in");
    }
    txts[index].classList.add("text-in");
    if (index == txtsLen - 1) {
      index = 0;
    } else {
      index++;
    }

    setTimeout(animateText, 3000);
  }
  window.onload = animateText;
};

slidingText();
