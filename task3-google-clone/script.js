

// LANGUAGE TRANSLATIONS

const LANGS = {
  en: {
    about:'About',store:'Store',gmail:'Gmail',images:'Images',signin:'Sign in',
    googlesearch:'Google Search',lucky:"I'm Feeling Lucky",aimode:'AI Mode',
    offeredIn:'Google offered in:',country:'India',
    advertising:'Advertising',business:'Business',howsearch:'How Search works',
    privacy:'Privacy',terms:'Terms',settings:'Settings',
    all:'All',videos:'Videos',news:'News',maps:'Maps',tools:'Tools',search:'Search',
    moreResults:'More results',listening:'Listening…',cancel:'Cancel',
    searchByImage:'Search by image',dragImage:'Drag an image here or',uploadFile:'upload a file',
    placeholder:'Search',aiPlaceholder:'Ask anything...',
    langName:'English'
  },
  hi: {
    about:'हमारे बारे में',store:'स्टोर',gmail:'Gmail',images:'चित्र',signin:'साइन इन करें',
    googlesearch:'Google खोज',lucky:'मैं भाग्यशाली हूँ',aimode:'AI मोड',
    offeredIn:'Google यहाँ भी उपलब्ध है:',country:'भारत',
    advertising:'विज्ञापन',business:'व्यवसाय',howsearch:'Search कैसे काम करती है',
    privacy:'गोपनीयता',terms:'नियम',settings:'सेटिंग',
    all:'सभी',videos:'वीडियो',news:'समाचार',maps:'मानचित्र',tools:'टूल',search:'खोजें',
    moreResults:'अधिक परिणाम',listening:'सुन रहे हैं…',cancel:'रद्द करें',
    searchByImage:'छवि से खोजें',dragImage:'यहाँ चित्र खींचें या',uploadFile:'फ़ाइल अपलोड करें',
    placeholder:'खोजें',aiPlaceholder:'कुछ भी पूछें...',
    langName:'हिन्दी'
  },
  bn: {
    about:'আমাদের সম্পর্কে',store:'স্টোর',gmail:'Gmail',images:'ছবি',signin:'সাইন ইন করুন',
    googlesearch:'Google অনুসন্ধান',lucky:'আমি ভাগ্যবান',aimode:'AI মোড',
    offeredIn:'Google এ পাওয়া যায়:',country:'ভারত',
    advertising:'বিজ্ঞাপন',business:'ব্যবসা',howsearch:'Search কিভাবে কাজ করে',
    privacy:'গোপনীয়তা',terms:'শর্তাবলী',settings:'সেটিংস',
    all:'সব',videos:'ভিডিও',news:'সংবাদ',maps:'মানচিত্র',tools:'সরঞ্জাম',search:'অনুসন্ধান',
    moreResults:'আরো ফলাফল',listening:'শোনা হচ্ছে…',cancel:'বাতিল',
    searchByImage:'ছবি দিয়ে খুঁজুন',dragImage:'এখানে ছবি টেনে আনুন বা',uploadFile:'ফাইল আপলোড করুন',
    placeholder:'অনুসন্ধান করুন',aiPlaceholder:'যেকোনো কিছু জিজ্ঞেস করুন...',
    langName:'বাংলা'
  },
  te: {
    about:'మా గురించి',store:'స్టోర్',gmail:'Gmail',images:'చిత్రాలు',signin:'సైన్ ఇన్ చేయండి',
    googlesearch:'Google శోధన',lucky:'నా అదృష్టం',aimode:'AI మోడ్',
    offeredIn:'Google ఇక్కడ కూడా అందుబాటులో ఉంది:',country:'భారతదేశం',
    advertising:'ప్రకటనలు',business:'వ్యాపారం',howsearch:'శోధన ఎలా పనిచేస్తుంది',
    privacy:'గోప్యత',terms:'నిబంధనలు',settings:'సెట్టింగ్‌లు',
    all:'అన్నీ',videos:'వీడియోలు',news:'వార్తలు',maps:'మ్యాప్‌లు',tools:'సాధనాలు',search:'శోధించు',
    moreResults:'మరిన్ని ఫలితాలు',listening:'వింటున్నాను…',cancel:'రద్దు చేయండి',
    searchByImage:'చిత్రం ద్వారా శోధించండి',dragImage:'ఇక్కడ చిత్రాన్ని లాగండి లేదా',uploadFile:'ఫైల్ అప్‌లోడ్ చేయండి',
    placeholder:'శోధించండి',aiPlaceholder:'ఏదైనా అడగండి...',
    langName:'తెలుగు'
  },
  mr: {
    about:'आमच्याबद्दल',store:'स्टोअर',gmail:'Gmail',images:'प्रतिमा',signin:'साइन इन करा',
    googlesearch:'Google शोध',lucky:'मला नशीब आहे',aimode:'AI मोड',
    offeredIn:'Google येथेही उपलब्ध आहे:',country:'भारत',
    advertising:'जाहिरात',business:'व्यवसाय',howsearch:'शोध कसे कार्य करते',
    privacy:'गोपनीयता',terms:'अटी',settings:'सेटिंग्ज',
    all:'सर्व',videos:'व्हिडिओ',news:'बातम्या',maps:'नकाशे',tools:'साधने',search:'शोधा',
    moreResults:'अधिक निकाल',listening:'ऐकत आहे…',cancel:'रद्द करा',
    searchByImage:'प्रतिमेद्वारे शोधा',dragImage:'येथे प्रतिमा ड्रॅग करा किंवा',uploadFile:'फाइल अपलोड करा',
    placeholder:'शोधा',aiPlaceholder:'काहीही विचारा...',
    langName:'मराठी'
  },
  ta: {
    about:'எங்களை பற்றி',store:'கடை',gmail:'Gmail',images:'படங்கள்',signin:'உள்நுழைக',
    googlesearch:'Google தேடல்',lucky:'என் அதிர்ஷ்டம்',aimode:'AI பயன்முறை',
    offeredIn:'Google இங்கும் கிடைக்கிறது:',country:'இந்தியா',
    advertising:'விளம்பரம்',business:'வணிகம்',howsearch:'தேடல் எவ்வாறு செயல்படுகிறது',
    privacy:'தனியுரிமை',terms:'விதிமுறைகள்',settings:'அமைப்புகள்',
    all:'அனைத்தும்',videos:'வீடியோக்கள்',news:'செய்திகள்',maps:'வரைபடங்கள்',tools:'கருவிகள்',search:'தேடு',
    moreResults:'மேலும் முடிவுகள்',listening:'கேட்கிறேன்…',cancel:'ரத்து செய்',
    searchByImage:'படத்தால் தேடுங்கள்',dragImage:'படத்தை இங்கே இழுக்கவும் அல்லது',uploadFile:'கோப்பை பதிவேற்றவும்',
    placeholder:'தேடுங்கள்',aiPlaceholder:'எதையும் கேளுங்கள்...',
    langName:'தமிழ்'
  },
  gu: {
    about:'અમારા વિશે',store:'સ્ટોર',gmail:'Gmail',images:'છબીઓ',signin:'સાઇન ઇન કરો',
    googlesearch:'Google શોધ',lucky:'હું નસીબદાર છું',aimode:'AI મોડ',
    offeredIn:'Google અહીં પણ ઉપલબ્ધ છે:',country:'ભારત',
    advertising:'જાહેરાત',business:'વ્યવસાય',howsearch:'શોધ કેવી રીતે કાર્ય કરે છે',
    privacy:'ગોપનીયતા',terms:'શરતો',settings:'સેટિંગ્સ',
    all:'બધા',videos:'વીડિઓ',news:'સમાચાર',maps:'નકશા',tools:'સાધનો',search:'શોધો',
    moreResults:'વધુ પરિણામો',listening:'સાંભળી રહ્યો છું…',cancel:'રદ કરો',
    searchByImage:'છબી દ્વારા શોધો',dragImage:'અહીં છબી ખેંચો અથવા',uploadFile:'ફાઇલ અપલોડ કરો',
    placeholder:'શોધો',aiPlaceholder:'કંઈ પણ પૂછો...',
    langName:'ગુજરાતી'
  },
  kn: {
    about:'ನಮ್ಮ ಬಗ್ಗೆ',store:'ಸ್ಟೋರ್',gmail:'Gmail',images:'ಚಿತ್ರಗಳು',signin:'ಸೈನ್ ಇನ್ ಮಾಡಿ',
    googlesearch:'Google ಹುಡುಕಾಟ',lucky:'ನಾನು ಅದೃಷ್ಟಶಾಲಿ',aimode:'AI ಮೋಡ್',
    offeredIn:'Google ಇಲ್ಲಿಯೂ ಲಭ್ಯವಿದೆ:',country:'ಭಾರತ',
    advertising:'ಜಾಹೀರಾತು',business:'ವ್ಯಾಪಾರ',howsearch:'ಹುಡುಕಾಟ ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ',
    privacy:'ಗೌಪ್ಯತೆ',terms:'ನಿಯಮಗಳು',settings:'ಸೆಟ್ಟಿಂಗ್‌ಗಳು',
    all:'ಎಲ್ಲಾ',videos:'ವೀಡಿಯೊಗಳು',news:'ಸುದ್ದಿ',maps:'ನಕ್ಷೆಗಳು',tools:'ಪರಿಕರಗಳು',search:'ಹುಡುಕಿ',
    moreResults:'ಹೆಚ್ಚಿನ ಫಲಿತಾಂಶಗಳು',listening:'ಕೇಳಿಸಿಕೊಳ್ಳುತ್ತಿದ್ದೇನೆ…',cancel:'ರದ್ದು ಮಾಡಿ',
    searchByImage:'ಚಿತ್ರದಿಂದ ಹುಡುಕಿ',dragImage:'ಇಲ್ಲಿ ಚಿತ್ರ ಎಳೆಯಿರಿ ಅಥವಾ',uploadFile:'ಫೈಲ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',
    placeholder:'ಹುಡುಕಿ',aiPlaceholder:'ಏನಾದರೂ ಕೇಳಿ...',
    langName:'ಕನ್ನಡ'
  },
  ml: {
    about:'ഞങ്ങളെക്കുറിച്ച്',store:'സ്റ്റോർ',gmail:'Gmail',images:'ചിത്രങ്ങൾ',signin:'സൈൻ ഇൻ ചെയ്യുക',
    googlesearch:'Google തിരയൽ',lucky:'ഞാൻ ഭാഗ്യശാലി',aimode:'AI മോഡ്',
    offeredIn:'Google ഇവിടെയും ലഭ്യമാണ്:',country:'ഇന്ത്യ',
    advertising:'പരസ്യം',business:'ബിസിനസ്സ്',howsearch:'തിരയൽ എങ്ങനെ പ്രവർത്തിക്കുന്നു',
    privacy:'സ്വകാര്യത',terms:'നിബന്ധനകൾ',settings:'ക്രമീകരണങ്ങൾ',
    all:'എല്ലാം',videos:'വീഡിയോകൾ',news:'വാർത്തകൾ',maps:'മാപ്പുകൾ',tools:'ഉപകരണങ്ങൾ',search:'തിരയുക',
    moreResults:'കൂടുതൽ ഫലങ്ങൾ',listening:'കേൾക്കുന്നു…',cancel:'റദ്ദാക്കുക',
    searchByImage:'ചിത്രം ഉപയോഗിച്ച് തിരയുക',dragImage:'ഇവിടെ ചിത്രം വലിച്ചിടുക അല്ലെങ്കിൽ',uploadFile:'ഫയൽ അപ്‌ലോഡ് ചെയ്യുക',
    placeholder:'തിരയുക',aiPlaceholder:'എന്തും ചോദിക്കൂ...',
    langName:'മലയാളം'
  },
  pa: {
    about:'ਸਾਡੇ ਬਾਰੇ',store:'ਸਟੋਰ',gmail:'Gmail',images:'ਚਿੱਤਰ',signin:'ਸਾਈਨ ਇਨ ਕਰੋ',
    googlesearch:'Google ਖੋਜ',lucky:'ਮੈਂ ਖੁਸ਼ਕਿਸਮਤ ਹਾਂ',aimode:'AI ਮੋਡ',
    offeredIn:'Google ਇੱਥੇ ਵੀ ਉਪਲਬਧ ਹੈ:',country:'ਭਾਰਤ',
    advertising:'ਇਸ਼ਤਿਹਾਰ',business:'ਕਾਰੋਬਾਰ',howsearch:'ਖੋਜ ਕਿਵੇਂ ਕੰਮ ਕਰਦੀ ਹੈ',
    privacy:'ਗੋਪਨੀਯਤਾ',terms:'ਸ਼ਰਤਾਂ',settings:'ਸੈਟਿੰਗਾਂ',
    all:'ਸਭ',videos:'ਵੀਡੀਓ',news:'ਖ਼ਬਰਾਂ',maps:'ਨਕਸ਼ੇ',tools:'ਸੰਦ',search:'ਖੋਜੋ',
    moreResults:'ਹੋਰ ਨਤੀਜੇ',listening:'ਸੁਣ ਰਿਹਾ ਹਾਂ…',cancel:'ਰੱਦ ਕਰੋ',
    searchByImage:'ਚਿੱਤਰ ਨਾਲ ਖੋਜੋ',dragImage:'ਇੱਥੇ ਚਿੱਤਰ ਖਿੱਚੋ ਜਾਂ',uploadFile:'ਫਾਈਲ ਅਪਲੋਡ ਕਰੋ',
    placeholder:'ਖੋਜੋ',aiPlaceholder:'ਕੁਝ ਵੀ ਪੁੱਛੋ...',
    langName:'ਪੰਜਾਬੀ'
  }
};

let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  const t = LANGS[lang];
  if (!t) return;

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Update placeholders
  document.getElementById('sinput').placeholder = t.placeholder;
  const aiTA = document.getElementById('ai-textarea');
  if (aiTA) aiTA.placeholder = t.aiPlaceholder;

  // Show English link if not English
  const enLink = document.getElementById('en-link');
  if (enLink) enLink.style.display = lang === 'en' ? 'none' : 'inline';

  // Update html lang
  document.documentElement.lang = lang;

  // Update page title
  document.title = lang === 'en' ? 'Google' : 'Google';
}


// SUGGESTIONS & RESULTS

const SUGGESTIONS = [
  "google search","google maps","google translate","google drive","google docs",
  "google meet","google photos","google chrome","gmail","youtube",
  "weather today","news","stock market","how to code in python",
  "best restaurants near me","apple","amazon","facebook","twitter",
  "instagram","netflix","wikipedia","world cup 2026","AI news","latest movies",
  "cricket score","ipl 2025","bollywood movies","recipes","jokes"
];

const fakeResults = q => [
  {title:`${q} - Wikipedia`,url:`https://en.wikipedia.org/wiki/${encodeURIComponent(q)}`,src:"en.wikipedia.org",desc:`${q} refers to a widely studied subject. Wikipedia provides comprehensive coverage of its history, context and related topics.`},
  {title:`${q} | Official Website`,url:`https://www.${q.replace(/\s+/g,'-').toLowerCase()}.com`,src:`${q.replace(/\s+/g,'').toLowerCase()}.com`,desc:`The official web presence for ${q}. Find the latest information, updates, and resources here.`},
  {title:`${q} - Britannica Encyclopedia`,url:`https://www.britannica.com/topic/${encodeURIComponent(q)}`,src:"britannica.com",desc:`Authoritative encyclopedic entry on ${q} with in-depth analysis, facts, and verified references.`},
  {title:`${q} News & Updates - Google News`,url:`https://news.google.com/search?q=${encodeURIComponent(q)}`,src:"news.google.com",desc:`Latest news coverage of ${q} from thousands of trusted publishers worldwide, updated in real time.`},
  {title:`${q} - YouTube`,url:`https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`,src:"youtube.com",desc:`Explore videos about ${q} including tutorials, documentaries, reviews and more from creators worldwide.`},
  {title:`What is ${q}? Reddit Discussion`,url:`https://www.reddit.com/search/?q=${encodeURIComponent(q)}`,src:"reddit.com",desc:`Community-driven discussions and insights about ${q} from millions of Reddit users around the globe.`},
  {title:`${q} - Stack Overflow Q&A`,url:`https://stackoverflow.com/search?q=${encodeURIComponent(q)}`,src:"stackoverflow.com",desc:`Technical questions and answers about ${q} from the world's largest developer community.`}
];


// ELEMENTS

const home = document.getElementById('home');
const resultsPage = document.getElementById('results-page');
const aiPage = document.getElementById('ai-page');
const sinput = document.getElementById('sinput');
const sbox = document.getElementById('sbox');
const acDrop = document.getElementById('ac-drop');
const clearBtn = document.getElementById('clear-btn');

// HOME SEARCH INPUT

sinput.addEventListener('input', () => {
  const v = sinput.value.trim();
  clearBtn.style.display = v ? 'flex' : 'none';
  showAC(v);
});
sinput.addEventListener('focus', () => { sbox.classList.add('focused'); showAC(sinput.value); });
sinput.addEventListener('blur', () => { setTimeout(() => { sbox.classList.remove('focused','open-ac'); acDrop.classList.remove('show'); }, 160); });
sinput.addEventListener('keydown', e => { if (e.key==='Enter') doSearch(sinput.value); });
clearBtn.addEventListener('click', () => { sinput.value=''; clearBtn.style.display='none'; acDrop.classList.remove('show'); sbox.classList.remove('open-ac'); sinput.focus(); });


// AUTOCOMPLETE

function showAC(q) {
  if (!q) { acDrop.classList.remove('show'); sbox.classList.remove('open-ac'); return; }
  const f = SUGGESTIONS.filter(s => s.toLowerCase().includes(q.toLowerCase())).slice(0,8);
  if (!f.length) { acDrop.classList.remove('show'); sbox.classList.remove('open-ac'); return; }
  acDrop.innerHTML = f.map(s=>`
    <div class="ac-item" onmousedown="pickAC('${s.replace(/'/g,"\\'")}')">
      <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
      <span>${s}</span>
    </div>`).join('');
  acDrop.classList.add('show');
  sbox.classList.add('open-ac');
}
function pickAC(s) { sinput.value=s; acDrop.classList.remove('show'); sbox.classList.remove('open-ac'); doSearch(s); }


// BUTTONS

document.getElementById('gsearch-btn').addEventListener('click', () => doSearch(sinput.value));
document.getElementById('lucky-btn').addEventListener('click', () => { if(sinput.value) window.open(`https://www.google.com/search?q=${encodeURIComponent(sinput.value)}&btnI=1`,'_blank'); });


// NAVIGATION

function goHome() {
  home.style.display = 'flex';
  resultsPage.classList.remove('active');
  aiPage.classList.remove('active');
  sinput.value = ''; clearBtn.style.display = 'none';
}


// VOICE SEARCH

function startVoice(onResult) {
  if (!('webkitSpeechRecognition' in window||'SpeechRecognition' in window)) { alert('Voice search not supported in this browser.'); return; }
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const rec = new SR(); rec.lang='en-US'; rec.start();
  const vm = document.getElementById('voice-modal');
  vm.classList.add('open');
  document.getElementById('vstatus').textContent = LANGS[currentLang].listening || 'Listening…';
  rec.onresult = e => { vm.classList.remove('open'); onResult(e.results[0][0].transcript); };
  rec.onerror = rec.onend = () => vm.classList.remove('open');
}
document.getElementById('mic-btn').addEventListener('click', () => {
  document.getElementById('mic-btn').classList.add('listening');
  startVoice(t => { document.getElementById('mic-btn').classList.remove('listening'); sinput.value=t; clearBtn.style.display='flex'; doSearch(t); });
});
document.getElementById('vclose').addEventListener('click', () => document.getElementById('voice-modal').classList.remove('open'));


// GOOGLE LENS

function openLens() { document.getElementById('lens-modal').classList.add('open'); }
function closeLens() { document.getElementById('lens-modal').classList.remove('open'); }
document.getElementById('lens-btn').addEventListener('click', openLens);
document.getElementById('lens-modal').addEventListener('click', e => { if(e.target===document.getElementById('lens-modal')) closeLens(); });
function handleLensFile(input) {
  if (!input.files || !input.files[0]) return;
  const file = input.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    closeLens();
    alert('Google Lens would analyze: ' + file.name + '\n(In a real implementation this would perform visual search)');
  };
  reader.readAsDataURL(file);
}


// AI MODE

function openAIMode(query) {
  home.style.display = 'none';
  resultsPage.classList.remove('active');
  aiPage.classList.add('active');
  const ta = document.getElementById('ai-textarea');
  const history = document.getElementById('ai-chat-history');
  if (query && query.trim()) {
    ta.value = '';
    history.innerHTML = '';
    processAIQuery(query);
  } else {
    ta.value = ''; history.innerHTML = '';
    ta.focus();
  }
}
document.getElementById('ai-pill-btn').addEventListener('click', () => openAIMode(sinput.value));

function autoResize(ta) {
  ta.style.height='auto';
  ta.style.height = Math.min(ta.scrollHeight, 200) + 'px';
}

function sendAIQuery() {
  const ta = document.getElementById('ai-textarea');
  const q = ta.value.trim();
  if (!q) return;
  ta.value=''; ta.style.height='auto';
  processAIQuery(q);
}

document.getElementById('ai-textarea').addEventListener('keydown', e => {
  if (e.key==='Enter' && !e.shiftKey) { e.preventDefault(); sendAIQuery(); }
});

const AI_RESPONSES = [
  q => `Based on my knowledge, here's what I can tell you about <strong>${q}</strong>:<br><br>This is a topic with rich context and multiple perspectives. The key aspects include its historical background, current significance, and practical applications in today's world. Multiple authoritative sources agree on the core facts, while offering varied interpretations of its broader implications.<br><br>Would you like me to explore any specific aspect in more detail?`,
  q => `Great question about <strong>${q}</strong>! Here's a comprehensive overview:<br><br>This subject has been extensively studied and documented. The main points to understand are: (1) its foundational principles, (2) how it has evolved over time, and (3) its real-world impact today. Experts in this field generally agree on the fundamentals, though nuances exist in interpretation.<br><br>Is there a particular angle you'd like to dive deeper into?`,
  q => `Regarding <strong>${q}</strong> — here's what the evidence shows:<br><br>This is a multifaceted topic. From a factual standpoint, the most important things to know are its origins, current state, and future trajectory. Research suggests several key insights that can help you better understand this subject in context.<br><br>Feel free to ask follow-up questions!`
];

let aiResponseIndex = 0;
function processAIQuery(q) {
  const history = document.getElementById('ai-chat-history');
  // User message
  history.innerHTML += `<div style="display:flex;justify-content:flex-end;margin-bottom:16px;"><div style="background:#e8f0fe;border-radius:18px 18px 4px 18px;padding:12px 16px;max-width:80%;font-size:15px;color:#202124;">${q}</div></div>`;
  // AI typing indicator
  const aiId = 'ai-resp-' + Date.now();
  history.innerHTML += `<div id="${aiId}" style="margin-bottom:20px;"><div class="ai-tag"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2C12 2 13.5 7.5 18 9C13.5 10.5 12 16 12 16C12 16 10.5 10.5 6 9C10.5 7.5 12 2 12 2Z" fill="url(#rg${aiId})"/><defs><linearGradient id="rg${aiId}" x1="6" y1="2" x2="18" y2="16" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#4285f4"/><stop offset="100%" stop-color="#ea4335"/></linearGradient></defs></svg> Gemini</div><div class="ai-response" id="resp-body-${aiId}"><span style="color:#9aa0a6;">●●●</span></div></div>`;
  history.scrollTop = history.scrollHeight;

  setTimeout(() => {
    const body = document.getElementById('resp-body-' + aiId);
    if (!body) return;
    const resp = AI_RESPONSES[aiResponseIndex % AI_RESPONSES.length](q);
    aiResponseIndex++;
    body.innerHTML = '';
    typeHTML(body, resp);
  }, 800);
}

function typeHTML(el, html) {
  el.innerHTML='';
  let i=0;
  const iv = setInterval(() => {
    if (i <= html.length) { el.innerHTML = html.slice(0,i); i+=5; }
    else { el.innerHTML = html; clearInterval(iv); }
  }, 16);
}


// MAIN SEARCH

function doSearch(q) {
  q = q.trim(); if (!q) return;
  home.style.display = 'none';
  aiPage.classList.remove('active');
  resultsPage.classList.add('active');
  document.getElementById('rinput').value = q;
  document.getElementById('rclear').style.display = 'flex';
  acDrop.classList.remove('show'); sbox.classList.remove('open-ac');
  document.title = q + ' - Google Search';

  const results = fakeResults(q);
  const count = (Math.floor(Math.random()*900)+100)*1000000;
  const time = (Math.random()*.5+.3).toFixed(2);
  const t = LANGS[currentLang];
  document.getElementById('rinfo').textContent = `About ${count.toLocaleString()} results (${time} seconds)`;

  // AI Overview box
  document.getElementById('ai-ov').innerHTML = `
    <div class="ai-overview">
      <div class="ai-ov-head">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2C12 2 13.5 7.5 18 9C13.5 10.5 12 16 12 16C12 16 10.5 10.5 6 9C10.5 7.5 12 2 12 2Z" fill="url(#ovg)"/><defs><linearGradient id="ovg" x1="6" y1="2" x2="18" y2="16" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#4285f4"/><stop offset="100%" stop-color="#ea4335"/></linearGradient></defs></svg>
        AI Overview
      </div>
      <div class="ai-ov-body" id="ai-ov-text"></div>
      <button onclick="openAIMode('${q.replace(/'/g,"\\'")}');return false;" style="margin-top:12px;background:none;border:1px solid #dadce0;border-radius:20px;padding:6px 16px;font-size:13px;color:#1a73e8;cursor:pointer;position:relative;">
        ✨ Continue in AI Mode →
      </button>
    </div>`;
  typeHTML(document.getElementById('ai-ov-text'), `<strong>${q}</strong> is a topic with broad significance. Here is a concise overview: it spans multiple domains including academic, professional, and popular culture. Key facts have been verified across leading sources. For a more comprehensive, conversational exploration, try AI Mode.`);

  document.getElementById('rlist').innerHTML = results.map((r,i) => `
    <div class="r-item">
      <div class="r-url">
        <div class="r-fav" style="background:${['#4285f4','#ea4335','#fbbc05','#34a853'][i%4]}">${r.src[0].toUpperCase()}</div>
        <div><div class="r-src">${r.src}</div><div class="r-srcurl">${r.url}</div></div>
      </div>
      <div class="r-title" onclick="window.open('${r.url}','_blank')">${r.title}</div>
      <div class="r-desc">${r.desc}</div>
    </div>`).join('');
}


// RESULTS TABS

document.querySelectorAll('.r-navbtn').forEach(btn => {
  btn.addEventListener('click', () => { document.querySelectorAll('.r-navbtn').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); });
});


// APPS PANEL

document.getElementById('apps-btn').addEventListener('click', e => { e.stopPropagation(); document.getElementById('apps-modal').classList.toggle('open'); });
document.getElementById('apps-modal').addEventListener('click', e => { if(e.target===document.getElementById('apps-modal')) document.getElementById('apps-modal').classList.remove('open'); });
document.addEventListener('click', () => document.getElementById('apps-modal').classList.remove('open'));

// Logo click on results page
document.getElementById('rlogo').addEventListener('click', goHome);
