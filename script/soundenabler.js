  document.addEventListener("click", () => {
    const audio = document.getElementById("bgAudio");
    audio.play().catch((e) => {
      console.log("Autoplay bloqueado:", e);
    });
  }, { once: true }); // só ativa uma vez
