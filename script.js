let slide = 1;

function nextSlide() {
  document.getElementById("slide1").classList.remove("active");
  document.getElementById("slide2").classList.add("active");
}

/* PASSWORD */
function checkPass() {
  let pass = document.getElementById("pass").value;

  if (pass === "gungun") {
    document.getElementById("slide2").classList.remove("active");
    document.getElementById("main").classList.remove("hidden");

    startAll();
  } else {
    alert("Wrong Password!");
  }
}

/* START EVERYTHING */
function startAll() {
  document.getElementById("music").play().catch(()=>{});

  typeMessage();
  balloons();
  hearts();
  fireworks();
}

/* TYPE EFFECT */
let text = "Cheeku ❤️ Tu meri life ka sabse special part hai... I Love You 💖";
let i = 0;

function typeMessage() {
  let el = document.getElementById("typing");

  let interval = setInterval(() => {
    el.innerHTML += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 60);
}

/* BALLOONS */
function balloons() {
  for (let i = 0; i < 20; i++) {
    let b = document.createElement("div");
    b.className = "balloon";
    b.style.left = Math.random() * 100 + "vw";
    b.style.background = randomColor();
    b.style.animationDuration = (3 + Math.random() * 4) + "s";
    document.getElementById("main").appendChild(b);
  }
}

/* HEARTS */
function hearts() {
  setInterval(() => {
    let h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "❤️";
    h.style.left = Math.random() * 100 + "vw";
    h.style.animationDuration = (3 + Math.random() * 3) + "s";

    document.getElementById("main").appendChild(h);

    setTimeout(() => h.remove(), 5000);
  }, 200);
}

/* FIREWORKS */
function fireworks() {
  const canvas = document.getElementById("fireworks");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  function createFirework() {
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: canvas.width/2,
        y: canvas.height/2,
        vx: (Math.random()-0.5)*6,
        vy: (Math.random()-0.5)*6,
        life: 100
      });
    }
  }

  function animate() {
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      p.life--;

      ctx.fillStyle = "hsl(" + Math.random()*360 + ",100%,60%)";
      ctx.fillRect(p.x, p.y, 3, 3);

      if (p.life <= 0) particles.splice(i,1);
    });

    requestAnimationFrame(animate);
  }

  setInterval(createFirework, 1200);
  animate();
}

/* COLORS */
function randomColor() {
  let colors = ["red","pink","blue","yellow","purple","orange"];
  return colors[Math.floor(Math.random()*colors.length)];
}
