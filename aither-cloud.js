/* Aither Cloud Sync — syncs this app's non-secret local data to the signed-in Aither account. */
(() => {
  'use strict';
  const APP_ID='notes', KEY='aither-cloud-notes', API='https://aither-backend.onrender.com';
  const blocked=/(password|token|secret|api[_-]?key|client[_-]?secret|authorization|session)/i;
  const snapshot=()=>{const data={};for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&!blocked.test(k))data[k]=localStorage.getItem(k)}return data};
  const restore=data=>{if(!data||typeof data!=='object')return;Object.entries(data).forEach(([k,v])=>{if(!blocked.test(k)&&typeof v==='string')try{localStorage.setItem(k,v)}catch(_){}})};
  const req=async(p,o={})=>{const r=await fetch(API+p,{...o,credentials:'include',headers:{Accept:'application/json','Content-Type':'application/json',...(o.headers||{})},cache:'no-store'});if(!r.ok)throw Error('Cloud sync failed');return r.json()};
  let last='';
  async function sync(){try{const s=await req('/api/auth/session');if(!s.authenticated)return;const cloud=await req('/api/data/'+APP_ID);const local=snapshot();const stamp=cloud.updated_at||'';if(stamp&&stamp!==last&&cloud.data&&Object.keys(cloud.data).length){restore(cloud.data);last=stamp;return}await req('/api/data/'+APP_ID,{method:'PUT',body:JSON.stringify({data:local})});last=Date.now().toString()}catch(_){}}
  window.AitherCloud={sync,snapshot};
  sync();setInterval(sync,15000);window.addEventListener('aither:user-changed',sync);window.addEventListener('storage',()=>sync());
})();
