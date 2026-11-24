document.addEventListener('DOMContentLoaded',()=>{const b=document.querySelector('.menu-toggle'),n=document.querySelector('.nav-mobile');if(b&&n){b.addEventListener('click',()=>{const active=n.classList.toggle('open');b.setAttribute('aria-expanded',String(active));});n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{n.classList.remove('open');b.setAttribute('aria-expanded','false');}));}document.querySelectorAll('[data-copy]').forEach(btn=>{btn.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(btn.dataset.copy);const old=btn.textContent;btn.textContent='✓ Copied';setTimeout(()=>btn.textContent=old,1800);}catch(e){window.prompt('E-mail',btn.dataset.copy);}})});});

// V7 engineering image galleries: previous/next, keyboard, and accessible full-size view.
document.addEventListener('DOMContentLoaded',()=>{
 const galleries=[...document.querySelectorAll('.v7-carousel')];
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 galleries.forEach(gallery=>{
  const rail=gallery.querySelector('.v7-gallery-rail');
  const items=[...rail.querySelectorAll('figure')];
  const prev=gallery.querySelector('.v7-prev'),next=gallery.querySelector('.v7-next');
  const count=gallery.querySelector('.v7-gallery-count');
  if(!rail||!items.length)return;
  const index=()=>{const center=rail.scrollLeft+rail.clientWidth/2;let best=0,err=Infinity;items.forEach((el,i)=>{const itemCenter=el.offsetLeft-items[0].offsetLeft+el.offsetWidth/2;const dx=Math.abs(itemCenter-center);if(dx<err){err=dx;best=i}});return best};
  function update(){const i=index();if(count)count.textContent=String(i+1).padStart(2,'0')+' / '+String(items.length).padStart(2,'0');if(prev)prev.disabled=i===0;if(next)next.disabled=i===items.length-1;}
  function go(delta){const ix=Math.min(items.length-1,Math.max(0,index()+delta));rail.scrollTo({left:items[ix].offsetLeft-items[0].offsetLeft,behavior:reduced?'auto':'smooth'});}
  prev?.addEventListener('click',()=>go(-1));next?.addEventListener('click',()=>go(1));
  rail.addEventListener('scroll',()=>requestAnimationFrame(update),{passive:true});
  rail.addEventListener('keydown',event=>{if(event.key==='ArrowRight'){event.preventDefault();go(1)}if(event.key==='ArrowLeft'){event.preventDefault();go(-1)}});
  update();
 });
 const pictures=[...document.querySelectorAll('.v7-gallery-card img')];
 if(!pictures.length)return;
 const dialog=document.createElement('dialog');dialog.className='v7-lightbox';dialog.innerHTML='<div class="v7-lightbox-inner"><div class="v7-lightbox-top"><span class="v7-lightbox-caption"></span><button class="v7-lightbox-close" type="button" aria-label="Close / Fermer / Fechar">✕</button></div><img alt="" /></div>';
 document.body.append(dialog);
 const preview=dialog.querySelector('img'),caption=dialog.querySelector('.v7-lightbox-caption');
 const close=dialog.querySelector('button');close.addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
 pictures.forEach(pic=>{
  const show=()=>{
   preview.src=pic.dataset.fullSrc||pic.src;
   preview.alt=pic.alt||'';
   caption.textContent=pic.closest('figure')?.querySelector('figcaption')?.textContent?.trim()||pic.alt||'';
   if(typeof dialog.showModal==='function')dialog.showModal();else window.open(preview.src,'_blank','noopener');
  };
  pic.addEventListener('click',show);
  pic.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();show()}});
 });
});
