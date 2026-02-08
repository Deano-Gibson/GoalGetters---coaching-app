/**
 * Schedule Screen
 * Calendar view of matches and trainings
 */

import { getActiveTeam } from '../data/mock-teams.js';

export function renderScheduleScreen(path) {
  const content = document.getElementById('app');
  const today = new Date();
  const currentMonth = today.toLocaleString('en-US', { month: 'short', year: 'numeric' });
  const currentDate = today.toLocaleString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });

  content.innerHTML = `
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
        <div class="weight-semibold">${currentMonth}</div>
      </div>
      
      ${renderWeekCalendar(today)}
      
      <div class="section">
        <div class="flex flex--between mb-4">
          <h2 class="section__title">${currentDate}</h2>
          <button class="btn btn--ghost btn--small">${getActiveTeam().shortName} 🔽</button>
        </div>
        
        <div class="empty-state">
          <h2 class="empty-state__title text-lg">No Events</h2>
        </div>
      </div>
    </div>
  `;
}

function renderWeekCalendar(today) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());

  const week = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    return date;
  });

  return `
    <div class="card mb-6">
      <div class="grid grid--7" style="gap: 0; text-align: center;">
        ${week.map((date, i) => {
    const isToday = date.toDateString() === today.toDateString();
    return `
            <div style="padding: var(--space-3); border-right: ${i < 6 ? '1px solid var(--border-muted)' : 'none'};">
              <div class="text-xs text-secondary mb-2">${days[i]}</div>
              <div class="weight-semibold ${isToday ? 'text-accent-primary' : ''}" style="${isToday ? 'width: 32px; height: 32px; margin: 0 auto; background: var(--accent-primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center;' : ''}">
                ${date.getDate()}
              </div>
            </div>
          `;
  }).join('')}
      </div>
    </div>
  `;
}
