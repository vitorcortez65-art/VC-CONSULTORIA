/* VC Consultoria — melhorias progressivas, sem substituir o site institucional. */
(()=>{
'use strict';
const addStyles=document.createElement('style');
addStyles.textContent=`.vc-client-access{display:inline-flex!important;align-items:center;gap:.4rem;border:1px solid #d2a864!important;border-radius:999px;padding:10px 15px!important;color:#f1d7a5!important;font-weight:700!important;white-space:nowrap}.vc-client-access:hover{background:#d2a864!important;color:#111!important}.vc-floating-client{position:fixed;bottom:22px;left:20px;z-index:9998;background:#111b22;color:#f1d7a5;padding:11px 16px;border:1px solid #d2a864;border-radius:999px;box-shadow:0 12px 30px #0005;font:700 13px system-ui;text-decoration:none}@media(max-width:720px){.vc-floating-client{bottom:80px;left:12px;font-size:12px;padding:10px 12px}}`;
document.head.append(addStyles);
const link=document.createElement('a');link.href='./portal.html';link.className='vc-client-access';link.textContent='Área do cliente';link.setAttribute('aria-label','Acessar área restrita de clientes');
const nav=document.querySelector('.navlinks');if(nav)nav.append(link);
const mobile=document.querySelector('.mobile-nav');if(mobile){const a=link.cloneNode(true);mobile.append(a)}
if(!nav&&!mobile){const a=document.createElement('a');a.className='vc-floating-client';a.href='./portal.html';a.textContent='🔐 Área do cliente';document.body.append(a)}
const hero=document.querySelector('.hero h1');if(hero){hero.innerHTML='Controle Suas Finanças.<br><em>Amplie Suas Possibilidades.</em>';}
})();
