window.addEventListener("DOMContentLoaded", function () {
  const welcomeDiv = document.getElementById("welcome-message");
  if (welcomeDiv) {
    welcomeDiv.innerHTML = `
      <div class="welcome-box">
        <strong class="welcome-title">Bem-vindo ao RocketCoffe!</strong>
        <p class="welcome-text">Aproveite nosso cardápio especial e tenha um ótimo dia! ☕</p>
        <button id="welcome-close">&times;</button>
      </div>
    `;
    welcomeDiv.style.display = "block";
    document.getElementById("welcome-close").onclick = function () {
      welcomeDiv.style.display = "none";
    };
  }
});
