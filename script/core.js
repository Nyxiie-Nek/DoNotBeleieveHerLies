function getHint() {
  const iframe = document.getElementById('a');
  try {
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    const hintElement = iframeDocument.querySelector('.hint');
    const hintText = hintElement ? hintElement.innerText : "-no hint available-";
    alert(hintText);
  } catch (e) {
    console.error("Erro ao acessar o conteúdo do iframe:", e);
    alert("Não foi possível acessar a dica.");
  }
}

function initializeIframe() {
  const iframe = document.getElementById('a');

  // Garante que só carrega uma vez
  if (!sessionStorage.getItem("loaded")) {
    iframe.src = "thefirsttime.html"; // sem hífen
    sessionStorage.setItem("loaded", "true");
  }
}

function submitForm(event) {
  event.preventDefault();

  const input = document.getElementById('inputField').value
    .toLowerCase()
    .replace(/\s+/g, ""); // remove todos os espaços

  if (input) {
    document.getElementById('a').src = `${input}.html`;
  }
}

  