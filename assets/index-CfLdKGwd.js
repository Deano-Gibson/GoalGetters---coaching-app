(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}})();const h="goal_getters_active_team_id",r=[{id:1,name:"Goal Getters Hollywood Bets",shortName:"GGHB",logo:null,active:!1},{id:2,name:"Goal Getters Super League",shortName:"GGSL",logo:null,active:!1},{id:3,name:"Goal Getters Reserves",shortName:"GGR",logo:null,active:!1},{id:4,name:"Goal Getters Div 1",shortName:"GGD1",logo:null,active:!1},{id:5,name:"Goal Getters U/17",shortName:"GGU17",logo:null,active:!1},{id:6,name:"Goal Getters U/15",shortName:"GGU15",logo:null,active:!1},{id:7,name:"Goal Getters U/13",shortName:"GGU13",logo:null,active:!1}];function g(){try{const e=localStorage.getItem(h);if(e){const t=parseInt(e),s=r.find(i=>i.id===t);if(s)return s}}catch(e){console.warn("Failed to load active team from localStorage",e)}return r.find(e=>e.active)||r[0]}function _(e){try{localStorage.setItem(h,e.toString())}catch(t){console.warn("Failed to save active team to localStorage",t)}r.forEach(t=>t.active=t.id===e)}const m=[{id:1,teamId:1,firstName:"Alex",lastName:"Richard Chetty",number:1,birthDate:"2005-03-15",age:20,weight:75,height:188,foot:"Right",nominalPosition:"GK",alternativePositions:[],captain:!0,injured:!1,photo:null,attributes:{technical:{ballControl:6,dribbling:4,firstTouch:5,passing:6,shootingFinishing:3,weakFootUsage:4},mental:{attitudeInTraining:7,confidence:6,focusConcentration:7,followingInstructions:8,gameAwareness:7},physical:{pace:5,strength:6,stamina:7}},statistics:{overall:{matches:5,minutes:450,rating:6.8,goals:0,assists:0,cards:"0/0"}}},{id:2,teamId:1,firstName:"Gage",lastName:"Aaron Webster",number:78,birthDate:"2006-08-22",age:19,weight:62,height:183,foot:"Right",nominalPosition:"GK",alternativePositions:[],captain:!1,injured:!1,photo:null,attributes:{technical:{ballControl:7,dribbling:5,firstTouch:5,passing:5,shootingFinishing:5,weakFootUsage:5},mental:{attitudeInTraining:5,confidence:5,focusConcentration:5,followingInstructions:5,gameAwareness:5},physical:{pace:6,strength:5,stamina:6}},statistics:{overall:{matches:1,minutes:27,rating:3,goals:0,assists:0,cards:"0/0"}}},{id:3,teamId:1,firstName:"Akho",lastName:"Mbizeni",number:5,birthDate:"2005-04-10",age:20,weight:78,height:180,foot:"Right",nominalPosition:"CB",alternativePositions:["LB","RB"],captain:!1,injured:!1,photo:null,attributes:{technical:{ballControl:6,dribbling:5,firstTouch:6,passing:6,shootingFinishing:4,weakFootUsage:5},mental:{attitudeInTraining:7,confidence:6,focusConcentration:6,followingInstructions:7,gameAwareness:6},physical:{pace:6,strength:7,stamina:7}},statistics:{overall:{matches:6,minutes:540,rating:6.5,goals:1,assists:0,cards:"2/0"}}},{id:4,teamId:1,firstName:"Cameron",lastName:"Jaydan Cramford",number:9,birthDate:"2006-01-18",age:20,weight:71,height:175,foot:"Right",nominalPosition:"CF",alternativePositions:["WF"],captain:!1,injured:!1,photo:null,attributes:{technical:{ballControl:7,dribbling:8,firstTouch:7,passing:6,shootingFinishing:8,weakFootUsage:5},mental:{attitudeInTraining:8,confidence:7,focusConcentration:6,followingInstructions:7,gameAwareness:7},physical:{pace:8,strength:6,stamina:7}},statistics:{overall:{matches:7,minutes:630,rating:7.2,goals:11,assists:3,cards:"1/0"}}},{id:5,teamId:1,firstName:"Lehlogonolo",lastName:"Seopo Molepo",number:7,birthDate:"2005-11-30",age:20,weight:68,height:172,foot:"Left",nominalPosition:"CF",alternativePositions:["WF"],captain:!1,injured:!1,photo:null,attributes:{technical:{ballControl:8,dribbling:7,firstTouch:8,passing:7,shootingFinishing:7,weakFootUsage:6},mental:{attitudeInTraining:7,confidence:8,focusConcentration:7,followingInstructions:6,gameAwareness:8},physical:{pace:9,strength:5,stamina:6}},statistics:{overall:{matches:6,minutes:540,rating:7.5,goals:8,assists:5,cards:"0/0"}}},{id:6,teamId:1,firstName:"Rogan",lastName:"Robb",number:21,birthDate:"2005-07-14",age:20,weight:74,height:178,foot:"Right",nominalPosition:"CF",alternativePositions:["LWB","RWB","CM","AM","LW","RW"],captain:!1,injured:!1,photo:null,attributes:{technical:{ballControl:7,dribbling:6,firstTouch:7,passing:7,shootingFinishing:6,weakFootUsage:5},mental:{attitudeInTraining:9,confidence:7,focusConcentration:8,followingInstructions:8,gameAwareness:7},physical:{pace:7,strength:6,stamina:8}},statistics:{overall:{matches:6,minutes:420,rating:6.9,goals:4,assists:2,cards:"1/0"}}},{id:201,teamId:2,firstName:"Jabu",lastName:"Mahlangu",number:10,birthDate:"2004-05-12",age:21,weight:70,height:176,foot:"Right",nominalPosition:"CAM",alternativePositions:["CM"],captain:!0,injured:!1,photo:null,attributes:{technical:{ballControl:8,dribbling:8,firstTouch:7,passing:8,shootingFinishing:7,weakFootUsage:4},mental:{attitudeInTraining:8,confidence:8,focusConcentration:7,followingInstructions:7,gameAwareness:8},physical:{pace:7,strength:6,stamina:8}},statistics:{overall:{matches:10,minutes:900,rating:7.8,goals:5,assists:8,cards:"1/0"}}}];function x(e){return m.filter(t=>t.teamId===e)}function $(e){const t=x(e);return{Goalkeepers:t.filter(i=>i.nominalPosition==="GK"),Defenders:t.filter(i=>["CB","LB","RB","LWB","RWB"].includes(i.nominalPosition)),Midfielders:t.filter(i=>["CM","CDM","CAM","LM","RM"].includes(i.nominalPosition)),Forwards:t.filter(i=>["CF","ST","LW","RW","WF"].includes(i.nominalPosition))}}function M(e){return m.find(t=>t.id===parseInt(e))}function C(e){const t=document.getElementById("app"),s=g(),i=$(s.id),a=e.includes("/player/"),n=a?e.split("/player/")[1]:null,o=n?M(n):null,c=a?"show-detail":"show-master";t.innerHTML=`
    <div class="page squad-page">
      <!-- Main Header (Desktop + Mobile Master) -->
      <div class="page-header ${a?"hide-on-mobile":""}">
        <div style="width: 44px;"></div>
        <h1 class="page-header__title">${s.shortName}</h1>
        <div class="page-header__actions">
          <button class="page-header__action" id="add-player-btn" aria-label="Add player">
            <span>➕</span>
          </button>
        </div>
      </div>

      <!-- Detail Header (Mobile Only) -->
      ${a?`
      <div class="page-header show-on-mobile-only">
        <button class="page-header__action" onclick="window.history.back()">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
        <h1 class="page-header__title">Player Details</h1>
        <div class="page-header__actions">
          <button class="page-header__action">⋮</button>
        </div>
      </div>
      `:""}
      
      <div class="page-body layout-split ${c}">
        <!-- Master Pane: Squad List -->
        <div class="pane-master">
          ${S()}
          ${k(i,n)}
        </div>
        
        <!-- Detail Pane: Player Info -->
        <div class="pane-detail card" style="background: var(--bg-surface); border: none; height: 100%; box-shadow: none;">
          ${o?P(o):G()}
        </div>
      </div>
    </div>
  `,I()}function S(){return""}function k(e,t){return Object.entries(e).filter(([s,i])=>i.length>0).map(([s,i])=>`
      <div class="section">
        <h2 class="section__title text-secondary">${s}</h2>
        <div class="card" style="padding: 0;">
          ${i.map(a=>T(a,t)).join("")}
        </div>
      </div>
    `).join("")}function T(e,t){const s=e.id==t,i=s?"bg-surface":"",a=s?'style="border-left: 3px solid var(--accent-primary);"':"",n=[e.nominalPosition,...e.alternativePositions].slice(0,3).map(o=>`<span class="badge">${o}</span>`).join(" ");return`
    <div class="list-item list-item--clickable ${i}" ${a} data-player-id="${e.id}">
      <div class="list-item__avatar">
        ${e.photo?`<img src="${e.photo}" alt="${e.firstName}">`:"👤"}
      </div>
      <div class="list-item__content">
        <div class="list-item__title">${e.firstName} ${e.lastName}</div>
        <div class="list-item__subtitle">
          ${n}
          ${e.captain?'<span class="badge badge--warning">C</span>':""}
          ${e.injured?'<span class="badge badge--error">!</span>':""}
        </div>
      </div>
      <div class="list-item__meta">
        ${e.number?`<span class="text-lg weight-semibold">${e.number}</span>`:""}
        <span class="list-item__chevron">›</span>
      </div>
    </div>
  `}function G(){return`
    <div class="empty-state" style="height: 100%; display: flex; align-items: center; justify-content: center;">
      <div style="text-align: center;">
        <div class="empty-state__icon">👤</div>
        <div class="empty-state__title">Select a player</div>
        <div class="empty-state__description">View detailed statistics and attributes</div>
      </div>
    </div>
  `}function P(e){return`
    <div style="text-align: center; padding: var(--space-6) 0;">
      <div style="width: 120px; height: 120px; margin: 0 auto var(--space-4); background: var(--surface-elevated); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 64px;">
        ${e.photo?`<img src="${e.photo}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`:"👤"}
      </div>
      <h1 class="text-2xl weight-bold mb-2">${e.firstName} ${e.lastName}</h1>
      <p class="text-secondary">${e.number||"#"}</p>
    </div>
    
    <div class="grid grid--3 mb-6">
      <div class="card text-center" style="background: var(--bg-card);">
        <div class="text-2xl weight-bold mb-1">${e.age}</div>
        <div class="text-sm text-secondary">Age</div>
      </div>
      <div class="card text-center" style="background: var(--bg-card);">
        <div class="text-2xl weight-bold mb-1">${e.weight} kg</div>
        <div class="text-sm text-secondary">Weight</div>
      </div>
      <div class="card text-center" style="background: var(--bg-card);">
        <div class="text-2xl weight-bold mb-1">${e.height} cm</div>
        <div class="text-sm text-secondary">Height</div>
      </div>
    </div>
    
    <div class="section">
      <h2 class="section__title">Basic info</h2>
      <div class="card" style="background: var(--bg-card);">
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
      <div class="card" style="background: var(--bg-card);">
        <h3 class="weight-semibold mb-3">Overall</h3>
        <div class="grid grid--3" style="gap: var(--space-2); font-size: var(--text-sm);">
            <div>Matches: <span class="weight-bold">${e.statistics.overall.matches}</span></div>
            <div>Mins: <span class="weight-bold">${e.statistics.overall.minutes}</span></div>
            <div>Rating: <span class="weight-bold">${e.statistics.overall.rating}</span></div>
            <div>Goals: <span class="weight-bold">${e.statistics.overall.goals}</span></div>
            <div>Assists: <span class="weight-bold">${e.statistics.overall.assists}</span></div>
            <div>Cards: <span class="weight-bold">${e.statistics.overall.cards}</span></div>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2 class="section__title">Attributes</h2>
      ${L(e.attributes)}
    </div>
  `}function L(e){const t={Technical:e.technical,Mental:e.mental,Physical:e.physical};return Object.entries(t).map(([s,i])=>`
    <div class="card mb-4" style="background: var(--bg-card);">
      <h3 class="weight-semibold mb-3">${s}</h3>
      ${Object.entries(i).map(([a,n])=>{const o=a.replace(/([A-Z])/g," $1").trim(),c=o.charAt(0).toUpperCase()+o.slice(1),w="●".repeat(n)+"○".repeat(10-n);return`
          <div class="flex flex--between mb-2">
            <span class="text-sm text-secondary">${c}</span>
            <div class="flex flex--gap-1">
              <span style="color: var(--success); letter-spacing: 2px;">${w}</span>
              <span class="weight-semibold text-sm">${n}</span>
            </div>
          </div>
        `}).join("")}
    </div>
  `).join("")}function I(){document.querySelectorAll("[data-player-id]").forEach(t=>{t.addEventListener("click",()=>{const s=t.dataset.playerId;window.location.hash=`#/squad/player/${s}`})});const e=document.getElementById("add-player-btn");e&&e.addEventListener("click",()=>{alert("Add player feature coming soon")})}const v=[{id:1,opponent:"Hollywood Bets",logo:"🦌",date:"2023-11-12",time:"14:00",venue:"Home",status:"Upcoming",score:null,competition:"League Match",events:[]},{id:2,opponent:"Super League",logo:"⚡",date:"2023-11-05",time:"15:30",venue:"Away",status:"Finished",score:{us:3,them:1},result:"win",competition:"Cup Semi-Final",events:[{id:1,type:"goal",team:"us",player:"J. Silva",minute:12,detail:"Header from corner"},{id:2,type:"card",cardType:"yellow",team:"them",player:"Opponent #4",minute:34,detail:"Foul"},{id:3,type:"goal",team:"us",player:"M. Johnson",minute:45,detail:"Penalty"},{id:4,type:"sub",team:"us",playerIn:"D. Wilson",playerOut:"T. Brown",minute:60},{id:5,type:"goal",team:"them",player:"Striker",minute:78,detail:"Counter attack"},{id:6,type:"goal",team:"us",player:"K. Ndlovu",minute:88,detail:"Long range"}]},{id:3,opponent:"Reserves",logo:"🛡️",date:"2023-10-29",time:"10:00",venue:"Home",status:"Finished",score:{us:1,them:1},result:"draw",competition:"Friendly",events:[{id:1,type:"goal",team:"them",player:"Winger",minute:15},{id:2,type:"goal",team:"us",player:"J. Silva",minute:82}]},{id:4,opponent:"Academy U19",logo:"🎓",date:"2023-10-22",time:"09:00",venue:"Away",status:"Finished",score:{us:0,them:2},result:"loss",competition:"League Match",events:[{id:1,type:"goal",team:"them",player:"Forward",minute:22},{id:2,type:"card",cardType:"red",team:"us",player:"M. Johnson",minute:40,detail:"Professional foul"},{id:3,type:"goal",team:"them",player:"Midfielder",minute:67}]},{id:5,opponent:"City Rivals",logo:"🏙️",date:"2023-12-03",time:"16:00",venue:"Away",status:"Upcoming",score:null,competition:"League Match",events:[]}];function A(e){return`
        <!-- Match Scoreboard -->
        <div class="match-score">
            <div class="match-score__team">
                <div class="match-score__logo">🛡️</div>
                <div class="match-score__team-name">Goal Getters</div>
            </div>
            <div class="match-score__score">
                ${e.score?`
                    <span>${e.score.us}</span>
                    <span class="match-score__separator">-</span>
                    <span>${e.score.them}</span>
                `:`
                    <span style="font-size: var(--text-2xl); color: var(--text-secondary);">VS</span>
                `}
            </div>
            <div class="match-score__team">
                <div class="match-score__logo">${e.logo}</div>
                <div class="match-score__team-name">${e.opponent}</div>
            </div>
        </div>

        <!-- Match Info -->
        <div class="card" style="text-align: center; margin-bottom: var(--space-4);">
            <div style="font-size: var(--text-sm); color: var(--text-secondary); margin-bottom: var(--space-1);">
                ${e.competition} • ${e.venue}
            </div>
            <div style="font-size: var(--text-xs); color: var(--text-tertiary);">
                ${new Date(e.date).toLocaleDateString()} • ${e.time}
            </div>
            <div style="margin-top: var(--space-2);">
                    <span class="badge ${D(e.status)}">${e.status}</span>
            </div>
        </div>

        <!-- Tabs -->
        <div class="tabs">
            <div class="tab tab--active">Timeline</div>
            <div class="tab">Lineup</div>
            <div class="tab">Stats</div>
        </div>

        <!-- Timeline View -->
        <div class="timeline-container">
            ${e.events&&e.events.length>0?F(e.events):N()}
        </div>

        <!-- Live Actions (Mock) -->
        ${e.status!=="Finished"?`
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-3); margin-top: var(--space-4);">
            <button class="btn btn--primary btn--full" onclick="alert('Goal logging coming soon!')">
                ⚽ Goal
            </button>
            <button class="btn btn--secondary btn--full" onclick="alert('Card logging coming soon!')">
                🟨 Card
            </button>
        </div>
        `:""}
    `}function D(e){if(!e)return"badge--primary";switch(e.toLowerCase()){case"finished":return"badge--primary";case"upcoming":return"badge--warning";case"live":return"badge--success";default:return"badge--primary"}}function F(e){return`
        <div class="timeline">
            ${[...e].sort((s,i)=>i.minute-s.minute).map(s=>`
                <div class="list-item timeline-item timeline-item--${s.team}">
                    <div class="timeline-item__time" style="font-weight: bold; width: 40px; text-align: center;">${s.minute}'</div>
                    <div class="timeline-item__content" style="flex: 1;">
                        <div style="display: flex; align-items: center; gap: var(--space-2);">
                            <span style="font-size: 1.2rem;">${B(s.type)}</span>
                            <div>
                                <div style="font-weight: var(--weight-semibold);">${s.player}</div>
                                <div style="font-size: var(--text-xs); color: var(--text-secondary);">${s.detail||R(s.type)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `).join("")}
        </div>
    `}function N(){return`
        <div class="empty-state" style="padding: var(--space-8) 0; min-height: auto; border: none; background: transparent;">
            <div class="empty-state__icon" style="font-size: 32px; height: auto; margin-bottom: var(--space-2);">⏱️</div>
            <div class="empty-state__description">No events recorded yet</div>
        </div>
    `}function B(e){switch(e){case"goal":return"⚽";case"card":return"🟨";case"sub":return"🔄";default:return"•"}}function R(e){switch(e){case"goal":return"Goal";case"card":return"Card";case"sub":return"Substitution";default:return"Event"}}function j(e){const t=document.getElementById("app"),s=e.split("/")[2],i=s?v.find(n=>n.id==s):null,a=i?"show-detail":"show-master";t.innerHTML=`
        <div class="page matches-page">
            <!-- Global Header (Desktop + Mobile Master) -->
            <div class="page-header ${i?"hide-on-mobile":""}">
                <div class="page-header__title">Matches</div>
                <button class="page-header__action">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 6h18M3 12h18M3 18h18"/>
                    </svg>
                </button>
            </div>

            <!-- Detail Header (Mobile Only) -->
            ${i?`
            <div class="page-header show-on-mobile-only">
                <button class="page-header__action" onclick="window.history.back()">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                </button>
                <div class="page-header__title">Match Centre</div>
                <button class="page-header__action">⋮</button>
            </div>
            `:""}

            <div class="page-body layout-split ${a}">
                <!-- Master Pane: Match List -->
                <div class="pane-master">
                    <!-- Filter Tabs -->
                    <div class="tabs" style="margin-bottom: var(--space-4);">
                        <div class="tab tab--active">All</div>
                        <div class="tab">League</div>
                        <div class="tab">Cup</div>
                        <div class="tab">Friendly</div>
                    </div>

                    <!-- Upcoming Matches -->
                    <div class="section">
                        <h2 class="section__title">Upcoming</h2>
                        ${p(v.filter(n=>n.status==="Upcoming"),i?.id)}
                    </div>

                    <!-- Past Matches -->
                    <div class="section">
                        <h2 class="section__title">Results</h2>
                        ${p(v.filter(n=>n.status==="Finished"),i?.id)}
                    </div>
                </div>

                <!-- Detail Pane: Match Content -->
                <div class="pane-detail" style="height: 100%;">
                    ${i?A(i):z()}
                </div>
            </div>
        </div>
    `}function p(e,t){return e.length===0?`
            <div class="empty-state" style="padding: var(--space-8); min-height: auto;">
                <div class="empty-state__description">No matches found</div>
            </div>
        `:`
        <div class="match-list">
            ${e.map(s=>E(s,t)).join("")}
        </div>
    `}function E(e,t){const s=e.id==t;return`
        <div class="card card--clickable match-card ${s?"bg-surface":""}" ${s?'style="border-left: 3px solid var(--accent-primary);"':""} onclick="window.location.hash = '#/matches/${e.id}'">
            <div class="match-card__header">
                <span style="font-size: var(--text-xs); color: var(--text-tertiary); font-weight: var(--weight-medium); text-transform: uppercase;">
                    ${new Date(e.date).toLocaleDateString(void 0,{month:"short",day:"numeric"})} • ${e.time}
                </span>
                <div class="badge ${W(e.status)}">${e.status}</div>
            </div>
            
            <div class="match-card__score-row" style="display: flex; justify-content: space-between; align-items: center; margin-top: var(--space-3);">
                <div style="display: flex; align-items: center; gap: var(--space-3);">
                    <div class="match-card__logo" style="width: 40px; height: 40px; background: var(--bg-surface); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; font-size: 20px;">
                        🛡️
                    </div>
                    <span style="font-weight: var(--weight-bold); font-size: var(--text-lg);">Goal Getters</span>
                </div>
                <span style="font-size: var(--text-2xl); font-weight: var(--weight-bold);">${e.score?e.score.us:"-"}</span>
            </div>

            <div class="match-card__score-row" style="display: flex; justify-content: space-between; align-items: center; margin-top: var(--space-2);">
                <div style="display: flex; align-items: center; gap: var(--space-3);">
                    <div class="match-card__logo" style="width: 40px; height: 40px; background: var(--bg-surface); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; font-size: 20px;">
                        ${e.logo}
                    </div>
                    <span style="font-weight: var(--weight-semibold); color: var(--text-secondary);">${e.opponent}</span>
                </div>
                <span style="font-size: var(--text-xl); color: var(--text-secondary);">${e.score?e.score.them:"-"}</span>
            </div>
            
            <div style="margin-top: var(--space-3); font-size: var(--text-xs); color: var(--text-tertiary); display: flex; align-items: center; gap: var(--space-1);">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                ${e.venue}
            </div>
        </div>
    `}function z(){return`
        <div class="empty-state" style="height: 100%; display: flex; align-items: center; justify-content: center;">
            <div style="text-align: center;">
                <div class="empty-state__icon">⚽</div>
                <div class="empty-state__title">Select a match</div>
                <div class="empty-state__description">View match details, timeline, and stats</div>
            </div>
        </div>
    `}function W(e){if(!e)return"badge--primary";switch(e.toLowerCase()){case"finished":return"badge--primary";case"upcoming":return"badge--warning";case"live":return"badge--success";default:return"badge--primary"}}function U(e){const t=document.getElementById("app");t.innerHTML=`
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
  `}function H(e){const t=document.getElementById("app"),s=new Date,i=s.toLocaleString("en-US",{month:"short",year:"numeric"}),a=s.toLocaleString("en-GB",{day:"2-digit",month:"long",year:"numeric"});t.innerHTML=`
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
        <div class="weight-semibold">${i}</div>
      </div>
      
      ${O(s)}
      
      <div class="section">
        <div class="flex flex--between mb-4">
          <h2 class="section__title">${a}</h2>
          <button class="btn btn--ghost btn--small">${g().shortName} 🔽</button>
        </div>
        
        <div class="empty-state">
          <h2 class="empty-state__title text-lg">No Events</h2>
        </div>
      </div>
    </div>
  `}function O(e){const t=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],s=new Date(e);return s.setDate(e.getDate()-e.getDay()),`
    <div class="card mb-6">
      <div class="grid grid--7" style="gap: 0; text-align: center;">
        ${Array.from({length:7},(a,n)=>{const o=new Date(s);return o.setDate(s.getDate()+n),o}).map((a,n)=>{const o=a.toDateString()===e.toDateString();return`
            <div style="padding: var(--space-3); border-right: ${n<6?"1px solid var(--border-muted)":"none"};">
              <div class="text-xs text-secondary mb-2">${t[n]}</div>
              <div class="weight-semibold ${o?"text-accent-primary":""}" style="${o?"width: 32px; height: 32px; margin: 0 auto; background: var(--accent-primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center;":""}">
                ${a.getDate()}
              </div>
            </div>
          `}).join("")}
      </div>
    </div>
  `}function q(e){const t=document.getElementById("app");t.innerHTML=`
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
          ${l("⚙️","Main Settings")}
          ${l("🔄","Sync Data")}
        </div>
      </div>
      
      <!-- Support -->
      <div class="section">
        <h2 class="section__title text-secondary">Support</h2>
        <div class="card" style="padding: 0;">
          ${l("❓","FAQ")}
          ${l("✉️","Contact Us")}
          ${l("▶️","Youtube Tutorial")}
        </div>
      </div>
      
      <!-- Other -->
      <div class="section">
        <h2 class="section__title text-secondary">Other</h2>
        <div class="card" style="padding: 0;">
          ${l("💻","Goal Getters Coaching App for Mac")}
          ${l("📱","Goal Getters Coaching App for Android")}
          ${l("📄","Terms of Use")}
          ${J()}
          ${l("⭐","Rate This App")}
          ${l("📤","Share This App")}
        </div>
      </div>
    </div>
  `}function l(e,t){return`
    <div class="list-item list-item--clickable">
      <span style="font-size: 20px;">${e}</span>
      <div class="list-item__content">
        <div class="list-item__title">${t}</div>
      </div>
      <span class="list-item__chevron">›</span>
    </div>
  `}function J(){return`
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
  `}const K={"/squad":C,"/matches":j,"/trainings":U,"/schedule":H,"/more":q};class V{constructor(){this.currentRoute=null}init(){this.handleRoute()}getPath(){return window.location.hash.slice(1)||"/squad"}handleRoute(){const t=this.getPath(),s="/"+t.split("/")[1];this.currentRoute=s;const i=K[s];i?i(t):window.location.hash="#/squad"}navigate(t){window.location.hash=`#${t}`}getCurrentRoute(){return this.currentRoute}}const d=new V,b=[{id:"squad",label:"Squad",icon:"👥",route:"/squad"},{id:"matches",label:"Matches",icon:"⚽",route:"/matches"},{id:"trainings",label:"Trainings",icon:"🏃",route:"/trainings"},{id:"schedule",label:"Schedule",icon:"📅",route:"/schedule"},{id:"more",label:"More",icon:"☰",route:"/more"}];function f(){Y(),Q()}function Y(){const e=document.getElementById("bottom-nav");e&&(e.innerHTML=b.map(t=>`
        <button 
            class="bottom-nav__item ${y(t.route)?"bottom-nav__item--active":""}" 
            data-route="${t.route}"
            onclick="window.location.hash='${t.route}'"
        >
            <span class="bottom-nav__icon">${t.icon}</span>
            <span class="bottom-nav__label">${t.label}</span>
        </button>
    `).join(""))}function Q(){const e=document.getElementById("sidebar");if(!e)return;const t=g();e.innerHTML=`
        <div class="sidebar__logo">
            <span style="font-size: 24px;">🛡️</span>
            <span>Goal Getters</span>
        </div>

        <div class="form-group" style="padding: 0 var(--space-4); margin-bottom: var(--space-6);">
            <label class="form-label">Active Team</label>
            <select class="form-select" id="team-switcher" style="background-color: var(--bg-surface);">
                ${r.map(s=>`
                    <option value="${s.id}" ${s.id===t.id?"selected":""}>
                        ${s.name}
                    </option>
                `).join("")}
            </select>
        </div>

        <div class="sidebar__nav">
            ${b.map(s=>`
                <div 
                    class="sidebar__item ${y(s.route)?"sidebar__item--active":""}"
                    onclick="window.location.hash='${s.route}'"
                >
                    <span style="font-size: 20px;">${s.icon}</span>
                    <span>${s.label}</span>
                </div>
            `).join("")}
        </div>

        <div style="margin-top: auto; padding: var(--space-4);">
            <div class="card" style="background: var(--bg-surface);">
                <div class="list-item" style="border: none; padding: 0;">
                    <div class="list-item__avatar" style="width: 32px; height: 32px; font-size: 14px;">DG</div>
                    <div class="list-item__content">
                        <div class="list-item__title" style="font-size: var(--text-sm);">Dean Gibson</div>
                        <div class="list-item__subtitle" style="font-size: 10px;">Head Coach</div>
                    </div>
                </div>
            </div>
        </div>
    `,document.getElementById("team-switcher")?.addEventListener("change",s=>{const i=parseInt(s.target.value);_(i),f(),d.handleRoute(),console.log("Active team changed to:",i)})}function y(e){const t=window.location.hash.slice(1)||"/squad";return t===e||t.startsWith(e+"/")}"serviceWorker"in navigator&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?navigator.serviceWorker.getRegistrations().then(e=>{for(let t of e)t.unregister(),console.log("Service Worker unregistered for development")}):window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(e=>{console.log("ServiceWorker registered:",e.scope)}).catch(e=>{console.log("ServiceWorker registration failed:",e)})}));function u(){f(),d.init(),window.addEventListener("hashchange",()=>{d.handleRoute()}),window.location.hash?d.handleRoute():window.location.hash="#/squad"}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",u):u();window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),console.log("PWA install prompt available")});window.addEventListener("appinstalled",()=>{console.log("PWA was installed")});
