let lb,items=[],idx=0;
function show(){
  const it=items[idx],ex=`<div class="ph ex"><span>${esc(it.titulo||"Foto de ejemplo")}</span></div>`;
  const st=$(".stage",lb);
  st.innerHTML=it.src?`<img src="${esc(it.src)}" alt="${esc(it.titulo||"")}">`:ex;
  const im=$("img",st);if(im)im.onerror=()=>{st.innerHTML=ex};
  $(".cap",lb).textContent=it.titulo||"";
  $(".n",lb).textContent=`${idx+1} / ${items.length}`;
}
function go(d){idx=(idx+d+items.length)%items.length;show()}
function closeLb(){lb.classList.remove("open");document.body.style.overflow=""}
function openLightbox(list,i=0){
  items=list&&list.length?list:[{titulo:"Foto de ejemplo"}];idx=i;
  if(!lb){
    lb=document.createElement("div");lb.className="lb";
    lb.innerHTML=`<button class="x" aria-label="Cerrar">✕</button><div class="stage"></div><div class="cap"></div><div class="nv"><button class="btn alt p" aria-label="Anterior">‹</button><span class="n"></span><button class="btn alt q" aria-label="Siguiente">›</button></div>`;
    document.body.append(lb);
    $(".x",lb).onclick=closeLb;$(".p",lb).onclick=()=>go(-1);$(".q",lb).onclick=()=>go(1);
    lb.onclick=e=>{if(e.target===lb||e.target.classList.contains("stage"))closeLb()};
    let x0=null;
    lb.addEventListener("touchstart",e=>{x0=e.touches[0].clientX},{passive:true});
    lb.addEventListener("touchend",e=>{if(x0===null)return;const d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>50)go(d<0?1:-1);x0=null});
    document.addEventListener("keydown",e=>{if(!lb.classList.contains("open"))return;if(e.key==="Escape")closeLb();if(e.key==="ArrowRight")go(1);if(e.key==="ArrowLeft")go(-1)});
  }
  show();document.body.style.overflow="hidden";
  requestAnimationFrame(()=>lb.classList.add("open"));
}
if(document.body.dataset.page==="galeria"){
  const app=$("#app");app.className="grid g3";
  app.innerHTML=GALERIA.map((g,i)=>`<button class="tb rv" style="--d:${i%9*40}ms" data-i="${i}">${ph(g.src,g.titulo||"Foto "+(i+1))}</button>`).join("");
  app.onclick=e=>{const b=e.target.closest(".tb");if(b)openLightbox(GALERIA,+b.dataset.i)};
  reveal();
}
