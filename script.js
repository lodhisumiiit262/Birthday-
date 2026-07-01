function startEffects(){

setInterval(()=>{
let b = document.createElement("div");
b.className="balloon";
b.innerHTML="🎈";

b.style.left = Math.random()*100 + "vw";
b.style.bottom = "-50px";
b.style.fontSize = (20 + Math.random()*20) + "px";

document.body.appendChild(b);

setTimeout(()=>b.remove(),4000);

},150);

setInterval(()=>{
let h = document.createElement("div");
h.className="heart";
h.innerHTML = ["💖","🎉","✨","⭐"][Math.floor(Math.random()*4)];

h.style.left = Math.random()*100 + "vw";
h.style.bottom = "-50px";
h.style.fontSize = (20 + Math.random()*25) + "px";

document.body.appendChild(h);

setTimeout(()=>h.remove(),4000);

},200);
}
