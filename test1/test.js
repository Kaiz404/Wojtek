const container = document.querySelector(".container");
const readMoreButton = document.querySelector(".read-more-button");
const hiddenContent = document.querySelector(".hidden");

readMoreButton.addEventListener("click", () => {
  console.log("clicked");
  hiddenContent.classList.toggle("hidden");
  readMoreButton.classList.toggle("expanded");
});