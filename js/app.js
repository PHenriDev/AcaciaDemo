const US={admin:'acacia2026',dra_ana:'ana123'};
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
  {id:14,nome:'Isabela Ferreira',i:'IF',status:'Alta',s:22,u:'20/02/2026',p:'—',a:'Psicanálise',tel:'(81) 98888-5555',em:'isabela@email.com',n:'16/09/1991',q:'Transtorno alimentar — alta concedida.'},
];
let fs='todos';
function salvarLocal(){try{localStorage.setItem('acacia_p',JSON.stringify(P));}catch(e){}}
function carregarLocal(){try{const d=localStorage.getItem('acacia_p');if(d){const arr=JSON.parse(d);arr.forEach(x=>{if(!P.find(p=>p.id===x.id))P.push(x);});}}catch(e){}}
carregarLocal();

function dataHoje(){
  const d=new Date();
  const dias=['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'];
  const meses=['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
  return `${d.getDate()} de ${meses[d.getMonth()]} de ${d.getFullYear()}`;
}
function login(){
  const u=document.getElementById('lu').value.trim(),s=document.getElementById('ls').value;
  if(US[u]&&US[u]===s){
    document.getElementById('login-screen').style.display='none';
    document.getElementById('app').style.display='block';
    document.getElementById('data-hoje').textContent='Bem-vinda de volta, Dra. Ana · '+dataHoje();
    render(P);
  }
  else document.getElementById('le').style.display='block';
}
document.getElementById('ls').addEventListener('keydown',e=>{if(e.key==='Enter')login();});
function logout(){document.getElementById('app').style.display='none';document.getElementById('login-screen').style.display='flex';document.getElementById('lu').value='';document.getElementById('ls').value='';document.getElementById('le').style.display='none';}

function nav(p){
  document.querySelectorAll('.page').forEach(x=>x.classList.remove('ativo'));
  document.querySelectorAll('.nav-item').forEach(x=>x.classList.remove('ativo'));
  document.querySelectorAll('.bn-item').forEach(x=>x.classList.remove('ativo'));
  document.getElementById('page-'+p).classList.add('ativo');
  const n=document.querySelector(`[onclick="nav('${p}')"]`);if(n)n.classList.add('ativo');
  const bn=document.getElementById('bn-'+p);if(bn)bn.classList.add('ativo');
  fecharMenu();
}

function pill(s){const m={'Ativo':'pa','Inativo':'pi','Alta':'pal','Lista de espera':'pe'};return `<span class="sp ${m[s]||'pi'}"><span class="sd"></span>${s}</span>`;}

function render(l){
  const tb=document.getElementById('tb');
  if(!l.length){tb.innerHTML=`<tr><td colspan="6"><div class="empty">Nenhum paciente encontrado.</div></td></tr>`;return;}
  tb.innerHTML=l.map(p=>`<tr><td class="pn"><span class="av">${p.i}</span><strong>${p.nome}</strong></td><td>${pill(p.status)}</td><td>${p.s} sessões</td><td>${p.u}</td><td>${p.p}</td><td><button class="ab" onclick="ficha(${p.id})">Ver ficha</button><button class="ab" onclick="abrirEditar(${p.id})">✎ Editar</button><button class="ab ab-del" onclick="excluir(${p.id})">✕</button></td></tr>`).join('');
  document.getElementById('cp').textContent=l.length+' pacientes encontrados';
}
function filtrarT(t){const b=fs==='todos'?P:P.filter(p=>p.status===fs);render(b.filter(p=>p.nome.toLowerCase().includes(t.toLowerCase())));}
function filtrarS(s,btn){fs=s;document.querySelectorAll('.fb').forEach(b=>b.classList.remove('ativo'));btn.classList.add('ativo');filtrarT(document.getElementById('bi').value);}
function excluir(id){
  if(!confirm('Tem certeza que deseja remover este paciente?'))return;
  const idx=P.findIndex(x=>x.id===id);
  if(idx>-1){P.splice(idx,1);render(P);salvarLocal();toast('Paciente removido.');}
}
function abrirEditar(id){
  const p=P.find(x=>x.id===id);if(!p)return;
  document.getElementById('fn').value=p.nome;
  document.getElementById('fna').value=p.n||'';
  document.getElementById('ft2').value=p.tel||'';
  document.getElementById('fe').value=p.em||'';
  document.getElementById('fq').value=p.q||'';
  document.getElementById('fs').value=p.status;
  document.getElementById('fab').value=p.a||'';
  document.getElementById('mo').classList.add('aberto');
  document.getElementById('mo').dataset.editId=id;
  document.querySelector('.mt').textContent='Editar Paciente';
}
function abrirModal(){
  document.getElementById('mo').classList.add('aberto');
  delete document.getElementById('mo').dataset.editId;
  document.querySelector('.mt').textContent='Novo Paciente';
}
function fecharModal(){document.getElementById('mo').classList.remove('aberto');}
document.getElementById('mo').addEventListener('click',e=>{if(e.target===e.currentTarget)fecharModal();});
function salvar(){
  const nome=document.getElementById('fn').value.trim();if(!nome){toast('Preencha o nome!');return;}
  const mo=document.getElementById('mo');
  const editId=mo.dataset.editId?parseInt(mo.dataset.editId):null;
  if(editId){
    const p=P.find(x=>x.id===editId);
    if(p){
      p.nome=nome;p.i=nome.split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase();
      p.status=document.getElementById('fs').value;
      p.a=document.getElementById('fab').value;
      p.tel=document.getElementById('ft2').value;
      p.em=document.getElementById('fe').value;
      p.n=document.getElementById('fna').value;
      p.q=document.getElementById('fq').value;
    }
    render(P);fecharModal();toast('Paciente atualizado!');salvarLocal();
  } else {
    const ini=nome.split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase();
    P.unshift({id:Date.now(),nome,i:ini,status:document.getElementById('fs').value,s:0,u:'—',p:'—',a:document.getElementById('fab').value,tel:document.getElementById('ft2').value,em:document.getElementById('fe').value,n:document.getElementById('fna').value,q:document.getElementById('fq').value});
    render(P);fecharModal();toast(nome+' cadastrado com sucesso!');salvarLocal();
  }
  ['fn','fna','ft2','fe','fq'].forEach(id=>document.getElementById(id).value='');
}
function ficha(id){
  const p=P.find(x=>x.id===id);if(!p)return;
  document.getElementById('ft').textContent=p.nome;
  document.getElementById('fc').innerHTML=`
    <div class="fh"><div class="fav">${p.i}</div><div><div class="fn">${p.nome}</div><div class="fm">${p.a} · ${pill(p.status)} · ${p.s} sessões</div></div></div>
    <div class="ftabs"><div class="ftab ativo" onclick="ftab('i',this)">Informações</div><div class="ftab" onclick="ftab('n',this)">Notas de Sessão</div></div>
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
        <div style="margin-top:20px;padding-top:20px;border-top:1px solid var(--borda);"><div class="ii"><label>Queixa principal</label><p style="margin-top:6px;line-height:1.8;">${p.q||'—'}</p></div></div>
      </div>
      <div id="ftn" style="display:none;">
        <div class="ni"><div class="nd">12/04/2026 — Sessão ${p.s}</div><div class="nt">Paciente demonstrou evolução significativa no manejo da ansiedade. Relatou conseguir utilizar as técnicas de respiração diafragmática em situações de estresse. Humor estável. Meta: praticar reestruturação cognitiva no cotidiano.</div></div>
        <div class="ni"><div class="nd">05/04/2026 — Sessão ${Math.max(1,p.s-1)}</div><div class="nt">Sessão focada em identificação de pensamentos automáticos negativos. Paciente trouxe situação familiar que gerou ansiedade. Trabalhamos a diferenciação entre fato e interpretação. Tarefa: registro de pensamentos.</div></div>
        ${p.s>2?`<div class="ni"><div class="nd">29/03/2026 — Sessão ${Math.max(1,p.s-2)}</div><div class="nt">Psicoeducação sobre ansiedade. Paciente relatou melhora no sono. Introduzida técnica de mindfulness. Resposta positiva ao tratamento.</div></div>`:''}
      </div>
    </div>`;
  nav('ficha');
}
function ftab(t,btn){document.querySelectorAll('.ftab').forEach(x=>x.classList.remove('ativo'));btn.classList.add('ativo');document.getElementById('fti').style.display=t==='i'?'block':'none';document.getElementById('ftn').style.display=t==='n'?'block':'none';}
function toast(m){const t=document.getElementById('t');t.textContent=m;t.style.display='block';setTimeout(()=>t.style.display='none',3000);}

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
  document.getElementById('hb').classList.remove('open');
  document.getElementById('mob-overlay').classList.remove('show');
}