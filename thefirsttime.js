const video = document.getElementById("levelVideo");

video.addEventListener("click", () => {
  video.muted = false;
  video.play();
});
