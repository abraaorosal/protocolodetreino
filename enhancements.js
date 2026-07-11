(()=>{
const K='ah-physique-profile-v1',$=s=>document.querySelector(s),today=()=>{const d=new Date(),o=d.getTimezoneOffset();return new Date(d-o*60000).toISOString().slice(0,10)};
let p;try{p=JSON.parse(localStorage.getItem(K)||'null')}catch{p=null}p={weight:'80.7',updated:'',start:today(),...(p||{})};
const save=()=>localStorage.setItem(K,JSON.stringify(p)),toast=m=>{if(typeof showToast==='function')showToast(m)},fmt=v=>{const n=Number(String(v).replace(',','.'));return Number.isFinite(n)?n.toLocaleString('pt-BR',{minimumFractionDigits:1,maximumFractionDigits:1}):'—'};
function render(){const v=fmt(p.weight);$('#currentWeightDisplay').textContent=v;$('#currentWeightInput').value=v==='—'?'':v;$('#profileSummary').textContent=`${v} kg · 1,81 m · 6x por semana`;$('#currentWeightUpdated').textContent=p.updated?`Atualizado em ${new Date(p.updated).toLocaleDateString('pt-BR')}`:'Informe seu peso de hoje'}
function submit(){const i=$('#currentWeightInput'),n=Number(i.value.trim().replace(',','.'));if(!Number.isFinite(n)||n<30||n>300){i.focus();toast('Informe um peso válido entre 30 e 300 kg');return}p.weight=n.toFixed(1);p.updated=new Date().toISOString();save();render();const w=$('#weightInput');if(w){w.value=n.toFixed(1);w.dispatchEvent(new Event('input',{bubbles:true}))}toast('Peso atual salvo')}
$('#saveCurrentWeightButton').addEventListener('click',submit);$('#currentWeightInput').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();submit()}});render();window.AHProfile={get:()=>p,save,toast};
})();
