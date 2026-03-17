// Tema persistente (global)
const body = document.body;
const toggleBtn = document.getElementById("themeToggle");

// Config particulas
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let w, h, particles;
let particleColor = "rgba(45,169,255,0.6)";

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

// Crear partículas
particles = Array.from({ length: 80 }, () => ({
  x: Math.random() * w,
  y: Math.random() * h,
  r: Math.random() * 2 + 1,
  v: Math.random() * 0.6 + 0.2
}));

// Manejador de temas de partículas
function updateParticlesTheme(theme) {
  if (theme === "light") {
    particleColor = "rgb(0, 0, 0)";
  } else {
    particleColor = "rgba(45,169,255,0.6)";
  }
}

// Cargar tema guardado
const savedTheme = localStorage.getItem("theme") || "dark";
body.classList.remove("dark", "light");
body.classList.add(savedTheme);
updateParticlesTheme(savedTheme);

// Botón toggle
if (toggleBtn) {
  toggleBtn.onclick = () => {
    const newTheme = body.classList.contains("dark") ? "light" : "dark";
    body.classList.remove("dark", "light");
    body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    updateParticlesTheme(newTheme);
  };
}

// Animación de particulas
function animate() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = particleColor;

  particles.forEach(p => {
    p.y -= p.v;
    if (p.y < 0) p.y = h;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(animate);
}
animate();

// Video modal (youtube)
const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");

function openVideoModal(videoId) {
  modal.style.display = "flex";
  modalVideo.src =
  `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
}

function closeVideoModal() {
  modalVideo.src = ""; // detiene el video
  modal.style.display = "none";
}

// Cerrar clickeando el fondo
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeVideoModal();
  }
});

const characterModal = document.getElementById("characterModal");
const characterImg = document.getElementById("characterImage");
const characterName = document.getElementById("characterName");
const characterDesc = document.getElementById("characterDescription");
const characterClose = document.querySelector(".character-close");

function openCharacterModal(card) {
  characterImg.src = card.dataset.img;
  characterName.textContent = card.dataset.name;
  characterDesc.textContent = card.dataset.desc;

  characterModal.style.display = "flex";
}

characterClose.addEventListener("click", () => {
  characterModal.style.display = "none";
});

characterModal.addEventListener("click", (e) => {
  if (e.target === characterModal) {
    characterModal.style.display = "none";
  }
});

const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const imageClose = document.querySelector('.image-close');

function openImageModal(img) {
  imageModal.style.display = 'flex';
  modalImage.src = img.src;
}

imageClose.addEventListener('click', () => {
  imageModal.style.display = 'none';
  modalImage.src = '';
});

imageModal.addEventListener('click', (e) => {
  if (e.target === imageModal) {
    imageModal.style.display = 'none';
    modalImage.src = '';
  }
});