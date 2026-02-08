## 🚀 Quick Start Guide

### Run the App
```bash
cd pwa
npm run dev
```
Open http://localhost:5173 in your browser.

### Test the PWA

**Install the App:**
1. Look for the install icon (⊕) in your browser's address bar
2. Click "Install"
3. The app opens as a standalone window

**Test Navigation:**
- Click the 5 tabs: Squad, Matches, Trainings, Schedule, More
- On Squad, click "Cameron Jaydan Cramford" to see player details
- Use the back button to return
- Try browser back/forward buttons

**Test Offline Mode:**
1. Open DevTools (F12)
2. Go to Application → Service Workers
3. Check "Offline"
4. Refresh - app still works!

**Test Responsive:**
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Try: iPhone SE, iPad, Desktop
4. Watch navigation change from bottom to side

### Next Steps

**Replace Icons:**
The icons in `public/icons/` are SVG placeholders. Replace with PNG:
- Use an online SVG→PNG converter, OR
- Create new icons in Figma/Photoshop at 192x192 and 512x512

**Add More Data:**
Edit the files in `src/data/`:
- `mock-players.js` - Add more players
- `mock-matches.js` - Add more matches
- `mock-teams.js` - Modify team names

**Extend Features:**
See `implementation_plan.md` for ideas:
- Player add/edit forms
- Match statistics entry
- Training session management
- Data persistence with localStorage

### File to Edit

**Styling:** `src/css/tokens.css` - Change colors, fonts, spacing  
**Navigation:** `src/components/navigation.js` - Modify tabs  
**Screens:** `src/screens/*.js` - Add features to each screen  
**Mock Data:** `src/data/*.js` - Add more data  

### Deployment to GitHub Pages

1. **GitHub Pages (Automatic)**:
   - Push your code to GitHub.
   - The included GitHub Action in `.github/workflows/deploy.yml` will automatically build and deploy the app.
   - Go to your repo **Settings** > **Pages** and ensure "Build and deployment" is set to "GitHub Actions".

2. **Manual Deployment**:
   ```bash
   cd pwa
   npm run build
   npm run deploy
   ```
   *Note: Requires `gh-pages` package to be installed.*

---

**🎉 Your PWA is ready! Open it at http://localhost:5173**
