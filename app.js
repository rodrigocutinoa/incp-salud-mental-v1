/* =============================================
   FERRETHAPPY - Lógica Principal
   Detección de Estrés Emocional - 5 a 12 años
   ============================================= */

// ---- SVGs de Hurones (Mascota) ----
const FERRET = {
  happy: `<svg class="ferret-mascot" width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Cuerpo -->
    <ellipse cx="65" cy="85" rx="38" ry="30" fill="#F4C8A0"/>
    <!-- Cabeza -->
    <ellipse cx="65" cy="54" rx="30" ry="26" fill="#F4C8A0"/>
    <!-- Oreja izq -->
    <ellipse cx="43" cy="33" rx="10" ry="12" fill="#F4C8A0"/>
    <ellipse cx="43" cy="33" rx="6" ry="8" fill="#F9A8B8"/>
    <!-- Oreja der -->
    <ellipse cx="87" cy="33" rx="10" ry="12" fill="#F4C8A0"/>
    <ellipse cx="87" cy="33" rx="6" ry="8" fill="#F9A8B8"/>
    <!-- Máscara facial -->
    <ellipse cx="65" cy="58" rx="22" ry="16" fill="#fff" opacity="0.7"/>
    <!-- Ojos felices -->
    <path d="M54 51 Q57 47 60 51" stroke="#3A3560" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <path d="M70 51 Q73 47 76 51" stroke="#3A3560" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <!-- Nariz -->
    <ellipse cx="65" cy="60" rx="4" ry="2.5" fill="#F9A8B8"/>
    <!-- Sonrisa -->
    <path d="M57 65 Q65 72 73 65" stroke="#3A3560" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <!-- Cola -->
    <path d="M100 90 Q118 78 115 100 Q112 118 98 110" fill="#D4A87A"/>
    <!-- Rayitas decorativas -->
    <path d="M52 80 Q58 75 64 80" stroke="#D4A87A" stroke-width="2" stroke-linecap="round" fill="none"/>
    <!-- Brillo ojos -->
    <circle cx="56" cy="51" r="1.5" fill="white" opacity="0.8"/>
    <circle cx="72" cy="51" r="1.5" fill="white" opacity="0.8"/>
  </svg>`,

  teacher: `<svg class="ferret-mascot" width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Cuerpo -->
    <ellipse cx="65" cy="85" rx="38" ry="30" fill="#C8D8F4"/>
    <!-- Saco/ropa -->
    <path d="M35 90 Q40 78 65 80 Q90 78 95 90" fill="#9B7EC8" opacity="0.6"/>
    <!-- Cabeza -->
    <ellipse cx="65" cy="54" rx="30" ry="26" fill="#F4C8A0"/>
    <!-- Gorra de docente -->
    <rect x="46" y="30" width="38" height="7" rx="3" fill="#3A3560"/>
    <rect x="52" y="23" width="26" height="10" rx="3" fill="#3A3560"/>
    <!-- Borla -->
    <line x1="78" y1="26" x2="88" y2="20" stroke="#F7C44A" stroke-width="2"/>
    <circle cx="89" cy="19" r="3" fill="#F7C44A"/>
    <!-- Oreja izq -->
    <ellipse cx="43" cy="42" rx="9" ry="11" fill="#F4C8A0"/>
    <ellipse cx="43" cy="42" rx="5" ry="7" fill="#F9A8B8"/>
    <!-- Oreja der -->
    <ellipse cx="87" cy="42" rx="9" ry="11" fill="#F4C8A0"/>
    <ellipse cx="87" cy="42" rx="5" ry="7" fill="#F9A8B8"/>
    <!-- Máscara -->
    <ellipse cx="65" cy="58" rx="22" ry="16" fill="#fff" opacity="0.7"/>
    <!-- Ojos amigables -->
    <circle cx="56" cy="53" r="4.5" fill="#3A3560"/>
    <circle cx="74" cy="53" r="4.5" fill="#3A3560"/>
    <circle cx="57.5" cy="51.5" r="1.5" fill="white" opacity="0.9"/>
    <circle cx="75.5" cy="51.5" r="1.5" fill="white" opacity="0.9"/>
    <!-- Nariz -->
    <ellipse cx="65" cy="62" rx="3.5" ry="2.5" fill="#F9A8B8"/>
    <!-- Sonrisa amable -->
    <path d="M57 67 Q65 74 73 67" stroke="#3A3560" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <!-- Puntita bigote -->
    <line x1="50" y1="61" x2="61" y2="63" stroke="#8E8DB0" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="80" y1="61" x2="69" y2="63" stroke="#8E8DB0" stroke-width="1.2" stroke-linecap="round"/>
  </svg>`,

  thinking: `<svg class="ferret-mascot" width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Cuerpo -->
    <ellipse cx="65" cy="85" rx="38" ry="30" fill="#F4C8A0"/>
    <!-- Cabeza -->
    <ellipse cx="65" cy="54" rx="30" ry="26" fill="#F4C8A0"/>
    <!-- Oreja izq -->
    <ellipse cx="43" cy="33" rx="10" ry="12" fill="#F4C8A0"/>
    <ellipse cx="43" cy="33" rx="6" ry="8" fill="#F9A8B8"/>
    <!-- Oreja der -->
    <ellipse cx="87" cy="33" rx="10" ry="12" fill="#F4C8A0"/>
    <ellipse cx="87" cy="33" rx="6" ry="8" fill="#F9A8B8"/>
    <!-- Máscara -->
    <ellipse cx="65" cy="58" rx="22" ry="16" fill="#fff" opacity="0.7"/>
    <!-- Ojos pensativos -->
    <circle cx="56" cy="52" r="4" fill="#3A3560"/>
    <circle cx="74" cy="52" r="4" fill="#3A3560"/>
    <circle cx="57.5" cy="50.5" r="1.2" fill="white" opacity="0.8"/>
    <circle cx="75.5" cy="50.5" r="1.2" fill="white" opacity="0.8"/>
    <!-- Ceja pensativa -->
    <path d="M50 46 Q56 43 61 46" stroke="#3A3560" stroke-width="2" stroke-linecap="round" fill="none"/>
    <path d="M69 46 Q74 43 80 46" stroke="#3A3560" stroke-width="2" stroke-linecap="round" fill="none"/>
    <!-- Nariz -->
    <ellipse cx="65" cy="61" rx="3.5" ry="2.5" fill="#F9A8B8"/>
    <!-- Boca pensativa -->
    <path d="M58 67 Q65 68 72 67" stroke="#3A3560" stroke-width="2" stroke-linecap="round" fill="none"/>
    <!-- Burbuja de pensamiento -->
    <circle cx="92" cy="28" r="8" fill="white" opacity="0.85"/>
    <circle cx="88" cy="38" r="4" fill="white" opacity="0.7"/>
    <circle cx="85" cy="44" r="2.5" fill="white" opacity="0.6"/>
    <text x="88" y="32" text-anchor="middle" font-size="9" fill="#9B7EC8">?</text>
  </svg>`
};

// ---- SVGs Emociones ----
const EMOTIONS = {
  sad: {
    label: 'Triste',
    color: '#F47D6A',
    svg: `<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="29" fill="#FFDBC8" stroke="#F47D6A" stroke-width="2.5"/>
      <circle cx="22" cy="27" r="4" fill="#3A3560"/>
      <circle cx="42" cy="27" r="4" fill="#3A3560"/>
      <circle cx="23.5" cy="25.5" r="1.5" fill="white" opacity="0.8"/>
      <circle cx="43.5" cy="25.5" r="1.5" fill="white" opacity="0.8"/>
      <!-- Lágrima -->
      <ellipse cx="22" cy="36" rx="2" ry="3.5" fill="#5BA4CF" opacity="0.7"/>
      <path d="M23 43 Q32 50 41 43" stroke="#F47D6A" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      <!-- Cejas tristes -->
      <path d="M17 20 Q22 23 26 20" stroke="#3A3560" stroke-width="2" stroke-linecap="round" fill="none"/>
      <path d="M38 20 Q42 23 47 20" stroke="#3A3560" stroke-width="2" stroke-linecap="round" fill="none"/>
    </svg>`,
    smallSvg: `<svg width="36" height="36" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="29" fill="#FFDBC8" stroke="#F47D6A" stroke-width="2.5"/>
      <circle cx="22" cy="27" r="4" fill="#3A3560"/>
      <circle cx="42" cy="27" r="4" fill="#3A3560"/>
      <ellipse cx="22" cy="36" rx="2" ry="3.5" fill="#5BA4CF" opacity="0.7"/>
      <path d="M23 43 Q32 50 41 43" stroke="#F47D6A" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      <path d="M17 20 Q22 23 26 20" stroke="#3A3560" stroke-width="2" stroke-linecap="round" fill="none"/>
      <path d="M38 20 Q42 23 47 20" stroke="#3A3560" stroke-width="2" stroke-linecap="round" fill="none"/>
    </svg>`
  },
  neutral: {
    label: 'No sé',
    color: '#F7C44A',
    svg: `<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="29" fill="#FFF5B7" stroke="#F7C44A" stroke-width="2.5"/>
      <circle cx="22" cy="27" r="4" fill="#3A3560"/>
      <circle cx="42" cy="27" r="4" fill="#3A3560"/>
      <circle cx="23.5" cy="25.5" r="1.5" fill="white" opacity="0.8"/>
      <circle cx="43.5" cy="25.5" r="1.5" fill="white" opacity="0.8"/>
      <!-- Boca recta -->
      <path d="M22 43 Q32 43 42 43" stroke="#F7C44A" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      <!-- Signo de pregunta -->
      <text x="32" y="20" text-anchor="middle" font-size="7" fill="#F7C44A" font-weight="bold">??</text>
    </svg>`,
    smallSvg: `<svg width="36" height="36" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="29" fill="#FFF5B7" stroke="#F7C44A" stroke-width="2.5"/>
      <circle cx="22" cy="27" r="4" fill="#3A3560"/>
      <circle cx="42" cy="27" r="4" fill="#3A3560"/>
      <path d="M22 43 Q32 43 42 43" stroke="#F7C44A" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    </svg>`
  },
  happy: {
    label: 'Contento',
    color: '#4ABFA8',
    svg: `<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="29" fill="#B8F0D8" stroke="#4ABFA8" stroke-width="2.5"/>
      <!-- Ojos felices (arcos) -->
      <path d="M17 27 Q22 21 27 27" stroke="#3A3560" stroke-width="2.8" stroke-linecap="round" fill="none"/>
      <path d="M37 27 Q42 21 47 27" stroke="#3A3560" stroke-width="2.8" stroke-linecap="round" fill="none"/>
      <!-- Mejillas -->
      <ellipse cx="18" cy="36" rx="5" ry="3" fill="#F9A8B8" opacity="0.5"/>
      <ellipse cx="46" cy="36" rx="5" ry="3" fill="#F9A8B8" opacity="0.5"/>
      <!-- Sonrisa grande -->
      <path d="M19 38 Q32 52 45 38" stroke="#4ABFA8" stroke-width="2.8" stroke-linecap="round" fill="none"/>
      <!-- Destellos -->
      <circle cx="10" cy="14" r="3" fill="#F7C44A" opacity="0.7"/>
      <circle cx="54" cy="12" r="2" fill="#F7C44A" opacity="0.6"/>
      <circle cx="56" cy="50" r="2.5" fill="#F47D6A" opacity="0.5"/>
    </svg>`,
    smallSvg: `<svg width="36" height="36" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="29" fill="#B8F0D8" stroke="#4ABFA8" stroke-width="2.5"/>
      <path d="M17 27 Q22 21 27 27" stroke="#3A3560" stroke-width="2.8" stroke-linecap="round" fill="none"/>
      <path d="M37 27 Q42 21 47 27" stroke="#3A3560" stroke-width="2.8" stroke-linecap="round" fill="none"/>
      <ellipse cx="18" cy="36" rx="5" ry="3" fill="#F9A8B8" opacity="0.5"/>
      <ellipse cx="46" cy="36" rx="5" ry="3" fill="#F9A8B8" opacity="0.5"/>
      <path d="M19 38 Q32 52 45 38" stroke="#4ABFA8" stroke-width="2.8" stroke-linecap="round" fill="none"/>
    </svg>`
  }
};

const CATEGORIES = [
  { id: 'school',  name: 'Colegio', icon: '🏫', catClass: 'cat-school'  },
  { id: 'friends', name: 'Amigos',  icon: '👫', catClass: 'cat-friends' },
  { id: 'family',  name: 'Familia', icon: '🏠', catClass: 'cat-family'  }
];

// ---- Estado Global ----
let state = {
  profile: null,           // 'alumno' | 'docente'
  currentStudent: {
    name: '',              // '' si anónimo
    answers: {}            // { school: 'happy', friends: 'sad', ... }
  },
  allStudents: [],         // Array de { name, answers }
  categoryStep: 0,         // 0, 1, 2
  selectedEmotion: null,   // para la categoría actual
  teacherView: null        // 'summary' | 'list'
};

// ---- Helpers ----
const $ = id => document.getElementById(id);
const app = () => document.getElementById('app');

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const s = $(id);
  if (s) s.classList.add('active');
}

function render(html) {
  app().innerHTML = html;
}

// ---- PANTALLA 0: Inicio (Selección de perfil) ----
function screenHome() {
  state.profile = null;
  render(`
    <div class="screen active" id="screen-home">
      <div class="card" style="max-width:480px;width:100%">
        ${FERRET.happy}
        <div class="tag-bubble">🐾 FerretHappy</div>
        <h1>¿Cómo te sientes hoy?</h1>
        <p>Selecciona quién eres para empezar</p>
        <div class="profile-grid">
          <div class="profile-card alumno" onclick="selectProfile('alumno')" tabindex="0" role="button" aria-label="Soy Alumno">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="28" cy="28" r="26" fill="#B8F0D8"/>
              <circle cx="28" cy="22" r="10" fill="#F4C8A0"/>
              <ellipse cx="28" cy="42" rx="14" ry="10" fill="#9B7EC8" opacity="0.7"/>
              <text x="28" y="52" text-anchor="middle" font-size="11" fill="#fff" font-weight="bold">📚</text>
            </svg>
            <span>Soy Alumno ✏️</span>
          </div>
          <div class="profile-card docente" onclick="selectProfile('docente')" tabindex="0" role="button" aria-label="Soy Docente">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="28" cy="28" r="26" fill="#E4D4F4"/>
              <circle cx="28" cy="22" r="10" fill="#F4C8A0"/>
              <rect x="16" y="14" width="24" height="6" rx="3" fill="#3A3560"/>
              <ellipse cx="28" cy="42" rx="14" ry="10" fill="#4ABFA8" opacity="0.7"/>
            </svg>
            <span>Soy Docente 🍎</span>
          </div>
        </div>
        <p class="subtitle" style="margin-top:14px">Un programa para conocer cómo se sienten los niños 💜</p>
      </div>
    </div>
  `);
}

function selectProfile(profile) {
  state.profile = profile;
  if (profile === 'alumno') screenAlumnoWelcome();
  else screenDocenteWelcome();
}

// ---- ALUMNO: Bienvenida (3s countdown) ----
function screenAlumnoWelcome() {
  state.currentStudent = { name: '', answers: {} };
  state.categoryStep = 0;
  state.selectedEmotion = null;

  render(`
    <div class="screen active" id="screen-alumno-welcome">
      <div class="card" style="max-width:460px;width:100%;text-align:center">
        ${FERRET.happy}
        <h1>¡Hola! 👋</h1>
        <p style="font-size:1.2rem;font-weight:700;color:var(--text-dark)">
          Queremos saber cómo te sientes 💜
        </p>
        <p>Es muy fácil y rápido. ¡Solo tienes que tocar una carita!</p>
        <div class="countdown-wrap" id="countdown-wrap">
          <svg class="countdown-ring" width="80" height="80" viewBox="0 0 80 80">
            <circle class="countdown-track" cx="40" cy="40" r="33"/>
            <circle class="countdown-fill" id="countdown-circle" cx="40" cy="40" r="33"
              stroke-dasharray="207.3" stroke-dashoffset="0"/>
          </svg>
          <div class="countdown-text" id="countdown-num">3</div>
        </div>
        <p id="countdown-label" style="color:var(--text-light);font-size:0.9rem">Preparando...</p>
      </div>
    </div>
  `);

  let sec = 3;
  const circle = () => document.getElementById('countdown-circle');
  const num    = () => document.getElementById('countdown-num');
  const label  = () => document.getElementById('countdown-label');
  const circum = 207.3;

  const tick = () => {
    if (!circle()) return;
    const progress = (3 - sec) / 3;
    circle().style.strokeDashoffset = (circum * progress).toString();
    num().textContent = sec;
    if (sec === 0) {
      label().textContent = '¡Vamos! 🎉';
      setTimeout(screenAlumnoNombre, 600);
    } else {
      sec--;
      setTimeout(tick, 1000);
    }
  };
  setTimeout(tick, 400);
}

// ---- ALUMNO: ¿Quieres poner tu nombre? ----
function screenAlumnoNombre() {
  render(`
    <div class="screen active" id="screen-nombre">
      <div class="card" style="max-width:460px;width:100%">
        ${FERRET.thinking}
        <h2>¿Cómo te llamas? 🐾</h2>
        <p>Puedes poner tu nombre o quedarte como anónimo. ¡Tú decides!</p>
        <div class="name-box">
          <input
            class="name-input"
            id="student-name-input"
            type="text"
            placeholder="Escribe tu nombre aquí..."
            maxlength="30"
            autocomplete="off"
            spellcheck="false"
          />
          <div class="btn-group">
            <button class="btn btn-primary btn-large" onclick="saveName()">
              ¡Ese soy yo! 🎉
            </button>
            <button class="btn btn-ghost" onclick="skipName()">
              Prefiero ser anónimo 🙈
            </button>
          </div>
        </div>
      </div>
    </div>
  `);
  setTimeout(() => {
    const inp = document.getElementById('student-name-input');
    if (inp) inp.focus();
  }, 300);
}

function saveName() {
  const inp = document.getElementById('student-name-input');
  const name = inp ? inp.value.trim() : '';
  state.currentStudent.name = name || '';
  screenAlumnoCategoria(0);
}

function skipName() {
  state.currentStudent.name = '';
  screenAlumnoCategoria(0);
}

// ---- ALUMNO: Categoría ----
function screenAlumnoCategoria(step) {
  state.categoryStep = step;
  state.selectedEmotion = state.currentStudent.answers[CATEGORIES[step].id] || null;
  const cat = CATEGORIES[step];

  const dots = CATEGORIES.map((c, i) => {
    let cls = 'step-dot';
    if (i < step)  cls += ' done';
    if (i === step) cls += ' active';
    return `<div class="${cls}" aria-label="${c.name}"></div>`;
  }).join('');

  const emotionButtons = Object.entries(EMOTIONS).map(([key, em]) => {
    const selectedCls = state.selectedEmotion === key ? `selected-${key}` : '';
    return `
      <button class="emotion-btn ${selectedCls}" id="emo-${key}"
        onclick="selectEmotion('${key}')" 
        aria-label="${em.label}"
        aria-pressed="${state.selectedEmotion === key}">
        ${em.svg}
        <span class="emotion-label">${em.label}</span>
      </button>`;
  }).join('');

  const catDescriptions = {
    school:  '¿Cómo te sientes con el colegio?',
    friends: '¿Cómo te sientes con tus amigos?',
    family:  '¿Cómo te sientes en casa con tu familia?'
  };

  render(`
    <div class="screen active" id="screen-cat">
      <div class="card" style="max-width:460px;width:100%">
        <div class="category-header">
          <div class="step-dots">${dots}</div>
          <div class="category-badge">${cat.icon} ${cat.name}</div>
          <h2>${catDescriptions[cat.id]}</h2>
          <p>Toca la carita que mejor describe cómo te sientes 👇</p>
        </div>
        <div class="emotion-grid">${emotionButtons}</div>
        <div class="btn-group">
          ${step > 0 ? `<button class="btn btn-outline" onclick="screenAlumnoCategoria(${step-1})">← Volver</button>` : ''}
          <button class="btn btn-primary btn-large" id="btn-continuar" onclick="continueFromCat()"
            ${state.selectedEmotion ? '' : 'disabled style="opacity:0.5;cursor:not-allowed"'}>
            ${step < 2 ? 'Continuar →' : '¡Ver resultado! 🎉'}
          </button>
        </div>
      </div>
    </div>
  `);
}

function selectEmotion(key) {
  state.selectedEmotion = key;
  state.currentStudent.answers[CATEGORIES[state.categoryStep].id] = key;

  // Update visual
  document.querySelectorAll('.emotion-btn').forEach(btn => {
    btn.className = 'emotion-btn';
    btn.setAttribute('aria-pressed', 'false');
  });
  const selected = document.getElementById(`emo-${key}`);
  if (selected) {
    selected.classList.add(`selected-${key}`);
    selected.setAttribute('aria-pressed', 'true');
  }
  const btn = document.getElementById('btn-continuar');
  if (btn) {
    btn.disabled = false;
    btn.style.opacity = '1';
    btn.style.cursor = 'pointer';
  }
}

function continueFromCat() {
  if (!state.selectedEmotion) return;
  if (state.categoryStep < 2) {
    screenAlumnoCategoria(state.categoryStep + 1);
  } else {
    screenAlumnoResultado();
  }
}

// ---- ALUMNO: Resultado ----
function screenAlumnoResultado() {
  const studentName = state.currentStudent.name;
  const displayName = studentName ? `<strong>${studentName}</strong>` : 'Anónimo 🙈';

  const resultItems = CATEGORIES.map(cat => {
    const emotionKey = state.currentStudent.answers[cat.id];
    const emotion = EMOTIONS[emotionKey];
    return `
      <div class="result-item ${cat.catClass}">
        <span style="font-size:1.5rem">${cat.icon}</span>
        <span class="result-cat-name">${cat.name}</span>
        <div class="result-emoji-wrap">
          ${emotion.smallSvg}
          <span class="result-emotion-label">${emotion.label}</span>
        </div>
      </div>`;
  }).join('');

  render(`
    <div class="screen active" id="screen-resultado">
      <div class="card" style="max-width:460px;width:100%">
        ${FERRET.happy}
        <h2>¡Gracias, ${displayName}! 🎉</h2>
        <p>Esto es lo que nos contaste hoy:</p>
        <div class="result-cards">${resultItems}</div>
        <div class="btn-group" style="margin-top:6px">
          <button class="btn btn-coral" onclick="screenFinOrOtro()">
            ¿Qué hacemos ahora? 🐾
          </button>
        </div>
      </div>
    </div>
  `);
  saveCurrentStudent();
}

function saveCurrentStudent() {
  state.allStudents.push({
    name: state.currentStudent.name,
    answers: { ...state.currentStudent.answers }
  });
}

// ---- ALUMNO: ¿Finalizar o siguiente alumno? ----
function screenFinOrOtro() {
  render(`
    <div class="screen active" id="screen-fin-o-otro">
      <div class="card" style="max-width:460px;width:100%;text-align:center">
        ${FERRET.thinking}
        <h2>¿Qué quieres hacer? 🤔</h2>
        <p>Puedes terminar o dejarle el turno a otro compañero</p>
        <div class="btn-group" style="flex-direction:column;align-items:center;gap:14px;margin-top:10px">
          <button class="btn btn-secondary btn-large btn-full" onclick="screenAlumnoWelcome()">
            👥 Preguntar a otro alumno
          </button>
          <button class="btn btn-primary btn-large btn-full" onclick="screenHome()">
            🏠 Finalizar y volver al inicio
          </button>
        </div>
      </div>
    </div>
  `);
}

// ---- DOCENTE: Bienvenida (3s countdown) ----
function screenDocenteWelcome() {
  render(`
    <div class="screen active" id="screen-docente-welcome">
      <div class="card" style="max-width:460px;width:100%;text-align:center">
        ${FERRET.teacher}
        <h1>¡Hola, Docente! 🍎</h1>
        <p style="font-size:1.15rem;font-weight:700;color:var(--text-dark)">
          Gracias por querer escuchar a tus alumnos 💜
        </p>
        <p>Aquí puedes ver cómo se han sentido hoy en el colegio, con sus amigos y en familia.</p>
        <div class="countdown-wrap" id="countdown-wrap-doc">
          <svg class="countdown-ring" width="80" height="80" viewBox="0 0 80 80">
            <circle class="countdown-track" cx="40" cy="40" r="33"/>
            <circle class="countdown-fill" id="countdown-circle-doc" cx="40" cy="40" r="33"
              stroke-dasharray="207.3" stroke-dashoffset="0"/>
          </svg>
          <div class="countdown-text" id="countdown-num-doc">3</div>
        </div>
      </div>
    </div>
  `);

  let sec = 3;
  const circum = 207.3;
  const tick = () => {
    const circle = document.getElementById('countdown-circle-doc');
    const num    = document.getElementById('countdown-num-doc');
    if (!circle) return;
    circle.style.strokeDashoffset = (circum * (3 - sec) / 3).toString();
    num.textContent = sec;
    if (sec === 0) setTimeout(screenDocenteOpciones, 600);
    else { sec--; setTimeout(tick, 1000); }
  };
  setTimeout(tick, 400);
}

// ---- DOCENTE: Opciones ----
function screenDocenteOpciones() {
  render(`
    <div class="screen active" id="screen-docente-opts">
      <div class="card" style="max-width:460px;width:100%">
        ${FERRET.teacher}
        <h2>¿Qué quieres ver? 📊</h2>
        <p>Elige una opción para revisar los resultados de hoy</p>
        <div class="teacher-options">
          <button class="teacher-option-btn opt-summary" onclick="screenDocenteResumen()">
            <span style="font-size:2rem">📊</span>
            <div class="teacher-option-label">
              <span class="teacher-option-title">Resumen de la encuesta</span>
              <span class="teacher-option-desc">Ver totales por categoría y emoción</span>
            </div>
          </button>
          <button class="teacher-option-btn opt-list" onclick="screenDocenteLista()">
            <span style="font-size:2rem">📋</span>
            <div class="teacher-option-label">
              <span class="teacher-option-title">Lista de alumnos encuestados</span>
              <span class="teacher-option-desc">Ver cada alumno y sus respuestas</span>
            </div>
          </button>
        </div>
        <div class="btn-group" style="margin-top:8px">
          <button class="btn btn-ghost" onclick="screenHome()">← Volver al inicio</button>
        </div>
      </div>
    </div>
  `);
}

// ---- DOCENTE: Resumen ----
function screenDocenteResumen() {
  state.teacherView = 'summary';
  const total = state.allStudents.length;

  const catRows = CATEGORIES.map(cat => {
    const counts = { sad: 0, neutral: 0, happy: 0 };
    state.allStudents.forEach(s => {
      const ans = s.answers[cat.id];
      if (ans) counts[ans]++;
    });
    const pills = Object.entries(counts).map(([key, n]) =>
      n > 0 ? `<span class="emotion-pill ${key}">${EMOTIONS[key].smallSvg} ${EMOTIONS[key].label}: <strong>${n}</strong></span>` : ''
    ).join('');
    return `
      <div class="summary-cat-row">
        <span class="summary-cat-name">${cat.icon} ${cat.name}</span>
        <div class="summary-emotion-counts">${pills || '<span class="anon-badge">Sin respuestas</span>'}</div>
      </div>`;
  }).join('');

  render(`
    <div class="screen active" id="screen-doc-resumen">
      <div class="card" style="max-width:520px;width:100%">
        <h2>📊 Resumen de la encuesta</h2>
        <div class="summary-box">
          <div class="summary-stat">${total}</div>
          <div class="summary-stat-label">alumno${total !== 1 ? 's' : ''} respondió la encuesta hoy</div>
          <div class="summary-cats">${total === 0 ? '<p style="color:var(--text-light)">Aún no hay respuestas registradas.</p>' : catRows}</div>
        </div>
        <div class="btn-group">
          <button class="btn btn-success" onclick="grabarHTML()">💾 Grabar resultado</button>
          <button class="btn btn-danger" onclick="screenHome()">✗ Salir sin guardar</button>
        </div>
        <div class="spacer-sm"></div>
        <button class="btn btn-ghost btn-full" onclick="screenDocenteOpciones()">← Volver</button>
      </div>
    </div>
  `);
}

// ---- DOCENTE: Lista de alumnos ----
function screenDocenteLista() {
  state.teacherView = 'list';
  const rows = state.allStudents.length === 0
    ? `<tr><td colspan="4" style="text-align:center;color:var(--text-light);padding:20px">Aún no hay alumnos encuestados.</td></tr>`
    : state.allStudents.map((s, i) => {
        const name = s.name ? s.name : `<span class="anon-badge">Anónimo #${i+1}</span>`;
        const cells = CATEGORIES.map(cat => {
          const emo = s.answers[cat.id];
          return `<td>${emo ? EMOTIONS[emo].smallSvg : '-'}</td>`;
        }).join('');
        return `<tr><td>${name}</td>${cells}</tr>`;
      }).join('');

  render(`
    <div class="screen active" id="screen-doc-lista">
      <div class="card" style="max-width:560px;width:100%">
        <h2>📋 Lista de alumnos encuestados</h2>
        <p>${state.allStudents.length} alumno${state.allStudents.length !== 1 ? 's' : ''} registrado${state.allStudents.length !== 1 ? 's' : ''}</p>
        <div class="student-table-wrap">
          <table class="student-table">
            <thead>
              <tr>
                <th>Alumno</th>
                <th>🏫 Colegio</th>
                <th>👫 Amigos</th>
                <th>🏠 Familia</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
        <div class="btn-group">
          <button class="btn btn-success" onclick="grabarHTML()">💾 Grabar resultado</button>
          <button class="btn btn-danger" onclick="screenHome()">✗ Salir sin guardar</button>
        </div>
        <div class="spacer-sm"></div>
        <button class="btn btn-ghost btn-full" onclick="screenDocenteOpciones()">← Volver</button>
      </div>
    </div>
  `);
}

// ---- GRABAR HTML ----
function grabarHTML() {
  const total = state.allStudents.length;
  const now = new Date();
  const dateStr = now.toLocaleDateString('es-CL', { day:'2-digit', month:'2-digit', year:'numeric' });
  const timeStr = now.toLocaleTimeString('es-CL', { hour:'2-digit', minute:'2-digit' });

  // Build summary counts
  const catSummary = CATEGORIES.map(cat => {
    const counts = { sad: 0, neutral: 0, happy: 0 };
    state.allStudents.forEach(s => { const a = s.answers[cat.id]; if (a) counts[a]++; });
    return { cat, counts };
  });

  const summaryRows = catSummary.map(({ cat, counts }) =>
    `<tr>
      <td><b>${cat.icon} ${cat.name}</b></td>
      <td>${counts.sad}</td>
      <td>${counts.neutral}</td>
      <td>${counts.happy}</td>
    </tr>`
  ).join('');

  const studentRows = state.allStudents.map((s, i) => {
    const name = s.name || `Anónimo #${i+1}`;
    const cells = CATEGORIES.map(cat => {
      const emo = s.answers[cat.id];
      return `<td style="text-align:center">${emo ? EMOTIONS[emo].label : '-'}</td>`;
    }).join('');
    return `<tr><td>${name}</td>${cells}</tr>`;
  }).join('');

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>FerretHappy - Resultado ${dateStr}</title>
<style>
  body { font-family: 'Segoe UI', Arial, sans-serif; background: #f5f0ff; color: #3A3560; padding: 30px; }
  h1 { color: #9B7EC8; font-size: 2rem; }
  h2 { color: #4ABFA8; margin-top: 30px; }
  .header { display:flex; align-items:center; gap:16px; margin-bottom:24px; }
  .badge { background: #9B7EC8; color: #fff; border-radius: 50px; padding: 6px 18px; font-weight: 700; }
  table { border-collapse: collapse; width: 100%; max-width: 700px; margin-top: 12px; }
  th { background: #9B7EC8; color: #fff; padding: 10px 16px; text-align: left; }
  td { padding: 9px 16px; border-bottom: 1px solid #e4d4f4; }
  tr:nth-child(even) td { background: #f5f0ff; }
  .stat { font-size: 2.2rem; font-weight: 900; color: #9B7EC8; }
  .stat-label { font-size: 0.9rem; color: #8E8DB0; margin-bottom: 16px; }
  footer { margin-top: 40px; font-size: 0.85rem; color: #8E8DB0; }
</style>
</head>
<body>
<div class="header">
  <div>
    <h1>🐾 FerretHappy — Resultado de encuesta</h1>
    <span class="badge">Fecha: ${dateStr} — Hora: ${timeStr}</span>
  </div>
</div>

<h2>📊 Resumen General</h2>
<div class="stat">${total}</div>
<div class="stat-label">alumno${total!==1?'s':''} respondió${total!==1?'n':''} la encuesta</div>

<table>
  <thead>
    <tr>
      <th>Categoría</th>
      <th>😢 Triste</th>
      <th>😐 No sé</th>
      <th>😊 Contento</th>
    </tr>
  </thead>
  <tbody>${summaryRows}</tbody>
</table>

<h2>📋 Lista de alumnos encuestados</h2>
<table>
  <thead>
    <tr>
      <th>Alumno</th>
      <th>🏫 Colegio</th>
      <th>👫 Amigos</th>
      <th>🏠 Familia</th>
    </tr>
  </thead>
  <tbody>${studentRows || '<tr><td colspan="4">Sin datos</td></tr>'}</tbody>
</table>

<footer>Generado por FerretHappy · ${dateStr} ${timeStr}</footer>
</body>
</html>`;

  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `FerretHappy_${dateStr.replace(/\//g, '-')}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  // Show confirmation briefly
  const msg = document.createElement('div');
  msg.textContent = '✅ ¡Archivo guardado!';
  msg.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#4ABFA8;color:#fff;padding:12px 28px;border-radius:50px;font-weight:800;font-size:1rem;box-shadow:0 4px 18px rgba(74,191,168,0.4);z-index:9999';
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 2800);
}

// ---- Keyboard accessibility for profile cards ----
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && document.activeElement.classList.contains('profile-card')) {
    document.activeElement.click();
  }
});

// ---- Init ----
screenHome();
