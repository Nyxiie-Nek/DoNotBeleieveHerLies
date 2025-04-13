const levels = [
    "the first time",
    "help me",
    "a dark shadow",
    "in the night",
    "creeping and cackling",
    "she took me",
    "please find me"
  ];
  
  function normalize(input) {
    return input.trim().toLowerCase();
  }
  
  function submitForm(event) {
    event.preventDefault();
    const input = normalize(document.getElementById("inputField").value);
    const iframe = document.getElementById("a");
  
    const normalizedLevels = levels.map(normalize);
    if (normalizedLevels.includes(input)) {
      const filename = input.replace(/\s+/g, "-"); // troca espaços por hífens
      iframe.src = `levels/${filename}.html`;
      localStorage.setItem("iframeSrc", iframe.src);
    } else {
      alert("Wrong code.");
    }
  }
  
  function initializeIframe() {
    const iframe = document.getElementById("a");
    const savedSrc = localStorage.getItem("iframeSrc");
  
    if (savedSrc) {
      iframe.src = savedSrc;
    } else {
      iframe.src = "lvl/the-first-time.html";
    }
  
    iframe.addEventListener("load", () => {
      localStorage.setItem("iframeSrc", iframe.src);
    });
  }
  
  function getHint() {
    const iframe = document.getElementById("a");
    try {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      const hint = doc.querySelector(".hint");
      alert(hint ? hint.innerText : "No hint available.");
    } catch (e) {
      alert("Hint not accessible.");
    }
  }
  