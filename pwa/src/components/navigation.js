/**
 * Navigation Component
 * Bottom tab navigation (mobile) / Side navigation (desktop)
 */

import { router } from '../router.js';
import { teams, getActiveTeam, setActiveTeam } from '../data/mock-teams.js';

const navItems = [
    { id: 'squad', label: 'Squad', icon: '👥', route: '/squad' },
    { id: 'matches', label: 'Matches', icon: '⚽', route: '/matches' },
    { id: 'trainings', label: 'Trainings', icon: '🏃', route: '/trainings' },
    { id: 'schedule', label: 'Schedule', icon: '📅', route: '/schedule' },
    { id: 'more', label: 'More', icon: '☰', route: '/more' },
];

export function renderNavigation() {
    renderBottomNav();
    renderSidebar();
}

function renderBottomNav() {
    const nav = document.getElementById('bottom-nav');
    if (!nav) return;

    nav.innerHTML = navItems.map(item => `
        <button 
            class="bottom-nav__item ${isActive(item.route) ? 'bottom-nav__item--active' : ''}" 
            data-route="${item.route}"
            onclick="window.location.hash='${item.route}'"
        >
            <span class="bottom-nav__icon">${item.icon}</span>
            <span class="bottom-nav__label">${item.label}</span>
        </button>
    `).join('');
}

function renderSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;

    const activeTeam = getActiveTeam();

    sidebar.innerHTML = `
        <div class="sidebar__logo">
            <span style="font-size: 24px;">🛡️</span>
            <span>Goal Getters</span>
        </div>

        <div class="form-group" style="padding: 0 var(--space-4); margin-bottom: var(--space-6);">
            <label class="form-label">Active Team</label>
            <select class="form-select" id="team-switcher" style="background-color: var(--bg-surface);">
                ${teams.map(team => `
                    <option value="${team.id}" ${team.id === activeTeam.id ? 'selected' : ''}>
                        ${team.name}
                    </option>
                `).join('')}
            </select>
        </div>

        <div class="sidebar__nav">
            ${navItems.map(item => `
                <div 
                    class="sidebar__item ${isActive(item.route) ? 'sidebar__item--active' : ''}"
                    onclick="window.location.hash='${item.route}'"
                >
                    <span style="font-size: 20px;">${item.icon}</span>
                    <span>${item.label}</span>
                </div>
            `).join('')}
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
    `;

    // Bind team switcher
    document.getElementById('team-switcher')?.addEventListener('change', (e) => {
        const newTeamId = parseInt(e.target.value);
        setActiveTeam(newTeamId);

        // Smoothly re-render UI instead of full reload (failsafe for SW issues)
        renderNavigation();
        router.handleRoute();

        console.log('Active team changed to:', newTeamId);
    });
}

function isActive(route) {
    const currentPath = window.location.hash.slice(1) || '/squad';
    // Match exact route or sub-route
    return currentPath === route || currentPath.startsWith(route + '/');
}
