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
    // Agora acessa diretamente o arquivo na mesma pasta
    iframe.src = "the-first-time.html";
  }
  
  function submitForm(event) {
    event.preventDefault();
    const input = document.getElementById('inputField').value.trim().toLowerCase().replace(/\s+/g, '-');
    // Acessa diretamente o HTML com base no nome da senha
    document.getElementById('a').src = `${input}.html`;
  }
  
  