const workouts = [
  {
    "id": "seg",
    "short": "SEG",
    "day": "Segunda-feira",
    "focus": "Panturrilhas + core · Jiu 12h",
    "title": "Panturrilhas + core (leve)",
    "objective": "Musculação 20–30 min de manhã · Jiu-jítsu às 12h.",
    "coach": "Faça movimentos controlados com RPE 5–6 e 4–5 repetições em reserva. Sem falha muscular; preserve energia para o jiu-jítsu.",
    "exercises": [
      [
        "1",
        "Panturrilha em pé",
        "2",
        "12–15",
        "5–6",
        "60 s"
      ],
      [
        "2",
        "Panturrilha sentado",
        "2",
        "15",
        "5–6",
        "60 s"
      ],
      [
        "3",
        "Abdominal na polia",
        "2",
        "12–15",
        "5–6",
        "60 s"
      ],
      [
        "4",
        "Pallof press",
        "2",
        "12 por lado",
        "5–6",
        "45 s"
      ]
    ]
  },
  {
    "id": "ter",
    "short": "TER",
    "day": "Terça-feira",
    "focus": "Pernas A · Força",
    "title": "Pernas A — força e quadríceps",
    "objective": "Musculação 70–80 min · Força dos membros inferiores.",
    "coach": "Priorize a técnica do agachamento e não busque carga máxima toda semana. Mantenha aproximadamente 2–3 repetições em reserva na fase inicial.",
    "exercises": [
      [
        "1",
        "Agachamento livre",
        "4",
        "3–5",
        "7–8",
        "3 min"
      ],
      [
        "2",
        "Leg press 45°",
        "3",
        "8–10",
        "7–8",
        "2 min"
      ],
      [
        "3",
        "Afundo búlgaro",
        "2",
        "8 por perna",
        "7–8",
        "90 s"
      ],
      [
        "4",
        "Mesa flexora",
        "3",
        "10–12",
        "7–8",
        "75 s"
      ],
      [
        "5",
        "Panturrilha em pé",
        "3",
        "10–15",
        "7–8",
        "60 s"
      ]
    ]
  },
  {
    "id": "qua",
    "short": "QUA",
    "day": "Quarta-feira",
    "focus": "Ombros + braços · Jiu 12h",
    "title": "Ombros e braços — leve",
    "objective": "Musculação 20–30 min de manhã · Jiu-jítsu às 12h.",
    "coach": "Cargas leves, 4–5 repetições em reserva; sem falha muscular. Evite fadigar bíceps e pegadas antes dos rolas.",
    "exercises": [
      [
        "1",
        "Elevação lateral no cabo",
        "2",
        "15–20",
        "5–6",
        "60 s"
      ],
      [
        "2",
        "Crucifixo inverso máquina",
        "2",
        "15–20",
        "5–6",
        "60 s"
      ],
      [
        "3",
        "Tríceps corda",
        "1",
        "15–20",
        "5–6",
        "60 s"
      ],
      [
        "4",
        "Rosca no cabo",
        "1",
        "15–20",
        "5–6",
        "60 s"
      ]
    ]
  },
  {
    "id": "qui",
    "short": "QUI",
    "day": "Quinta-feira",
    "focus": "Superiores A · Força",
    "title": "Superiores A — força de peito e costas",
    "objective": "Musculação 70–85 min · Força de empurrar e puxar.",
    "coach": "Mantenha técnica estável no supino e na barra fixa; evite exaurir antebraços antes do jiu-jítsu de sexta-feira.",
    "exercises": [
      [
        "1",
        "Supino reto com barra",
        "4",
        "4–6",
        "7–8",
        "3 min"
      ],
      [
        "2",
        "Barra fixa pronada",
        "3",
        "4–6",
        "7–8",
        "2–3 min"
      ],
      [
        "3",
        "Remada com peito apoiado",
        "3",
        "6–8",
        "7–8",
        "2 min"
      ],
      [
        "4",
        "Desenvolvimento com halteres",
        "2",
        "6–8",
        "7–8",
        "90 s"
      ],
      [
        "5",
        "Supino inclinado máquina",
        "2",
        "8–10",
        "7–8",
        "90 s"
      ],
      [
        "6",
        "Tríceps no cabo",
        "2",
        "10–12",
        "7–8",
        "60 s"
      ]
    ]
  },
  {
    "id": "sex",
    "short": "SEX",
    "day": "Sexta-feira",
    "focus": "Core + estabilidade · Jiu 12h",
    "title": "Core e estabilizadores — leve",
    "objective": "Musculação 20–30 min de manhã · Jiu-jítsu às 12h.",
    "coach": "Fortalecimento leve do tronco, adutores e manguito rotador; sem falha, especialmente na adutora antes dos rolas.",
    "exercises": [
      [
        "1",
        "Abdominal máquina",
        "2",
        "12–15",
        "5–6",
        "60 s"
      ],
      [
        "2",
        "Pallof press no cabo",
        "2",
        "12 por lado",
        "5–6",
        "45 s"
      ],
      [
        "3",
        "Adutora máquina leve",
        "2",
        "15",
        "5–6",
        "60 s"
      ],
      [
        "4",
        "Rotação externa de ombros no cabo",
        "2",
        "15 por lado",
        "5–6",
        "45 s"
      ]
    ]
  },
  {
    "id": "sab",
    "short": "SÁB",
    "day": "Sábado",
    "focus": "Pernas B · Hipertrofia",
    "title": "Pernas B — posteriores e glúteos",
    "objective": "Musculação 65–80 min · Hipertrofia da cadeia posterior.",
    "coach": "No terra romeno, coluna neutra e quadril para trás. Se a luta de sexta-feira foi exaustiva, reduza séries ou faça apenas trabalho regenerativo leve.",
    "exercises": [
      [
        "1",
        "Terra romeno",
        "3",
        "6–8",
        "7–8",
        "2–3 min"
      ],
      [
        "2",
        "Hip thrust",
        "3",
        "8–12",
        "7–8",
        "90 s"
      ],
      [
        "3",
        "Flexora sentada",
        "3",
        "10–15",
        "7–8",
        "75 s"
      ],
      [
        "4",
        "Hack squat",
        "3",
        "8–12",
        "7–8",
        "2 min"
      ],
      [
        "5",
        "Panturrilha sentado",
        "2",
        "12–15",
        "7–8",
        "60 s"
      ]
    ]
  },
  {
    "id": "dom",
    "short": "DOM",
    "day": "Domingo",
    "focus": "Superiores B · Hipertrofia",
    "title": "Superiores B — hipertrofia de peito, costas e braços",
    "objective": "Musculação 70–85 min · Desenvolvimento muscular e estética.",
    "coach": "Treine com controle e 1–2 repetições em reserva. Preserve costas e braços para o jiu-jítsu de segunda-feira.",
    "exercises": [
      [
        "1",
        "Supino inclinado com halteres",
        "3",
        "8–12",
        "7–8",
        "90 s"
      ],
      [
        "2",
        "Puxada alta neutra",
        "3",
        "8–12",
        "7–8",
        "90 s"
      ],
      [
        "3",
        "Remada baixa apoiada",
        "2",
        "10–12",
        "7–8",
        "90 s"
      ],
      [
        "4",
        "Crucifixo no cabo",
        "2",
        "12–15",
        "7–8",
        "60 s"
      ],
      [
        "5",
        "Elevação lateral",
        "3",
        "12–20",
        "7–8",
        "60 s"
      ],
      [
        "6",
        "Crucifixo inverso",
        "2",
        "12–20",
        "7–8",
        "60 s"
      ],
      [
        "7",
        "Rosca martelo",
        "2",
        "10–12",
        "7–8",
        "60 s"
      ],
      [
        "8",
        "Tríceps corda",
        "2",
        "10–12",
        "7–8",
        "60 s"
      ]
    ]
  }
];

const phases = {
  "1": {
    "short": "F1",
    "pill": "FASE 1",
    "title": "Calibrar cargas e técnica",
    "description": "Mantenha 2–3 repetições em reserva nos treinos principais."
  },
  "2": {
    "short": "F1",
    "pill": "FASE 1",
    "title": "Calibrar cargas e técnica",
    "description": "Mantenha 2–3 repetições em reserva nos treinos principais."
  },
  "3": {
    "short": "F2",
    "pill": "FASE 2",
    "title": "Progressão controlada",
    "description": "Avance repetições e cargas conforme sua recuperação."
  },
  "4": {
    "short": "F2",
    "pill": "FASE 2",
    "title": "Progressão controlada",
    "description": "Avance repetições e cargas conforme sua recuperação."
  },
  "5": {
    "short": "F3",
    "pill": "FASE 3",
    "title": "Consolidar força e hipertrofia",
    "description": "Evolua com 1–2 repetições em reserva, sem falha generalizada."
  },
  "6": {
    "short": "F3",
    "pill": "FASE 3",
    "title": "Consolidar força e hipertrofia",
    "description": "Evolua com 1–2 repetições em reserva, sem falha generalizada."
  },
  "7": {
    "short": "F3",
    "pill": "FASE 3",
    "title": "Consolidar força e hipertrofia",
    "description": "Evolua com 1–2 repetições em reserva, sem falha generalizada."
  },
  "8": {
    "short": "F4",
    "pill": "FASE 4",
    "title": "Deload estratégico",
    "description": "Reduza 40–50% das séries e mantenha amplo RIR."
  }
};

const STORAGE_KEY = 'ah-hybrid-v3';
const defaultState = { week: 1, activeDay: 0, completed: {}, logs: {}, evolution: {}, settings: { compact:false, confirm:true } };
let state = loadState();

const $ = (selector) => document.querySelector(selector);
const dayTabs = $('#dayTabs');
const exerciseList = $('#exerciseList');

function loadState(){
  try { return { ...structuredClone(defaultState), ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') }; }
  catch { return structuredClone(defaultState); }
}
function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function keyFor(dayIndex, exerciseIndex){ return `w${state.week}-${workouts[dayIndex].id}-${exerciseIndex}`; }
function logKey(dayIndex, exerciseIndex, type){ return `${keyFor(dayIndex, exerciseIndex)}-${type}`; }

function renderTabs(){
  dayTabs.innerHTML = workouts.map((workout,index)=>{
    const done = workout.exercises.filter((_,i)=>state.completed[keyFor(index,i)]).length;
    return `<button class="day-tab ${index===state.activeDay?'active':''}" data-day="${index}">
      <small>${workout.short}</small><strong>${workout.focus}</strong><span>${done}/${workout.exercises.length} feitos</span>
    </button>`;
  }).join('');
  dayTabs.querySelectorAll('button').forEach(btn=>btn.addEventListener('click',()=>{
    state.activeDay = Number(btn.dataset.day); saveState(); render();
    document.querySelector('#workoutSection').scrollIntoView({behavior:'smooth',block:'start'});
  }));
}

function renderWorkout(){
  const workout = workouts[state.activeDay];
  $('#activeDayLabel').textContent = workout.day.toUpperCase();
  $('#workoutTitle').textContent = workout.title;
  $('#workoutObjective').textContent = workout.objective;
  $('#coachText').textContent = workout.coach + (state.week === 8 ? ' Semana 8: séries reduzidas automaticamente para facilitar recuperação.' : '');
  exerciseList.innerHTML = workout.exercises.map((ex,index)=>{
    const [block,name,sets,reps,rpe,rest] = ex;
    const plannedSets = state.week === 8 ? Math.max(1,Math.ceil(Number(sets)*0.55)) : sets;
    const plannedRpe = state.week === 8 ? (['seg','qua','sex'].includes(workout.id) ? '5' : '6') : rpe;
    const key = keyFor(state.activeDay,index);
    const checked = !!state.completed[key];
    return `<article class="exercise-card ${checked?'completed':''}" data-index="${index}">
      <label class="check-control" aria-label="Marcar ${name} como feito">
        <input type="checkbox" ${checked?'checked':''}/><span></span>
      </label>
      <div class="exercise-main">
        <div class="exercise-title-row"><span class="block-tag">${block}</span><strong>${name}</strong></div>
        <div class="exercise-metrics">
          <span class="metric"><b>${plannedSets}</b> séries</span><span class="metric"><b>${reps}</b> reps</span><span class="metric">RPE <b>${plannedRpe}</b></span><span class="metric">Desc. <b>${rest}</b></span>
        </div>
      </div>
      <div class="exercise-log">
        <label><span>CARGA</span><input type="text" inputmode="decimal" data-log="load" value="${escapeAttr(state.logs[logKey(state.activeDay,index,'load')] || '')}" placeholder="kg" /></label>
        <label><span>REPS</span><input type="text" inputmode="numeric" data-log="reps" value="${escapeAttr(state.logs[logKey(state.activeDay,index,'reps')] || '')}" placeholder="real" /></label>
      </div>
    </article>`;
  }).join('');

  exerciseList.querySelectorAll('.exercise-card').forEach(card=>{
    const index = Number(card.dataset.index);
    const checkbox = card.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change',()=>{
      state.completed[keyFor(state.activeDay,index)] = checkbox.checked;
      saveState(); render();
      if(checkbox.checked) showToast('Exercício concluído');
    });
    card.querySelectorAll('[data-log]').forEach(input=>input.addEventListener('input',()=>{
      state.logs[logKey(state.activeDay,index,input.dataset.log)] = input.value;
      saveState();
    }));
  });
}

function renderProgress(){
  const all = workouts.flatMap((w,day)=>w.exercises.map((_,i)=>state.completed[keyFor(day,i)]));
  const completed = all.filter(Boolean).length;
  const total = all.length;
  const percent = total ? Math.round(completed/total*100) : 0;
  $('#completedCount').textContent = completed;
  $('#totalCount').textContent = total;
  $('#weekProgressLabel').textContent = `${percent}%`;
  $('#weekProgressRingText').textContent = `${percent}%`;
  $('#weekProgressRing').style.setProperty('--progress',percent);
  $('#weekProgressBar').style.width = `${percent}%`;

  const workout = workouts[state.activeDay];
  const dayDone = workout.exercises.filter((_,i)=>state.completed[keyFor(state.activeDay,i)]).length;
  const dayPercent = Math.round(dayDone/workout.exercises.length*100);
  $('#dayProgressLabel').textContent = `${dayDone} de ${workout.exercises.length}`;
  $('#dayProgressBar').style.width = `${dayPercent}%`;
}

function renderPhase(){
  const phase = phases[state.week];
  $('#phaseShort').textContent = phase.short;
  $('#phasePill').textContent = phase.pill;
  $('#phaseTitle').textContent = phase.title;
  $('#phaseDescription').textContent = phase.description;
  $('#weekSelect').value = state.week;
}

function renderEvolution(){
  const weekData = state.evolution[`w${state.week}`] || {};
  $('#weightInput').value = weekData.weight || '';
  $('#waistInput').value = weekData.waist || '';
  $('#strengthInput').value = weekData.strength || '';
  $('#visualInput').value = weekData.visual || '';
}

function render(){
  renderPhase(); renderTabs(); renderWorkout(); renderProgress(); renderEvolution();
  document.body.classList.toggle('compact',!!state.settings.compact);
  $('#compactToggle').checked = !!state.settings.compact;
  $('#confirmToggle').checked = state.settings.confirm !== false;
}

function setAllForDay(value){
  workouts[state.activeDay].exercises.forEach((_,i)=>state.completed[keyFor(state.activeDay,i)] = value);
  saveState(); render(); showToast(value ? 'Treino completo. Excelente trabalho.' : 'Marcações do dia removidas');
}
function clearAll(){
  const preservedSettings = state.settings;
  state = structuredClone(defaultState); state.settings = preservedSettings; saveState(); render();
  $('#settingsDialog').close(); showToast('Todo o progresso foi apagado');
}
function escapeAttr(value){ return String(value).replace(/[&<>'"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch])); }
let toastTimer;
function showToast(message){ const toast=$('#toast'); toast.textContent=message; toast.classList.add('show'); clearTimeout(toastTimer); toastTimer=setTimeout(()=>toast.classList.remove('show'),2200); }

$('#weekSelect').addEventListener('change',(e)=>{ state.week=Number(e.target.value); saveState(); render(); });
$('#completeDayButton').addEventListener('click',()=>setAllForDay(true));
$('#resetDayButton').addEventListener('click',()=>{
  if(state.settings.confirm !== false && !confirm('Limpar todas as marcações deste treino?')) return;
  setAllForDay(false);
});
$('#settingsButton').addEventListener('click',()=>$('#settingsDialog').showModal());
$('#compactToggle').addEventListener('change',(e)=>{ state.settings.compact=e.target.checked; saveState(); render(); });
$('#confirmToggle').addEventListener('change',(e)=>{ state.settings.confirm=e.target.checked; saveState(); });
$('#resetAllButton').addEventListener('click',()=>{ if(confirm('Apagar todo o progresso das 8 semanas? Esta ação não pode ser desfeita.')) clearAll(); });
['weightInput','waistInput','strengthInput','visualInput'].forEach(id=>{
  $(`#${id}`).addEventListener('input',(e)=>{
    const map={weightInput:'weight',waistInput:'waist',strengthInput:'strength',visualInput:'visual'};
    state.evolution[`w${state.week}`] ||= {};
    state.evolution[`w${state.week}`][map[id]]=e.target.value;
    saveState();
  });
});

const today = new Date().getDay();
if(!localStorage.getItem(STORAGE_KEY)) state.activeDay = today === 0 ? 6 : today - 1;
render();

if('serviceWorker' in navigator){ window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{})); }
