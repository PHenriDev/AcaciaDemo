
/* ═══════════════════════════════════════════════════
   ACACIA — app.js
   Versão expandida: login dual, portal paciente,
   CRM Kanban, sistema de lembretes
═══════════════════════════════════════════════════ */

/* ── USUÁRIOS ── */
const USUARIOS_PSI = { admin: 'acacia2026', dra_ana: 'ana123' };

/* pacientes com credenciais de login */
let tipoLoginAtual = 'psicologo';

/* ── BASE DE DADOS ── */
let P = [
  {id:1,nome:'Mariana Souza',i:'MS',status:'Ativo',s:12,u:'12/04/2026',p:'18/04/2026 14:00',a:'TCC',tel:'(81) 99999-1111',em:'mariana@email.com',n:'15/03/1990',q:'Ansiedade generalizada e dificuldades no trabalho.',login:'mariana',senha:'mari123'},
  {id:2,nome:'Carlos Mendes',i:'CM',status:'Ativo',s:5,u:'10/04/2026',p:'18/04/2026 15:30',a:'Psicanálise',tel:'(81) 99999-2222',em:'carlos@email.com',n:'22/07/1985',q:'Depressão e isolamento social.',login:'carlos',senha:'carl123'},
  {id:3,nome:'Beatriz Lima',i:'BL',status:'Ativo',s:8,u:'09/04/2026',p:'18/04/2026 17:00',a:'Gestalt',tel:'(81) 99999-3333',em:'beatriz@email.com',n:'05/11/1995',q:'Transtorno de ansiedade e fobias.',login:'beatriz',senha:'bea123'},
  {id:4,nome:'João Pedro',i:'JP',status:'Ativo',s:20,u:'14/04/2026',p:'21/04/2026 09:00',a:'TCC',tel:'(81) 99999-4444',em:'joao@email.com',n:'30/01/1988',q:'TOC e rituais compulsivos.',login:'joao',senha:'joao123'},
  {id:5,nome:'Ana Clara',i:'AC',status:'Ativo',s:15,u:'15/04/2026',p:'22/04/2026 10:00',a:'Humanista',tel:'(81) 99999-5555',em:'anaclara@email.com',n:'18/06/1992',q:'Luto e dificuldades de relacionamento.',login:'anaclara',senha:'ana123'},
  {id:6,nome:'Roberto Melo',i:'RM',status:'Inativo',s:3,u:'01/02/2026',p:'—',a:'TCC',tel:'(81) 99999-6666',em:'roberto@email.com',n:'12/09/1978',q:'Estresse ocupacional.',login:'roberto',senha:'rob123'},
  {id:7,nome:'Fernanda Lopes',i:'FL',status:'Ativo',s:9,u:'15/04/2026',p:'22/04/2026 16:00',a:'EMDR',tel:'(81) 99999-7777',em:'fernanda@email.com',n:'25/04/1993',q:'Trauma e PTSD.',login:'fernanda',senha:'fern123'},
  {id:8,nome:'Sofia Rocha',i:'SR',status:'Ativo',s:14,u:'17/04/2026',p:'21/04/2026 09:30',a:'Psicanálise',tel:'(81) 99999-8888',em:'sofia@email.com',n:'07/12/1987',q:'Conflitos familiares e autoestima.',login:'sofia',senha:'sofia123'},
  {id:9,nome:'Diego Neto',i:'DN',status:'Ativo',s:6,u:'17/04/2026',p:'24/04/2026 13:00',a:'TCC',tel:'(81) 99999-9999',em:'diego@email.com',n:'14/02/1996',q:'Fobia social e timidez excessiva.',login:'diego',senha:'diego123'},
  {id:10,nome:'Laura Moura',i:'LM',status:'Alta',s:28,u:'10/03/2026',p:'—',a:'TCC',tel:'(81) 98888-1111',em:'laura@email.com',n:'03/08/1984',q:'Depressão — alta concedida.',login:'laura',senha:'laura123'},
  {id:11,nome:'Rodrigo Alves',i:'RA',status:'Ativo',s:3,u:'05/04/2026',p:'19/04/2026 10:00',a:'Gestalt',tel:'(81) 98888-2222',em:'rodrigo@email.com',n:'19/05/1999',q:'Ansiedade universitária.',login:'rodrigo',senha:'rod123'},
  {id:12,nome:'Patrícia Santos',i:'PS',status:'Inativo',s:7,u:'15/01/2026',p:'—',a:'Humanista',tel:'(81) 98888-3333',em:'patricia@email.com',n:'28/10/1980',q:'Síndrome do pânico.',login:'patricia',senha:'pat123'},
  {id:13,nome:'Eduardo Costa',i:'EC',status:'Lista de espera',s:0,u:'—',p:'—',a:'A definir',tel:'(81) 98888-4444',em:'eduardo@email.com',n:'11/07/2001',q:'Dificuldades de concentração e TDAH.',login:'eduardo',senha:'edu123'},
  {id:14,nome:'Isabela Ferreira',i:'IF',status:'Alta',s:22,u:'20/02/2026',p:'—',a:'Psicanálise',tel:'(81) 98888-5555',em:'isabela@email.com',n:'16/09/1991',q:'Transtorno alimentar — alta concedida.',login:'isabela',senha:'isa123'},
  
const US={admin:'acacia00101',dra_ana:'ana123'};

const P=[
  {id:1,nome:'Mariana Souza',i:'MS',status:'Ativo',s:12,u:'12/04/2026',p:'18/04/2026 14:00',a:'TCC',tel:'(81) 99999-1111',em:'mariana@email.com',n:'15/03/1990',q:'Ansiedade generalizada e dificuldades no trabalho.'},
  {id:2,nome:'Carlos Mendes',i:'CM',status:'Ativo',s:5,u:'10/04/2026',p:'18/04/2026 15:30',a:'Psicanálise',tel:'(81) 99999-2222',em:'carlos@email.com',n:'22/07/1985',q:'Depressão e isolamento social.'},
  {id:3,nome:'Beatriz Lima',i:'BL',status:'Ativo',s:8,u:'09/04/2026',p:'18/04/2026 17:00',a:'Gestalt',tel:'(81) 99999-3333',em:'beatriz@email.com',n:'05/11/1995',q:'Transtorno de ansiedade e fobias.'},
  {id:4,nome:'João Pedro',i:'JP',status:'Ativo',s:20,u:'14/04/2026',p:'21/04/2026 09:00',a:'TCC',tel:'(81) 99999-4444',em:'joao@email.com',n:'30/01/1988',q:'TOC e rituais compulsivos.'},
  {id:5,nome:'Ana Clara',i:'AC',status:'Ativo',s:15,u:'15/04/2026',p:'22/04/2026 10:00',a:'Humanista',tel:'(81) 99999-5555',em:'anaclara@email.com',n:'18/06/1992',q:'Luto e dificuldades de relacionamento.'},
  {id:6,nome:'Roberto Melo',i:'RM',status:'Inativo',s:3,u:'01/02/2026',p:'—',a:'TCC',tel:'(81) 99999-6666',em:'roberto@email.com',n:'12/09/1978',q:'Estresse ocupacional.'},
  {id:7,nome:'Fernanda Lopes',i:'FL',status:'Ativo',s:9,u:'15/04/2026',p:'22/04/2026 16:00',a:'EMDR',tel:'(81) 99999-7777',em:'fernanda@email.com',n:'25/04/1993',q:'Trauma e PTSD.'},
  {id:8,nome:'Sofia Rocha',i:'SR',status:'Ativo',s:14,u:'17/04/2026',p:'21/04/2026 09:30',a:'Psicanálise',tel:'(81) 99999-8888',em:'sofia@email.com',n:'07/12/1987',q:'Conflitos familiares e autoestima.'},
  {id:9,nome:'Diego Neto',i:'DN',status:'Ativo',s:6,u:'17/04/2026',p:'24/04/2026 13:00',a:'TCC',tel:'(81) 99999-9999',em:'diego@email.com',n:'14/02/1996',q:'Fobia social e timidez excessiva.'},
  {id:10,nome:'Laura Moura',i:'LM',status:'Alta',s:28,u:'10/03/2026',p:'—',a:'TCC',tel:'(81) 98888-1111',em:'laura@email.com',n:'03/08/1984',q:'Depressão — alta concedida.'},
  {id:11,nome:'Rodrigo Alves',i:'RA',status:'Ativo',s:3,u:'05/04/2026',p:'19/04/2026 10:00',a:'Gestalt',tel:'(81) 98888-2222',em:'rodrigo@email.com',n:'19/05/1999',q:'Ansiedade universitária.'},
  {id:12,nome:'Patrícia Santos',i:'PS',status:'Inativo',s:7,u:'15/01/2026',p:'—',a:'Humanista',tel:'(81) 98888-3333',em:'patricia@email.com',n:'28/10/1980',q:'Síndrome do pânico.'},
  {id:13,nome:'Eduardo Costa',i:'EC',status:'Lista de espera',s:0,u:'—',p:'—',a:'A definir',tel:'(81) 98888-4444',em:'eduardo@email.com',n:'11/07/2001',q:'Dificuldades de concentração e TDAH.'},
  {id:14,nome:'Isabela Ferreira',i:'IF',status:'Alta',s:22,u:'20/02/2026',p:'—',a:'Psicanálise',tel:'(81) 98888-5555',em:'isabela@email.com',n:'16/09/1991',q:'Transtorno alimentar — alta concedida.'},8
];

/* ── LEMBRETES ── */
let LEMBRETES = [
  {id:101,pacienteId:1,tipo:'tarefa',texto:'Pratique o registro de pensamentos automáticos quando sentir ansiedade. Anote a situação, o pensamento e como você se sentiu.',data:'18/04/2026',validade:'25/04/2026',visto:false},
  {id:102,pacienteId:1,tipo:'pratica',texto:'Tente a técnica de respiração diafragmática por 5 minutos antes de dormir esta semana.',data:'15/04/2026',validade:null,visto:false},
  {id:103,pacienteId:2,tipo:'reflexao',texto:'Reflita sobre uma situação esta semana em que você conseguiu se conectar com alguém. O que tornou isso possível?',data:'17/04/2026',validade:null,visto:false},
  {id:104,pacienteId:5,tipo:'consulta',texto:'Sua próxima sessão é na terça-feira, dia 22/04 às 10:00. Lembre-se de trazer os registros da semana.',data:'18/04/2026',validade:'22/04/2026',visto:true},
];

/* ── CRM ── */
let CRM = [
  {id:201,pacienteId:1,estagio:'ativo',prioridade:'normal',objetivo:'Redução da ansiedade generalizada e melhora no ambiente de trabalho',obs:'Boa adesão ao tratamento. Considerar grupo terapêutico.',followup:'25/04/2026'},
  {id:202,pacienteId:2,estagio:'ativo',prioridade:'alta',objetivo:'Tratamento da depressão e reintegração social',obs:'Paciente com tendência ao isolamento. Monitorar de perto.',followup:'20/04/2026'},
  {id:203,pacienteId:13,estagio:'contato',prioridade:'normal',objetivo:'Avaliação de TDAH e dificuldades acadêmicas',obs:'Aguardando vaga. Entrou em contato em março.',followup:'30/04/2026'},
  {id:204,pacienteId:10,estagio:'alta',prioridade:'normal',objetivo:'Remissão da depressão — alta concedida',obs:'Encaminhada para acompanhamento com psiquiatra.',followup:null},
  {id:205,pacienteId:7,estagio:'avaliacao',prioridade:'urgente',objetivo:'Trauma complexo e PTSD',obs:'Avaliar necessidade de co-tratamento com psiquiatria.',followup:'19/04/2026'},
];

let fs = 'todos';
let pacienteLogado = null;

/* ─────────────────────────────────────────────
   PERSISTÊNCIA
───────────────────────────────────────────── */
function salvarLocal(){
  try{
    localStorage.setItem('acacia_p', JSON.stringify(P));
    localStorage.setItem('acacia_lem', JSON.stringify(LEMBRETES));
    localStorage.setItem('acacia_crm', JSON.stringify(CRM));
  }catch(e){}
}
function carregarLocal(){
  try{
    const d=localStorage.getItem('acacia_p');
    if(d){ const arr=JSON.parse(d); arr.forEach(x=>{ if(!P.find(p=>p.id===x.id))P.push(x); }); }
    const l=localStorage.getItem('acacia_lem');
    if(l){ LEMBRETES=JSON.parse(l); }
    const c=localStorage.getItem('acacia_crm');
    if(c){ CRM=JSON.parse(c); }
  }catch(e){}
}
carregarLocal();

/* ─────────────────────────────────────────────
   LOGIN
───────────────────────────────────────────── */
function setLoginTipo(tipo){
  tipoLoginAtual = tipo;
  document.getElementById('ltt-psi').classList.toggle('ativo', tipo==='psicologo');
  document.getElementById('ltt-pac').classList.toggle('ativo', tipo==='paciente');
  document.getElementById('login-hint-text').textContent =
    tipo==='psicologo' ? 'Demo psicólogo: admin / acacia2026' : 'Demo paciente: mariana / mari123';
  document.getElementById('lu').value='';
  document.getElementById('ls').value='';
  document.getElementById('le').style.display='none';
}

function login(){
  const u=document.getElementById('lu').value.trim();
  const s=document.getElementById('ls').value;

  if(tipoLoginAtual==='psicologo'){
    if(USUARIOS_PSI[u] && USUARIOS_PSI[u]===s){
      document.getElementById('login-screen').style.display='none';
      document.getElementById('app-psi').style.display='block';
      document.getElementById('data-hoje').textContent='Bem-vinda de volta, Dra. Ana · '+dataHoje();
      atualizarStats();
      render(P);
      renderCrm();
    } else {
      document.getElementById('le').style.display='block';
    }
  } else {
    const pac = P.find(p => p.login===u && p.senha===s);
    if(pac){
      pacienteLogado = pac;
      document.getElementById('login-screen').style.display='none';
      document.getElementById('app-pac').style.display='block';
      renderPortalPaciente(pac);
    } else {
      document.getElementById('le').style.display='block';
    }
  }
}
document.getElementById('ls').addEventListener('keydown', e=>{ if(e.key==='Enter') login(); });

function logout(){
  document.getElementById('app-psi').style.display='none';
  document.getElementById('app-pac').style.display='none';
  document.getElementById('login-screen').style.display='flex';
  document.getElementById('lu').value='';
  document.getElementById('ls').value='';
  document.getElementById('le').style.display='none';
  pacienteLogado=null;
}

/* ─────────────────────────────────────────────
   UTIL
───────────────────────────────────────────── */
function dataHoje(){
  const d=new Date();
  const meses=['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
  return `${d.getDate()} de ${meses[d.getMonth()]} de ${d.getFullYear()}`;
}
function pill(s){
  const m={'Ativo':'pa','Inativo':'pi','Alta':'pal','Lista de espera':'pe'};
  return `<span class="sp ${m[s]||'pi'}"><span class="sd"></span>${s}</span>`;
}
function toast(m){
  const t=document.getElementById('t');
  t.textContent=m; t.style.display='block';
  setTimeout(()=>t.style.display='none',3000);
}

/* ─────────────────────────────────────────────
   NAV — PSICÓLOGO
───────────────────────────────────────────── */
function nav(p){
  document.querySelectorAll('.page').forEach(x=>x.classList.remove('ativo'));
  document.querySelectorAll('.nav-item').forEach(x=>x.classList.remove('ativo'));
  document.querySelectorAll('.bn-item').forEach(x=>x.classList.remove('ativo'));
  document.getElementById('page-'+p).classList.add('ativo');
  const n=document.querySelector(`[onclick="nav('${p}')"]`);
  if(n) n.classList.add('ativo');
  const bn=document.getElementById('bn-'+p);
  if(bn) bn.classList.add('ativo');
  fecharMenu();
  if(p==='crm') renderCrm();
}

/* ─────────────────────────────────────────────
   STATS
───────────────────────────────────────────── */
function atualizarStats(){
  document.getElementById('stat-total').textContent = P.length;
  document.getElementById('stat-ativos').textContent = P.filter(x=>x.status==='Ativo').length;
  document.getElementById('stat-inativos').textContent = P.filter(x=>x.status==='Inativo').length;
  document.getElementById('stat-alta').textContent = P.filter(x=>x.status==='Alta').length;
}

/* ─────────────────────────────────────────────
   PACIENTES — TABELA
───────────────────────────────────────────── */
function render(l){
  const tb=document.getElementById('tb');
  if(!l.length){ tb.innerHTML=`<tr><td colspan="6"><div class="empty">Nenhum paciente encontrado.</div></td></tr>`; return; }
  tb.innerHTML=l.map(p=>`
    <tr>
      <td class="pn"><span class="av">${p.i}</span><strong>${p.nome}</strong></td>
      <td>${pill(p.status)}</td>
      <td>${p.s} sessões</td>
      <td>${p.u}</td>
      <td>${p.p}</td>
      <td>
        <button class="ab" onclick="ficha(${p.id})">Ver ficha</button>
        <button class="ab" onclick="abrirEditar(${p.id})">✎ Editar</button>
        <button class="ab" onclick="abrirLembreteParaPaciente(${p.id})">📝 Lembrete</button>
        <button class="ab ab-del" onclick="excluir(${p.id})">✕</button>
      </td>
    </tr>`).join('');
  document.getElementById('cp').textContent = l.length+' pacientes encontrados';
}
function filtrarT(t){
  const b=fs==='todos'?P:P.filter(p=>p.status===fs);
  render(b.filter(p=>p.nome.toLowerCase().includes(t.toLowerCase())));
}
function filtrarS(s,btn){
  fs=s;
  document.querySelectorAll('.fb').forEach(b=>b.classList.remove('ativo'));
  btn.classList.add('ativo');
  filtrarT(document.getElementById('bi').value);
}
function excluir(id){
  if(!confirm('Tem certeza que deseja remover este paciente?'))return;
  const idx=P.findIndex(x=>x.id===id);
  if(idx>-1){ P.splice(idx,1); render(P); atualizarStats(); salvarLocal(); toast('Paciente removido.'); }
}

/* ─────────────────────────────────────────────
   MODAL PACIENTE
───────────────────────────────────────────── */
function abrirEditar(id){
  const p=P.find(x=>x.id===id); if(!p)return;
  document.getElementById('fn').value=p.nome;
  document.getElementById('fna').value=p.n||'';
  document.getElementById('ft2').value=p.tel||'';
  document.getElementById('fe').value=p.em||'';
  document.getElementById('fq').value=p.q||'';
  document.getElementById('fs').value=p.status;
  document.getElementById('fab').value=p.a||'TCC';
  document.getElementById('fpac-user').value=p.login||'';
  document.getElementById('fpac-pass').value=p.senha||'';
  document.getElementById('mo').classList.add('aberto');
  document.getElementById('mo').dataset.editId=id;
  document.querySelector('#mo .mt').textContent='Editar Paciente';
}
function abrirModal(){
  document.getElementById('mo').classList.add('aberto');
  delete document.getElementById('mo').dataset.editId;
  document.querySelector('#mo .mt').textContent='Novo Paciente';
  ['fn','fna','ft2','fe','fq','fpac-user','fpac-pass'].forEach(id=>{
    const el=document.getElementById(id); if(el) el.value='';
  });
}
function fecharModal(){document.getElementById('mo').classList.remove('aberto');}
document.getElementById('mo').addEventListener('click',e=>{ if(e.target===e.currentTarget)fecharModal(); });

function salvar(){
  const nome=document.getElementById('fn').value.trim();
  if(!nome){ toast('Preencha o nome!'); return; }
  const mo=document.getElementById('mo');
  const editId=mo.dataset.editId?parseInt(mo.dataset.editId):null;
  const loginPac=document.getElementById('fpac-user').value.trim();
  const senhaPac=document.getElementById('fpac-pass').value.trim();

  if(editId){
    const p=P.find(x=>x.id===editId);
    if(p){
      p.nome=nome;
      p.i=nome.split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase();
      p.status=document.getElementById('fs').value;
      p.a=document.getElementById('fab').value;
      p.tel=document.getElementById('ft2').value;
      p.em=document.getElementById('fe').value;
      p.n=document.getElementById('fna').value;
      p.q=document.getElementById('fq').value;
      if(loginPac) p.login=loginPac;
      if(senhaPac) p.senha=senhaPac;
    }
    render(P); fecharModal(); atualizarStats(); toast('Paciente atualizado!'); salvarLocal();
  } else {
    const ini=nome.split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase();
    P.unshift({
      id:Date.now(),nome,i:ini,
      status:document.getElementById('fs').value,s:0,u:'—',p:'—',
      a:document.getElementById('fab').value,
      tel:document.getElementById('ft2').value,
      em:document.getElementById('fe').value,
      n:document.getElementById('fna').value,
      q:document.getElementById('fq').value,
      login:loginPac||'',senha:senhaPac||''
    });
    render(P); fecharModal(); atualizarStats(); toast(nome+' cadastrado com sucesso!'); salvarLocal();
  }
}

/* ─────────────────────────────────────────────
   FICHA DO PACIENTE
───────────────────────────────────────────── */
function ficha(id){
  const p=P.find(x=>x.id===id); if(!p)return;
  const lemPac=LEMBRETES.filter(l=>l.pacienteId===id);
  document.getElementById('ft').textContent=p.nome;
  document.getElementById('fc').innerHTML=`
    <div class="fh"><div class="fav">${p.i}</div>
      <div><div class="fn">${p.nome}</div>
      <div class="fm">${p.a} · ${pill(p.status)} · ${p.s} sessões</div>
      <div class="fm" style="margin-top:6px;font-size:11px;color:var(--texto-muted);">
        Login do paciente: <strong>${p.login||'não definido'}</strong>
      </div></div>
      <div style="margin-left:auto;">
        <button class="btn btn-out" onclick="abrirLembreteParaPaciente(${p.id})">📝 Novo lembrete</button>
      </div>
    </div>
    <div class="ftabs">
      <div class="ftab ativo" onclick="ftab('i',this)">Informações</div>
      <div class="ftab" onclick="ftab('n',this)">Notas de Sessão</div>
      <div class="ftab" onclick="ftab('l',this)">Lembretes (${lemPac.length})</div>
    </div>
    <div class="fbody">
      <div id="fti">
        <div class="ig">
          <div class="ii"><label>Nascimento</label><p>${p.n||'—'}</p></div>
          <div class="ii"><label>Telefone</label><p>${p.tel||'—'}</p></div>
          <div class="ii"><label>Email</label><p>${p.em||'—'}</p></div>
          <div class="ii"><label>Abordagem</label><p>${p.a}</p></div>
          <div class="ii"><label>Última consulta</label><p>${p.u}</p></div>
          <div class="ii"><label>Próxima consulta</label><p>${p.p}</p></div>
        </div>
        <div style="margin-top:20px;padding-top:20px;border-top:1px solid var(--borda);">
          <div class="ii"><label>Queixa principal</label>
          <p style="margin-top:6px;line-height:1.8;">${p.q||'—'}</p></div>
        </div>
      </div>
      <div id="ftn" style="display:none;">
        <div class="ni"><div class="nd">12/04/2026 — Sessão ${p.s}</div><div class="nt">Paciente demonstrou evolução significativa no manejo da ansiedade. Relatou conseguir utilizar as técnicas de respiração diafragmática em situações de estresse. Humor estável.</div></div>
        <div class="ni"><div class="nd">05/04/2026 — Sessão ${Math.max(1,p.s-1)}</div><div class="nt">Sessão focada em identificação de pensamentos automáticos negativos. Paciente trouxe situação familiar que gerou ansiedade. Trabalhamos a diferenciação entre fato e interpretação.</div></div>
        ${p.s>2?`<div class="ni"><div class="nd">29/03/2026 — Sessão ${Math.max(1,p.s-2)}</div><div class="nt">Psicoeducação sobre ansiedade. Introduzida técnica de mindfulness. Resposta positiva ao tratamento.</div></div>`:''}
      </div>
      <div id="ftl" style="display:none;">${renderLembretesPsicologo(id)}</div>
    </div>`;
  nav('ficha');
}
function renderLembretesPsicologo(pacId){
  const lems=LEMBRETES.filter(l=>l.pacienteId===pacId);
  if(!lems.length) return `<div class="empty">Nenhum lembrete enviado ainda.</div>`;
  const tiposEmoji={tarefa:'📝',reflexao:'💭',consulta:'📅',pratica:'🌿',geral:'📌'};
  return lems.map(l=>`
    <div class="ni" style="${l.visto?'opacity:.6':''}">
      <div class="nd" style="display:flex;align-items:center;gap:8px;">
        ${tiposEmoji[l.tipo]||'📌'} <strong>${l.tipo}</strong>
        <span style="margin-left:auto;font-size:10px;">${l.data}</span>
        ${l.visto?'<span style="background:#EAF0E6;color:var(--verde);padding:2px 8px;border-radius:10px;font-size:10px;">✓ Visto</span>':''}
      </div>
      <div class="nt" style="margin-top:6px;">${l.texto}</div>
      ${l.validade?`<div style="font-size:11px;color:var(--texto-muted);margin-top:6px;">Válido até: ${l.validade}</div>`:''}
      <div style="margin-top:8px;display:flex;gap:6px;">
        <button class="ab ab-del" onclick="excluirLembrete(${l.id})">✕ Remover</button>
      </div>
    </div>`).join('');
}
function ftab(t,btn){
  document.querySelectorAll('.ftab').forEach(x=>x.classList.remove('ativo'));
  btn.classList.add('ativo');
  document.getElementById('fti').style.display=t==='i'?'block':'none';
  document.getElementById('ftn').style.display=t==='n'?'block':'none';
  document.getElementById('ftl').style.display=t==='l'?'block':'none';
}

/* ─────────────────────────────────────────────
   LEMBRETES — CRUD
───────────────────────────────────────────── */
function abrirLembreteParaPaciente(pacId){
  preencherSelectPacientes('lem-pac-sel', pacId);
  document.getElementById('lem-texto').value='';
  document.getElementById('lem-validade').value='';
  document.getElementById('mo-lembrete').classList.add('aberto');
}
function fecharLembreteModal(){document.getElementById('mo-lembrete').classList.remove('aberto');}
document.getElementById('mo-lembrete').addEventListener('click',e=>{ if(e.target===e.currentTarget)fecharLembreteModal(); });

function salvarLembrete(){
  const pacId=parseInt(document.getElementById('lem-pac-sel').value);
  const tipo=document.getElementById('lem-tipo').value;
  const texto=document.getElementById('lem-texto').value.trim();
  const validade=document.getElementById('lem-validade').value;
  if(!texto){ toast('Escreva o lembrete!'); return; }
  const hoje=new Date();
  const dataStr=`${String(hoje.getDate()).padStart(2,'0')}/${String(hoje.getMonth()+1).padStart(2,'0')}/${hoje.getFullYear()}`;
  let validadeStr=null;
  if(validade){
    const v=new Date(validade+'T00:00:00');
    validadeStr=`${String(v.getDate()).padStart(2,'0')}/${String(v.getMonth()+1).padStart(2,'0')}/${v.getFullYear()}`;
  }
  LEMBRETES.push({id:Date.now(),pacienteId:pacId,tipo,texto,data:dataStr,validade:validadeStr,visto:false});
  fecharLembreteModal(); salvarLocal(); toast('Lembrete enviado com sucesso!');
}
function excluirLembrete(id){
  if(!confirm('Remover este lembrete?'))return;
  const idx=LEMBRETES.findIndex(x=>x.id===id);
  if(idx>-1){ LEMBRETES.splice(idx,1); salvarLocal(); toast('Lembrete removido.'); }
}
function marcarLembreteVisto(id){
  const l=LEMBRETES.find(x=>x.id===id);
  if(l){ l.visto=true; salvarLocal(); renderPortalPaciente(pacienteLogado); }
}

/* ─────────────────────────────────────────────
   CRM
───────────────────────────────────────────── */
function renderCrm(){
  const estagios=['contato','avaliacao','ativo','alta'];
  estagios.forEach(e=>{
    const cards=CRM.filter(c=>c.estagio===e);
    document.getElementById('count-'+e).textContent=cards.length;
    document.getElementById('cards-'+e).innerHTML=cards.map(c=>{
      const p=P.find(x=>x.id===c.pacienteId);
      if(!p)return'';
      const followupClass=c.followup?avaliarFollowup(c.followup):'';
      return `
        <div class="crm-card">
          <div class="crm-card-nome">${p.nome}</div>
          <div class="crm-card-obj">${c.objetivo}</div>
          <div class="crm-card-footer">
            <span class="crm-card-followup ${followupClass}">${c.followup?'📅 '+c.followup:'Sem follow-up'}</span>
            <span class="crm-prio crm-prio-${c.prioridade}">${c.prioridade}</span>
          </div>
          <div class="crm-card-actions">
            <button class="crm-card-btn" onclick="editarCrm(${c.id})">✎ Editar</button>
            <button class="crm-card-btn lembrete-btn" onclick="abrirLembreteParaPaciente(${p.id})">📝 Lembrete</button>
            <button class="crm-card-btn" onclick="moverCrm(${c.id},'${proximoEstagio(e)}')" ${e==='alta'?'disabled':''}>→ Avançar</button>
            <button class="crm-card-btn" style="color:var(--vermelho);" onclick="excluirCrm(${c.id})">✕</button>
          </div>
        </div>`;
    }).join('') || `<div style="padding:16px;text-align:center;font-size:12px;color:var(--texto-muted);">Sem registros</div>`;
  });
  renderCrmAlertas();
  renderCrmPipeline();
}
function proximoEstagio(e){
  const ordem=['contato','avaliacao','ativo','alta'];
  const idx=ordem.indexOf(e);
  return idx<ordem.length-1?ordem[idx+1]:e;
}
function avaliarFollowup(dataStr){
  const partes=dataStr.split('/');
  if(partes.length<3)return'';
  const d=new Date(parseInt(partes[2]),parseInt(partes[1])-1,parseInt(partes[0]));
  const hoje=new Date(); hoje.setHours(0,0,0,0);
  if(d<hoje)return'vencido';
  if(d.getTime()===hoje.getTime())return'hoje';
  return'';
}
function renderCrmAlertas(){
  const el=document.getElementById('crm-alertas-list');
  const alertas=CRM.filter(c=>{
    if(!c.followup)return false;
    const cl=avaliarFollowup(c.followup);
    return cl==='vencido'||cl==='hoje'||c.prioridade==='urgente';
  });
  if(!alertas.length){
    el.innerHTML=`<div class="empty" style="padding:30px;">Nenhum alerta no momento 🌿</div>`;
    return;
  }
  el.innerHTML=alertas.map(c=>{
    const p=P.find(x=>x.id===c.pacienteId);
    if(!p)return'';
    const cl=c.followup?avaliarFollowup(c.followup):'';
    const ico=c.prioridade==='urgente'?'🚨':cl==='vencido'?'⚠️':'📅';
    const msg=c.prioridade==='urgente'?'Prioridade urgente':cl==='vencido'?`Follow-up vencido (${c.followup})`:`Follow-up hoje (${c.followup})`;
    return`<div class="crm-alerta"><span class="crm-alerta-ico">${ico}</span><div><div class="crm-alerta-nome">${p.nome}</div><div class="crm-alerta-msg">${msg} · ${c.objetivo}</div></div></div>`;
  }).join('');
}
function renderCrmPipeline(){
  const el=document.getElementById('crm-pipeline-chart');
  const dados=[
    {label:'Contato',key:'contato',cor:'#D4A017'},
    {label:'Avaliação',key:'avaliacao',cor:'#7A9BD4'},
    {label:'Ativo',key:'ativo',cor:'#5C7A4E'},
    {label:'Alta',key:'alta',cor:'#C49A3C'},
  ];
  const max=Math.max(...dados.map(d=>CRM.filter(c=>c.estagio===d.key).length),1);
  el.innerHTML=dados.map(d=>{
    const qtd=CRM.filter(c=>c.estagio===d.key).length;
    const pct=Math.round(qtd/max*100);
    return`<div class="br">
      <span class="bl" style="width:70px;font-size:11.5px;">${d.label}</span>
      <div class="bt"><div class="bf" style="width:${pct}%;background:${d.cor};"></div></div>
      <span class="bv">${qtd}</span>
    </div>`;
  }).join('');
}
function abrirCrmModal(){
  preencherSelectPacientes('crm-pac-sel');
  document.getElementById('crm-objetivo').value='';
  document.getElementById('crm-obs').value='';
  document.getElementById('crm-followup').value='';
  document.getElementById('mo-crm').classList.add('aberto');
  delete document.getElementById('mo-crm').dataset.editId;
}
function editarCrm(id){
  const c=CRM.find(x=>x.id===id); if(!c)return;
  preencherSelectPacientes('crm-pac-sel', c.pacienteId);
  document.getElementById('crm-estagio').value=c.estagio;
  document.getElementById('crm-prioridade').value=c.prioridade;
  document.getElementById('crm-objetivo').value=c.objetivo;
  document.getElementById('crm-obs').value=c.obs||'';
  if(c.followup){
    const p=c.followup.split('/');
    document.getElementById('crm-followup').value=`${p[2]}-${p[1]}-${p[0]}`;
  } else {
    document.getElementById('crm-followup').value='';
  }
  document.getElementById('mo-crm').dataset.editId=id;
  document.getElementById('mo-crm').classList.add('aberto');
}
function fecharCrmModal(){document.getElementById('mo-crm').classList.remove('aberto');}
document.getElementById('mo-crm').addEventListener('click',e=>{ if(e.target===e.currentTarget)fecharCrmModal(); });

function salvarCrm(){
  const pacId=parseInt(document.getElementById('crm-pac-sel').value);
  const estagio=document.getElementById('crm-estagio').value;
  const prioridade=document.getElementById('crm-prioridade').value;
  const objetivo=document.getElementById('crm-objetivo').value.trim();
  const obs=document.getElementById('crm-obs').value.trim();
  const followupRaw=document.getElementById('crm-followup').value;
  if(!objetivo){ toast('Preencha o objetivo!'); return; }
  let followup=null;
  if(followupRaw){
    const v=new Date(followupRaw+'T00:00:00');
    followup=`${String(v.getDate()).padStart(2,'0')}/${String(v.getMonth()+1).padStart(2,'0')}/${v.getFullYear()}`;
  }
  const editId=document.getElementById('mo-crm').dataset.editId;
  if(editId){
    const c=CRM.find(x=>x.id===parseInt(editId));
    if(c){ c.pacienteId=pacId; c.estagio=estagio; c.prioridade=prioridade; c.objetivo=objetivo; c.obs=obs; c.followup=followup; }
  } else {
    // evita duplicata
    if(CRM.find(x=>x.pacienteId===pacId)){
      toast('Este paciente já tem um registro CRM. Use Editar.');
      fecharCrmModal(); return;
    }
    CRM.push({id:Date.now(),pacienteId:pacId,estagio,prioridade,objetivo,obs,followup});
  }
  fecharCrmModal(); salvarLocal(); renderCrm(); toast('Registro CRM salvo!');
}
function moverCrm(id, novoEstagio){
  const c=CRM.find(x=>x.id===id);
  if(c){ c.estagio=novoEstagio; salvarLocal(); renderCrm(); toast('Paciente avançado no pipeline!'); }
}
function excluirCrm(id){
  if(!confirm('Remover este registro CRM?'))return;
  const idx=CRM.findIndex(x=>x.id===id);
  if(idx>-1){ CRM.splice(idx,1); salvarLocal(); renderCrm(); toast('Registro removido.'); }
}

/* ─────────────────────────────────────────────
   HELPERS SELECT
───────────────────────────────────────────── */
function preencherSelectPacientes(selectId, selecionado){
  const sel=document.getElementById(selectId);
  sel.innerHTML=P.map(p=>`<option value="${p.id}" ${p.id===selecionado?'selected':''}>${p.nome}</option>`).join('');
}

/* ─────────────────────────────────────────────
   PORTAL DO PACIENTE
───────────────────────────────────────────── */
function renderPortalPaciente(pac){
  document.getElementById('pac-avatar').textContent=pac.i;
  document.getElementById('pac-nome').textContent=pac.nome;
  document.getElementById('pac-sub').textContent='Bem-vinda de volta · '+dataHoje();

  // Próxima consulta
  const proxEl=document.getElementById('pac-proxima');
  if(pac.p && pac.p!=='—'){
    const partes=pac.p.split(' ');
    const dataParts=partes[0].split('/');
    const meses=['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
    const mesIdx=parseInt(dataParts[1])-1;
    document.getElementById('pac-consulta-data').textContent=`${dataParts[0]} ${meses[mesIdx] || ''}`;
    document.getElementById('pac-consulta-info').innerHTML=`${partes[1]||''} · ${pac.a}<br>Sessão ${pac.s+1}`;
  } else {
    document.getElementById('pac-consulta-data').textContent='—';
    document.getElementById('pac-consulta-info').textContent='Nenhuma consulta agendada';
  }

  // Lembretes
  const lems=LEMBRETES.filter(l=>l.pacienteId===pac.id);
  document.getElementById('pac-lembrete-count').textContent=lems.length+' lembrete'+(lems.length!==1?'s':'');
  const tiposEmoji={tarefa:'📝',reflexao:'💭',consulta:'📅',pratica:'🌿',geral:'📌'};
  const tiposLabel={tarefa:'Tarefa terapêutica',reflexao:'Reflexão',consulta:'Lembrete de consulta',pratica:'Prática recomendada',geral:'Geral'};
  const lemEl=document.getElementById('pac-lembretes-list');
  if(!lems.length){
    lemEl.innerHTML=`<div class="pac-empty-lembretes">Nenhum lembrete por enquanto 🌿</div>`;
  } else {
    // ordenar: não vistos primeiro
    const sorted=[...lems].sort((a,b)=>Number(a.visto)-Number(b.visto));
    lemEl.innerHTML=sorted.map(l=>{
      const vencido=l.validade && isVencido(l.validade);
      return`<div class="pac-lembrete${vencido?' pac-lembrete-vencido':''}${l.visto?' pac-lembrete-visto':''}">
        <div class="pac-lembrete-header">
          <span class="pac-lembrete-tipo">${tiposEmoji[l.tipo]||'📌'}</span>
          <span class="pac-lembrete-tag">${tiposLabel[l.tipo]||l.tipo}</span>
          <span class="pac-lembrete-data">${l.data}</span>
        </div>
        <div class="pac-lembrete-texto">${l.texto}</div>
        ${l.validade?`<div class="pac-lembrete-val">📆 Válido até ${l.validade}${vencido?' · vencido':''}</div>`:''}
        ${!l.visto?`<button class="pac-lembrete-marcar" onclick="marcarLembreteVisto(${l.id})">✓ Marcar como lido</button>`:'<div style="font-size:10.5px;color:rgba(196,154,60,.35);margin-top:8px;">✓ Lido</div>'}
      </div>`;
    }).join('');
  }

  // Sessões
  const sessEl=document.getElementById('pac-sessoes');
  sessEl.innerHTML=`
    <div class="pac-sessao-card">
      <div class="pac-sessao-num">${pac.s}</div>
      <div class="pac-sessao-label">Sessões realizadas</div>
    </div>
    <div class="pac-sessao-card">
      <div class="pac-sessao-num">${pac.a}</div>
      <div class="pac-sessao-label" style="font-size:9px;">Abordagem</div>
    </div>
    <div class="pac-sessao-card">
      <div class="pac-sessao-num">${pill(pac.status)}</div>
      <div class="pac-sessao-label">Status</div>
    </div>
    <div class="pac-sessao-card">
      <div class="pac-sessao-num" style="font-size:16px;">${pac.u}</div>
      <div class="pac-sessao-label">Última sessão</div>
    </div>`;
}
function isVencido(dataStr){
  const p=dataStr.split('/');
  if(p.length<3)return false;
  const d=new Date(parseInt(p[2]),parseInt(p[1])-1,parseInt(p[0]));
  const hoje=new Date(); hoje.setHours(0,0,0,0);
  return d<hoje;
}

/* ─────────────────────────────────────────────
   MOBILE — PSICÓLOGO
───────────────────────────────────────────── */
function toggleMenu(){
  const sb=document.querySelector('.sidebar');
  const hb=document.getElementById('hb');
  const ov=document.getElementById('mob-overlay');
  const open=sb.classList.toggle('mob-open');
  hb.classList.toggle('open',open);
  ov.classList.toggle('show',open);
}
function fecharMenu(){
  document.querySelector('.sidebar').classList.remove('mob-open');
  const hb=document.getElementById('hb');
  if(hb)hb.classList.remove('open');
  const ov=document.getElementById('mob-overlay');
  if(ov)ov.classList.remove('show');
}

/* ─────────────────────────────────────────────
   INICIALIZAÇÃO
───────────────────────────────────────────── */
(function init(){
  render(P);
  atualizarStats();
})();
  document.getElementById('hb').classList.remove('open');
  document.getElementById('mob-overlay').classList.remove('show');


