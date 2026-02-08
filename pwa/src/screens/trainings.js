/**
 * Trainings Screen
 * Display training sessions
 */

import { getActiveTeam } from '../data/mock-teams.js';

export function renderTrainingsScreen(path) {
    const content = document.getElementById('app-content');

    content.innerHTML = `
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
  `;
}
