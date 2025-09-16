const image = document.getElementById("escapeImage");
const video = document.getElementById("Cutscene");

let keySequence = [];
const requiredSequence = ["d", "a", "e", "m", "o", "n", "i", "u", "m", "e", "g", "o", "v", "o", "c", "a", "v", "i", "t", "e", "Enter"];

window.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();

  if (keySequence.length < 20 && ["d", "a", "e", "m", "o", "n", "i", "u", "m", "e", "g", "o", "v", "o", "c", "a", "v", "i", "t", "e"].includes(key)) {
    keySequence.push(key);
  } else if (key === "enter") {
    if (keySequence.join("") === "run") {
      playVideo("lvl/51/escape/th3wayisshut.mp4",);
    }
  }
});

function playVideo(src, onEndCallback) {
  image.style.display = "none";
  video.style.display = "block";
  video.src = src;
  video.play();
  video.onended = onEndCallback;
}

function askPassword() {
  const userInput = prompt("The ways is shut.");
  if (userInput === "vectrusis") {
    playVideo("lvl/51/escape/flyy0uf00ls.mp4", () => {
      // Em vez de trocar de HTML, só exibe uma imagem, texto ou esconde tudo
      video.style.display = "none";
      image.style.display = "none";
      
       window.location.href = "al3apoffaith.html";
      
    });
  } else {
    playVideo("lvl/51/escape/y0ushalln0tpass.mp4", () => {
  // Recarrega a página para resetar tudo
  location.reload();
});

  }
}
