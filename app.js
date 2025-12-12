// ===== Dados (consolidados do PDF + LinkedIn export) =====
const resume = {
  name: "Thiago Carneiro da Silva",
  // Há dois e-mails nos materiais; o botão Privacidade ajuda a expor/ocultar.
  email_primary: "eltenchu@hotmail.com",
phone: "(27) 99815-3902",
  location: "Vila Velha / Serra — ES",
  linkedinUrl: "https://www.linkedin.com/in/thiago-c-56135b1a8",

  headlineRotations: [
    "Analista de Eficiência Jr • Indicadores • Power BI",
    "Transformo dados em insights operacionais • Power BI & Power Query",
    "Graduando em Ciência da Computação • Técnico em Administração • Ex-militar (CPAEAM)"
  ],

  summary:
    "Perfil colaborativo, orientado a dados e com foco em qualidade. Atuo com acompanhamento de indicadores, padronização e conferência de bases, elaboração de relatórios/apresentações e suporte a rotinas de reuniões de resultados. Experiência prévia em apoio administrativo/operacional, controle documental e suporte técnico em ambiente industrial.",

  chips: [
    "Power BI", "Power Query", "Excel/Planilhas", "Indicadores (KPIs)", "SLA",
    "Custos", "Produtividade", "Absenteísmo", "Horas Extras",
    "Padronização", "Checklists", "Documentação", "Python (básico)", "Pacote Office"
  ],

  experience: [
    {
      role: "Analista de Eficiência Jr",
      company: "Grupo Condonal",
      period: "12/2025 – Atual",
      city: "Vitória - ES",
      bullets: [
        "Acompanhamento diário de indicadores operacionais (custos, produtividade, horas extras, absenteísmo, SLA e qualidade).",
        "Atualização e conferência de bases em planilhas e painéis (Power BI), garantindo padronização e consistência.",
        "Elaboração de relatórios e apresentações de resultados para supervisores e gestão, destacando desvios e oportunidades.",
        "Apoio na rotina de reuniões de resultados (semanais e mensais), registrando decisões e acompanhando planos de ação.",
        "Identificação de gargalos operacionais e desperdícios, sugerindo ajustes em processos, escalas e controles.",
        "Interface com supervisores e áreas administrativas (RH, financeiro, operações) para consolidação de indicadores.",
        "Organização e arquivamento de análises e documentos, mantendo histórico para comparações de desempenho."
      ]
    },
    {
      role: "Assistente Técnico",
      company: "CRP Service LTDA",
      period: "10/2025 – 12/2025",
      city: "Serra - ES / Aracruz - ES",
      bullets: [
        "Apoio técnico à engenharia e produção (construção/manutenção naval): leitura e interpretação de desenhos, plantas e especificações.",
        "Controle de materiais e documentos: requisições, recebimento, distribuição e registro de documentação técnica (inspeções, testes, certificados).",
        "Apoio à qualidade e segurança: suporte em inspeções/ensaios e registros de não conformidade e plano de ação.",
        "Suporte administrativo e de planejamento: planilhas de acompanhamento, relatórios, ordens de serviço, custos e prazos.",
        "Rotinas administrativas/secretaria: atendimento ao público, controle documental e organização de arquivos físicos e digitais."
      ]
    },
    {
      role: "Analista Administrativo",
      company: "Gladiadores Armas",
      period: "08/2025 – 10/2025",
      city: "Cariacica - ES",
      bullets: [
        "Documentação e regularização de processos junto a órgãos competentes (controle de prazos, organização e atualização de status).",
        "Gestão documental física e digital, com foco em integridade da informação e acesso rápido.",
        "Elaboração de relatórios e planilhas gerenciais para apoio à tomada de decisão e controle administrativo.",
        "Atendimento a clientes e stakeholders por canais diversos (telefone, e-mail e presencial)."
      ]
    },
    {
      role: "Auxiliar Administrativo",
      company: "Gladiadores Armas",
      period: "04/2025 – 08/2025",
      city: "Cariacica - ES",
      bullets: [
        "Organização/digitalização de documentos e registros para consulta e rastreabilidade.",
        "Elaboração de planilhas e relatórios para controle administrativo.",
        "Atendimento e encaminhamento de demandas, manutenção de cadastros e base de dados."
      ]
    },
    {
      role: "Marinheiro (Militar)",
      company: "Marinha do Brasil",
      period: "04/2021 – 04/2025",
      city: "Rio de Janeiro - RJ",
      bullets: [
        "Manobras de atracação/desatracação, rotinas de bordo e organização de suprimentos.",
        "Apoio administrativo: planilhas, organização de documentos e controle de contas.",
        "Operação de equipamentos de comunicação e inspeções de segurança/conformidade.",
        "Controle de pessoal e escalas embarcadas e apoio à adaptação de recrutas."
      ]
    }
  ],

  education: [
    {
      course: "Bacharelado em Ciência da Computação",
      inst: "Estácio",
      period: "02/2024 – 12/2027",
      status: "Cursando"
    },
    {
      course: "Técnico em Administração",
      inst: "Instituto de Educação Tecnológica Avançada da Amazônia",
      period: "06/2024",
      status: "Concluído"
    },
    {
      course: "Bacharelado em Estatística",
      inst: "Universidade Federal do Espírito Santo (UFES)",
      period: "02/2019 – 02/2023",
      status: "Interrompido"
    }
  ],

  courses: [
    { title: "Inglês", detail: "Nível: Intermediário (certificação: Inglês intermediário)" },
    { title: "Informática", detail: "Nível: Avançado" },
    { title: "Mostra de Profissões", detail: "Certificação/participação (LinkedIn)" },
    { title: "Comunicações Interiores", detail: "Curso pela Marinha do Brasil (C-FMN)" },
    { title: "Secretaria e Comunicações", detail: "Curso pela Marinha do Brasil (C-FMN)" },
    { title: "Controle de Avarias", detail: "Curso pela Marinha do Brasil (C-FMN)" },
    { title: "Arte Naval e Marinharia", detail: "Curso pela Marinha do Brasil (C-FMN)" },
    { title: "Primeiros Socorros", detail: "Curso pela Marinha do Brasil (C-FMN)" }
  ]
};

// ===== Helpers =====
const $ = (id) => document.getElementById(id);

function escapeHtml(s){
  return String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");
}

function download(filename, text) {
  const el = document.createElement("a");
  el.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
  el.setAttribute("download", filename);
  el.style.display = "none";
  document.body.appendChild(el);
  el.click();
  document.body.removeChild(el);
}

function copyToClipboard(text){
  navigator.clipboard?.writeText(text).catch(() => {});
}

// ===== Render =====
function render(){
  $("summary").textContent = resume.summary;

  // chips
  $("chips").innerHTML = resume.chips.map(c => `<span class="chip">${escapeHtml(c)}</span>`).join("");

  // experience
  renderExperience("");

  // education
  $("education").innerHTML = resume.education.map(e => `
    <div class="item">
      <div class="itemTop">
        <div>
          <p class="itemTitle">${escapeHtml(e.course)}</p>
          <p class="itemMeta">${escapeHtml(e.inst)}</p>
        </div>
        <div>
          <p class="itemMeta">${escapeHtml(e.period)}</p>
          <p class="itemMeta">Status: ${escapeHtml(e.status)}</p>
        </div>
      </div>
    </div>
  `).join("");

  // courses/certs
  $("courses").innerHTML = resume.courses.map(c => `
    <div class="item">
      <p class="itemTitle">${escapeHtml(c.title)}</p>
      <p class="itemMeta">${escapeHtml(c.detail)}</p>
    </div>
  `).join("");
}

function renderExperience(filterText){
  const q = filterText.trim().toLowerCase();

  const filtered = resume.experience.filter(x => {
    if(!q) return true;
    const hay = [
      x.role, x.company, x.period, x.city,
      ...(x.bullets || [])
    ].join(" ").toLowerCase();
    return hay.includes(q);
  });

  $("experience").innerHTML = filtered.map(x => `
    <div class="item">
      <div class="itemTop">
        <div>
          <p class="itemTitle">${escapeHtml(x.role)} <span class="muted">| ${escapeHtml(x.company)}</span></p>
          <p class="itemMeta">${escapeHtml(x.city)}</p>
        </div>
        <div>
          <p class="itemMeta">${escapeHtml(x.period)}</p>
        </div>
      </div>
      <ul>
        ${(x.bullets || []).map(b => `<li>${escapeHtml(b)}</li>`).join("")}
      </ul>
    </div>
  `).join("");

  if(filtered.length === 0){
    $("experience").innerHTML = `<p class="muted">Nenhuma experiência encontrada para este filtro.</p>`;
  }
}

// ===== Typed headline =====
let typedIdx = 0, charIdx = 0, deleting = false;
function tickTyped(){
  const current = resume.headlineRotations[typedIdx % resume.headlineRotations.length];
  const out = current.slice(0, charIdx);
  $("headlineTyped").textContent = out;

  if(!deleting){
    charIdx++;
    if(charIdx > current.length + 14){
      deleting = true;
    }
  } else {
    charIdx--;
    if(charIdx <= 0){
      deleting = false;
      typedIdx++;
    }
  }
  setTimeout(tickTyped, deleting ? 40 : 55);
}

// ===== Terminal mode =====
function openTerminal(){
  $("terminalOverlay").classList.add("open");
  $("terminalOverlay").setAttribute("aria-hidden","false");
  terminalPrint([
    "Bem-vindo ao currículo interativo.",
    "Digite `help` para ver os comandos disponíveis."
  ].join("\n"));
  $("terminalInput").focus();
}
function closeTerminal(){
  $("terminalOverlay").classList.remove("open");
  $("terminalOverlay").setAttribute("aria-hidden","true");
}
function terminalPrint(text){
  const log = $("terminalLog");
  log.textContent += (log.textContent ? "\n\n" : "") + text;
  log.scrollTop = log.scrollHeight;
}
function terminalRun(cmdRaw){
  const cmd = cmdRaw.trim();
  if(!cmd) return;

  terminalPrint(`$ ${cmd}`);

  const c = cmd.toLowerCase();

  if(c === "help"){
    terminalPrint([
      "Comandos:",
      "  about       -> resumo",
      "  skills      -> chips (habilidades)",
      "  exp         -> lista experiências",
      "  edu         -> formação",
      "  certs       -> cursos/certificações",
      "  copy email  -> copia e-mail principal",
      "  copy phone  -> copia telefone",
      "  print       -> exporta PDF (imprimir)",
      "  theme       -> alterna tema",
      "  exit        -> fecha terminal"
    ].join("\n"));
    return;
  }

  if(c === "about"){
    terminalPrint(resume.summary);
    return;
  }

  if(c === "skills"){
    terminalPrint(resume.chips.join(" • "));
    return;
  }

  if(c === "exp"){
    const lines = resume.experience.map(x =>
      `- ${x.role} | ${x.company} (${x.period}) — ${x.city}`
    );
    terminalPrint(lines.join("\n"));
    return;
  }

  if(c === "edu"){
    const lines = resume.education.map(e =>
      `- ${e.course} — ${e.inst} (${e.period}) [${e.status}]`
    );
    terminalPrint(lines.join("\n"));
    return;
  }

  if(c === "certs"){
    const lines = resume.courses.map(c => `- ${c.title}: ${c.detail}`);
    terminalPrint(lines.join("\n"));
    return;
  }

  if(c === "copy email"){
    copyToClipboard(resume.email_primary);
    terminalPrint("E-mail copiado para a área de transferência.");
    return;
  }

  if(c === "copy phone"){
    copyToClipboard(resume.phone);
    terminalPrint("Telefone copiado para a área de transferência.");
    return;
  }

  if(c === "print"){
    window.print();
    return;
  }

  if(c === "theme"){
    toggleTheme();
    return;
  }

  if(c === "exit"){
    closeTerminal();
    return;
  }

  terminalPrint("Comando não reconhecido. Digite `help`.");
}

// ===== Theme & privacy =====
function setTheme(next){
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  if(typeof window.__trailSetEnabled === "function"){
    window.__trailSetEnabled(next === "argb");
  }
}

function toggleTheme(){
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  const next = current === "dark" ? "light" : (current === "light" ? "argb" : "dark");
  setTheme(next);
}
function togglePrivacy(){
  document.body.classList.toggle("privacy-on");
  const privates = document.querySelectorAll(".private");
  privates.forEach(el => el.classList.toggle("hidden"));
  localStorage.setItem("privacyHidden", document.body.classList.contains("privacy-on") ? "1" : "0");
}

// ===== Wire up =====
document.addEventListener("click", (e) => {
  const t = e.target;
  if(t && t.dataset && t.dataset.copy){
    copyToClipboard(t.dataset.copy);
  }
});

$("btnTheme").addEventListener("click", toggleTheme);
$("btnArgb").addEventListener("click", () => setTheme("argb"));
$("btnPrivacy").addEventListener("click", togglePrivacy);
$("btnTerminal").addEventListener("click", openTerminal);
$("btnTerminalClose").addEventListener("click", closeTerminal);
$("btnPrint").addEventListener("click", () => window.print());
$("btnJson").addEventListener("click", () => download("resume.json", JSON.stringify(resume, null, 2)));

$("expFilter").addEventListener("input", (e) => renderExperience(e.target.value));

$("terminalInput").addEventListener("keydown", (e) => {
  if(e.key === "Enter"){
    terminalRun(e.target.value);
    e.target.value = "";
  }
  if(e.key === "Escape"){
    closeTerminal();
  }
});

// init
(function init(){
  const savedTheme = localStorage.getItem("theme");
  if(savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);

  const privacyHidden = localStorage.getItem("privacyHidden") === "1";
  if(privacyHidden){
    document.body.classList.add("privacy-on");
    document.querySelectorAll(".private").forEach(el => el.classList.add("hidden"));
  }

  render();
  tickTyped();
})();


/* ===== Mini Game: CV Quest (gamer, mas profissional) ===== */
const game = (() => {
  const overlay = document.getElementById("gameOverlay");
  const btnOpen = document.getElementById("btnGame");
  const btnClose = document.getElementById("btnGameClose");
  const statusEl = document.getElementById("gameStatus");
  const hintEl = document.getElementById("gameHint");
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas?.getContext("2d");

  if(!overlay || !btnOpen || !btnClose || !canvas || !ctx){
    return { open: () => {}, close: () => {} };
  }

  const W = canvas.width, H = canvas.height;

  const state = {
    running: false,
    paused: false,
    collected: { EXP: false, EDU: false, SKL: false },
    keys: { up:false, down:false, left:false, right:false },
    player: { x: 40, y: 40, r: 12, speed: 2.2 },
    items: [
      { key: "EXP", x: 300, y: 70,  r: 14, colorA: "rgba(122,167,255,.95)", colorB: "rgba(122,167,255,.25)", target: "secExperience" },
      { key: "EDU", x: 90,  y: 290, r: 14, colorA: "rgba(100,240,200,.95)", colorB: "rgba(100,240,200,.25)", target: "secEducation" },
      { key: "SKL", x: 300, y: 290, r: 14, colorA: "rgba(255,255,255,.95)", colorB: "rgba(255,255,255,.18)", target: "secSummary" }
    ],
    walls: [
      { x: 140, y: 120, w: 90,  h: 18 },
      { x: 70,  y: 200, w: 18,  h: 90 },
      { x: 220, y: 220, w: 110, h: 18 }
    ]
  };

  function open(){
    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden","false");
    state.running = true;
    state.paused = false;

    const saved = localStorage.getItem("cvQuest");
    if(saved){
      try{
        const parsed = JSON.parse(saved);
        state.collected = { ...state.collected, ...parsed.collected };
      } catch {}
    }
    updateStatus();
    hintEl.textContent = "Dica: ao coletar um item, eu te levo para a seção correspondente.";
    requestAnimationFrame(loop);
  }

  function close(){
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden","true");
    state.running = false;
    state.keys = { up:false, down:false, left:false, right:false };
  }

  function togglePause(){
    state.paused = !state.paused;
    hintEl.textContent = state.paused
      ? "Pausado. Toque em ⏸ novamente para continuar."
      : "Valendo. Colete EXP/EDU/SKL.";
  }

  function updateStatus(){
    const n = Object.values(state.collected).filter(Boolean).length;
    statusEl.textContent = `${n}/3`;
    localStorage.setItem("cvQuest", JSON.stringify({ collected: state.collected }));
    if(n === 3){
      hintEl.textContent = "Quest concluída. Você explorou as principais seções do currículo.";
      achievements?.unlock("quest_complete");
    }
  }

  function clamp(v, min, max){ return Math.max(min, Math.min(max, v)); }

  function circleHit(a, b){
    const dx = a.x - b.x, dy = a.y - b.y;
    const dist = Math.sqrt(dx*dx + dy*dy);
    return dist <= (a.r + b.r);
  }

  function rectCircleCollide(rect, c){
    const cx = clamp(c.x, rect.x, rect.x + rect.w);
    const cy = clamp(c.y, rect.y, rect.y + rect.h);
    const dx = c.x - cx, dy = c.y - cy;
    return (dx*dx + dy*dy) <= (c.r*c.r);
  }

  function movePlayer(){
    const p = state.player;
    let vx = 0, vy = 0;
    if(state.keys.left)  vx -= 1;
    if(state.keys.right) vx += 1;
    if(state.keys.up)    vy -= 1;
    if(state.keys.down)  vy += 1;

    const mag = Math.hypot(vx, vy);
    if(mag > 0){ vx /= mag; vy /= mag; }

    const next = { x: p.x + vx*p.speed, y: p.y + vy*p.speed, r: p.r };
    next.x = clamp(next.x, p.r, W - p.r);
    next.y = clamp(next.y, p.r, H - p.r);

    const tryX = { ...next, y: p.y };
    const hitX = state.walls.some(w => rectCircleCollide(w, tryX));
    if(!hitX) p.x = tryX.x;

    const tryY = { ...next, x: p.x };
    const hitY = state.walls.some(w => rectCircleCollide(w, tryY));
    if(!hitY) p.y = tryY.y;
  }

  function goToSection(id){
    const el = document.getElementById(id);
    if(!el) return;
    close();
    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      el.classList.add("flash");
      setTimeout(() => el.classList.remove("flash"), 900);
    }, 80);
  }

  function checkItems(){
    const p = state.player;
    for(const it of state.items){
      if(state.collected[it.key]) continue;
      if(circleHit(p, it)){
        state.collected[it.key] = true;
        updateStatus();
        goToSection(it.target);
        return;
      }
    }
  }

  function draw(){
    ctx.clearRect(0,0,W,H);

    // Grid
    ctx.save();
    ctx.globalAlpha = 0.35;
    ctx.strokeStyle = "rgba(255,255,255,.12)";
    for(let i=0;i<=W;i+=24){ ctx.beginPath(); ctx.moveTo(i,0); ctx.lineTo(i,H); ctx.stroke(); }
    for(let j=0;j<=H;j+=24){ ctx.beginPath(); ctx.moveTo(0,j); ctx.lineTo(W,j); ctx.stroke(); }
    ctx.restore();

    // Walls
    for(const w of state.walls){
      ctx.fillStyle = "rgba(255,255,255,.10)";
      ctx.fillRect(w.x, w.y, w.w, w.h);
      ctx.strokeStyle = "rgba(255,255,255,.18)";
      ctx.strokeRect(w.x, w.y, w.w, w.h);
    }

    // Items
    for(const it of state.items){
      if(state.collected[it.key]) continue;
      const grad = ctx.createRadialGradient(it.x, it.y, 2, it.x, it.y, it.r+12);
      grad.addColorStop(0, it.colorA);
      grad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grad;
      ctx.beginPath(); ctx.arc(it.x, it.y, it.r+12, 0, Math.PI*2); ctx.fill();

      ctx.fillStyle = it.colorB;
      ctx.beginPath(); ctx.arc(it.x, it.y, it.r, 0, Math.PI*2); ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,.25)";
      ctx.stroke();

      ctx.fillStyle = "rgba(231,238,252,.92)";
      ctx.font = "bold 12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(it.key, it.x, it.y);
    }

    // Player
    const p = state.player;
    const glow = ctx.createRadialGradient(p.x, p.y, 1, p.x, p.y, p.r+14);
    glow.addColorStop(0, "rgba(100,240,200,.85)");
    glow.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = glow;
    ctx.beginPath(); ctx.arc(p.x, p.y, p.r+14, 0, Math.PI*2); ctx.fill();

    ctx.fillStyle = "rgba(0,0,0,.35)";
    ctx.beginPath(); ctx.arc(p.x+2, p.y+3, p.r, 0, Math.PI*2); ctx.fill();

    ctx.fillStyle = "rgba(231,238,252,.92)";
    ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2); ctx.fill();
    ctx.strokeStyle = "rgba(0,0,0,.35)";
    ctx.stroke();

    // HUD
    ctx.fillStyle = "rgba(0,0,0,.35)";
    ctx.fillRect(10, 10, 120, 34);
    ctx.strokeStyle = "rgba(255,255,255,.18)";
    ctx.strokeRect(10, 10, 120, 34);
    const n = Object.values(state.collected).filter(Boolean).length;
    ctx.fillStyle = "rgba(231,238,252,.92)";
    ctx.font = "12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(`Itens: ${n}/3`, 18, 27);

    if(state.paused){
      ctx.fillStyle = "rgba(0,0,0,.55)";
      ctx.fillRect(0,0,W,H);
      ctx.fillStyle = "rgba(231,238,252,.92)";
      ctx.font = "bold 18px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace";
      ctx.textAlign = "center";
      ctx.fillText("PAUSADO", W/2, H/2 - 10);
      ctx.font = "12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace";
      ctx.fillText("Toque em ⏸ para continuar", W/2, H/2 + 18);
    }
  }

  function loop(){
    if(!state.running) return;
    if(!state.paused){
      movePlayer();
      checkItems();
    }
    draw();
    requestAnimationFrame(loop);
  }

  // Keyboard
  window.addEventListener("keydown", (e) => {
    if(!overlay.classList.contains("open")) return;
    const k = e.key.toLowerCase();
    if(k === "arrowup" || k === "w") state.keys.up = true;
    if(k === "arrowdown" || k === "s") state.keys.down = true;
    if(k === "arrowleft" || k === "a") state.keys.left = true;
    if(k === "arrowright" || k === "d") state.keys.right = true;
    if(k === "escape") close();
    if(k === " ") { e.preventDefault(); togglePause(); }
  });
  window.addEventListener("keyup", (e) => {
    if(!overlay.classList.contains("open")) return;
    const k = e.key.toLowerCase();
    if(k === "arrowup" || k === "w") state.keys.up = false;
    if(k === "arrowdown" || k === "s") state.keys.down = false;
    if(k === "arrowleft" || k === "a") state.keys.left = false;
    if(k === "arrowright" || k === "d") state.keys.right = false;
  });

  // Mobile D-pad
  const dpadButtons = overlay.querySelectorAll(".dpadBtn");
  dpadButtons.forEach(btn => {
    const dir = btn.getAttribute("data-dir");
    const down = (e) => {
      e.preventDefault();
      if(dir === "pause") { togglePause(); return; }
      if(dir === "up") state.keys.up = true;
      if(dir === "down") state.keys.down = true;
      if(dir === "left") state.keys.left = true;
      if(dir === "right") state.keys.right = true;
    };
    const up = (e) => {
      e.preventDefault();
      if(dir === "up") state.keys.up = false;
      if(dir === "down") state.keys.down = false;
      if(dir === "left") state.keys.left = false;
      if(dir === "right") state.keys.right = false;
    };
    btn.addEventListener("pointerdown", down, { passive: false });
    btn.addEventListener("pointerup", up, { passive: false });
    btn.addEventListener("pointercancel", up, { passive: false });
    btn.addEventListener("pointerleave", up, { passive: false });
  });

  // Open/close
  btnOpen.addEventListener("click", open);
  btnClose.addEventListener("click", close);
  overlay.addEventListener("click", (e) => { if(e.target === overlay) close(); });

  return { open, close };
})();


/* ===== Achievements module ===== */
const achievements = (() => {
  const grid = document.getElementById("achievementsGrid");
  const resetBtn = document.getElementById("btnResetProgress");
  const skillHint = document.getElementById("skillTreeHint");

  const defs = [
    { id:"first_visit",  icon:"01", title:"Boot Sequence", desc:"Primeira visita ao currículo." },
    { id:"terminal_user",icon:"TT", title:"Terminal Tamer", desc:"Abriu o Modo Terminal." },
    { id:"quest_complete",icon:"Q3", title:"Quest Master", desc:"Concluiu o mini game (3/3 itens)." },
    { id:"skill_tree_5", icon:"ST", title:"Skill Tree I", desc:"Ativou 5 nós na Skill Tree." },
    { id:"export_pdf",   icon:"PDF",title:"Exporter", desc:"Usou Exportar PDF/print." },
    { id:"download_json",icon:"JS", title:"Data Pack", desc:"Baixou o JSON do currículo." }
  ];

  function load(){
    try{
      return JSON.parse(localStorage.getItem("cvAchievements") || "{}");
    } catch {
      return {};
    }
  }
  function save(state){
    localStorage.setItem("cvAchievements", JSON.stringify(state));
  }

  let state = load();

  function unlock(id){
    if(state[id]) return;
    state[id] = true;
    save(state);
    render();
  }

  function render(){
    if(!grid) return;
    grid.innerHTML = defs.map(d => {
      const unlocked = !!state[d.id];
      return `
        <div class="badge ${unlocked ? "unlocked" : "locked"}" data-ach="${d.id}">
          <div class="badgeIcon">${d.icon}</div>
          <div>
            <p class="badgeTitle">${d.title}</p>
            <p class="badgeDesc">${d.desc}</p>
          </div>
        </div>
      `;
    }).join("");
  }

  function resetAll(){
    // Keep only theme/privacy prefs; reset game + skills + achievements.
    localStorage.removeItem("cvAchievements");
    localStorage.removeItem("cvQuest");
    localStorage.removeItem("cvSkillTree");
    state = {};
    render();

    // reset skill UI
    document.querySelectorAll(".node.active").forEach(n => n.classList.remove("active"));
    if(skillHint) skillHint.textContent = "Dica: ative 5 nós para desbloquear um achievement.";
    // reset quest status display if open
    const st = document.getElementById("gameStatus");
    if(st) st.textContent = "0/3";
  }

  if(resetBtn){
    resetBtn.addEventListener("click", resetAll);
  }

  // Auto unlock on first load
  unlock("first_visit");

  // Initial render
  render();

  return { unlock, render };
})();

/* ===== Skill Tree interactions ===== */
const skillTree = (() => {
  const key = "cvSkillTree";
  const nodes = Array.from(document.querySelectorAll(".node"));
  const hint = document.getElementById("skillTreeHint");

  function load(){
    try{ return JSON.parse(localStorage.getItem(key) || "[]"); } catch { return []; }
  }
  function save(arr){
    localStorage.setItem(key, JSON.stringify(arr));
  }

  let active = new Set(load());

  function apply(){
    nodes.forEach(n => {
      const name = n.getAttribute("data-skill");
      if(active.has(name)) n.classList.add("active");
    });
    const count = active.size;
    if(hint){
      hint.textContent = count >= 5
        ? "Skill Tree: 5+ nós ativados. Achievement desbloqueado."
        : `Nós ativos: ${count}/5 para desbloquear achievement.`;
    }
    if(count >= 5){
      achievements?.unlock("skill_tree_5");
    }
  }

  nodes.forEach(n => {
    n.addEventListener("click", () => {
      const name = n.getAttribute("data-skill");
      if(!name) return;
      if(active.has(name)){
        active.delete(name);
        n.classList.remove("active");
      } else {
        active.add(name);
        n.classList.add("active");
      }
      save(Array.from(active));
      apply();
    });
  });

  apply();

  return { apply };
})();

/* ===== Hook achievements into existing actions ===== */
// Terminal: unlock when opened
(() => {
  const btnTerminal = document.getElementById("btnTerminal");
  if(btnTerminal){
    btnTerminal.addEventListener("click", () => achievements?.unlock("terminal_user"));
  }
})();

// Print/export: unlock
(() => {
  const btnPrint = document.getElementById("btnPrint");
  if(btnPrint){
    btnPrint.addEventListener("click", () => achievements?.unlock("export_pdf"));
  }
  // Terminal print command is already using window.print(); we hook on beforeprint too
  window.addEventListener("beforeprint", () => achievements?.unlock("export_pdf"));
})();

// JSON download: unlock
(() => {
  const btnJson = document.getElementById("btnJson");
  if(btnJson){
    btnJson.addEventListener("click", () => achievements?.unlock("download_json"));
  }
})();


/* ===== Recruiter onboarding logic ===== */
(() => {
  const overlay = document.getElementById("onboardingOverlay");
  const btnView = document.getElementById("btnJustView");
  const btnPlay = document.getElementById("btnPlay");
  const chk = document.getElementById("chkRemember");
  const btnMode = document.getElementById("btnMode");

  if(!overlay || !btnView || !btnPlay || !chk) return;

  const KEY = "cvModePreference"; // "view" | "play"

  function getPref(){
    return localStorage.getItem(KEY);
  }
  function setPref(v){
    if(chk.checked) localStorage.setItem(KEY, v);
  }

  function open(){
    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden","false");
  }

  // Expose for manual re-open
  window.openCvModePicker = open;
  function close(){
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden","true");
  }

  // First load: show if no preference saved
  const pref = getPref();
  if(!pref){
    open();
  }

  btnView.addEventListener("click", () => {
    setPref("view");
    close();
    // No auto actions; just keep normal CV navigation
  });

  btnPlay.addEventListener("click", () => {
    setPref("play");
    close();
    // Open mini game automatically for impact
    try{
      document.getElementById("btnGame")?.click();
    } catch {}
  });

  // Manual mode switch
  if(btnMode){
    btnMode.addEventListener("click", () => {
      // Open picker even if a preference already exists
      open();
    });
  }

  // Tap outside closes (but keep choice unset)
  overlay.addEventListener("click", (e) => {
    if(e.target === overlay) close();
  });
})();


/* ===== Neon cursor trail module (ARGB) ===== */
(() => {
  const prefersReduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(prefersReduce) return;

  function init(){
    const canvas = document.createElement("canvas");
    canvas.id = "trailCanvas";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0;

    function resize(){
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = Math.floor(window.innerWidth);
      h = Math.floor(window.innerHeight);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    // Coarse pointer (touch) -> menos partículas
    const coarse = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
    const MAX = coarse ? 22 : 46;

    const particles = [];
    let enabled = (document.documentElement.getAttribute("data-theme") || "dark") === "argb";
    canvas.style.display = enabled ? "block" : "none";

    // Expose hook for theme changes
    window.__trailSetEnabled = (on) => {
      enabled = !!on;
      canvas.style.display = enabled ? "block" : "none";
      if(!enabled){
        particles.length = 0;
        ctx.clearRect(0,0,w,h);
      }
    };

    let last = { x: w/2, y: h/2 };

    function addParticle(x, y){
      const useA = (particles.length % 2) === 0;
      particles.push({
        x, y,
        vx: (Math.random()-0.5) * (coarse ? 0.35 : 0.65),
        vy: (Math.random()-0.5) * (coarse ? 0.35 : 0.65),
        life: 1.0,
        r: (coarse ? 5 : 6) + Math.random() * (coarse ? 5 : 7),
        hue: useA ? 185 : 310
      });
      while(particles.length > MAX) particles.shift();
    }

    // Throttle pointer events
    let pending = null;
    window.addEventListener("pointermove", (e) => {
      if(!enabled) return;
      pending = { x: e.clientX, y: e.clientY };
    }, { passive: true });

    function step(){
      if(!enabled){
        requestAnimationFrame(step);
        return;
      }

      // Clear every frame (avoids dark overlay on top of the page)
      ctx.clearRect(0,0,w,h);

      if(pending){
        const dx = pending.x - last.x;
        const dy = pending.y - last.y;
        const dist = Math.hypot(dx,dy);
        const n = Math.min(coarse ? 2 : 5, Math.max(1, Math.floor(dist/12)));
        for(let i=0;i<n;i++){
          const t = (i+1)/(n+1);
          addParticle(last.x + dx*t, last.y + dy*t);
        }
        last.x = pending.x; last.y = pending.y;
        pending = null;
      }

      // Draw particles
      for(let i=particles.length-1;i>=0;i--){
        const p = particles[i];
        p.life -= coarse ? 0.065 : 0.045;
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.95;
        p.vy *= 0.95;

        if(p.life <= 0){
          particles.splice(i,1);
          continue;
        }

        const alpha = Math.max(0, p.life);
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r*2.6);
        grad.addColorStop(0, `hsla(${p.hue}, 100%, 65%, ${0.22*alpha})`);
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r*2.6, 0, Math.PI*2);
        ctx.fill();

        ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, ${0.14*alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fill();
      }

      requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  // Ensure DOM ready
  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();


/* ===== Mini Game hardening: ensures it works even if DOM loaded order changes ===== */
(() => {
  function toast(msg){
    let el = document.getElementById("toast");
    if(!el){
      el = document.createElement("div");
      el.id = "toast";
      el.className = "toast";
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add("show");
    setTimeout(() => el.classList.remove("show"), 2600);
  }

  function ensureGameDOM(){
    if(document.getElementById("gameOverlay")) return;

    // Inject minimal overlay if missing
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
      <div id="gameOverlay" class="gameOverlay" aria-hidden="true">
        <div class="gameWrap">
          <div class="gameBar">
            <span>CV Quest — colete os itens para navegar</span>
            <div class="gameBarRight">
              <span id="gameStatus" class="gameStatus">0/3</span>
              <button id="btnGameClose" class="btn btn-xs">Fechar</button>
            </div>
          </div>
          <div class="gameBody">
            <canvas id="gameCanvas" width="360" height="360"></canvas>
            <div class="gameHelp">
              <p class="muted">No PC: WASD/Setas. No celular: controle.</p>
              <p class="muted">Itens: EXP (Experiências), EDU (Formação), SKL (Skills).</p>
              <p id="gameHint" class="hint">Colete um item para ir para a seção correspondente.</p>
            </div>
            <div class="dpad" aria-label="Controles para celular">
              <button class="dpadBtn" data-dir="up">▲</button>
              <div class="dpadMid">
                <button class="dpadBtn" data-dir="left">◀</button>
                <button class="dpadBtn dpadCenter" data-dir="pause">⏸</button>
                <button class="dpadBtn" data-dir="right">▶</button>
              </div>
              <button class="dpadBtn" data-dir="down">▼</button>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(wrapper.firstElementChild);
  }

  function ensureGameWired(){
    const btn = document.getElementById("btnGame");
    if(!btn) return;

    // If already wired by previous module, do nothing
    if(btn.dataset.wired === "1") return;
    btn.dataset.wired = "1";

    btn.addEventListener("click", () => {
      ensureGameDOM();

      // If global game object exists, use it.
      if(window.game && typeof window.game.open === "function"){
        window.game.open();
        return;
      }

      // Otherwise try to open overlay directly (fallback)
      const overlay = document.getElementById("gameOverlay");
      if(!overlay){
        toast("Mini Game não carregou. Reenvie index.html e app.js.");
        return;
      }
      overlay.classList.add("open");
      overlay.setAttribute("aria-hidden","false");
      toast("Mini Game aberto (modo fallback).");
    });
  }

  function ensureCloseWired(){
    const overlay = document.getElementById("gameOverlay");
    const closeBtn = document.getElementById("btnGameClose");
    if(!overlay || !closeBtn) return;
    if(closeBtn.dataset.wired === "1") return;
    closeBtn.dataset.wired = "1";
    closeBtn.addEventListener("click", () => {
      overlay.classList.remove("open");
      overlay.setAttribute("aria-hidden","true");
    });
    overlay.addEventListener("click", (e) => {
      if(e.target === overlay){
        overlay.classList.remove("open");
        overlay.setAttribute("aria-hidden","true");
      }
    });
  }

  function init(){
    ensureGameWired();
    ensureCloseWired();
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", init, { once: true });
  }else{
    init();
  }
})();


/* ===== exportCleanPdf (no browser header/footer) ===== */
async function exportCleanPdf(){
  if(typeof window.html2pdf === "undefined"){
    // Fallback: uses browser print (may include URL/date headers)
    window.print();
    return;
  }

  // Clone body, remove interactive UI
  const body = document.body.cloneNode(true);
  body.querySelectorAll(".actions, .onboardingOverlay, .gameOverlay, .terminalOverlay, #trailCanvas, .toast").forEach(el => el.remove());

  // Force light mode for PDF
  const html = document.createElement("div");
  html.appendChild(body);

  const wrap = document.createElement("div");
  wrap.style.position = "fixed";
  wrap.style.left = "-10000px";
  wrap.style.top = "0";
  wrap.style.width = "900px";
  wrap.style.background = "#ffffff";
  wrap.appendChild(html);
  document.body.appendChild(wrap);

  const opt = {
    margin:       [10, 10, 10, 10],
    filename:     "Thiago-Carneiro-CV.pdf",
    image:        { type: "jpeg", quality: 0.95 },
    html2canvas:  { scale: 2, useCORS: true, backgroundColor: "#ffffff" },
    jsPDF:        { unit: "mm", format: "a4", orientation: "portrait" }
  };

  try{
    await window.html2pdf().set(opt).from(wrap).save();
  } finally {
    wrap.remove();
  }
}

(() => {
  const btn = document.getElementById("btnPrint");
  if(!btn) return;
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    exportCleanPdf();
  });
})();


/* ===== CV Quest Engine ===== */
(() => {
  const $ = (sel, root=document) => root.querySelector(sel);

  function toast(msg){
    let el = $("#toast");
    if(!el){
      el = document.createElement("div");
      el.id = "toast";
      el.className = "toast";
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add("show");
    setTimeout(() => el.classList.remove("show"), 2400);
  }

  function findSection(kind){
    // Prefer explicit ids if present
    const map = {
      exp: ["#experiencia", "#experiencias", "#experience", "#secExp"],
      edu: ["#formacao", "#educacao", "#education", "#secEdu"],
      skl: ["#skills", "#habilidades", "#secSkl"]
    };
    for(const sel of (map[kind] || [])){
      const el = document.querySelector(sel);
      if(el) return el;
    }
    // Fallback: find a card title that contains keywords
    const keywords = {
      exp: ["experi", "experience", "histórico"],
      edu: ["forma", "educa", "education"],
      skl: ["skill", "habil", "competên"]
    }[kind] || [];
    const candidates = Array.from(document.querySelectorAll("h2,h3,.card h2,.card h3,.title"));
    for(const c of candidates){
      const t = (c.textContent || "").toLowerCase();
      if(keywords.some(k => t.includes(k))) return c.closest(".card") || c;
    }
    return null;
  }

  function openOverlay(){
    const ov = $("#gameOverlay");
    if(!ov) return;
    ov.classList.add("open");
    ov.setAttribute("aria-hidden","false");
  }
  function closeOverlay(){
    const ov = $("#gameOverlay");
    if(!ov) return;
    ov.classList.remove("open");
    ov.setAttribute("aria-hidden","true");
  }

  function initEngine(){
    const canvas = $("#gameCanvas");
    const status = $("#gameStatus");
    const hint = $("#gameHint");
    if(!canvas || !status) return;

    const ctx = canvas.getContext("2d");
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize(){
      const rect = canvas.getBoundingClientRect();
      const size = Math.floor(Math.min(rect.width, rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(size * dpr);
      canvas.height = Math.floor(size * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      world.size = size;
    }

    const world = {
      size: 360,
      pad: 18,
      running: true,
      collected: { exp:false, edu:false, skl:false },
      items: []
    };

    const player = { x: 60, y: 60, r: 10, vx: 0, vy: 0, speed: 2.4 };

    function reset(){
      world.collected = { exp:false, edu:false, skl:false };
      world.items = [
        { key:"exp", label:"EXP", x: world.size-80, y: 70 },
        { key:"edu", label:"EDU", x: 80, y: world.size-90 },
        { key:"skl", label:"SKL", x: world.size-90, y: world.size-90 }
      ];
      player.x = 60; player.y = 60;
      status.textContent = "0/3";
      if(hint) hint.textContent = "Colete um item para ir para a seção correspondente.";
    }

    const keys = { up:false, down:false, left:false, right:false };

    function setDir(dir, val){
      if(dir==="up") keys.up = val;
      if(dir==="down") keys.down = val;
      if(dir==="left") keys.left = val;
      if(dir==="right") keys.right = val;
    }

    function wireControls(){
      // keyboard
      window.addEventListener("keydown", (e) => {
        if(!document.querySelector("#gameOverlay.open")) return;
        const k = e.key.toLowerCase();
        if(k==="w" || e.key==="ArrowUp") setDir("up", true);
        if(k==="s" || e.key==="ArrowDown") setDir("down", true);
        if(k==="a" || e.key==="ArrowLeft") setDir("left", true);
        if(k==="d" || e.key==="ArrowRight") setDir("right", true);
      });
      window.addEventListener("keyup", (e) => {
        const k = e.key.toLowerCase();
        if(k==="w" || e.key==="ArrowUp") setDir("up", false);
        if(k==="s" || e.key==="ArrowDown") setDir("down", false);
        if(k==="a" || e.key==="ArrowLeft") setDir("left", false);
        if(k==="d" || e.key==="ArrowRight") setDir("right", false);
      });

      // dpad pointer/touch
      document.querySelectorAll(".dpadBtn[data-dir]").forEach(btn => {
        const dir = btn.getAttribute("data-dir");
        if(dir === "pause"){
          btn.addEventListener("click", () => {
            world.running = !world.running;
            toast(world.running ? "Retomado" : "Pausado");
          });
          return;
        }
        const on = () => setDir(dir, true);
        const off = () => setDir(dir, false);

        btn.addEventListener("pointerdown", (e) => { e.preventDefault(); on(); }, { passive:false });
        btn.addEventListener("pointerup", (e) => { e.preventDefault(); off(); }, { passive:false });
        btn.addEventListener("pointercancel", off);
        btn.addEventListener("pointerleave", off);
      });
    }

    function draw(){
      const s = world.size;

      // clear
      ctx.clearRect(0,0,s,s);

      // grid
      ctx.globalAlpha = 0.35;
      ctx.strokeStyle = "rgba(255,255,255,.14)";
      ctx.lineWidth = 1;
      for(let i=0;i<=10;i++){
        const p = world.pad + i*((s-2*world.pad)/10);
        ctx.beginPath(); ctx.moveTo(world.pad, p); ctx.lineTo(s-world.pad, p); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(p, world.pad); ctx.lineTo(p, s-world.pad); ctx.stroke();
      }
      ctx.globalAlpha = 1;

      // items
      world.items.forEach(it => {
        if(world.collected[it.key]) return;
        const glowHue = it.key==="exp" ? 185 : (it.key==="edu" ? 260 : 310);

        ctx.save();
        ctx.shadowColor = `hsla(${glowHue},100%,60%,.55)`;
        ctx.shadowBlur = 18;

        ctx.fillStyle = "rgba(255,255,255,.06)";
        ctx.strokeStyle = "rgba(255,255,255,.18)";
        ctx.lineWidth = 1.5;

        const w = 70, h = 36;
        const x = it.x, y = it.y;
        roundRect(ctx, x-w/2, y-h/2, w, h, 10);
        ctx.fill();
        ctx.stroke();

        ctx.shadowBlur = 0;
        ctx.fillStyle = `hsla(${glowHue},100%,70%,.95)`;
        ctx.font = "700 14px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(it.label, x, y);

        ctx.restore();
      });

      // player
      ctx.save();
      ctx.shadowColor = "rgba(0,229,255,.55)";
      ctx.shadowBlur = 14;
      ctx.fillStyle = "rgba(0,229,255,.18)";
      ctx.strokeStyle = "rgba(0,229,255,.55)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(player.x, player.y, player.r, 0, Math.PI*2);
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }

    function roundRect(ctx, x, y, w, h, r){
      const rr = Math.min(r, w/2, h/2);
      ctx.beginPath();
      ctx.moveTo(x+rr, y);
      ctx.arcTo(x+w, y, x+w, y+h, rr);
      ctx.arcTo(x+w, y+h, x, y+h, rr);
      ctx.arcTo(x, y+h, x, y, rr);
      ctx.arcTo(x, y, x+w, y, rr);
      ctx.closePath();
    }

    function tick(){
      if(document.querySelector("#gameOverlay.open")){
        if(world.running){
          player.vx = (keys.right?1:0) - (keys.left?1:0);
          player.vy = (keys.down?1:0) - (keys.up?1:0);

          const len = Math.hypot(player.vx, player.vy) || 1;
          player.vx = (player.vx/len) * player.speed;
          player.vy = (player.vy/len) * player.speed;

          player.x += player.vx;
          player.y += player.vy;

          // bounds
          const min = world.pad + player.r;
          const max = world.size - world.pad - player.r;
          player.x = Math.max(min, Math.min(max, player.x));
          player.y = Math.max(min, Math.min(max, player.y));

          // collisions
          for(const it of world.items){
            if(world.collected[it.key]) continue;
            const d = Math.hypot(player.x - it.x, player.y - it.y);
            if(d < 26){
              world.collected[it.key] = true;
              const count = Object.values(world.collected).filter(Boolean).length;
              status.textContent = `${count}/3`;

              const target = findSection(it.key);
              if(target){
                toast(`${it.label} coletado — indo para a seção`);
                closeOverlay();
                setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 150);
              } else {
                toast(`${it.label} coletado — seção não encontrada`);
              }

              if(count === 3){
                if(hint) hint.textContent = "Parabéns. Você completou o CV Quest.";
              }
              break;
            }
          }
        }
        draw();
      }
      requestAnimationFrame(tick);
    }

    // init
    resize();
    window.addEventListener("resize", resize);
    reset();
    wireControls();
    requestAnimationFrame(tick);

    return { open: openOverlay, close: closeOverlay, reset };
  }

  function wireUI(){
    const btnOpen = $("#btnGame");
    const btnClose = $("#btnGameClose");
    const overlay = $("#gameOverlay");

    if(btnOpen){
      btnOpen.addEventListener("click", () => {
        window.game = window.game || initEngine();
        window.game.open();
      });
    }
    if(btnClose){
      btnClose.addEventListener("click", () => {
        if(window.game?.close) window.game.close();
        else closeOverlay();
      });
    }
    if(overlay){
      overlay.addEventListener("click", (e) => {
        if(e.target === overlay){
          if(window.game?.close) window.game.close();
          else closeOverlay();
        }
      });
    }
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", wireUI, { once:true });
  } else {
    wireUI();
  }
})();


/* cv_v90_theme_cycle: unify theme + ARGB + light into single button */
(function(){
  const btnTheme = document.getElementById("btnTheme");
  const btnArgb = document.getElementById("btnArgb"); // kept but hidden
  if(btnArgb) btnArgb.setAttribute("aria-hidden","true");

  const THEMES = ["dark","argb","light"];
  function getTheme(){
    try{
      const t = (localStorage.getItem("cv_theme") || document.documentElement.getAttribute("data-theme") || "dark").toLowerCase();
      return THEMES.includes(t) ? t : "dark";
    }catch(_){ return "dark"; }
  }
  function setTheme(t){
    document.documentElement.setAttribute("data-theme", t);
    try{ localStorage.setItem("cv_theme", t); }catch(_){}
    // Update label (optional, but clear)
    if(btnTheme){
      const label = (t === "argb") ? "Tema: ARGB" : (t === "light") ? "Tema: Claro" : "Tema: Escuro";
      btnTheme.textContent = label;
    }
  }
  function cycle(){
    const cur = getTheme();
    const idx = THEMES.indexOf(cur);
    const next = THEMES[(idx+1) % THEMES.length];
    setTheme(next);
  }
  if(btnTheme && !btnTheme.__v90){
    btnTheme.__v90 = true;
    btnTheme.addEventListener("click", function(e){
      e.preventDefault();
      cycle();
    }, {passive:false});
    // initialize label
    setTheme(getTheme());
  }

  // Avatar fallback: if image fails, try root jpg
  const avatarImg = document.querySelector("img#avatarImg, img.avatar");
  if(avatarImg && !avatarImg.__v90){
    avatarImg.__v90 = true;
    avatarImg.addEventListener("error", function(){
      if(!avatarImg.src.includes("avatar.jpg")){
        avatarImg.src = "avatar.jpg";
      }
    });
  }
})();



/* cv_v92_controller: robust wiring for all buttons */
(function(){
  const root = document.documentElement;
  const body = document.body;

  const THEMES = ["dark","argb","light"];

  function lsGet(k, fallback){
    try{ const v = localStorage.getItem(k); return v===null?fallback:v; }catch(_){ return fallback; }
  }
  function lsSet(k, v){ try{ localStorage.setItem(k, v); }catch(_){ } }

  function getTheme(){
    const t = (root.getAttribute("data-theme") || lsGet("cv_theme","dark")).toLowerCase();
    return THEMES.includes(t) ? t : "dark";
  }
  function setTheme(t){
    root.setAttribute("data-theme", t);
    lsSet("cv_theme", t);
    const btn = document.getElementById("btnTheme");
    if(btn){
      btn.textContent = (t==="argb") ? "Tema: ARGB" : (t==="light") ? "Tema: Claro" : "Tema: Escuro";
    }
  }
  function cycleTheme(){
    const cur = getTheme();
    const idx = THEMES.indexOf(cur);
    const next = THEMES[(idx+1) % THEMES.length];
    setTheme(next);
  }

  // Restore persisted theme early
  setTheme(getTheme());

  // Overlays helpers
  function openOverlay(id){
    const ov = document.getElementById(id);
    if(!ov) return;
    ov.classList.add("is-open");
    ov.setAttribute("aria-hidden","false");
    body.style.overflow = "hidden";
  }
  function closeOverlay(id){
    const ov = document.getElementById(id);
    if(!ov) return;
    ov.classList.remove("is-open");
    ov.setAttribute("aria-hidden","true");
    body.style.overflow = "";
  }

  // Bind actions
  function bind(){
    document.querySelectorAll("button[data-action]").forEach(btn=>{
      if(btn.__bound) return;
      btn.__bound = true;
      const action = btn.getAttribute("data-action");
      btn.addEventListener("click", (e)=>{
        e.preventDefault();
        switch(action){
          case "theme":
            cycleTheme();
            break;
          case "privacy":
            body.classList.toggle("privacy-on");
            break;
          case "terminal":
            openOverlay("terminalOverlay");
            const ti = document.getElementById("terminalInput");
            try{ ti && ti.focus(); }catch(_){}
            break;
          case "game":
            // support several ids (gameOverlay / minigameOverlay)
            openOverlay("gameOverlay");
            openOverlay("minigameOverlay");
            openOverlay("miniGameOverlay");
            break;
          case "print":
            // Force light theme for print, then restore
            const prev = getTheme();
            setTheme("light");
            // allow repaint before print
            setTimeout(()=>{
              window.print();
              // restore shortly after
              setTimeout(()=>setTheme(prev), 350);
            }, 60);
            break;
          case "json":
            // if existing downloadJson exists, call it; else fallback to exporting embedded data if present
            if(typeof window.downloadJson === "function"){
              window.downloadJson();
            }else if(typeof window.exportJson === "function"){
              window.exportJson();
            }else{
              // minimal fallback
              const data = { theme: getTheme(), generatedAt: new Date().toISOString() };
              const blob = new Blob([JSON.stringify(data,null,2)], {type:"application/json"});
              const a = document.createElement("a");
              a.href = URL.createObjectURL(blob);
              a.download = "curriculo.json";
              a.click();
              setTimeout(()=>URL.revokeObjectURL(a.href), 500);
            }
            break;
          case "mode":
            // toggle explore/view (if your app supports). We just toggle a class for now.
            body.classList.toggle("mode-explore");
            break;
        }
      }, {passive:false});
    });

    // overlay close on backdrop click
    ["terminalOverlay","gameOverlay","minigameOverlay","miniGameOverlay"].forEach(id=>{
      const ov = document.getElementById(id);
      if(ov && !ov.__boundBackdrop){
        ov.__boundBackdrop = true;
        ov.addEventListener("click",(e)=>{ if(e.target===ov) closeOverlay(id); });
      }
    });

    // ESC closes overlays (desktop)
    if(!window.__cv92_esc){
      window.__cv92_esc = true;
      window.addEventListener("keydown",(e)=>{
        if(e.key==="Escape"){
          ["terminalOverlay","gameOverlay","minigameOverlay","miniGameOverlay"].forEach(closeOverlay);
        }
      });
    }
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", bind);
  }else{
    bind();
  }
})();
