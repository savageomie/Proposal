const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Make the No button move when hovered
noBtn.addEventListener("mouseover", () => {
  const rect = questionContainer.getBoundingClientRect();
  const maxX = Math.max(20, rect.width - 80);
  const maxY = Math.max(20, rect.height - 40);

  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  noBtn.style.position = 'absolute';
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// Yes: show loader then go to the valentine page in this folder
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
    heartLoader.style.display = "none";
    window.location.href = "valentine.html";
  }, 1800);
});
