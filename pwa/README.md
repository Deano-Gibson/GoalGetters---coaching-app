# Goal Getters Coaching PWA

A professional, frontend-only Progressive Web App for sports team coaching and management.

## 🚀 Quick Start

```bash
# Navigate to the PWA directory
cd pwa

# Install dependencies (if not already installed)
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173/` (or the next available port).

## 📱 Features

### Implemented Screens

1. **Squad Management**
   - View players grouped by position (Goalkeepers, Defenders, Midfielders, Forwards)
   - Player detail view with attributes, statistics, and basic info
   - Team switcher support
   - Add player functionality (UI ready)

2. **Matches**
   - View upcoming and past matches
   - Match scores and results with color-coded outcomes (win/loss/draw)
   - Filter and sort options
   - Match detail view (UI ready)

3. **Trainings**
   - Empty state with call-to-action
   - Season filter
   - Add training functionality (UI ready)

4. **Schedule**
   - Weekly calendar view with current date highlighting
   - Event list for selected dates
   - Team filter dropdown
   - Empty state for days without events

5. **More/Settings**
   - Statistics dashboard access
   - Main settings and sync options
   - Support section (FAQ, Contact, YouTube)
   - Social media links
   - App sharing and rating

### PWA Features

- ✅ **Installable** - Add to home screen on mobile and desktop
- ✅ **Offline Support** - Service worker caches assets for offline use
- ✅ **Responsive Design** - Mobile-first with tablet and desktop layouts
- ✅ **Dark Theme** - Professional dark mode optimized for OLED displays
- ✅ **Touch-Optimized** - All interactive elements meet 44px minimum touch target
- ✅ **Fast Navigation** - Hash-based client-side routing

## 🎨 Design System

The app uses a comprehensive token-based design system:

- **Colors**: Dark theme with blue accents (#1e6fef primary)
- **Typography**: System font stack with semantic sizing (12px - 32px)
- **Spacing**: 4px base unit with consistent scale (4px - 64px)
- **Components**: Reusable buttons, cards, forms, modals, navigation
- **Responsive**: Breakpoints at 768px (tablet) and 1024px (desktop)

## 📂 Project Structure

```
pwa/
├── index.html              # Main entry point
├── public/
│   ├── manifest.json       # PWA manifest
│   └── sw.js              # Service worker
├── src/
│   ├── main.js            # App initialization
│   ├── router.js          # Client-side routing
│   ├── css/
│   │   ├── tokens.css     # Design system tokens
│   │   ├── base.css       # Reset and base styles
│   │   ├── layout.css     # Layout utilities
│   │   └── components.css # Component styles
│   ├── components/
│   │   └── navigation.js  # Navigation component
│   ├── data/
│   │   ├── mock-teams.js  # Mock team data
│   │   ├── mock-players.js # Mock player data
│   │   └── mock-matches.js # Mock match data
│   └── screens/
│       ├── squad.js       # Squad management screen
│       ├── matches.js     # Matches screen
│       ├── trainings.js   # Trainings screen
│       ├── schedule.js    # Schedule/calendar screen
│       └── more.js        # Settings/more screen
```

## 🔧 Technology Stack

- **Build Tool**: Vite 7.3.1
- **JavaScript**: Vanilla ES6+ (no framework)
- **CSS**: Custom design system with CSS variables
- **PWA**: Service Worker + Web App Manifest
- **Routing**: Hash-based client-side routing

## 📊 Mock Data

The app includes realistic mock data:
- 7 teams (Hollywood Bets, Super League, Reserves, etc.)
- 6+ players with full attributes and statistics
- 5 matches (upcoming and past)
- All data is editable via JavaScript modules

## 🎯 Future Enhancements

Ready for implementation:
- Player add/edit forms with validation
- Match statistics entry (goals, shots, possession, etc.)
- Training session management
- Match detail views with convocations
- Advanced filtering and sorting
- Data persistence with localStorage
- Export/import functionality

## 🌐 Browser Support

- Chrome/Edge 90+
- Safari 14+
- Firefox 88+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Notes

This is a **frontend-only** application with no backend. All data is stored in JavaScript modules and resets on page refresh. For production use, integrate with a backend API or implement localStorage persistence.

## 🎨 Design Philosophy

**Calm, Professional, Athletic**
- No flashy animations or distracting elements
- Clear information hierarchy
- Fast scanning and data entry
- Outdoor-readable high contrast
- Coaching-first UX (not consumer fitness)
