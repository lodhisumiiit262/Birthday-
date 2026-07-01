// ===============================
// SCRIPT.JS - PART 1
// ===============================

const loader = document.getElementById("loader");
const giftBox = document.getElementById("giftBox");
const surprise = document.getElementById("surprise");
const music = document.getElementById("birthdayMusic");
const gallery = document.querySelector(".gallery");
const galleryBtn = document.getElementById("showGallery");

window.addEventListener("load", () => {
    setTimeout(() => {
        loader.style.display = "none";
    }, 2500);
});

giftBox.addEventListener("click", () => {
    surprise.classList.remove("hidden");
    giftBox.style.transform = "scale(0)";

    if (music) {
        music.play().catch(() => {});
    }

    startFireworks();

    surprise.scrollIntoView({
        behavior: "smooth"
    });
});

galleryBtn.addEventListener("click", () => {
    gallery.classList.toggle("hidden");

    galleryBtn.innerHTML = gallery.classList.contains("hidden")
        ? "📸 Open Memories"
        : "❌ Close Memories";
});// ===============================
// SCRIPT.JS - PART 2
// ===============================

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

let particles = [];

function createFirework() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * (canvas.height / 2);

    for (let i = 0; i < 80; i++) {
        particles.push({
            x,
            y,
            angle: Math.random() * Math.PI * 2,
            speed: Math.random() * 6 + 2,
            radius
