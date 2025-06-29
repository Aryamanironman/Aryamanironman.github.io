const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");
const thankYouMessage = document.querySelector(".thank-you");
const dateRequest = document.querySelector(".date-request");

const texts = [
  "Are you sure?",
  "I could give my soul to spend few hours with you",
  "Please?",
  "Just think about it!",
  "uhmmmmm hmmmmm",
  "It'll be fun!",
  "Just one date!",
  "Please say yes!",
  "Come on, please!",
  "I lOVE kpop!!",
  "love the determination!!"
];

let currentTextIndex = 0;
const usedPositions = [];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isOverlapping(newElement, existingElements) {
  const newRect = newElement.getBoundingClientRect();

  for (const element of existingElements) {
    const rect = element.getBoundingClientRect();
    if (
      newRect.left < rect.right &&
      newRect.right > rect.left &&
      newRect.top < rect.bottom &&
      newRect.bottom > rect.top
    ) {
      return true;
    }
  }
  return false;
}

function displayText() {
  const textElement = document.createElement("div");
  textElement.className = "floating-text";
  textElement.textContent = `"${texts[currentTextIndex]}"`;
  document.body.appendChild(textElement);

  currentTextIndex = (currentTextIndex + 1) % texts.length;

  const textHeight = textElement.getBoundingClientRect().height;
  const textWidth = textElement.getBoundingClientRect().width;
  const bodyHeight = document.body.getBoundingClientRect().height;
  const bodyWidth = document.body.getBoundingClientRect().width;

  let newTop, newLeft;

  do {
    newTop = getRandomNumber(0, bodyHeight - textHeight);
    newLeft = getRandomNumber(0, bodyWidth - textWidth);
    textElement.style.top = newTop + "px";
    textElement.style.left = newLeft + "px";
  } while (isOverlapping(textElement, usedPositions));

  usedPositions.push(textElement);

  setTimeout(() => {
    textElement.classList.add("visible");
  }, 10);
}

btnNo.addEventListener("mouseover", (event) => {
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

  displayText();
});

btnYes.addEventListener("click", (e) => {
  imageOne.classList.add("fall");
  btnNo.classList.add("fall");
  btnYes.classList.add("fall");
  dateRequest.classList.add("fall");

  document.querySelectorAll('.floating-text').forEach((text) => {
    text.classList.add("fall");
  });

  setTimeout(() => {
    container.classList.add("hide");
    dateRequest.classList.add("hide");
    document.querySelectorAll('.floating-text').forEach((text) => {
      text.classList.add("hide");
    });
    thankYouMessage.classList.remove("hide");
  }, 5000);

  imageTwo.classList.remove("hide");
});
