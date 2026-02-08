/**
 * Navigation Component
 * Bottom tab navigation (mobile) / Side navigation (desktop)
 */

import { router } from '../router.js';

const navItems = [
    { id: 'squad', label: 'Squad', icon: '👥', route: '/squad' },
    { id: 'matches', label: 'Matches', icon: '⚽', route: '/matches' },
    { id: 'trainings', label: 'Trainings', icon: '🏃', route: '/trainings' },
    { id: 'schedule', label: 'Schedule', icon: '📅', route: '/schedule' },
    { id: 'more', label: 'More', icon: '☰', route: '/more' },
];

export function renderNavigation() {
    const nav = document.getElementById('bottom-nav');

    nav.innerHTML = navItems.map(item => `
    <button 
      class="bottom-nav__item ${isActive(item.route) ? 'bottom-nav__item--active' : ''}" 
      data-route="${item.route}"
      aria-label="${item.label}"
    >
      <span class="bottom-nav__icon">${item.icon}</span>
      <span class="bottom-nav__label">${item.label}</span>
    </button>
  `).join('');

    // Add click listeners
    nav.querySelectorAll('.bottom-nav__item').forEach(button => {
        button.addEventListener('click', () => {
            const route = button.dataset.route;
            router.navigate(route);
        });
    });
}

function isActive(route) {
    const currentPath = router.getCurrentRoute();
    return currentPath === route;
}

// Update navigation on route change
window.addEventListener('hashchange', () => {
    // Update active states
    document.querySelectorAll('.bottom-nav__item').forEach(button => {
        const route = button.dataset.route;
        if (isActive(route)) {
            button.classList.add('bottom-nav__item--active');
        } else {
            button.classList.remove('bottom-nav__item--active');
        }
    });
});
