const workouts = [
  {
    id: 'seg', short: 'SEG', day: 'Segunda-feira', focus: 'Peitoral + Bíceps',
    title: 'Peitoral Superior + Bíceps + Deltoide Lateral + Abdômen',
    objective: 'Preencher o peitoral clavicular e ampliar visualmente o tronco.',
    coach: 'Banco entre 25° e 35°. Na elevação lateral, use rest-pause apenas nas semanas 3–7: 12–15 reps, 15 s de pausa e mais 4–6 reps.',
    exercises: [
      ['1','Supino inclinado com barra','4','6–8','8–9','90–120 s'],
      ['2A','Supino inclinado máquina convergente','3','8–10','9','75 s ao fim'],
      ['2B','Crucifixo inclinado no cabo','3','10–12','9','Bi-set'],
      ['3','Cross-over baixo para alto','3','12–15','9','60 s'],
      ['4','Elevação lateral com halteres','3','15–20','9','45–60 s'],
      ['5','Rosca direta barra W','4','8–10','8–9','60–75 s'],
      ['6','Rosca alternada com supinação','3','10–12','9','60 s'],
      ['7','Spider curl','2','12–15','9–10','45–60 s'],
      ['A1','Elevação de pernas com carga','4','10–12','9','45 s'],
      ['A2','Prancha com peso','3','40–60 s','—','45 s']
    ]
  },
  {
    id: 'ter', short: 'TER', day: 'Terça-feira', focus: 'Costas + Tríceps',
    title: 'Costas — Largura + Tríceps', objective: 'Abrir as dorsais e acentuar o V‑shape.',
    coach: 'Priorize depressão escapular e conduza com os cotovelos. Este é o dia de largura: evite adicionar remadas pesadas.',
    exercises: [
      ['1','Barra fixa pronada ou puxada alta pesada','4','6–10','8–9','90 s'],
      ['2','Puxada aberta na frente','4','8–10','9','75–90 s'],
      ['3','Puxada neutra unilateral','3','10–12','9','60–75 s'],
      ['4','Pulldown com braços estendidos','3','12–15','9','60 s'],
      ['5','Pullover máquina ou cabo','2','12–15','9–10','45–60 s'],
      ['6','Tríceps corda','4','10–12','9','60 s'],
      ['7','Tríceps acima da cabeça no cabo','3','12–15','9','60 s'],
      ['8','Paralelas ou mergulho assistido','3','8–12','9','75 s']
    ]
  },
  {
    id: 'qua', short: 'QUA', day: 'Quarta-feira', focus: 'Quadríceps',
    title: 'Quadríceps + Panturrilhas + Abdômen', objective: 'Manter pernas atléticas, densas e proporcionais.',
    coach: 'Controle a descida, mantenha joelhos na linha dos pés e use amplitude máxima com estabilidade. Panturrilhas entram primeiro para receber mais energia.',
    exercises: [
      ['1','Panturrilha em pé','4','10–15','9','60 s'],
      ['2','Agachamento livre ou hack squat','4','6–8','8–9','120 s'],
      ['3','Leg press 45°','4','10–12','9','90 s'],
      ['4A','Cadeira extensora','3','12–15','9–10','75 s ao fim'],
      ['4B','Afundo com halteres','3','10 cada','9','Bi-set'],
      ['5','Passada curta ou sissy squat','2','12–15','9','60 s'],
      ['6','Panturrilha sentado','3','15–20','9','45–60 s'],
      ['A1','Abdominal máquina pesado','4','10–12','9','45–60 s'],
      ['A2','Vacuum abdominal','4','20–30 s','—','30 s']
    ]
  },
  {
    id: 'qui', short: 'QUI', day: 'Quinta-feira', focus: 'Ombros + Braços',
    title: 'Ombros + Braços', objective: 'Especializar deltoide lateral e aumentar a espessura dos braços.',
    coach: 'Conduza a elevação lateral pelo cotovelo e pare antes de o trapézio dominar. Nas semanas 6–7, faça um único drop-set na última série da máquina.',
    exercises: [
      ['1','Elevação lateral no cabo unilateral','4','12–15','9','45–60 s'],
      ['2','Desenvolvimento com halteres ou máquina','4','8–10','8–9','90 s'],
      ['3A','Elevação lateral máquina','4','12–15','9–10','60 s ao fim'],
      ['3B','Crucifixo inverso máquina/cabo','4','12–15','9','Bi-set'],
      ['4','Encolhimento com halteres','3','10–12','9','60–75 s'],
      ['5A','Rosca direta','3','8–10','9','60 s ao fim'],
      ['5B','Tríceps corda','3','10–12','9','Bi-set'],
      ['6A','Rosca martelo','3','10–12','9','60 s ao fim'],
      ['6B','Tríceps francês unilateral','3','10–12','9','Bi-set']
    ]
  },
  {
    id: 'sex', short: 'SEX', day: 'Sexta-feira', focus: 'Costas + Peito',
    title: 'Costas — Espessura + Peito', objective: 'Construir densidade dorsal e contraste no tronco.',
    coach: 'Mantenha o tórax apoiado sempre que possível para reduzir a fadiga lombar. Este treino é de espessura; não acrescente puxadas verticais pesadas.',
    exercises: [
      ['1','Remada cavalinho apoiada','4','6–8','8–9','90–120 s'],
      ['2','Remada curvada com barra ou máquina','4','8–10','9','90 s'],
      ['3','Remada unilateral com halter','3','10–12','9','75 s'],
      ['4','Remada baixa neutra com pausa','3','10–12','9','75 s'],
      ['5','Face pull','3','15–20','9','45–60 s'],
      ['6','Supino máquina convergente','3','8–10','9','75–90 s'],
      ['7','Cross-over médio','2','12–15','9','60 s'],
      ['8','Elevação lateral com halteres','3','15–20','9','45–60 s']
    ]
  },
  {
    id: 'sab', short: 'SÁB', day: 'Sábado', focus: 'Posterior + Glúteos',
    title: 'Posterior + Glúteos + Panturrilhas + Abdômen', objective: 'Completar pernas e fortalecer toda a cadeia posterior.',
    coach: 'No stiff, mantenha coluna neutra e quadril para trás. Se o jiu-jítsu estiver pesado, retire uma série de avanço e uma de hip thrust.',
    exercises: [
      ['1','Panturrilha no leg press','4','12–15','9','60 s'],
      ['2','Stiff / Romanian deadlift','4','6–8','8–9','120 s'],
      ['3','Mesa flexora','4','10–12','9','75 s'],
      ['4','Flexora unilateral','3','12 cada','9','60 s'],
      ['5','Hip thrust','3','8–10','9','90 s'],
      ['6','Avanço ou passada longa','3','10 cada','9','75 s'],
      ['7','Panturrilha sentado','3','15–20','9','45–60 s'],
      ['A1','Infra com carga','4','10–12','9','45 s'],
      ['A2','Oblíquo no cabo','3','12–15','9','45 s']
    ]
  },
  {
    id: 'dom', short: 'DOM', day: 'Domingo', focus: 'Recuperação',
    title: 'Descanso ativo', objective: 'Recuperar para sustentar performance e hipertrofia.',
    coach: 'Faça mobilidade, caminhada leve e priorize sono e alimentação. Dor articular persistente exige ajuste de técnica, carga, amplitude ou exercício.',
    exercises: [
      ['R1','Caminhada leve','1','20–40 min','Leve','—'],
      ['R2','Mobilidade geral','1','10–15 min','Leve','—'],
      ['R3','Vacuum abdominal','3','20–30 s','—','30 s']
    ]
  }
];

const phases = {
  1:{short:'F1', pill:'FASE 1', title:'Adaptação técnica', description:'Controle de fadiga, 2 RIR e técnica impecável.'},
  2:{short:'F1', pill:'FASE 1', title:'Adaptação técnica', description:'Controle de fadiga, 2 RIR e técnica impecável.'},
  3:{short:'F2', pill:'FASE 2', title:'Hipertrofia progressiva', description:'Últimas séries em 1 RIR e progressão consistente.'},
  4:{short:'F2', pill:'FASE 2', title:'Hipertrofia progressiva', description:'Últimas séries em 1 RIR e progressão consistente.'},
  5:{short:'F2', pill:'FASE 2', title:'Hipertrofia progressiva', description:'Últimas séries em 1 RIR e progressão consistente.'},
  6:{short:'F3', pill:'FASE 3', title:'Intensificação', description:'Uma técnica avançada por grupo prioritário em cada dia.'},
  7:{short:'F3', pill:'FASE 3', title:'Intensificação', description:'Uma técnica avançada por grupo prioritário em cada dia.'},
  8:{short:'F4', pill:'FASE 4', title:'Deload estratégico', description:'Reduza o volume em 40% e mantenha aproximadamente 3 RIR.'}
};

const STORAGE_KEY = 'ah-physique-v1';
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
  $('#coachText').textContent = workout.coach;
  exerciseList.innerHTML = workout.exercises.map((ex,index)=>{
    const [block,name,sets,reps,rpe,rest] = ex;
    const key = keyFor(state.activeDay,index);
    const checked = !!state.completed[key];
    return `<article class="exercise-card ${checked?'completed':''}" data-index="${index}">
      <label class="check-control" aria-label="Marcar ${name} como feito">
        <input type="checkbox" ${checked?'checked':''}/><span></span>
      </label>
      <div class="exercise-main">
        <div class="exercise-title-row"><span class="block-tag">${block}</span><strong>${name}</strong></div>
        <div class="exercise-metrics">
          <span class="metric"><b>${sets}</b> séries</span><span class="metric"><b>${reps}</b> reps</span><span class="metric">RPE <b>${rpe}</b></span><span class="metric">Desc. <b>${rest}</b></span>
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
