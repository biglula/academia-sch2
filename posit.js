"use strict";
const sources=[
 {url:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Buffalo_Apartment_Fire_June25.07_pt3.jpg/1024px-Buffalo_Apartment_Fire_June25.07_pt3.jpg",page:"https://commons.wikimedia.org/wiki/File:Buffalo_Apartment_Fire_June25.07_pt3.jpg",credit:"DragonFire1024 · Wikimedia Commons · CC BY-SA 3.0"},
 {url:"https://upload.wikimedia.org/wikipedia/commons/3/34/Large_black_smoke_and_flames_shoot_from_fire1.JPG",page:"https://commons.wikimedia.org/wiki/File:Large_black_smoke_and_flames_shoot_from_fire1.JPG",credit:"AutisticPsycho · Wikimedia Commons · CC BY 2.5"},
 {url:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Liverpool_High_Rise_Fire.jpg/960px-Liverpool_High_Rise_Fire.jpg",page:"https://commons.wikimedia.org/wiki/File:Liverpool_High_Rise_Fire.jpg",credit:"Helitak430 · Wikimedia Commons · CC BY-SA 4.0"}
];
const cases=[
 {name:"Incêndio em habitação, sem chamas visíveis",level:"Fácil",caption:"Fumo no piso superior — foto real usada num cenário fictício.",factLines:["POSIT inicial: 15h12 · Ocorrência: EX-101 · Canal: MAN 1","Rua do Lagar, n.º 8 · Freguesia de Santa Clara · Município de Vale Alto (locais fictícios)","A central informa: incêndio num edifício de habitação multifamiliar; há apenas 1 VUCI no local.","Não há confirmação de vítimas, hidrantes ou progressão entre compartimentos."],challenge:"Preenche o VEJO a partir do fumo observável. Quando as chamas não são visíveis, não significa que o incêndio esteja extinto.",expected:{estado:"Ativo (Curso)",fogo:"Sem fogo à vista",em:"Habitação",tipo:"Outro",tipoOutro:"Plurifamiliar",faco:["Reconhecimento"]},model:{
estou:"15h12 | EX-101 | MAN 1 | Rua do Lagar, n.º 8 | Santa Clara | Vale Alto. Coordenadas: não fornecidas; deixar por apurar.",
vejo:"Incêndio ativo (curso), sem fogo à vista nesta imagem. Em habitação; tipo de edifício: outro — multifamiliar. Observa-se fumo num piso superior. A extensão, o tipo de propagação, a existência de vítimas e os hidrantes não estão confirmados. Assinalar pontos sensíveis apenas se identificados.",
faco:"Assinalar Reconhecimento. Prosseguir com reconhecimento, pesquisa de vítimas e verificação de exposições. Só assinalar salvamentos, estratégia e proteção das exposições se forem efetivamente adotados ou definidos no contexto do exercício.",
peco:"Um VUCI está já no TO. Não existe número obrigatório de reforços dedutível apenas desta imagem: após reconhecimento justificar e quantificar eventuais VUCI, VE/VP ou assistência pré-hospitalar.",
info:"Confirmar ocupantes, acessos, compartimento de origem, propagação, hidrantes e meios no TO. No SITAC, representar apenas a disposição e riscos que são conhecidos."
},criteria:["Não confundi fumo com prova de chama visível.","Mantive estado ativo, apesar de não ver chamas.","Indiquei habitação e edifício multifamiliar (Outro).","Não inventei propagação horizontal ou vertical.","Assinalei reconhecimento como ação prioritária.","Não dei vítimas ou hidrantes como confirmados.","Distingui meios presentes de reforços solicitados.","Mantive campos desconhecidos em branco ou por confirmar."]},
 {name:"Incêndio em edifício com fogo à vista",level:"Médio",caption:"Fogo à vista e coluna de fumo — foto real usada num cenário fictício.",factLines:["POSIT inicial: 11h47 · Ocorrência: EX-102 · Canal: MAN 2","Rua da Escola, n.º 22 · Freguesia da Ribeira · Município de Pedra Branca (locais fictícios)","Edifício misto de habitação e comércio; um VUCI e uma ambulância comunicados no TO.","Informação de vítimas, caudais e progressão para edifícios contíguos: desconhecida."],challenge:"Assinala 'Fogo à vista'. Observa as exposições próximas, mas não confundas risco de propagação com propagação já confirmada.",expected:{estado:"Ativo (Curso)",fogo:"Fogo à vista",em:"Habitação",tipo:"Outro",tipoOutro:"Misto",faco:["Reconhecimento"]},model:{
estou:"11h47 | EX-102 | MAN 2 | Rua da Escola, n.º 22 | Ribeira | Pedra Branca. Coordenadas não fornecidas.",
vejo:"Incêndio ativo com fogo à vista e fumo escuro. Ocupação mista: habitação e comércio (é aceitável marcar ambas em 'Em'). Tipo de edifício: Outro — uso misto. Exposições adjacentes potencialmente ameaçadas. A propagação real horizontal/vertical necessita de confirmação.",
faco:"Efetuar reconhecimento, identificar ocupantes e possíveis salvamentos; estabelecer meios de ação e proteção das exposições caso necessária. Estratégia ofensiva/defensiva só deve ser assinalada após avaliação das condições e decisão do COS.",
peco:"Já existem VUCI e ambulância no TO. Quantificar VUCI/VECI, VTT, VE/VP ou outros apenas se a necessidade for identificada; não duplicar automaticamente os meios presentes.",
info:"Informação e SITAC: risco para edifícios contíguos, vias de acesso, disponibilidade de água e evolução do incêndio a verificar."
},criteria:["Assinalei incêndio ativo e fogo à vista.","Registei corretamente a localização fictícia e a hora.","Reconheci habitação e comércio no tipo de ocupação informado.","Assinalei apenas a propagação efetivamente confirmada.","Considerei reconhecimento e riscos para as exposições.","Não declarei vítimas por simples observação da imagem.","Não confundi meios no TO com meios solicitados.","Não defini estratégia ofensiva/defensiva sem dados de segurança."]},
 {name:"Incêndio em edifício de grande altura",level:"Difícil",caption:"Fogo em pisos elevados — foto real usada num cenário fictício.",factLines:["POSIT inicial: 21h06 · Ocorrência: EX-103 · Canal: MAN 3","Avenida das Acácias, n.º 100 · Freguesia do Centro · Município de Torre Nova (locais fictícios)","Central informa: edifício alto em construção, sem informação fiável sobre ocupantes.","No TO: 1 VUCI. A disponibilidade de VE/VP, VTT e sistemas do edifício é desconhecida."],challenge:"Usa 'Edifício Grande Altura' e o campo 'Outro' na ocupação. Considera vias verticais de propagação e acessos, mas confirma antes de afirmar que há vítimas ou colapso.",expected:{estado:"Ativo (Curso)",fogo:"Fogo à vista",em:"Outro",emOutro:"Em construção",tipo:"Edifício Grande Altura",faco:["Reconhecimento"]},model:{
estou:"21h06 | EX-103 | MAN 3 | Avenida das Acácias, n.º 100 | Centro | Torre Nova. Coordenadas não fornecidas.",
vejo:"Incêndio ativo com fogo à vista em edifício de grande altura. Ocupação referida pela central: edifício em construção, assinalar Outro. Fumo e chamas em pisos elevados. A propagação vertical é um risco importante; assinalar propagação apenas após confirmação objetiva, não por hipótese.",
faco:"Efetuar reconhecimento em vários pontos, confirmar ocupantes e acessos/caixas de escada, controlar zonas de segurança e proteger exposições. Coordenar ataque, abastecimento e eventual setorização; a estratégia depende do reconhecimento. Não afirmar que está em execução sem o ter decidido.",
peco:"Pode justificar-se pedir VE/VP e reforços de combate/água, com quantidades adaptadas aos acessos e altura. Avaliar necessidade de elemento de comando e meios de socorro. O pedido de reforço deve ser quantificado e fundamentado, não adivinhado.",
info:"Confirmar piso/compartimento de origem, acessos interiores, vias de evacuação, vítimas, instalações em funcionamento, propagação vertical, hidrantes e segurança estrutural. No SITAC, representar posições e exposições reais apenas quando conhecidas."
},criteria:["Identifiquei ativo e fogo à vista.","Assinalei edifício de grande altura.","Indiquei ocupação 'Outro — em construção', conforme enunciado.","Não dei por confirmadas vítimas ou colapso.","Distinguí o risco vertical da propagação confirmada.","Assinalei reconhecimento e prioridade de segurança.","Fundamentei pedidos de reforço para altura e acessos.","Registei necessidades de informação e meios já disponíveis."]}
];
const $=id=>document.getElementById(id);
const appForm=$("formSheet"),canvas=$("sitac"),ctx=canvas.getContext("2d");
let current=0,drawing=false,activePointer=null,pen="#17253b",penWidth=3,undoFrames=[];
const textIds=["hora","ocorr","canal","local","coordN","coordW","freguesia","municipio","emOutro","tipoOutro","hidOutro","pontosOutro","pedidoOutro","pedidoOutroNome","cosNome","info","p2hora","p2nota","p3hora","p3nota","p4hora","p4nota","handoverHora","handoverPara"];
const options=[
 ["estado","Estado do incêndio","radio",["Ativo (Curso)","Rescaldo (Conclusão)","Dominado (Resolução)","Extinto (Finalizado)"],"estado","red"],
 ["fogo","Com","radio",["Fogo à vista","Sem fogo à vista"],"fogo","grey"],
 ["em","Em","checkbox",["Habitação","Comércio","Indústria","Outro"],"em","grey"],
 ["tipo","Tipo de edifício","checkbox",["Unifamiliar","Hosp. / Lar / Escola","Edifício Grande Altura","Militar / Segurança","Utilidade Pública","Outro"],"tipo","grey"],
 ["propagacao","Propagação","checkbox",["Horizontal","Vertical"],"propagacao","red"],
 ["hidrantes","Hidrantes","checkbox",["Marco de água","Outro"],"hidrantes","cyan"],
 ["pontos","Pontos sensíveis","checkbox",["Habitações","Indústria","Comércio","Outro"],"pontos","green"],
 ["faco","Faço","checkbox",["Reconhecimento","Salvamentos","Estb. Meios de Ação","Proteção às exposições","Estratégia Ofensiva","Estratégia Defensiva","Rescaldo","Vigilância"],"faco","navy"]
];
const pedidos=["VUCI/VECI","VMER","VTT","SMPC","VE/VP","Elemento de Comando","ABSC/ABTD/ABTM","Outro"];
const oldEmOpts=new Set();
function initOptions(){
for(const [name,title,type,values,id,color] of options){
 const host=$(id+"Options");
 values.forEach(value=>{
  const label=document.createElement("label");label.className="choice "+color;
  const input=document.createElement("input");input.type=type;input.name=name;input.value=value;input.setAttribute("aria-label",title+": "+value);
  const span=document.createElement("span");span.textContent=value;
  label.append(input,span);host.append(label);
 });
}
const container=$("requestRows");for(const p of pedidos){
 const row=document.createElement("div");row.className="qtyrow";
 const input=document.createElement("input");input.type="number";input.min="0";input.max="99";input.step="1";input.inputMode="numeric";input.id="req_"+pedidos.indexOf(p);input.setAttribute("aria-label","Quantidade solicitada — "+p);input.placeholder="N.º";
 const label=document.createElement("label");label.setAttribute("for",input.id);label.textContent=p;
 row.append(input,label);container.append(row);
}
}
function createMeansRows(n){const target=$("meiosRows");target.innerHTML="";for(let i=0;i<n;i++){let tr=document.createElement("tr");for(const key of ["meio","entidade","hora","missao"]){let td=document.createElement("td");let input=document.createElement("input");input.id="m_"+i+"_"+key;input.name=input.id;input.placeholder=key==="hora"?"HH:MM":"";input.setAttribute("aria-label","Meio "+(i+1)+" "+key);td.append(input);tr.append(td)}target.append(tr)}}
function selected(name){return [...appForm.querySelectorAll('input[name="'+name+'"]:checked')].map(x=>x.value)}
function has(name,val){return selected(name).includes(val)}
function makeShot(){try{return canvas.toDataURL("image/png")}catch(e){return ""}}
function grab(){
 let fields={};appForm.querySelectorAll("input,textarea").forEach(el=>{
  if(el.type==="radio"||el.type==="checkbox"){fields["sel:"+el.name+":"+el.value]=el.checked;}
  else if(el.id){fields[el.id]=el.value;}
 });
 return {fields,meansCount:$("meiosRows").children.length,draw:makeShot()};
}
function storageKey(){return "academiasch2_sgo_guiacmd_v2_"+current}
function save(){try{localStorage.setItem(storageKey(),JSON.stringify(grab()));$("saveHint").textContent="✓ Rascunho deste cenário guardado no dispositivo."}catch(e){$("saveHint").textContent="O navegador não permitiu guardar o rascunho."}}
function clearCanvas(){ctx.clearRect(0,0,canvas.width,canvas.height);}
function restoreShot(data){clearCanvas();if(!data)return;const img=new Image();img.onload=()=>{ctx.drawImage(img,0,0,canvas.width,canvas.height)};img.src=data}
function load(i){
 appForm.reset();createMeansRows(6);clearCanvas();undoFrames=[];let record={};
 try{record=JSON.parse(localStorage.getItem("academiasch2_sgo_guiacmd_v2_"+i)||"{}")||{}}catch(e){}
 if(record.meansCount&&Number.isInteger(record.meansCount))createMeansRows(Math.max(6,Math.min(20,record.meansCount)));
 appForm.querySelectorAll("input,textarea").forEach(el=>{
  const key=(el.type==="checkbox"||el.type==="radio")?"sel:"+el.name+":"+el.value:el.id;
  if(!key)return;
  if(el.type==="checkbox"||el.type==="radio")el.checked=Boolean(record.fields&&record.fields[key]);
  else if(record.fields&&Object.hasOwn(record.fields,key))el.value=record.fields[key];
 });
 if(record.draw)restoreShot(record.draw);
 $("correction").classList.remove("show");
 $("saveHint").textContent="As respostas são guardadas automaticamente neste navegador.";
}
function render(i){
 if(i===current&&$("scenarioTitle").textContent)save();
 current=i;const c=cases[i],photo=sources[i];
 $("scenarioTitle").textContent=c.name;
 $("caseLevel").textContent=c.level+" · Caso "+(i+1)+" de 3";
 $("mainPhoto").src=photo.url;
 $("mainPhoto").alt="Fotografia real de incêndio estrutural: "+c.caption;
 $("photoCredit").textContent=photo.credit;
 $("photoCredit").href=photo.page;
 $("photoError").hidden=true;
 $("photoOriginal").href=photo.page;
 $("facts").textContent=c.factLines.join("\n");
 $("challenge").textContent=c.challenge;
 $("caseButtons").querySelectorAll("button[data-case]").forEach(el=>el.setAttribute("aria-pressed",el.dataset.case===String(i)?"true":"false"));
 load(i);
}
function buildTiles(){
 for(let i=0;i<cases.length;i++){
  const b=document.createElement("button");b.className="case-tile";b.type="button";b.dataset.case=String(i);b.setAttribute("aria-pressed","false");
  const img=document.createElement("img");img.src=sources[i].url;img.alt="";img.loading="lazy";
  const div=document.createElement("div");div.className="tile-info";
  const top=document.createElement("span");top.className="small";top.textContent=cases[i].level+" · Caso "+(i+1);
  const strong=document.createElement("strong");strong.textContent=cases[i].name;
  const sub=document.createElement("span");sub.className="subtitle";sub.textContent=cases[i].caption;
  div.append(top,strong,sub);b.append(img,div);b.onclick=()=>{if(i===current)return;render(i);window.scrollTo({top:0,behavior:"smooth"})};
  $("caseButtons").append(b);
 }
}
function locFrom(c){return c.factLines[1]}
function feedback(){
 save();const c=cases[current],e=c.expected,checks=[
  ["Hora informada", $("hora").value.trim()===c.factLines[0].match(/\d\d[h:]\d\d/)[0].replace("h",":")],
  ["N.º da ocorrência informado",$("ocorr").value.trim().includes("EX-10"+(current+1))],
  ["Canal de manobra informado",$("canal").value.trim().toUpperCase()==="MAN "+(current+1)],
  ["Estado do incêndio",has("estado",e.estado)],
  ["Fogo à vista / sem fogo à vista",has("fogo",e.fogo)],
  ["Ocupação do edifício",has("em",e.em)],
  ["Tipo de edifício",has("tipo",e.tipo)],
  ["Reconhecimento assinalado",has("faco","Reconhecimento")]
 ];
 const score=checks.filter(x=>x[1]).length;
 $("observations").textContent=score+" / "+checks.length+" campos de identificação assinalados conforme os dados do exercício";
 const list=$("validation");list.innerHTML="";for(const [name,ok] of checks){
  const li=document.createElement("li");li.textContent=(ok?"✓ ":"○ ")+name;li.style.color=ok?"#217047":"#a4472e";list.append(li)
 }
 const models=$("models");models.innerHTML="";
 for(const [tag,label] of [["estou","ESTOU"],["vejo","VEJO"],["faco","FAÇO"],["peco","PEÇO"],["info","Informações e SITAC"]]){
  const el=document.createElement("div");el.className="correctbox";const h=document.createElement("h4");h.textContent=label;const p=document.createElement("p");p.textContent=c.model[tag];el.append(h,p);models.append(el);
 }
 const cl=$("checking");cl.innerHTML="";
 c.criteria.forEach((s,i)=>{
  const l=document.createElement("label");const input=document.createElement("input");input.type="checkbox";input.className="selfcheck";input.dataset.index=String(i);const span=document.createElement("span");span.textContent=s;
  l.append(input,span);cl.append(l)
 });
 function updateManual(){const n=cl.querySelectorAll("input:checked").length;$("selfTotal").textContent=n+" / "+c.criteria.length+" critérios de autoavaliação cumpridos."}
 cl.onchange=updateManual;updateManual();
 $("correction").classList.add("show");$("correction").scrollIntoView({behavior:"smooth",block:"start"});
}
function plainText(){
 const c=cases[current];const res=["ACADEMIA SCH2 — POSIT DE TREINO","Cenário "+(current+1)+": "+c.name,"EXERCÍCIO FICTÍCIO — NÃO OPERACIONAL"];
 const get=(id)=>$(id)?.value?.trim()||"(não indicado)";
 res.push("Hr POSIT: "+get("hora"),"Ocorrência n.º: "+get("ocorr"),"Canal: "+get("canal"));
 res.push("ESTOU: "+get("local")+", freguesia "+get("freguesia")+", município "+get("municipio")+". Coordenadas N "+get("coordN")+", W "+get("coordW"));
 for(const group of ["estado","fogo","em","tipo","propagacao","hidrantes","pontos","faco"]){res.push(group.toUpperCase()+": "+(selected(group).join(", ")||"(sem seleção)"))}
 res.push("Outros: ocupação "+get("emOutro")+", tipo "+get("tipoOutro")+", hidrante "+get("hidOutro")+", pontos "+get("pontosOutro"));
 res.push("PEÇO: "+pedidos.map((p,i)=>p+" "+($("req_"+i).value.trim()||"—")).join(" | "));
 res.push("Assumo COS: "+($("cos").checked?"Sim":"Não")+", "+get("cosNome"));
 res.push("INFORMAÇÕES: "+get("info"));
 for(let j=2;j<=4;j++)res.push(j+"º POSIT: "+get("p"+j+"hora")+" "+get("p"+j+"nota"));
 res.push("MEIOS:");$("meiosRows").querySelectorAll("tr").forEach((tr,i)=>{const t=[...tr.querySelectorAll("input")].map(x=>x.value.trim());if(t.some(Boolean))res.push((i+1)+". "+t.join(" | "))});
 res.push("Passagem COS: "+get("handoverHora")+" para "+get("handoverPara"));
 return res.join("\n");
}
function setupCanvas(){
 ctx.lineCap="round";ctx.lineJoin="round";const coords=(ev)=>{const rect=canvas.getBoundingClientRect();return {x:(ev.clientX-rect.left)*canvas.width/rect.width,y:(ev.clientY-rect.top)*canvas.height/rect.height}};
 canvas.addEventListener("pointerdown",ev=>{ev.preventDefault();drawing=true;activePointer=ev.pointerId;undoFrames.push(makeShot());if(undoFrames.length>15)undoFrames.shift();canvas.setPointerCapture(ev.pointerId);const p=coords(ev);ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(p.x+.1,p.y+.1);ctx.strokeStyle=pen;ctx.lineWidth=penWidth;ctx.stroke()});
 canvas.addEventListener("pointermove",ev=>{if(!drawing||activePointer!==ev.pointerId)return;ev.preventDefault();const p=coords(ev);ctx.lineTo(p.x,p.y);ctx.stroke()});
 const end=(ev)=>{if(!drawing||activePointer!==ev.pointerId)return;drawing=false;activePointer=null;ctx.closePath();save()};
 canvas.addEventListener("pointerup",end);canvas.addEventListener("pointercancel",end);
 document.querySelectorAll(".tool[data-pen]").forEach(b=>b.onclick=()=>{pen=b.dataset.pen;penWidth=pen==="#ffffff"?26:3;document.querySelectorAll(".tool[data-pen]").forEach(x=>x.setAttribute("aria-pressed",x===b?"true":"false"))});
 $("undo").onclick=()=>{const last=undoFrames.pop();if(last)restoreShot(last);save()};
 $("clearSitac").onclick=()=>{undoFrames.push(makeShot());clearCanvas();save()};
}
initOptions();buildTiles();setupCanvas();createMeansRows(6);
$("addMeio").onclick=()=>{const n=$("meiosRows").children.length;if(n>=20)return;createMeansRows(n+1);save()};
appForm.addEventListener("input",save);appForm.addEventListener("change",save);
$("evaluate").onclick=feedback;
$("copy").onclick=async()=>{try{await navigator.clipboard.writeText(plainText());$("saveHint").textContent="✓ POSIT copiado."}catch(e){$("saveHint").textContent="A cópia foi bloqueada pelo navegador. Podes imprimir ou selecionar os dados."}};
$("print").onclick=()=>window.print();
$("reset").onclick=()=>{if(!confirm("Apagar apenas as respostas deste cenário?"))return;try{localStorage.removeItem(storageKey())}catch(e){}load(current)};
$("mainPhoto").onerror=()=>{$("photoError").hidden=false};
render(0);
