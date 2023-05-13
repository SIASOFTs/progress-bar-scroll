const body = document.body;
const progressBar = document.querySelector(".bar");
function updateProgressBar() {
  let positionOfScroll =
    (window.scrollY / (body.scrollHeight - window.innerHeight)) * 100;
  progressBar.style.width = `${positionOfScroll}%`;
  requestAnimationFrame(updateProgressBar);
}
updateProgressBar();
