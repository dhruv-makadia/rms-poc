/* =========================================================================
   RMS POC — shared behaviour
   ========================================================================= */

/* ---- Tiny SVG icon set (inline, no icon-font dependency) ------------- */
const ICONS = {
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  mine:'<path d="M3 11h18l-2 9H5l-2-9Z"/><path d="M7 11 9 4h6l2 7"/>',
  bell:'<path d="M18 8a6 6 0 1 0-12 0c0 7-3 8-3 8h18s-3-1-3-8"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
  chevD:'<polyline points="6 9 12 15 18 9"/>',
  chevR:'<polyline points="9 18 15 12 9 6"/>',
  chevL:'<polyline points="15 18 9 12 15 6"/>',
  user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 7 19.4a1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0-1.2-2.9H1a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 2.6 7a1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.7 1.7 0 0 0 7 2.6h.1A1.7 1.7 0 0 0 8.3 1V1a2 2 0 1 1 4 0v.1A1.7 1.7 0 0 0 15 2.6"/>',
  logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',
  phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>',
  globe:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z"/>',
  mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
  pin:'<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  truck:'<path d="M10 17h4V5H2v12h3"/><path d="M14 9h4l3 4v4h-2"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
  users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9"/>',
  cog:'<circle cx="12" cy="12" r="3.2"/><path d="M19.4 13.5a1.6 1.6 0 0 0 .3 1.8l.1.1a1.9 1.9 0 1 1-2.7 2.7l-.1-.1a1.6 1.6 0 0 0-2.7 1.1v.3a1.9 1.9 0 1 1-3.8 0v-.2a1.6 1.6 0 0 0-2.8-1.1l-.1.1a1.9 1.9 0 1 1-2.7-2.7l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3.6a1.9 1.9 0 0 1 0-3.8h.2a1.6 1.6 0 0 0 1.4-2.6l-.1-.1a1.9 1.9 0 1 1 2.7-2.7l.1.1a1.6 1.6 0 0 0 1.8.3h.1a1.6 1.6 0 0 0 1-1.5V3.6a1.9 1.9 0 1 1 3.8 0v.2a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a1.9 1.9 0 1 1 2.7 2.7l-.1.1a1.6 1.6 0 0 0-.3 1.8v.1a1.6 1.6 0 0 0 1.5 1h.2a1.9 1.9 0 1 1 0 3.8h-.2a1.6 1.6 0 0 0-1.5 1Z"/>',
  plus:'<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  filter:'<polygon points="22 3 2 3 10 12.5 10 19 14 21 14 12.5 22 3"/>',
  edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4Z"/>',
  copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  trash:'<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  back:'<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
  menu:'<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
  check:'<polyline points="20 6 9 17 4 12"/>',
  eye:'<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  eyeOff:'<path d="M17.9 17.9A10.4 10.4 0 0 1 12 19c-6.4 0-10-7-10-7a18.4 18.4 0 0 1 5.1-5.9m3.2-1A10.4 10.4 0 0 1 12 5c6.4 0 10 7 10 7a18.5 18.5 0 0 1-2.2 3.2"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/><line x1="2" y1="2" x2="22" y2="22"/>',
  lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  alert:'<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
  sortAsc:'<path d="M12 5v14"/><polyline points="6 11 12 5 18 11"/>',
  sortDesc:'<path d="M12 19V5"/><polyline points="6 13 12 19 18 13"/>',
  sortNone:'<polyline points="7 9 12 4 17 9"/><polyline points="7 15 12 20 17 15"/>',
  layers:'<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
  shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>',
  zap:'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  grid:'<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
  box:'<path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><polyline points="3.3 7 12 12 20.7 7"/><line x1="12" y1="22" x2="12" y2="12"/>',
  download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  dozer:'<path d="M3 17h11v-5H6l-3 5Z"/><path d="M14 12h3l3 5h-6"/><circle cx="7" cy="19" r="2"/><circle cx="16" cy="19" r="2"/><path d="M20 8v6"/>',
  excavator:'<path d="M3 18h10v-4H5l-2 4Z"/><path d="M9 14 13 6l5 3-2 5"/><circle cx="6.5" cy="19.5" r="1.5"/><circle cx="11.5" cy="19.5" r="1.5"/>',
  shovel:'<path d="M4 19h9v-6H6l-2 6Z"/><path d="M10 13V5h6v8"/><path d="M16 9h4v4"/>',
  loader:'<path d="M4 17h8v-5H6l-2 5Z"/><path d="M12 12h4l4 5h-8"/><circle cx="7" cy="19" r="2"/><circle cx="17" cy="19" r="2"/>',
  close:'<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  note:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/>',
  save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>',
  image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
  linkedin:'<rect x="2" y="2" width="20" height="20" rx="3"/><line x1="7.5" y1="10" x2="7.5" y2="17"/><circle cx="7.5" cy="6.8" r="1.1"/><path d="M11.5 17v-7M11.5 12.6c0-1.4 1-2.3 2.3-2.3s2.2.9 2.2 2.5V17"/>',
  crm:'<path d="M21 14a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2Z"/><line x1="8" y1="8" x2="17" y2="8"/><line x1="8" y1="12" x2="14" y2="12"/>',
  call:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>',
  meeting:'<rect x="3" y="4" width="18" height="17" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>'
};

function icon(name, cls){
  return `<svg class="${cls||''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">${ICONS[name]||''}</svg>`;
}

/* ---- Real brand marks for social links (full colour, not outline) ---- */
const SOCIAL_ICONS = {
  linkedin:{ vb:'0 0 24 24', color:'#0A66C2',
    d:'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zM6.994 20.452H3.68V9h3.314v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  x:{ vb:'0 0 24 24', color:'#000000',
    d:'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932zM17.61 20.644h2.039L6.486 3.24H4.298z' },
  facebook:{ vb:'0 0 512 512', color:'#1877F2',
    d:'M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z' }
};
function socialIcon(name, cls){
  const s = SOCIAL_ICONS[name];
  if(!s) return '';
  return `<svg class="${cls||''}" viewBox="${s.vb}" width="16" height="16" aria-hidden="true"><path fill="${s.color}" d="${s.d}"/></svg>`;
}

/* Brand logo — real RMS asset with a wordmark fallback if it can't load */
function rmsLogoFallback(img){
  const host = img.parentNode;
  if(!host) return;
  const mark = (typeof RMS_LOGO_ICON !== 'undefined')
    ? RMS_LOGO_ICON : 'assets/img/logo-icon.png';
  host.innerHTML =
    '<img class="logo__full" src="' + mark + '" alt="" style="height:40px" aria-hidden="true">' +
    '<span class="logo__text"><span class="logo__name">ROSCO</span>' +
    '<span class="logo__sub">MINING SOLUTIONS</span></span>' +
    '<img class="logo__icon" src="' + mark + '" alt="RMS" aria-hidden="true">';
}
function brandLogo(){
  const full = (typeof RMS_LOGO !== 'undefined')
    ? RMS_LOGO : 'https://rms.roscomining.com/Stage/images/RoscoLogo.png';
  const mark = (typeof RMS_LOGO_ICON !== 'undefined')
    ? RMS_LOGO_ICON : 'assets/img/logo-icon.svg';
  return '<img class="logo__full" src="' + full + '" alt="Rosco Mining Solutions" ' +
           'onerror="rmsLogoFallback(this)">' +
         '<img class="logo__icon" src="' + mark + '" alt="RMS" aria-hidden="true">';
}

/* Mine thumbnail — real RMS asset, then the local illustration, then a monogram */
function mineImgFallback(img, fallbackSrc, color, initials){
  if(fallbackSrc && img.dataset.stage !== 'fallback'){
    img.dataset.stage = 'fallback';
    img.parentNode.className = 'mine-card__logo mine-card__logo--photo';
    img.src = fallbackSrc;
    return;
  }
  const host = img.parentNode;
  if(!host) return;
  host.className = 'mine-card__logo';
  host.style.background = color;
  host.textContent = initials;
}

/* Same helper for the large image on the details page */
function heroImgFallback(img, fallbackSrc){
  if(fallbackSrc && img.dataset.stage !== 'fallback'){
    img.dataset.stage = 'fallback';
    img.parentNode.classList.remove('overview__media--logo');
    img.src = fallbackSrc;
  }
}

/* Contact photo — falls back to the initials avatar already in the card */
function contactImgFallback(img, initials){
  const host = img.parentNode;
  if(!host) return;
  img.remove();
  host.insertAdjacentHTML('afterbegin',
    '<span class="avatar avatar--sm">' + initials + '</span>');
}

/* ---- Shared shell wiring --------------------------------------------- */
function initShell(){
  const app = document.querySelector('.app');
  if(!app) return;

  // sidebar collapse (desktop) / drawer (mobile)
  document.querySelectorAll('[data-toggle-sidebar]').forEach(b=>{
    b.addEventListener('click',()=>{
      if(window.innerWidth<=860){ app.classList.toggle('is-open'); }
      else{
        app.classList.toggle('is-collapsed');
        try{ localStorage.setItem('rms.collapsed', app.classList.contains('is-collapsed')?'1':'0'); }catch(e){}
      }
    });
  });
  const bd = document.querySelector('.backdrop');
  if(bd) bd.addEventListener('click',()=>app.classList.remove('is-open'));
  try{ if(localStorage.getItem('rms.collapsed')==='1' && window.innerWidth>860) app.classList.add('is-collapsed'); }catch(e){}

  // tapping a nav link closes the mobile drawer (matters when it links to
  // the current page, which doesn't reload and would otherwise leave the
  // drawer stuck open)
  document.querySelectorAll('.nav-item').forEach(a=>
    a.addEventListener('click',()=>{ if(window.innerWidth<=860) app.classList.remove('is-open'); }));

  // profile dropdown
  const prof = document.querySelector('.profile');
  if(prof){
    prof.querySelector('.profile__btn').addEventListener('click',e=>{
      e.stopPropagation(); prof.classList.toggle('is-open');
    });
    document.addEventListener('click',()=>prof.classList.remove('is-open'));
    prof.querySelector('.dropdown').addEventListener('click',e=>e.stopPropagation());
  }

  // logout
  document.querySelectorAll('[data-logout]').forEach(b=>
    b.addEventListener('click',()=>{ location.href='index.html'; }));

  // keep drawer/rail state consistent when crossing the mobile breakpoint
  // (e.g. rotating a tablet, or resizing down after collapsing the desktop
  // rail — otherwise the mobile drawer can open in the "collapsed" state:
  // full width, but with all its labels hidden)
  window.addEventListener('resize',()=>{
    if(window.innerWidth>860) app.classList.remove('is-open');
    else app.classList.remove('is-collapsed');
  });
}

/* ---- Toast ----------------------------------------------------------- */
let toastTimer;
function toast(msg){
  let t = document.querySelector('.toast');
  if(!t){ t=document.createElement('div'); t.className='toast'; document.body.appendChild(t); }
  t.innerHTML = icon('check') + '<span>'+msg+'</span>';
  t.classList.add('is-on');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove('is-on'), 2600);
}

/* ---- Pagination ------------------------------------------------------
   Always shows the first two and last two pages, the current page with a
   neighbour either side, and an ellipsis wherever a gap is skipped —
   e.g.  ‹ 1 2 … 6 [7] 8 … 58 59 ›
   ---------------------------------------------------------------------- */
function pageItems(current, pages){
  const keep = new Set([1, 2, pages-1, pages, current-1, current, current+1]);
  const shown = [...keep].filter(p => p >= 1 && p <= pages).sort((a,b)=>a-b);
  const out = [];
  shown.forEach((p,i)=>{
    if(i && p - shown[i-1] > 1) out.push('…');
    out.push(p);
  });
  return out;
}

function renderPager(host, current, pages, onGo){
  let html = `<button class="page-btn" data-p="${current-1}" ${current===1?'disabled':''}
                aria-label="Previous page">${icon('chevL')}</button>`;
  pageItems(current, pages).forEach(it=>{
    html += it === '…'
      ? `<span class="page-ellipsis">…</span>`
      : `<button class="page-btn ${it===current?'is-active':''}" data-p="${it}">${it}</button>`;
  });
  html += `<button class="page-btn" data-p="${current+1}" ${current===pages?'disabled':''}
             aria-label="Next page">${icon('chevR')}</button>`;
  host.innerHTML = html;
  [...host.querySelectorAll('[data-p]')].forEach(b=>b.addEventListener('click',()=>{
    const p = +b.dataset.p;
    if(p >= 1 && p <= pages && p !== current) onGo(p);
  }));
}

/* ---- Helpers --------------------------------------------------------- */
const qs  = (s,r)=> (r||document).querySelector(s);
const qsa = (s,r)=> [...(r||document).querySelectorAll(s)];
const param = k => new URLSearchParams(location.search).get(k);
const esc = s => String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

document.addEventListener('DOMContentLoaded', initShell);
