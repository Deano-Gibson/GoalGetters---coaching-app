/**
 * Matches Screen
 * Display matches with filters and sorting
 */

import { getActiveTeam } from '../data/mock-teams.js';
import { getMatchesByTeam, getUpcomingMatches, getPastMatches } from '../data/mock-matches.js';

export function renderMatchesScreen(path) {
    const content = document.getElementById('app-content');
    const activeTeam = getActiveTeam();
    const matches = getMatchesByTeam(activeTeam.id);

    content.innerHTML = `
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
        ${renderMatchList(getUpcomingMatches(activeTeam.id))}
        
        <h2 class="section__title mt-6">Past</h2>
        ${renderMatchList(getPastMatches(activeTeam.id))}
      </div>
    </div>
  `;

    // Add match button
    document.getElementById('add-match-btn')?.addEventListener('click', () => {
        alert('Add match form would open here');
    });

    // Filter button
    document.getElementById('filter-btn')?.addEventListener('click', () => {
        alert('Filter options would open here');
    });
}

function renderMatchList(matches) {
    if (matches.length === 0) {
        return `
      <div class="empty-state" style="min-height: 150px; padding: var(--space-8);">
        <div class="empty-state__title text-base">No matches</div>
      </div>
    `;
    }

    return `
    <div class="card" style="padding: 0;">
      ${matches.map(match => renderMatchCard(match)).join('')}
    </div>
  `;
}

function renderMatchCard(match) {
    const isHome = match.venue === 'Home';
    const homeTeam = isHome ? getActiveTeam().shortName : match.opponentName;
    const awayTeam = isHome ? match.opponentName : getActiveTeam().shortName;
    const score = match.homeTeamScore !== null
        ? `${match.homeTeamScore} : ${match.awayTeamScore}`
        : '– : –';
    const scoreClass = getScoreClass(match, isHome);
    const date = new Date(match.date).toLocaleString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    return `
    <div class="list-item list-item--clickable" data-match-id="${match.id}">
      <div class="list-item__content">
        <div class="list-item__title">${homeTeam} vs ${awayTeam}</div>
        <div class="list-item__subtitle flex flex--gap-3 mt-1">
          <span>${match.venue}</span>
          <span>${date}</span>
        </div>
      </div>
      <div class="list-item__meta">
        <span class="text-xl weight-bold ${scoreClass}">${score}</span>
        <span class="list-item__chevron">›</span>
      </div>
    </div>
  `;
}

function getScoreClass(match, isHome) {
    if (match.homeTeamScore === null) return '';

    const ourScore = isHome ? match.homeTeamScore : match.awayTeamScore;
    const theirScore = isHome ? match.awayTeamScore : match.homeTeamScore;

    if (ourScore > theirScore) return 'text-success';
    if (ourScore < theirScore) return 'text-error';
    return '';
}
