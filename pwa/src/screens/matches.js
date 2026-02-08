import { matches } from '../data/mock-matches.js';
import { renderMatchDetailContent } from './match-detail.js';

export function renderMatchesScreen(path) {
    const container = document.getElementById('app');

    // Check if we are viewing a specific match (e.g., /matches/1)
    const matchId = path.split('/')[2];
    const activeMatch = matchId ? matches.find(m => m.id == matchId) : null;

    // Mobile visibility classes
    const layoutClass = activeMatch ? 'show-detail' : 'show-master';

    container.innerHTML = `
        <div class="page matches-page">
            <!-- Global Header (Desktop + Mobile Master) -->
            <div class="page-header ${activeMatch ? 'hide-on-mobile' : ''}">
                <div class="page-header__title">Matches</div>
                <button class="page-header__action">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 6h18M3 12h18M3 18h18"/>
                    </svg>
                </button>
            </div>

            <!-- Detail Header (Mobile Only) -->
            ${activeMatch ? `
            <div class="page-header show-on-mobile-only">
                <button class="page-header__action" onclick="window.history.back()">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                </button>
                <div class="page-header__title">Match Centre</div>
                <button class="page-header__action">⋮</button>
            </div>
            ` : ''}

            <div class="page-body layout-split ${layoutClass}">
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
                        ${renderMatchList(matches.filter(m => m.status === 'Upcoming'), activeMatch?.id)}
                    </div>

                    <!-- Past Matches -->
                    <div class="section">
                        <h2 class="section__title">Results</h2>
                        ${renderMatchList(matches.filter(m => m.status === 'Finished'), activeMatch?.id)}
                    </div>
                </div>

                <!-- Detail Pane: Match Content -->
                <div class="pane-detail" style="height: 100%;">
                    ${activeMatch
            ? renderMatchDetailContent(activeMatch)
            : renderEmptyState()}
                </div>
            </div>
        </div>
    `;
}

function renderMatchList(matchList, activeId) {
    if (matchList.length === 0) {
        return `
            <div class="empty-state" style="padding: var(--space-8); min-height: auto;">
                <div class="empty-state__description">No matches found</div>
            </div>
        `;
    }

    return `
        <div class="match-list">
            ${matchList.map(match => renderMatchCard(match, activeId)).join('')}
        </div>
    `;
}

function renderMatchCard(match, activeId) {
    const isActive = match.id == activeId;
    const activeClass = isActive ? 'bg-surface' : '';
    const borderClass = isActive ? 'style="border-left: 3px solid var(--accent-primary);"' : '';

    return `
        <div class="card card--clickable match-card ${activeClass}" ${borderClass} onclick="window.location.hash = '#/matches/${match.id}'">
            <div class="match-card__header">
                <span style="font-size: var(--text-xs); color: var(--text-tertiary); font-weight: var(--weight-medium); text-transform: uppercase;">
                    ${new Date(match.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })} • ${match.time}
                </span>
                <div class="badge ${getStatusBadgeClass(match.status)}">${match.status}</div>
            </div>
            
            <div class="match-card__score-row" style="display: flex; justify-content: space-between; align-items: center; margin-top: var(--space-3);">
                <div style="display: flex; align-items: center; gap: var(--space-3);">
                    <div class="match-card__logo" style="width: 40px; height: 40px; background: var(--bg-surface); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; font-size: 20px;">
                        🛡️
                    </div>
                    <span style="font-weight: var(--weight-bold); font-size: var(--text-lg);">Goal Getters</span>
                </div>
                <span style="font-size: var(--text-2xl); font-weight: var(--weight-bold);">${match.score ? match.score.us : '-'}</span>
            </div>

            <div class="match-card__score-row" style="display: flex; justify-content: space-between; align-items: center; margin-top: var(--space-2);">
                <div style="display: flex; align-items: center; gap: var(--space-3);">
                    <div class="match-card__logo" style="width: 40px; height: 40px; background: var(--bg-surface); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; font-size: 20px;">
                        ${match.logo}
                    </div>
                    <span style="font-weight: var(--weight-semibold); color: var(--text-secondary);">${match.opponent}</span>
                </div>
                <span style="font-size: var(--text-xl); color: var(--text-secondary);">${match.score ? match.score.them : '-'}</span>
            </div>
            
            <div style="margin-top: var(--space-3); font-size: var(--text-xs); color: var(--text-tertiary); display: flex; align-items: center; gap: var(--space-1);">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                ${match.venue}
            </div>
        </div>
    `;
}

function renderEmptyState() {
    return `
        <div class="empty-state" style="height: 100%; display: flex; align-items: center; justify-content: center;">
            <div style="text-align: center;">
                <div class="empty-state__icon">⚽</div>
                <div class="empty-state__title">Select a match</div>
                <div class="empty-state__description">View match details, timeline, and stats</div>
            </div>
        </div>
    `;
}

function getStatusBadgeClass(status) {
    if (!status) return 'badge--primary';
    switch (status.toLowerCase()) {
        case 'finished': return 'badge--primary';
        case 'upcoming': return 'badge--warning';
        case 'live': return 'badge--success';
        default: return 'badge--primary';
    }
}
