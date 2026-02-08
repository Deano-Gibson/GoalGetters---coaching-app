/**
 * Squad Screen
 * Display team players grouped by position
 * Responsive Master-Detail Layout
 */

import { getActiveTeam, teams, setActiveTeam } from '../data/mock-teams.js';
import { getPlayersByPosition, getPlayerById } from '../data/mock-players.js';

export function renderSquadScreen(path) {
  const content = document.getElementById('app');
  const activeTeam = getActiveTeam();
  const playersByPosition = getPlayersByPosition(activeTeam.id);

  const isDetail = path.includes('/player/');
  const playerId = isDetail ? path.split('/player/')[1] : null;
  const player = playerId ? getPlayerById(playerId) : null;

  // Mobile visibility classes
  const layoutClass = isDetail ? 'show-detail' : 'show-master';

  content.innerHTML = `
    <div class="page squad-page">
      <!-- Main Header (Desktop + Mobile Master) -->
      <div class="page-header ${isDetail ? 'hide-on-mobile' : ''}">
        <div style="width: 44px;"></div>
        <h1 class="page-header__title">${activeTeam.shortName}</h1>
        <div class="page-header__actions">
          <button class="page-header__action" id="add-player-btn" aria-label="Add player">
            <span>➕</span>
          </button>
        </div>
      </div>

      <!-- Detail Header (Mobile Only) -->
      ${isDetail ? `
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
      ` : ''}
      
      <div class="page-body layout-split ${layoutClass}">
        <!-- Master Pane: Squad List -->
        <div class="pane-master">
          ${renderTeamSelector()}
          ${renderPlayerSections(playersByPosition, playerId)}
        </div>
        
        <!-- Detail Pane: Player Info -->
        <div class="pane-detail card" style="background: var(--bg-surface); border: none; height: 100%; box-shadow: none;">
          ${player ? renderPlayerDetailContent(player) : renderEmptyState()}
        </div>
      </div>
    </div>
  `;

  attachSquadEventListeners();
}

function renderTeamSelector() {
  return '';
}

function renderPlayerSections(playersByPosition, activePlayerId) {
  return Object.entries(playersByPosition)
    .filter(([_, players]) => players.length > 0)
    .map(([position, players]) => `
      <div class="section">
        <h2 class="section__title text-secondary">${position}</h2>
        <div class="card" style="padding: 0;">
          ${players.map(player => renderPlayerCard(player, activePlayerId)).join('')}
        </div>
      </div>
    `).join('');
}

function renderPlayerCard(player, activePlayerId) {
  const isActive = player.id == activePlayerId;
  const activeClass = isActive ? 'bg-surface' : '';
  const borderClass = isActive ? 'style="border-left: 3px solid var(--accent-primary);"' : '';

  const positionBadges = [player.nominalPosition, ...player.alternativePositions]
    .slice(0, 3)
    .map(pos => `<span class="badge">${pos}</span>`)
    .join(' ');

  return `
    <div class="list-item list-item--clickable ${activeClass}" ${borderClass} data-player-id="${player.id}">
      <div class="list-item__avatar">
        ${player.photo ? `<img src="${player.photo}" alt="${player.firstName}">` : '👤'}
      </div>
      <div class="list-item__content">
        <div class="list-item__title">${player.firstName} ${player.lastName}</div>
        <div class="list-item__subtitle">
          ${positionBadges}
          ${player.captain ? '<span class="badge badge--warning">C</span>' : ''}
          ${player.injured ? '<span class="badge badge--error">!</span>' : ''}
        </div>
      </div>
      <div class="list-item__meta">
        ${player.number ? `<span class="text-lg weight-semibold">${player.number}</span>` : ''}
        <span class="list-item__chevron">›</span>
      </div>
    </div>
  `;
}

function renderEmptyState() {
  return `
    <div class="empty-state" style="height: 100%; display: flex; align-items: center; justify-content: center;">
      <div style="text-align: center;">
        <div class="empty-state__icon">👤</div>
        <div class="empty-state__title">Select a player</div>
        <div class="empty-state__description">View detailed statistics and attributes</div>
      </div>
    </div>
  `;
}

function renderPlayerDetailContent(player) {
  return `
    <div style="text-align: center; padding: var(--space-6) 0;">
      <div style="width: 120px; height: 120px; margin: 0 auto var(--space-4); background: var(--surface-elevated); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 64px;">
        ${player.photo ? `<img src="${player.photo}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">` : '👤'}
      </div>
      <h1 class="text-2xl weight-bold mb-2">${player.firstName} ${player.lastName}</h1>
      <p class="text-secondary">${player.number || '#'}</p>
    </div>
    
    <div class="grid grid--3 mb-6">
      <div class="card text-center" style="background: var(--bg-card);">
        <div class="text-2xl weight-bold mb-1">${player.age}</div>
        <div class="text-sm text-secondary">Age</div>
      </div>
      <div class="card text-center" style="background: var(--bg-card);">
        <div class="text-2xl weight-bold mb-1">${player.weight} kg</div>
        <div class="text-sm text-secondary">Weight</div>
      </div>
      <div class="card text-center" style="background: var(--bg-card);">
        <div class="text-2xl weight-bold mb-1">${player.height} cm</div>
        <div class="text-sm text-secondary">Height</div>
      </div>
    </div>
    
    <div class="section">
      <h2 class="section__title">Basic info</h2>
      <div class="card" style="background: var(--bg-card);">
        <div class="flex flex--between mb-3">
          <span class="text-secondary">Foot</span>
          <span class="weight-semibold">${player.foot}</span>
        </div>
        <div class="flex flex--between">
          <span class="text-secondary">Nominal Position</span>
          <span class="weight-semibold">${player.nominalPosition}</span>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2 class="section__title">Statistics</h2>
      <div class="card" style="background: var(--bg-card);">
        <h3 class="weight-semibold mb-3">Overall</h3>
        <div class="grid grid--3" style="gap: var(--space-2); font-size: var(--text-sm);">
            <div>Matches: <span class="weight-bold">${player.statistics.overall.matches}</span></div>
            <div>Mins: <span class="weight-bold">${player.statistics.overall.minutes}</span></div>
            <div>Rating: <span class="weight-bold">${player.statistics.overall.rating}</span></div>
            <div>Goals: <span class="weight-bold">${player.statistics.overall.goals}</span></div>
            <div>Assists: <span class="weight-bold">${player.statistics.overall.assists}</span></div>
            <div>Cards: <span class="weight-bold">${player.statistics.overall.cards}</span></div>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2 class="section__title">Attributes</h2>
      ${renderAttributes(player.attributes)}
    </div>
  `;
}

function renderAttributes(attributes) {
  // ... existing logic ...
  const categories = {
    'Technical': attributes.technical,
    'Mental': attributes.mental,
    'Physical': attributes.physical
  };

  return Object.entries(categories).map(([category, attrs]) => `
    <div class="card mb-4" style="background: var(--bg-card);">
      <h3 class="weight-semibold mb-3">${category}</h3>
      ${Object.entries(attrs).map(([attr, value]) => {
    const label = attr.replace(/([A-Z])/g, ' $1').trim();
    const capitalizedLabel = label.charAt(0).toUpperCase() + label.slice(1);
    const dots = '●'.repeat(value) + '○'.repeat(10 - value);
    return `
          <div class="flex flex--between mb-2">
            <span class="text-sm text-secondary">${capitalizedLabel}</span>
            <div class="flex flex--gap-1">
              <span style="color: var(--success); letter-spacing: 2px;">${dots}</span>
              <span class="weight-semibold text-sm">${value}</span>
            </div>
          </div>
        `;
  }).join('')}
    </div>
  `).join('');
}

function attachSquadEventListeners() {
  document.querySelectorAll('[data-player-id]').forEach(card => {
    card.addEventListener('click', () => {
      const playerId = card.dataset.playerId;
      window.location.hash = `#/squad/player/${playerId}`;
    });
  });

  const addBtn = document.getElementById('add-player-btn');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      alert('Add player feature coming soon');
    });
  }
}
