/**
 * More Screen
 * Settings and additional options
 */

export function renderMoreScreen(path) {
  const content = document.getElementById('app');

  content.innerHTML = `
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
          ${renderMenuItem('⚙️', 'Main Settings')}
          ${renderMenuItem('🔄', 'Sync Data')}
        </div>
      </div>
      
      <!-- Support -->
      <div class="section">
        <h2 class="section__title text-secondary">Support</h2>
        <div class="card" style="padding: 0;">
          ${renderMenuItem('❓', 'FAQ')}
          ${renderMenuItem('✉️', 'Contact Us')}
          ${renderMenuItem('▶️', 'Youtube Tutorial')}
        </div>
      </div>
      
      <!-- Other -->
      <div class="section">
        <h2 class="section__title text-secondary">Other</h2>
        <div class="card" style="padding: 0;">
          ${renderMenuItem('💻', 'Goal Getters Coaching App for Mac')}
          ${renderMenuItem('📱', 'Goal Getters Coaching App for Android')}
          ${renderMenuItem('📄', 'Terms of Use')}
          ${renderFollowUs()}
          ${renderMenuItem('⭐', 'Rate This App')}
          ${renderMenuItem('📤', 'Share This App')}
        </div>
      </div>
    </div>
  `;
}

function renderMenuItem(icon, label) {
  return `
    <div class="list-item list-item--clickable">
      <span style="font-size: 20px;">${icon}</span>
      <div class="list-item__content">
        <div class="list-item__title">${label}</div>
      </div>
      <span class="list-item__chevron">›</span>
    </div>
  `;
}

function renderFollowUs() {
  return `
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
  `;
}
