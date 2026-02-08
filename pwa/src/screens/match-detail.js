import { matches } from '../data/mock-matches.js';

/**
 * Render the full Match Detail page (Mobile/Standalone)
 */
export function renderMatchDetail(containerId, matchId) {
    const container = document.getElementById(containerId) || document.getElementById('app');
    const match = matches.find(m => m.id == matchId);

    if (!match) {
        container.innerHTML = `
            <div class="page-header">
                <button class="page-header__action" onclick="window.history.back()">⬅️</button>
                <div class="page-header__title">Match Not Found</div>
            </div>
            <div class="page-body">
                <div class="empty-state">Match not found</div>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="page match-detail-page">
            <div class="page-header">
                <button class="page-header__action" onclick="window.history.back()">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                </button>
                <div class="page-header__title">Match Centre</div>
                <button class="page-header__action">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 5v14M5 12h14"/>
                    </svg>
                </button>
            </div>

            <div class="page-body">
                ${renderMatchDetailContent(match)}
            </div>
        </div>
    `;
}

/**
 * Render just the content of the match detail (for Split View)
 */
export function renderMatchDetailContent(match) {
    return `
        <!-- Match Scoreboard -->
        <div class="match-score">
            <div class="match-score__team">
                <div class="match-score__logo">🛡️</div>
                <div class="match-score__team-name">Goal Getters</div>
            </div>
            <div class="match-score__score">
                ${match.score ? `
                    <span>${match.score.us}</span>
                    <span class="match-score__separator">-</span>
                    <span>${match.score.them}</span>
                ` : `
                    <span style="font-size: var(--text-2xl); color: var(--text-secondary);">VS</span>
                `}
            </div>
            <div class="match-score__team">
                <div class="match-score__logo">${match.logo}</div>
                <div class="match-score__team-name">${match.opponent}</div>
            </div>
        </div>

        <!-- Match Info -->
        <div class="card" style="text-align: center; margin-bottom: var(--space-4);">
            <div style="font-size: var(--text-sm); color: var(--text-secondary); margin-bottom: var(--space-1);">
                ${match.competition} • ${match.venue}
            </div>
            <div style="font-size: var(--text-xs); color: var(--text-tertiary);">
                ${new Date(match.date).toLocaleDateString()} • ${match.time}
            </div>
            <div style="margin-top: var(--space-2);">
                    <span class="badge ${getStatusBadgeClass(match.status)}">${match.status}</span>
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
            ${match.events && match.events.length > 0
            ? renderTimelineEvents(match.events)
            : renderEmptyTimeline()}
        </div>

        <!-- Live Actions (Mock) -->
        ${match.status !== 'Finished' ? `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-3); margin-top: var(--space-4);">
            <button class="btn btn--primary btn--full" onclick="alert('Goal logging coming soon!')">
                ⚽ Goal
            </button>
            <button class="btn btn--secondary btn--full" onclick="alert('Card logging coming soon!')">
                🟨 Card
            </button>
        </div>
        ` : ''}
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

function renderTimelineEvents(events) {
    // Sort events by minute (descending for latest on top)
    const sortedEvents = [...events].sort((a, b) => b.minute - a.minute);

    return `
        <div class="timeline">
            ${sortedEvents.map(event => `
                <div class="list-item timeline-item timeline-item--${event.team}">
                    <div class="timeline-item__time" style="font-weight: bold; width: 40px; text-align: center;">${event.minute}'</div>
                    <div class="timeline-item__content" style="flex: 1;">
                        <div style="display: flex; align-items: center; gap: var(--space-2);">
                            <span style="font-size: 1.2rem;">${getEventIcon(event.type)}</span>
                            <div>
                                <div style="font-weight: var(--weight-semibold);">${event.player}</div>
                                <div style="font-size: var(--text-xs); color: var(--text-secondary);">${event.detail || getEventTitle(event.type)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderEmptyTimeline() {
    return `
        <div class="empty-state" style="padding: var(--space-8) 0; min-height: auto; border: none; background: transparent;">
            <div class="empty-state__icon" style="font-size: 32px; height: auto; margin-bottom: var(--space-2);">⏱️</div>
            <div class="empty-state__description">No events recorded yet</div>
        </div>
    `;
}

function getEventIcon(type) {
    switch (type) {
        case 'goal': return '⚽';
        case 'card': return '🟨';
        case 'sub': return '🔄';
        default: return '•';
    }
}

function getEventTitle(type) {
    switch (type) {
        case 'goal': return 'Goal';
        case 'card': return 'Card';
        case 'sub': return 'Substitution';
        default: return 'Event';
    }
}
