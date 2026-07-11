(()=>{
const D=56,$=s=>document.querySelector(s),P=()=>window.AHProfile.get(),save=()=>window.AHProfile.save(),toast=m=>window.AHProfile.toast(m);
function render(){
 const p=P(),input=$('#protocolStartInput');input.value=p.start||'';
 if(!p.start){$('#daysRemaining').textContent='—';$('#countdownStatus').textContent='Defina a data de início';$('#protocolDayLabel').textContent='Ciclo de 8 semanas · 56 dias';return}
 const start=new Date(`${p.start}T00:00:00`),now=new Date();now.setHours(0,0,0,0);if(Number.isNaN(start.getTime()))return;
 const end=new Date(start);end.setDate(end.getDate()+D);
 const elapsed=Math.floor((now-start)/86400000),left=Math.ceil((end-now)/86400000),day=Math.min(Math.max(elapsed+1,1),D),week=Math.min(Math.max(Math.floor(Math.max(elapsed,0)/7)+1,1),8),date=end.toLocaleDateString('pt-BR');
 if(left>1){$('#daysRemaining').textContent=left;$('#countdownStatus').textContent=`Troca prevista para ${date}`}
 else if(left===1){$('#daysRemaining').textContent='1';$('#countdownStatus').textContent=`Troque amanhã · ${date}`}
 else if(left===0){$('#daysRemaining').textContent='0';$('#countdownStatus').textContent='Troque o protocolo hoje'}
 else{const x=Math.abs(left);$('#daysRemaining').textContent='0';$('#countdownStatus').textContent=`Protocolo encerrado há ${x} dia${x===1?'':'s'}`}
 if(elapsed<0){const x=Math.abs(elapsed);$('#protocolDayLabel').textContent=`Começa em ${x} dia${x===1?'':'s'} · 8 semanas`}
 else if(elapsed<D)$('#protocolDayLabel').textContent=`Dia ${day} de ${D} · Semana atual ${week}`;
 else $('#protocolDayLabel').textContent='Ciclo concluído · escolha uma nova data de início';
}
$('#protocolStartInput').addEventListener('change',e=>{const p=P();p.start=e.target.value;save();render();toast('Data do protocolo atualizada')});render();
})();
