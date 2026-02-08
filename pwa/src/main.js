/**
 * Main Application Entry Point
 * Initializes the PWA, registers service worker, sets up routing and navigation
 */

import { router } from './router.js';
import { renderNavigation } from './components/navigation.js';

// Register Service Worker for PWA support (Disabled in development/localhost)
if ('serviceWorker' in navigator) {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        // Unregister any existing service worker on localhost to prevent dev caching issues
        navigator.serviceWorker.getRegistrations().then(registrations => {
            for (let registration of registrations) {
                registration.unregister();
                console.log('Service Worker unregistered for development');
            }
        });
    } else {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then((registration) => {
                    console.log('ServiceWorker registered:', registration.scope);
                })
                .catch((error) => {
                    console.log('ServiceWorker registration failed:', error);
                });
        });
    }
}

// Initialize the application
function init() {
    // App structure is defined in index.html
    // <div class="app-container">
    //   <aside id="sidebar"></aside>
    //   <main id="app"></main>
    //   <nav id="bottom-nav"></nav>
    // </div>

    // Render initial navigation
    renderNavigation();

    // Initialize router
    router.init();

    // Handle route changes
    window.addEventListener('hashchange', () => {
        router.handleRoute();
    });

    // Handle initial route
    if (!window.location.hash) {
        window.location.hash = '#/squad';
    } else {
        router.handleRoute();
    }
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Prompt user to install PWA
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    console.log('PWA install prompt available');

    // Optionally, show a button to install the app
    // This could be added to the "More" section
});

window.addEventListener('appinstalled', () => {
    console.log('PWA was installed');
    deferredPrompt = null;
});
