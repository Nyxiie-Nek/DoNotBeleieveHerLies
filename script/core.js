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
    // Sempre começa com o primeiro nível
    iframe.src = "the-first-time.html";
  }
  
  function submitForm(event) {
    event.preventDefault();
    const input = document.getElementById('inputField').value.trim().toLowerCase().replace(/\s+/g, '-');
    document.getElementById('a').src = `levels/${input}.html`;
  }
  