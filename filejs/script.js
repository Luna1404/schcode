const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  // đổi icon nút 🌙 <-> ☀️
  toggleBtn.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});
