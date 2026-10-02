(()=>{
const pg=document.body.dataset.page;if(pg!=="alumnos"&&pg!=="profesores")return;
const norm=p=>({nombre:p.nombre,curso:p.curso||p.materia||p.cargo||"",foto:p.foto,frase:p.frase||p.mensaje||"",descripcion:p.descripcion||"",galeria:p.galeria||[]});
const G=pg==="alumnos"?[["",ALUMNOS.map(norm)]]:[["Dirección",DIRECTIVOS.map(norm)],["Profesores",PROFESORES.map(norm)]];
const back=pg==="alumnos"?"Volver a alumnos":"Volver a profesores";
const card=(p,g,i)=>`<button class="card pc rv" style="--d:${i%8*50}ms" data-g="${g}" data-i="${i}">${ph(p.foto,ini(p.nombre))}<h3>${esc(p.nombre)}</h3><small>${esc(p.curso)}</small><p>${esc(p.descripcion||p.frase)}</p></button>`;
const app=$("#app");
app.innerHTML=G.map(([t,l],g)=>(t?`<h2 class="gh">${t}</h2>`:"")+`<div class="grid">${l.map((p,i)=>card(p,g,i)).join("")}</div>`).join("");
app.onclick=e=>{const b=e.target.closest(".pc");if(b)perfil(G[b.dataset.g][1][b.dataset.i])};

function perfil(p){
  const s=document.createElement("div");s.className="sheet";
  const gal=p.galeria.map((g,i)=>`<button class="tb" data-i="${i}">${ph(g,"Foto "+(i+1))}</button>`).join("");
  s.innerHTML=`<div class="sh"><button class="btn alt back">← ${back}</button>${ph(p.foto,ini(p.nombre),"big")}<h2>${esc(p.nombre)}</h2><span class="chip">${esc(p.curso)}</span>${p.frase?`<blockquote>“${esc(p.frase)}”</blockquote>`:""}<p>${esc(p.descripcion)}</p>${gal?`<h3>Galería</h3><div class="grid g3">${gal}</div>`:""}</div>`;
  document.body.append(s);document.body.style.overflow="hidden";
  requestAnimationFrame(()=>requestAnimationFrame(()=>s.classList.add("open")));
  const k=e=>{if(e.key==="Escape"&&!$(".lb.open"))x()};
  const x=()=>{s.classList.remove("open");document.body.style.overflow="";document.removeEventListener("keydown",k);setTimeout(()=>s.remove(),380)};
  document.addEventListener("keydown",k);
  $(".back",s).onclick=x;
  s.onclick=e=>{const b=e.target.closest(".tb");if(b)openLightbox(p.galeria.map(src=>({src,titulo:p.nombre})),+b.dataset.i)};
}
reveal();
})();
