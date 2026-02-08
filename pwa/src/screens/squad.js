/**
 * Squad Screen
 * Display team players grouped by position
 */

import { getActiveTeam, teams, setActiveTeam } from '../data/mock-teams.js';
import { getPlayersByPosition, getPlayerById } from '../data/mock-players.js';

export function renderSquadScreen(path) {
    const content = document.getElementById('app-content');
    const activeTeam = getActiveTeam();

    // Check if we're viewing a specific player
    if (path.includes('/player/')) {
        const playerId = path.split('/player/')[1];
        renderPlayerDetail(playerId);
        return;
    }

    const playersByPosition = getPlayersByPosition(activeTeam.id);

    content.innerHTML = `
    <div class="page-header">
      <div style="width: 44px;"></div>
      <h1 class="page-header__title">${activeTeam.shortName}</h1>
      <div class="page-header__actions">
        <button class="page-header__action" id="add-player-btn" aria-label="Add player">
          <span>➕</span>
        </button>
      </div>
    </div>
    
    <div class="page-body">
      ${renderTeamSelector()}
      ${renderPlayerSections(playersByPosition)}
    </div>
  `;

    // Attach event listeners
    attachSquadEventListeners();
}

function renderTeamSelector() {
    // For simplicity in the first iteration, just show the team name
    // In a full implementation, this would be a team switcher
    return '';
}

function renderPlayerSections(playersByPosition) {
    return Object.entries(playersByPosition)
        .filter(([_, players]) => players.length > 0)
        .map(([position, players]) => `
      <div class="section">
        <h2 class="section__title text-secondary">${position}</h2>
        <div class="card" style="padding: 0;">
          ${players.map(player => renderPlayerCard(player)).join('')}
        </div>
      </div>
    `).join('');
}

function renderPlayerCard(player) {
    const positionBadges = [player.nominalPosition, ...player.alternativePositions]
        .slice(0, 3)
        .map(pos => `<span class="badge">${pos}</span>`)
        .join(' ');

    return `
    <div class="list-item list-item--clickable" data-player-id="${player.id}">
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

function renderPlayerDetail(playerId) {
    const content = document.getElementById('app-content');
    const player = getPlayerById(playerId);

    if (!player) {
        window.location.hash = '#/squad';
        return;
    }

    content.innerHTML = `
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
      ${renderPlayerDetailContent(player)}
    </div>
  `;

    // Back button
    document.getElementById('back-btn').addEventListener('click', () => {
        window.location.hash = '#/squad';
    });
}

function renderPlayerDetailContent(player) {
    return `
    <div style="text-align: center; padding: var(--space-6) 0;">
      <div style="width: 120px; height: 120px; margin: 0 auto var(--space-4); background: var(--surface-elevated); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 64px;">
        ${player.photo ? `<img src="${player.photo}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">` : '👤'}
      </div>
      <h1 class="text-2xl weight-bold mb-2">${player.firstName} ${player.lastName}</h1>
      <p class="text-secondary">${player.number || ''}</p>
    </div>
    
    <div class="grid grid--3 mb-6">
      <div class="card text-center">
        <div class="text-2xl weight-bold mb-1">${player.age}</div>
        <div class="text-sm text-secondary">Age</div>
      </div>
      <div class="card text-center">
        <div class="text-2xl weight-bold mb-1">${player.weight} kg</div>
        <div class="text-sm text-secondary">Weight</div>
      </div>
      <div class="card text-center">
        <div class="text-2xl weight-bold mb-1">${player.height} cm</div>
        <div class="text-sm text-secondary">Height</div>
      </div>
    </div>
    
    <div class="section">
      <h2 class="section__title">Basic info</h2>
      <div class="card">
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
      <div class="card">
        <h3 class="weight-semibold mb-3">Competitions</h3>
        <div class="mb-4">
          <div class="text-sm text-secondary mb-2">Overall</div>
          <div class="grid grid--3" style="gap: var(--space-2); font-size: var(--text-sm);">
            <div>${player.statistics.overall.matches} matches</div>
            <div>${player.statistics.overall.minutes} min</div>
            <div>${player.statistics.overall.rating} rating</div>
            <div>${player.statistics.overall.goals} goals</div>
            <div>${player.statistics.overall.assists} assists</div>
            <div>${player.statistics.overall.cards} cards</div>
          </div>
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
    const categories = {
        'Technical': attributes.technical,
        'Mental': attributes.mental,
        'Physical': attributes.physical
    };

    return Object.entries(categories).map(([category, attrs]) => `
    <div class="card mb-4">
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
    // Player card clicks
    document.querySelectorAll('[data-player-id]').forEach(card => {
        card.addEventListener('click', () => {
            const playerId = card.dataset.playerId;
            window.location.hash = `#/squad/player/${playerId}`;
        });
    });

    // Add player button
    const addBtn = document.getElementById('add-player-btn');
    if (addBtn) {
        addBtn.addEventListener('click', () => {
            alert('Add player form would open here');
            // In full implementation, would open modal
        });
    }
}
