const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const ini=n=>String(n).split(/\s+/).filter(Boolean).slice(0,2).map(w=>w[0]).join("").toUpperCase();
const ph=(src,txt,cls="")=>`<div class="ph ${cls}"><span>${esc(txt)}</span>${src?`<img src="${esc(src)}" alt="${esc(txt)}" loading="lazy" onerror="this.remove()">`:""}</div>`;

const PAGES=[["index.html","Inicio"],["index.html#promocion","Nuestra Promoción"],["alumnos.html","Alumnos"],["profesores.html","Profesores"],["momentos.html","Momentos"],["eventos.html","Eventos"],["galeria.html","Galería"],["mensajes.html","Mensajes"],["recuerdos.html","Recuerdos"]];
const here=location.pathname.split("/").pop()||"index.html";
document.body.insertAdjacentHTML("afterbegin",`<header class="nav"><a class="brand" href="index.html"><img src="images/astra026.jpg" alt="ASTRA 026"><span>ASTRA <i>026</i></span></a><a class="crest" href="index.html"><img src="images/colegio.jpg" alt="Colegio Santa Clara"></a><button class="burger" aria-label="Menú" aria-expanded="false"><span></span><span></span><span></span></button><nav class="menu">${PAGES.map(([h,t])=>`<a href="${h}"${h===here?' class="on"':""}>${t}</a>`).join("")}</nav></header>`);
document.body.insertAdjacentHTML("beforeend",`<footer class="foot"><a class="crest" href="index.html"><img src="images/colegio.jpg" alt="Colegio Santa Clara"></a><b>ANUARIO 2026 · ASTRA 026</b></footer>`);
const burger=$(".burger"),menu=$(".menu");
burger.onclick=()=>burger.setAttribute("aria-expanded",menu.classList.toggle("open"));
menu.onclick=e=>{if(e.target.closest("a")){menu.classList.remove("open");burger.setAttribute("aria-expanded","false")}};

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.1});
function reveal(){$$(".rv:not(.in)").forEach(e=>io.observe(e))}

const P=document.body.dataset.page,A=$("#app");
const R={
momentos(){
  A.innerHTML=`<div class="tl">${MOMENTOS.map((m,i)=>`<div class="it rv" style="--d:${i*70}ms"><div class="card" tabindex="0" role="button"><small>${esc(m.fecha)}</small><h3>${esc(m.titulo)}</h3><div class="more"><p>${esc(m.texto)}</p></div><span class="plus">+</span></div></div>`).join("")}</div>`;
  $$(".it .card").forEach(c=>{const t=()=>c.parentElement.classList.toggle("open");c.onclick=t;c.onkeydown=e=>e.key==="Enter"&&t()});
},
eventos(){
  A.className="grid w";
  A.innerHTML=EVENTOS.map((e,i)=>`<article class="card rv" style="--d:${i*70}ms">${ph(e.foto,"Foto del evento","w")}<span class="chip">${esc(e.fecha)}</span><h3>${esc(e.nombre)}</h3><p>${esc(e.descripcion)}</p><button class="btn" data-i="${i}">Ver fotografías</button></article>`).join("");
  A.onclick=ev=>{const b=ev.target.closest("button");if(!b)return;const e=EVENTOS[b.dataset.i];openLightbox((e.fotos||[]).map(s=>({src:s,titulo:e.nombre})),0)};
},
mensajes(){
  A.className="grid w";
  A.innerHTML=MENSAJES.map((m,i)=>`<blockquote class="card quote rv" style="--d:${i*70}ms"><p>${esc(m.texto)}</p><footer>— ${esc(m.autor)}</footer></blockquote>`).join("");
},
recuerdos(){
  A.innerHTML=`<blockquote class="card quote big-q"><p id="rq"></p><footer id="ra"></footer></blockquote><p style="text-align:center;margin-top:20px"><button class="btn" id="otro">Ver otro recuerdo</button></p>`;
  let last=-1;const show=()=>{let i;do{i=Math.floor(Math.random()*RECUERDOS.length)}while(i===last&&RECUERDOS.length>1);last=i;$("#rq").textContent=RECUERDOS[i].texto;$("#ra").textContent="— "+RECUERDOS[i].autor};
  $("#otro").onclick=show;show();
}};
if(R[P])R[P]();
reveal();
