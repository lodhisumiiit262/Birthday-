function start() {
  let name = document.getElementById("nameInput").value;

  if (name === "") {
    alert("Name enter karo 😄");
    return;
  }

  document.getElementById("finalName").innerText = "🎉 Happy Birthday " + name + " 🎉";
  document.getElementById("card").classList.remove("hidden");

  document.getElementById("music").play();

  startConfetti();
  startBalloons();
}

/* 🎊 Confetti */
function startConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let pieces = [];

  for (let i = 0; i < 120; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 2,
      speed: Math.random() * 5 + 1
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ff4da6";

    pieces.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });

    update();
    requestAnimationFrame(draw);
  }

  function update() {
    pieces.forEach(p => {
      p.y += p.speed;
      if (p.y > canvas.height) p.y = 0;
    });
  }

  draw();
}

/* 🎈 Balloons */
function startBalloons() {
  const container = document.querySelector(".balloons");

  for (let i = 0; i < 20; i++) {
    let b = document.createElement("div");
    b.classList.add("balloon");
    b.style.left = Math.random() * window.innerWidth + "px";
    b.style.background = randomColor();
    b.style.animationDuration = (3 + Math.random() * 4) + "s";
    container.appendChild(b);
  }
}

function randomColor() {
  let colors = ["#ff4da6","#4dd2ff","#ffff66","#66ff66","#ff9933"];
  return colors[Math.floor(Math.random() * colors.length)];
}
