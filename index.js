// phew… not a lot going on here. Please add some code!
console.clear();
const bookmarkButtons = document.querySelectorAll(".bookmark");

bookmarkButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("bookmark--active");
  });
});
