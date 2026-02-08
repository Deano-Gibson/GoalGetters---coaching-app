(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}})();const m=[{id:1,name:"Goal Getters Hollywood Bets",shortName:"GGHB",logo:null,active:!0},{id:2,name:"Goal Getters Super League",shortName:"GGSL",logo:null,active:!1},{id:3,name:"Goal Getters Reserves",shortName:"GGR",logo:null,active:!1},{id:4,name:"Goal Getters Div 1",shortName:"GGD1",logo:null,active:!1},{id:5,name:"Goal Getters U/17",shortName:"GGU17",logo:null,active:!1},{id:6,name:"Goal Getters U/15",shortName:"GGU15",logo:null,active:!1},{id:7,name:"Goal Getters U/13",shortName:"GGU13",logo:null,active:!1}];function r(){return m.find(e=>e.active)||m[0]}const u=[{id:1,teamId:1,firstName:"Alex",lastName:"Richard Chetty",number:1,birthDate:"2005-03-15",age:20,weight:75,height:188,foot:"Right",nominalPosition:"GK",alternativePositions:[],captain:!0,injured:!1,photo:null,attributes:{technical:{ballControl:6,dribbling:4,firstTouch:5,passing:6,shootingFinishing:3,weakFootUsage:4},mental:{attitudeInTraining:7,confidence:6,focusConcentration:7,followingInstructions:8,gameAwareness:7},physical:{pace:5,strength:6,stamina:7}},statistics:{overall:{matches:5,minutes:450,rating:6.8,goals:0,assists:0,cards:"0/0"}}},{id:2,teamId:1,firstName:"Gage",lastName:"Aaron Webster",number:78,birthDate:"2006-08-22",age:19,weight:62,height:183,foot:"Right",nominalPosition:"GK",alternativePositions:[],captain:!1,injured:!1,photo:null,attributes:{technical:{ballControl:7,dribbling:5,firstTouch:5,passing:5,shootingFinishing:5,weakFootUsage:5},mental:{attitudeInTraining:5,confidence:5,focusConcentration:5,followingInstructions:5,gameAwareness:5},physical:{pace:6,strength:5,stamina:6}},statistics:{overall:{matches:1,minutes:27,rating:3,goals:0,assists:0,cards:"0/0"}}},{id:3,teamId:1,firstName:"Akho",lastName:"Mbizeni",number:5,birthDate:"2005-04-10",age:20,weight:78,height:180,foot:"Right",nominalPosition:"CB",alternativePositions:["LB","RB"],captain:!1,injured:!1,photo:null,attributes:{technical:{ballControl:6,dribbling:5,firstTouch:6,passing:6,shootingFinishing:4,weakFootUsage:5},mental:{attitudeInTraining:7,confidence:6,focusConcentration:6,followingInstructions:7,gameAwareness:6},physical:{pace:6,strength:7,stamina:7}},statistics:{overall:{matches:6,minutes:540,rating:6.5,goals:1,assists:0,cards:"2/0"}}},{id:4,teamId:1,firstName:"Cameron",lastName:"Jaydan Cramford",number:9,birthDate:"2006-01-18",age:20,weight:71,height:175,foot:"Right",nominalPosition:"CF",alternativePositions:["WF"],captain:!1,injured:!1,photo:null,attributes:{technical:{ballControl:7,dribbling:8,firstTouch:7,passing:6,shootingFinishing:8,weakFootUsage:5},mental:{attitudeInTraining:8,confidence:7,focusConcentration:6,followingInstructions:7,gameAwareness:7},physical:{pace:8,strength:6,stamina:7}},statistics:{overall:{matches:7,minutes:630,rating:7.2,goals:11,assists:3,cards:"1/0"}}},{id:5,teamId:1,firstName:"Lehlogonolo",lastName:"Seopo Molepo",number:7,birthDate:"2005-11-30",age:20,weight:68,height:172,foot:"Left",nominalPosition:"CF",alternativePositions:["WF"],captain:!1,injured:!1,photo:null,attributes:{technical:{ballControl:8,dribbling:7,firstTouch:8,passing:7,shootingFinishing:7,weakFootUsage:6},mental:{attitudeInTraining:7,confidence:8,focusConcentration:7,followingInstructions:6,gameAwareness:8},physical:{pace:9,strength:5,stamina:6}},statistics:{overall:{matches:6,minutes:540,rating:7.5,goals:8,assists:5,cards:"0/0"}}},{id:6,teamId:1,firstName:"Rogan",lastName:"Robb",number:21,birthDate:"2005-07-14",age:20,weight:74,height:178,foot:"Right",nominalPosition:"CF",alternativePositions:["LWB","RWB","CM","AM","LW","RW"],captain:!1,injured:!1,photo:null,attributes:{technical:{ballControl:7,dribbling:6,firstTouch:7,passing:7,shootingFinishing:6,weakFootUsage:5},mental:{attitudeInTraining:9,confidence:7,focusConcentration:8,followingInstructions:8,gameAwareness:7},physical:{pace:7,strength:6,stamina:8}},statistics:{overall:{matches:6,minutes:420,rating:6.9,goals:4,assists:2,cards:"1/0"}}}];function f(e){return u.filter(t=>t.teamId===e)}function y(e){const t=f(e);return{Goalkeepers:t.filter(s=>s.nominalPosition==="GK"),Defenders:t.filter(s=>["CB","LB","RB","LWB","RWB"].includes(s.nominalPosition)),Midfielders:t.filter(s=>["CM","CDM","CAM","LM","RM"].includes(s.nominalPosition)),Forwards:t.filter(s=>["CF","ST","LW","RW","WF"].includes(s.nominalPosition))}}function _(e){return u.find(t=>t.id===parseInt(e))}function w(e){const t=document.getElementById("app-content"),a=r();if(e.includes("/player/")){const i=e.split("/player/")[1];T(i);return}const s=y(a.id);t.innerHTML=`
    <div class="page-header">
      <div style="width: 44px;"></div>
      <h1 class="page-header__title">${a.shortName}</h1>
      <div class="page-header__actions">
        <button class="page-header__action" id="add-player-btn" aria-label="Add player">
          <span>➕</span>
        </button>
      </div>
    </div>
    
    <div class="page-body">
      ${x()}
      ${$(s)}
    </div>
  `,G()}function x(){return""}function $(e){return Object.entries(e).filter(([t,a])=>a.length>0).map(([t,a])=>`
      <div class="section">
        <h2 class="section__title text-secondary">${t}</h2>
        <div class="card" style="padding: 0;">
          ${a.map(s=>S(s)).join("")}
        </div>
      </div>
    `).join("")}function S(e){const t=[e.nominalPosition,...e.alternativePositions].slice(0,3).map(a=>`<span class="badge">${a}</span>`).join(" ");return`
    <div class="list-item list-item--clickable" data-player-id="${e.id}">
      <div class="list-item__avatar">
        ${e.photo?`<img src="${e.photo}" alt="${e.firstName}">`:"👤"}
      </div>
      <div class="list-item__content">
        <div class="list-item__title">${e.firstName} ${e.lastName}</div>
        <div class="list-item__subtitle">
          ${t}
          ${e.captain?'<span class="badge badge--warning">C</span>':""}
          ${e.injured?'<span class="badge badge--error">!</span>':""}
        </div>
      </div>
      <div class="list-item__meta">
        ${e.number?`<span class="text-lg weight-semibold">${e.number}</span>`:""}
        <span class="list-item__chevron">›</span>
      </div>
    </div>
  `}function T(e){const t=document.getElementById("app-content"),a=_(e);if(!a){window.location.hash="#/squad";return}t.innerHTML=`
    <div class="page-header">
      <button class="page-header__back" id="back-btn">
        <span>‹</span>
      </button>
      <h1 class="page-header__title">Squad</h1>
      <div class="page-header__actions">
        <button class="page-header__action">📞</button>
        <button class="page-header__action">📋</button>
        <button class="page-header__action">⋮</button>
      </div>
    </div>
    
    <div class="page-body">
      ${L(a)}
    </div>
  `,document.getElementById("back-btn").addEventListener("click",()=>{window.location.hash="#/squad"})}function L(e){return`
    <div style="text-align: center; padding: var(--space-6) 0;">
      <div style="width: 120px; height: 120px; margin: 0 auto var(--space-4); background: var(--surface-elevated); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 64px;">
        ${e.photo?`<img src="${e.photo}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`:"👤"}
      </div>
      <h1 class="text-2xl weight-bold mb-2">${e.firstName} ${e.lastName}</h1>
      <p class="text-secondary">${e.number||""}</p>
    </div>
    
    <div class="grid grid--3 mb-6">
      <div class="card text-center">
        <div class="text-2xl weight-bold mb-1">${e.age}</div>
        <div class="text-sm text-secondary">Age</div>
      </div>
      <div class="card text-center">
        <div class="text-2xl weight-bold mb-1">${e.weight} kg</div>
        <div class="text-sm text-secondary">Weight</div>
      </div>
      <div class="card text-center">
        <div class="text-2xl weight-bold mb-1">${e.height} cm</div>
        <div class="text-sm text-secondary">Height</div>
      </div>
    </div>
    
    <div class="section">
      <h2 class="section__title">Basic info</h2>
      <div class="card">
        <div class="flex flex--between mb-3">
          <span class="text-secondary">Foot</span>
          <span class="weight-semibold">${e.foot}</span>
        </div>
        <div class="flex flex--between">
          <span class="text-secondary">Nominal Position</span>
          <span class="weight-semibold">${e.nominalPosition}</span>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2 class="section__title">Statistics</h2>
      <div class="card">
        <h3 class="weight-semibold mb-3">Competitions</h3>
        <div class="mb-4">
          <div class="text-sm text-secondary mb-2">Overall</div>
          <div class="grid grid--3" style="gap: var(--space-2); font-size: var(--text-sm);">
            <div>${e.statistics.overall.matches} matches</div>
            <div>${e.statistics.overall.minutes} min</div>
            <div>${e.statistics.overall.rating} rating</div>
            <div>${e.statistics.overall.goals} goals</div>
            <div>${e.statistics.overall.assists} assists</div>
            <div>${e.statistics.overall.cards} cards</div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2 class="section__title">Attributes</h2>
      ${C(e.attributes)}
    </div>
  `}function C(e){const t={Technical:e.technical,Mental:e.mental,Physical:e.physical};return Object.entries(t).map(([a,s])=>`
    <div class="card mb-4">
      <h3 class="weight-semibold mb-3">${a}</h3>
      ${Object.entries(s).map(([i,n])=>{const o=i.replace(/([A-Z])/g," $1").trim(),p=o.charAt(0).toUpperCase()+o.slice(1),b="●".repeat(n)+"○".repeat(10-n);return`
          <div class="flex flex--between mb-2">
            <span class="text-sm text-secondary">${p}</span>
            <div class="flex flex--gap-1">
              <span style="color: var(--success); letter-spacing: 2px;">${b}</span>
              <span class="weight-semibold text-sm">${n}</span>
            </div>
          </div>
        `}).join("")}
    </div>
  `).join("")}function G(){document.querySelectorAll("[data-player-id]").forEach(t=>{t.addEventListener("click",()=>{const a=t.dataset.playerId;window.location.hash=`#/squad/player/${a}`})});const e=document.getElementById("add-player-btn");e&&e.addEventListener("click",()=>{alert("Add player form would open here")})}const l=[{id:1,teamId:1,opponentName:"Temp",homeTeamScore:null,awayTeamScore:null,venue:"Home",city:"Germiston City Sports Ground",date:"2026-02-08T14:07",season:"2025/2026",competition:"League",matchType:"Friendly",status:"upcoming"},{id:2,teamId:1,opponentName:"Walk's Royal FC",homeTeamScore:1,awayTeamScore:0,venue:"Away",city:"Royal Stadium",date:"2026-02-07T15:00",season:"2025/2026",competition:"League",matchType:"League",status:"past"},{id:3,teamId:1,opponentName:"Vrrphaa Nation FC",homeTeamScore:1,awayTeamScore:1,venue:"Home",city:"Germiston City Sports Ground",date:"2026-02-04T19:30",season:"2025/2026",competition:"League",matchType:"League",status:"past"},{id:4,teamId:1,opponentName:"Alberton FC",homeTeamScore:1,awayTeamScore:0,venue:"Home",city:"Germiston City Sports Ground",date:"2026-01-25T12:00",season:"2025/2026",competition:"League",matchType:"League",status:"past"},{id:5,teamId:1,opponentName:"Benoni Northerns FC",homeTeamScore:3,awayTeamScore:1,venue:"Home",city:"Germiston City Sports Ground",date:"2026-01-23T19:30",season:"2025/2026",competition:"League",matchType:"League",status:"past"}];function I(e){return l.filter(t=>t.teamId===e)}function N(e){return l.filter(t=>t.teamId===e&&t.status==="upcoming")}function P(e){return l.filter(t=>t.teamId===e&&t.status==="past")}function A(e){const t=document.getElementById("app-content"),a=r();I(a.id),t.innerHTML=`
    <div class="page-header">
      <div style="width: 44px;"></div>
      <h1 class="page-header__title">Matches</h1>
      <div class="page-header__actions">
        <button class="page-header__action" id="filter-btn">
          <span>🔽</span>
        </button>
        <button class="page-header__action" id="add-match-btn">
          <span>➕</span>
        </button>
      </div>
    </div>
    
    <div class="page-body">
      <div class=" section">
        <div class="flex flex--gap-4 mb-4">
          <div class="flex-1 card" style="padding: var(--space-3);">
            <div class="weight-semibold">All</div>
            <div class="text-sm text-secondary">Season</div>
          </div>
          <div class="flex-1 card" style="padding: var(--space-3);">
            <div class="weight-semibold">All</div>
            <div class="text-sm text-secondary">Competition</div>
          </div>
        </div>
        
        <h2 class="section__title">Upcoming</h2>
        ${v(N(a.id))}
        
        <h2 class="section__title mt-6">Past</h2>
        ${v(P(a.id))}
      </div>
    </div>
  `,document.getElementById("add-match-btn")?.addEventListener("click",()=>{alert("Add match form would open here")}),document.getElementById("filter-btn")?.addEventListener("click",()=>{alert("Filter options would open here")})}function v(e){return e.length===0?`
      <div class="empty-state" style="min-height: 150px; padding: var(--space-8);">
        <div class="empty-state__title text-base">No matches</div>
      </div>
    `:`
    <div class="card" style="padding: 0;">
      ${e.map(t=>M(t)).join("")}
    </div>
  `}function M(e){const t=e.venue==="Home",a=t?r().shortName:e.opponentName,s=t?e.opponentName:r().shortName,i=e.homeTeamScore!==null?`${e.homeTeamScore} : ${e.awayTeamScore}`:"– : –",n=B(e,t),o=new Date(e.date).toLocaleString("en-GB",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"});return`
    <div class="list-item list-item--clickable" data-match-id="${e.id}">
      <div class="list-item__content">
        <div class="list-item__title">${a} vs ${s}</div>
        <div class="list-item__subtitle flex flex--gap-3 mt-1">
          <span>${e.venue}</span>
          <span>${o}</span>
        </div>
      </div>
      <div class="list-item__meta">
        <span class="text-xl weight-bold ${n}">${i}</span>
        <span class="list-item__chevron">›</span>
      </div>
    </div>
  `}function B(e,t){if(e.homeTeamScore===null)return"";const a=t?e.homeTeamScore:e.awayTeamScore,s=t?e.awayTeamScore:e.homeTeamScore;return a>s?"text-success":a<s?"text-error":""}function F(e){const t=document.getElementById("app-content");t.innerHTML=`
    <div class="page-header">
      <div style="width: 44px;"></div>
      <h1 class="page-header__title">Trainings</h1>
      <div class="page-header__actions">
        <button class="page-header__action">🔽</button>
        <button class="page-header__action">➕</button>
      </div>
    </div>
    
    <div class="page-body">
      <div class="card" style="padding: var(--space-3); margin-bottom: var(--space-4);">
        <div class="weight-semibold mb-1">2025/2026</div>
        <div class="text-sm text-secondary">Season</div>
      </div>
      
      <div class="empty-state">
        <div class="empty-state__icon">
          <div style="width: 80px; height: 80px; background: var(--surface-elevated); border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; font-size: 48px;">
            🏃
          </div>
        </div>
        <h2 class="empty-state__title">No Trainings</h2>
        <p class="empty-state__description">Start adding new trainings</p>
        <button class="btn btn--primary btn--large">
          <span class="btn__icon">➕</span>
          Add New Training
        </button>
      </div>
    </div>
  `}function k(e){const t=document.getElementById("app-content"),a=new Date,s=a.toLocaleString("en-US",{month:"short",year:"numeric"}),i=a.toLocaleString("en-GB",{day:"2-digit",month:"long",year:"numeric"});t.innerHTML=`
    <div class="page-header">
      <div style="width: 44px;"></div>
      <h1 class="page-header__title">Schedule</h1>
      <div class="page-header__actions">
        <button class="page-header__action">📋</button>
        <button class="page-header__action">➕</button>
      </div>
    </div>
    
    <div class="page-body">
      <div class="card mb-4" style="padding: var(--space-3);">
        <div class="weight-semibold">${s}</div>
      </div>
      
      ${E(a)}
      
      <div class="section">
        <div class="flex flex--between mb-4">
          <h2 class="section__title">${i}</h2>
          <button class="btn btn--ghost btn--small">${r().shortName} 🔽</button>
        </div>
        
        <div class="empty-state">
          <h2 class="empty-state__title text-lg">No Events</h2>
        </div>
      </div>
    </div>
  `}function E(e){const t=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],a=new Date(e);return a.setDate(e.getDate()-e.getDay()),`
    <div class="card mb-6">
      <div class="grid grid--7" style="gap: 0; text-align: center;">
        ${Array.from({length:7},(i,n)=>{const o=new Date(a);return o.setDate(a.getDate()+n),o}).map((i,n)=>{const o=i.toDateString()===e.toDateString();return`
            <div style="padding: var(--space-3); border-right: ${n<6?"1px solid var(--border-muted)":"none"};">
              <div class="text-xs text-secondary mb-2">${t[n]}</div>
              <div class="weight-semibold ${o?"text-accent-primary":""}" style="${o?"width: 32px; height: 32px; margin: 0 auto; background: var(--accent-primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center;":""}">
                ${i.getDate()}
              </div>
            </div>
          `}).join("")}
      </div>
    </div>
  `}function R(e){const t=document.getElementById("app-content");t.innerHTML=`
    <div class="page-header">
      <div style="width: 44px;"></div>
      <h1 class="page-header__title">More</h1>
      <div style="width: 44px;"></div>
    </div>
    
    <div class="page-body">
      <!-- Statistics -->
      <div class="section">
        <div class="card card--clickable">
          <div class="flex flex--gap-3" style="align-items: center;">
            <div style="width: 48px; height: 48px; background: var(--info-bg); color: var(--info); border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; font-size: 24px;">
              📊
            </div>
            <div class="flex-1">
              <div class="weight-semibold mb-1">Statistics</div>
              <div class="text-sm text-secondary">Track team performance with insights</div>
            </div>
            <span class="list-item__chevron">›</span>
          </div>
        </div>
      </div>
      
      <!-- Main Settings -->
      <div class="section">
        <h2 class="section__title text-secondary">Main Settings</h2>
        <div class="card" style="padding: 0;">
          ${c("⚙️","Main Settings")}
          ${c("🔄","Sync Data")}
        </div>
      </div>
      
      <!-- Support -->
      <div class="section">
        <h2 class="section__title text-secondary">Support</h2>
        <div class="card" style="padding: 0;">
          ${c("❓","FAQ")}
          ${c("✉️","Contact Us")}
          ${c("▶️","Youtube Tutorial")}
        </div>
      </div>
      
      <!-- Other -->
      <div class="section">
        <h2 class="section__title text-secondary">Other</h2>
        <div class="card" style="padding: 0;">
          ${c("💻","Goal Getters Coaching App for Mac")}
          ${c("📱","Goal Getters Coaching App for Android")}
          ${c("📄","Terms of Use")}
          ${D()}
          ${c("⭐","Rate This App")}
          ${c("📤","Share This App")}
        </div>
      </div>
    </div>
  `}function c(e,t){return`
    <div class="list-item list-item--clickable">
      <span style="font-size: 20px;">${e}</span>
      <div class="list-item__content">
        <div class="list-item__title">${t}</div>
      </div>
      <span class="list-item__chevron">›</span>
    </div>
  `}function D(){return`
    <div class="list-item">
      <span style="font-size: 20px;">❤️</span>
      <div class="list-item__content">
        <div class="list-item__title">Follow Us</div>
      </div>
      <div class="flex flex--gap-3">
        <button class="btn btn--ghost btn--small" style="min-height: 32px; padding: var(--space-1) var(--space-2);">
          𝕏
        </button>
        <button class="btn btn--ghost btn--small" style="min-height: 32px; padding: var(--space-1) var(--space-2);">
          f
        </button>
      </div>
    </div>
  `}const j={"/squad":w,"/matches":A,"/trainings":F,"/schedule":k,"/more":R};class W{constructor(){this.currentRoute=null}init(){this.handleRoute()}getPath(){return window.location.hash.slice(1)||"/squad"}handleRoute(){const t=this.getPath(),a="/"+t.split("/")[1];this.currentRoute=a;const s=j[a];s?s(t):window.location.hash="#/squad"}navigate(t){window.location.hash=`#${t}`}getCurrentRoute(){return this.currentRoute}}const d=new W,U=[{id:"squad",label:"Squad",icon:"👥",route:"/squad"},{id:"matches",label:"Matches",icon:"⚽",route:"/matches"},{id:"trainings",label:"Trainings",icon:"🏃",route:"/trainings"},{id:"schedule",label:"Schedule",icon:"📅",route:"/schedule"},{id:"more",label:"More",icon:"☰",route:"/more"}];function q(){const e=document.getElementById("bottom-nav");e.innerHTML=U.map(t=>`
    <button 
      class="bottom-nav__item ${g(t.route)?"bottom-nav__item--active":""}" 
      data-route="${t.route}"
      aria-label="${t.label}"
    >
      <span class="bottom-nav__icon">${t.icon}</span>
      <span class="bottom-nav__label">${t.label}</span>
    </button>
  `).join(""),e.querySelectorAll(".bottom-nav__item").forEach(t=>{t.addEventListener("click",()=>{const a=t.dataset.route;d.navigate(a)})})}function g(e){return d.getCurrentRoute()===e}window.addEventListener("hashchange",()=>{document.querySelectorAll(".bottom-nav__item").forEach(e=>{const t=e.dataset.route;g(t)?e.classList.add("bottom-nav__item--active"):e.classList.remove("bottom-nav__item--active")})});"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(e=>{console.log("ServiceWorker registered:",e.scope)}).catch(e=>{console.log("ServiceWorker registration failed:",e)})});function h(){const e=document.getElementById("app");e.innerHTML=`
    <div class="app-content" id="app-content"></div>
    <nav class="bottom-nav" id="bottom-nav"></nav>
  `,q(),d.init(),window.addEventListener("hashchange",()=>{d.handleRoute()}),window.location.hash?d.handleRoute():window.location.hash="#/squad"}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",h):h();window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),console.log("PWA install prompt available")});window.addEventListener("appinstalled",()=>{console.log("PWA was installed")});
