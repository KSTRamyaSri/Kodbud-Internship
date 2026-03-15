
/* ════ DATA ════ */
const CS = {
  "India":["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Delhi","Chandigarh","Jammu & Kashmir","Ladakh","Puducherry"],
  "United States":["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","Ohio","Oklahoma","Oregon","Pennsylvania","Tennessee","Texas","Utah","Virginia","Washington","Wisconsin"],
  "United Kingdom":["England","Scotland","Wales","Northern Ireland"],
  "Canada":["Alberta","British Columbia","Manitoba","New Brunswick","Newfoundland","Nova Scotia","Ontario","Quebec","Saskatchewan"],
  "Australia":["New South Wales","Victoria","Queensland","Western Australia","South Australia","Tasmania","ACT","Northern Territory"],
  "Germany":["Bavaria","Berlin","Hamburg","Hesse","Baden-Württemberg","North Rhine-Westphalia","Lower Saxony","Saxony"],
  "France":["Île-de-France","Provence-Alpes-Côte d'Azur","Auvergne-Rhône-Alpes","Occitanie","Grand Est","Hauts-de-France","Normandie"],
  "UAE":["Abu Dhabi","Dubai","Sharjah","Ajman","Fujairah","Ras Al Khaimah","Umm Al Quwain"],
  "Singapore":["Central","East","North","North-East","West"],
  "Japan":["Tokyo","Osaka","Kanagawa","Aichi","Saitama","Chiba","Hyogo","Hokkaido","Fukuoka"],
  "Other":["N/A"]
};
const NATS = ["Afghan","Albanian","Algerian","American","Argentine","Armenian","Australian","Austrian","Azerbaijani","Bangladeshi","Belgian","Brazilian","British","Bulgarian","Canadian","Chilean","Chinese","Colombian","Croatian","Czech","Danish","Dutch","Egyptian","Emirati","Ethiopian","Finnish","French","German","Ghanaian","Greek","Hungarian","Indian","Indonesian","Iranian","Irish","Israeli","Italian","Japanese","Jordanian","Kenyan","Korean","Lebanese","Malaysian","Mexican","Nepalese","New Zealander","Nigerian","Norwegian","Pakistani","Peruvian","Philippine","Polish","Portuguese","Romanian","Russian","Saudi","Singaporean","South African","Spanish","Sri Lankan","Swedish","Swiss","Syrian","Thai","Turkish","Ukrainian","Venezuelan","Vietnamese"];
const SKILL_LIST = ["JavaScript","TypeScript","React","Vue.js","Angular","Next.js","Node.js","Python","Java","C++","C#","Go","Rust","PHP","Ruby","Swift","Kotlin","Flutter","React Native","Django","FastAPI","Spring Boot","Express.js","PostgreSQL","MySQL","MongoDB","Redis","Docker","Kubernetes","AWS","Azure","GCP","CI/CD","Git","Linux","Figma","Adobe XD","Photoshop","Illustrator","Machine Learning","TensorFlow","PyTorch","Pandas","NumPy","Power BI","Tableau","SQL","REST APIs","GraphQL","Microservices","Agile","Scrum","JIRA","Project Management","Leadership","Communication"];
const PROF = ["","Beginner","Elementary","Intermediate","Advanced","Expert"];
const TITLES = ["","Personal Information","Education","Experience & Skills","Documents & References","Review & Submit"];

let skills = [], uploads = {}, cur = 1;

/* ════ INIT ════ */
window.addEventListener('DOMContentLoaded', () => {
  const ce = document.getElementById('country');
  Object.keys(CS).forEach(c => ce.appendChild(new Option(c,c)));
  const ne = document.getElementById('nationality');
  NATS.forEach(n => ne.appendChild(new Option(n,n)));
  const gy = document.getElementById('gradYear');
  const yr = new Date().getFullYear();
  for (let y = yr; y >= yr-50; y--) gy.appendChild(new Option(y,y));
  const mx = new Date(); mx.setFullYear(mx.getFullYear()-18);
  document.getElementById('dob').max = mx.toISOString().split('T')[0];

  setupPills('pg-langs','cb');
  setupPills('pg-empType','r');
  setupPills('pg-workMode','r');
  setupPills('pg-declarations','cb');

  const si = document.getElementById('sInp');
  si.addEventListener('keydown', onSkKey);
  si.addEventListener('input', onSkInp);
  si.addEventListener('blur', () => setTimeout(() => document.getElementById('sDrop').classList.remove('open'), 150));
});

/* ════ INPUT FILTERS ════ */
function onlyLetters(el) {
  el.value = el.value.replace(/[^a-zA-ZÀ-ÿ\s'\-]/g, '');
}
function onlyDigits(el, maxLen) {
  el.value = el.value.replace(/\D/g, '').slice(0, maxLen);
}

/* ════ PHONE VALIDATION ════ */
function isValidPhone(v) {
  if (v.length !== 10) return false;
  if (!/^[6-9]/.test(v)) return false;
  if (/^(\d)\1{9}$/.test(v)) return false;
  let asc = true, desc = true;
  for (let i = 1; i < v.length; i++) {
    if (+v[i] !== +v[i-1] + 1) asc = false;
    if (+v[i] !== +v[i-1] - 1) desc = false;
  }
  if (asc || desc) return false;
  return true;
}

/* ════ COUNTRY/STATE ════ */
function loadStates() {
  const c = document.getElementById('country').value;
  const se = document.getElementById('state');
  se.innerHTML = '<option value="">Select state</option>';
  if (c && CS[c]) { CS[c].forEach(s => se.appendChild(new Option(s,s))); se.disabled = false; }
  else se.disabled = true;
}

/* ════ PILLS ════ */
function setupPills(id, type) {
  const g = document.getElementById(id); if (!g) return;
  g.querySelectorAll('.pill').forEach(p => {
    p.addEventListener('click', function() {
      const inp = this.querySelector('input');
      if (type === 'r') { g.querySelectorAll('.pill').forEach(x => x.classList.remove('on')); inp.checked = true; this.classList.add('on'); }
      else { inp.checked = !inp.checked; this.classList.toggle('on', inp.checked); }
    });
  });
}

/* ════ VALIDATION RULES ════ */
const RULES = {
  firstName:   v => !v ? 'First name is required' : v.length < 2 ? 'Must be at least 2 characters' : /[^a-zA-ZÀ-ÿ\s'\-]/.test(v) ? 'Name can only contain letters, spaces, hyphens or apostrophes' : '',
  lastName:    v => !v ? 'Last name is required'  : v.length < 2 ? 'Must be at least 2 characters' : /[^a-zA-ZÀ-ÿ\s'\-]/.test(v) ? 'Name can only contain letters, spaces, hyphens or apostrophes' : '',
  dob:         v => { if (!v) return 'Date of birth is required'; const d = new Date(v), c = new Date(); c.setFullYear(c.getFullYear()-18); return d > c ? 'You must be at least 18 years old' : ''; },
  gender:      v => !v ? 'Please select your gender' : '',
  nationality: v => !v ? 'Please select your nationality' : '',
  email:       v => !v ? 'Email address is required' : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? 'Enter a valid email  (e.g. you@example.com)' : '',
  phone:       v => {
    if (!v) return 'Phone number is required';
    if (v.length !== 10) return 'Enter exactly 10 digits';
    if (!/^[6-9]/.test(v)) return 'Indian mobile numbers must start with 6, 7, 8 or 9';
    if (/^(\d)\1{9}$/.test(v)) return 'Number cannot be all the same digit (e.g. 9999999999)';
    let a=true, d=true;
    for (let i=1;i<v.length;i++){ if(+v[i]!==+v[i-1]+1) a=false; if(+v[i]!==+v[i-1]-1) d=false; }
    if (a) return 'Sequential numbers are not valid (e.g. 1234567890)';
    if (d) return 'Sequential numbers are not valid (e.g. 9876543210)';
    return '';
  },
  linkedin:    v => v && !/^https?:\/\/.+\..+/.test(v) ? 'Enter a valid URL starting with https://' : '',
  street:      v => !v ? 'Street address is required' : v.length < 5 ? 'Address is too short' : '',
  country:     v => !v ? 'Please select your country' : '',
  state:       v => !v ? 'Please select a state / province' : '',
  city:        v => !v ? 'City is required' : '',
  pincode:     v => !v ? 'PIN / ZIP code is required' : !/^[a-zA-Z0-9\s\-]{3,10}$/.test(v) ? 'Enter a valid PIN / ZIP code (3–10 chars)' : '',
  degree:      v => !v ? 'Please select your highest degree' : '',
  studyField:  v => !v ? 'Field of study is required' : '',
  university:  v => !v ? 'University / institution is required' : '',
  gradYear:    v => !v ? 'Please select graduation year' : '',
  gradeType:   v => !v ? 'Please select the grading system' : '',
  gpa:         v => !v ? 'Please enter your score / GPA' : '',
  jobTitle:    v => !v ? 'Job title is required' : '',
  department:  v => !v ? 'Please select a department' : '',
  experience:  v => !v ? 'Please select your experience level' : '',
  noticePeriod:v => !v ? 'Please select your notice period' : '',
  expectedCTC: v => !v ? 'Expected CTC / salary is required' : '',
  coverLetter: v => !v ? 'Cover letter is required' : v.length < 50 ? `Too short — write ${50 - v.length} more character${50 - v.length === 1 ? '' : 's'}` : '',
  ref1Name:    v => !v ? 'Reference name is required' : /[^a-zA-ZÀ-ÿ\s'\-]/.test(v) ? 'Name must contain letters only' : '',
  ref1Email:   v => !v ? 'Reference email is required' : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? 'Enter a valid email address' : '',
  portfolio:   v => v && !/^https?:\/\/.+\..+/.test(v) ? 'Enter a valid URL starting with https://' : '',
};

/* ════ LIVE / BLUR ════ */
function live(el, id) {
  if (el.classList.contains('err')) {
    const msg = (RULES[id]||(() =>''))(el.value.trim());
    if (msg) showE(id, msg); else { clearE(id); if (el.value.trim()) mkOk(el, id); }
  } else if (el.value.trim()) {
    const msg = (RULES[id]||(() =>''))(el.value.trim());
    if (!msg) mkOk(el, id);
  }
}
function blr(el, id) {
  const msg = (RULES[id]||(() =>''))(el.value.trim());
  if (msg) { showE(id, msg); el.classList.remove('ok'); }
  else if (el.value.trim()) { clearE(id); mkOk(el, id); }
}
function showE(id, msg) {
  const el = document.getElementById(id);
  const em = document.getElementById('em-'+id);
  const et = document.getElementById('et-'+id);
  if (el) { el.classList.add('err'); el.classList.remove('ok'); }
  if (em && et) { et.textContent = msg; em.classList.add('show'); }
  const fw = document.getElementById('fw-'+id); if (fw) fw.classList.remove('vok');
}
function clearE(id) {
  const el = document.getElementById(id);
  const em = document.getElementById('em-'+id);
  if (el) el.classList.remove('err');
  if (em) em.classList.remove('show');
}
function mkOk(el, id) {
  el.classList.add('ok'); el.classList.remove('err'); clearE(id);
  const fw = document.getElementById('fw-'+id); if (fw) fw.classList.add('vok');
}

/* ════ STEP VALIDATE ════ */
function validateStep(n) {
  const errs = [];
  function chk(id) {
    const el = document.getElementById(id); if (!el) return;
    const msg = (RULES[id]||(() =>''))(el.value.trim());
    if (msg) { showE(id, msg); errs.push(msg); }
    else { clearE(id); if (el.value.trim()) mkOk(el, id); }
  }
  if (n === 1) ['firstName','lastName','dob','gender','nationality','email','phone','linkedin','street','country','state','city','pincode'].forEach(chk);
  if (n === 2) {
    ['degree','studyField','university','gradYear','gradeType','gpa'].forEach(chk);
    const ls = [...document.querySelectorAll('#pg-langs input:checked')];
    if (!ls.length) { showE('langs','Please select at least one language'); errs.push('Select at least one language'); } else clearE('langs');
  }
  if (n === 3) {
    ['jobTitle','department','experience','noticePeriod','expectedCTC','coverLetter'].forEach(chk);
    if (!document.querySelector('#pg-empType input:checked')) { showE('empType','Please select your employment type'); errs.push('Select employment type'); } else clearE('empType');
    if (!document.querySelector('#pg-workMode input:checked')) { showE('workMode','Please select your work mode preference'); errs.push('Select work mode preference'); } else clearE('workMode');
    if (!skills.length) { document.getElementById('sBox').classList.add('serr'); showE('skills','Add at least one technical skill'); errs.push('Add at least one technical skill'); }
    else { document.getElementById('sBox').classList.remove('serr'); clearE('skills'); }
  }
  if (n === 4) {
    ['ref1Name','ref1Email','portfolio'].forEach(chk);
    if (!uploads['resume']) { showE('resume','Please upload your resume (PDF/DOC, max 2 MB)'); errs.push('Upload your resume'); } else clearE('resume');
    const dc = [...document.querySelectorAll('#pg-declarations input:checked')];
    if (dc.length < 3) { showE('declarations',`Please accept all 3 declarations (${dc.length}/3 accepted)`); errs.push('Accept all three declarations'); } else clearE('declarations');
  }
  const bn = document.getElementById('eb'+n), bl = document.getElementById('ebl'+n);
  if (bn && bl) {
    if (errs.length) { bl.innerHTML = errs.map(e=>`<li>${e}</li>`).join(''); bn.classList.add('show'); }
    else bn.classList.remove('show');
  }
  return errs.length === 0;
}

/* ════ NAVIGATION ════ */
function goNext() {
  if (cur === 5) { doSubmit(); return; }
  if (!validateStep(cur)) {
    const first = document.querySelector('#s'+cur+' .emsg.show');
    if (first) first.scrollIntoView({ behavior:'smooth', block:'center' });
    return;
  }
  if (cur === 4) buildReview();
  goStep(cur + 1);
}
function goPrev() { if (cur > 1) goStep(cur - 1); }

function goStep(n) {
  document.getElementById('s'+cur).classList.remove('on');
  cur = n;
  document.getElementById('s'+n).classList.add('on');
  document.getElementById('fzone').scrollTop = 0;
  updateUI();
}

function updateUI() {
  document.querySelectorAll('.sb-item').forEach(s => {
    const v = +s.dataset.s;
    s.classList.remove('active','done');
    if (v === cur) s.classList.add('active');
    else if (v < cur) s.classList.add('done');
  });
  const pct = Math.round(((cur-1)/5)*100);
  document.getElementById('pFill').style.width = pct+'%';
  document.getElementById('pPct').textContent = pct+'%';
  document.getElementById('tbTitle').textContent = TITLES[cur];
  const chip = document.getElementById('tbChip');
  if (cur === 5) { chip.textContent = 'Final Review'; chip.className = 'tb-chip final'; }
  else { chip.textContent = `Step ${cur} of 5`; chip.className = 'tb-chip'; }
  document.getElementById('btnBack').style.display = cur > 1 ? 'inline-flex' : 'none';
  const nb = document.getElementById('btnNext');
  if (cur === 5) { nb.textContent = '🚀 Submit Application'; nb.className = 'btn btn-submit'; }
  else { nb.innerHTML = 'Continue →'; nb.className = 'btn btn-main'; }
  document.getElementById('aHint').textContent = cur < 5 ? '🔒 Your data is safe and encrypted' : `${skills.length} skill${skills.length!==1?'s':''} · ${Object.keys(uploads).length} file${Object.keys(uploads).length!==1?'s':''} attached`;
}
window.addEventListener('DOMContentLoaded', () => {
  const ce = document.getElementById('country');
  Object.keys(CS).forEach(c => ce.appendChild(new Option(c,c)));

  const ne = document.getElementById('nationality');
  NATS.forEach(n => ne.appendChild(new Option(n,n)));

  const gy = document.getElementById('gradYear');
  const yr = new Date().getFullYear();
  for (let y = yr; y >= yr-50; y--) gy.appendChild(new Option(y,y));

  const mx = new Date(); 
  mx.setFullYear(mx.getFullYear()-18);
  document.getElementById('dob').max = mx.toISOString().split('T')[0];

  setupPills('pg-langs','cb');
  setupPills('pg-empType','r');
  setupPills('pg-workMode','r');
  setupPills('pg-declarations','cb');

  updateUI();   // ⭐ important line
});
/* ════ SKILLS ════ */
function onSkKey(e) {
  if (e.key==='Enter'||e.key===',') {
    e.preventDefault(); addSk(this.value.trim().replace(/,$/,'')); this.value='';
    document.getElementById('sDrop').classList.remove('open');
  } else if (e.key==='Backspace' && this.value==='' && skills.length) rmSk(skills[skills.length-1]);
}
function onSkInp() {
  const v = this.value.toLowerCase(), dr = document.getElementById('sDrop');
  if (!v) { dr.classList.remove('open'); return; }
  const hits = SKILL_LIST.filter(s => s.toLowerCase().includes(v) && !skills.includes(s)).slice(0,8);
  if (!hits.length) { dr.classList.remove('open'); return; }
  dr.innerHTML = hits.map(h => `<div class="sdi" onmousedown="addSk('${h}');document.getElementById('sInp').value='';document.getElementById('sDrop').classList.remove('open')">${h}</div>`).join('');
  dr.classList.add('open');
}
function addSk(v) {
  v = v.trim(); if (!v||skills.includes(v)||skills.length>=20) return;
  skills.push(v); renderTags();
  document.getElementById('sBox').classList.remove('serr'); clearE('skills');
}
function rmSk(v) { skills = skills.filter(s=>s!==v); renderTags(); }
function renderTags() {
  const box = document.getElementById('sBox'), inp = document.getElementById('sInp');
  box.innerHTML = '';
  skills.forEach(s => {
    const t = document.createElement('span'); t.className = 'stag';
    t.innerHTML = `${s}<button class="stag-x" type="button" onclick="rmSk('${s.replace(/'/g,"\\'")}')">×</button>`;
    box.appendChild(t);
  });
  box.appendChild(inp); inp.focus();
  box.classList.toggle('sok', skills.length > 0);
}

/* ════ PROFICIENCY ════ */
function updProf(el) { document.getElementById('profBadge').textContent = PROF[el.value]; }

/* ════ CHAR COUNT ════ */
function updChar(el, max, fId, cId) {
  const n = el.value.length, pct = Math.min((n/max)*100, 100);
  const f = document.getElementById(fId), c = document.getElementById(cId);
  if (f) { f.style.width = pct+'%'; f.style.background = pct>90?'var(--red)':pct>70?'var(--amber)':'var(--blue)'; }
  if (c) { c.textContent = `${n} / ${max}`; c.className = 'cnum'+(pct>90?' over':pct>70?' warn':''); }
}

/* ════ FILE UPLOAD ════ */
function dzS(inp, fpId, maxMB, key) {
  const file = inp.files[0]; if (!file) return;
  if (file.size > maxMB*1024*1024) {
    showE(key==='resume'?'resume':'', `File is ${(file.size/1024/1024).toFixed(2)} MB — exceeds the ${maxMB} MB limit`);
    inp.value = ''; return;
  }
  uploads[key] = file; renderFP(fpId, file, key);
  if (key==='resume') clearE('resume');
}
function renderFP(fpId, file, key) {
  document.getElementById(fpId).innerHTML = `<div class="fpreview"><div class="fp-ico">📎</div><div class="fp-inf"><div class="fp-nm">${file.name}</div><div class="fp-sz">${(file.size/1024).toFixed(1)} KB</div></div><button class="fp-del" onclick="rmFile('${key}','${fpId}')">✕</button></div>`;
}
function rmFile(key, fpId) { delete uploads[key]; document.getElementById(fpId).innerHTML=''; }
function dzO(e,id){ e.preventDefault(); document.getElementById(id).classList.add('drag'); }
function dzL(id){ document.getElementById(id).classList.remove('drag'); }
function dzD(e,inpId,dzId,fpId,maxMB,key){
  e.preventDefault(); document.getElementById(dzId).classList.remove('drag');
  const file = e.dataTransfer.files[0]; if (!file) return;
  const inp = document.getElementById(inpId);
  try { const dt = new DataTransfer(); dt.items.add(file); inp.files = dt.files; } catch(x){}
  dzS(inp, fpId, maxMB, key);
}

/* ════ REVIEW ════ */
function gv(id) { const e = document.getElementById(id); return e ? e.value.trim() : ''; }
function buildReview() {
  const langs = [...document.querySelectorAll('#pg-langs input:checked')].map(i=>i.value);
  const empType = document.querySelector('#pg-empType input:checked')?.value||'—';
  const workMode = document.querySelector('#pg-workMode input:checked')?.value||'—';
  const res = uploads['resume'];
  const secs = [
    {t:'Personal Information',s:1,items:[{k:'Full Name',v:`${gv('firstName')} ${gv('lastName')}`},{k:'Date of Birth',v:gv('dob')},{k:'Gender',v:gv('gender')},{k:'Nationality',v:gv('nationality')},{k:'Email',v:gv('email')},{k:'Phone',v:gv('phone')},{k:'LinkedIn',v:gv('linkedin')||'—'},{k:'Address',v:[gv('street'),gv('city'),gv('state'),gv('country'),gv('pincode')].filter(Boolean).join(', ')}]},
    {t:'Education',s:2,items:[{k:'Degree',v:gv('degree')},{k:'Field',v:gv('studyField')},{k:'University',v:gv('university')},{k:'Year',v:gv('gradYear')},{k:'Score',v:`${gv('gpa')} (${gv('gradeType')})`},{k:'Certifications',v:gv('certs')||'—'},{k:'Languages',v:langs.join(', ')||'—'}]},
    {t:'Experience',s:3,items:[{k:'Job Applied',v:gv('jobTitle')},{k:'Department',v:gv('department')},{k:'Emp. Type',v:empType},{k:'Work Mode',v:workMode},{k:'Experience',v:gv('experience')},{k:'Notice Period',v:gv('noticePeriod')},{k:'Current CTC',v:gv('currentCTC')||'—'},{k:'Expected CTC',v:gv('expectedCTC')},{k:'Company',v:gv('currentCompany')||'—'}]},
    {t:'Documents & References',s:4,items:[{k:'Resume',v:res?`${res.name} (${(res.size/1024).toFixed(1)} KB)`:'—'},{k:'Portfolio',v:gv('portfolio')||'—'},{k:'Reference',v:gv('ref1Name')+(gv('ref1Title')?`, ${gv('ref1Title')}`:'')},{k:'Ref. Email',v:gv('ref1Email')}]}
  ];
  let html = '';
  secs.forEach(s => {
    html += `<div class="card"><div class="card-body"><div class="rv-sec"><div class="rv-hd"><div class="rv-ttl">${s.t}</div><button class="rv-edt" onclick="goStep(${s.s})">✏ Edit</button></div><div class="rv-grid">`;
    s.items.forEach(i => html += `<div><div class="rv-k">${i.k}</div><div class="rv-v">${i.v}</div></div>`);
    html += `</div></div></div></div>`;
  });
  html += `<div class="card"><div class="card-body"><div class="rv-sec"><div class="rv-hd"><div class="rv-ttl">Technical Skills</div><button class="rv-edt" onclick="goStep(3)">✏ Edit</button></div><div class="rv-tags">${skills.map(s=>`<span class="rv-tag">${s}</span>`).join('')||'<span style="color:var(--ink4);font-size:13px">None added</span>'}</div></div></div></div>`;
  html += `<div class="card"><div class="card-body"><div class="rv-sec"><div class="rv-hd"><div class="rv-ttl">Cover Letter</div><button class="rv-edt" onclick="goStep(3)">✏ Edit</button></div><div class="rv-body">${gv('coverLetter')}</div></div></div></div>`;
  document.getElementById('rvContent').innerHTML = html;
}

/* ════ SUBMIT ════ */
function doSubmit() {
  const btn = document.getElementById('btnNext'); btn.disabled = true; btn.innerHTML = '⏳ Submitting…';
  setTimeout(() => {
    for (let i=1;i<=5;i++) document.getElementById('s'+i).classList.remove('on');
    document.getElementById('aBar').style.display = 'none';
    document.getElementById('tbTitle').textContent = 'Application Received';
    document.getElementById('tbChip').textContent = 'Submitted ✓'; document.getElementById('tbChip').className = 'tb-chip final';
    document.getElementById('sucWrap').classList.add('show');
    document.getElementById('appId').textContent = 'Application ID: APP-' + Date.now().toString(36).toUpperCase().slice(-8);
    document.querySelectorAll('.sb-item').forEach(s => { s.classList.remove('active'); s.classList.add('done'); });
    document.getElementById('pFill').style.width = '100%'; document.getElementById('pPct').textContent = '100%';
  }, 1800);
}
