/**
 * Client-side Router
 * Hash-based routing for PWA compatibility
 */

import { renderSquadScreen } from './screens/squad.js';
import { renderMatchesScreen } from './screens/matches.js';
import { renderTrainingsScreen } from './screens/trainings.js';
import { renderScheduleScreen } from './screens/schedule.js';
import { renderMoreScreen } from './screens/more.js';

const routes = {
    '/squad': renderSquadScreen,
    '/matches': renderMatchesScreen,
    '/trainings': renderTrainingsScreen,
    '/schedule': renderScheduleScreen,
    '/more': renderMoreScreen,
};

class Router {
    constructor() {
        this.currentRoute = null;
    }

    init() {
        this.handleRoute();
    }

    getPath() {
        const hash = window.location.hash.slice(1); // Remove the #
        return hash || '/squad';
    }

    handleRoute() {
        const path = this.getPath();
        const basePath = '/' + path.split('/')[1]; // Get base path (e.g., /squad from /squad/player/1)

        this.currentRoute = basePath;

        const renderFunction = routes[basePath];

        if (renderFunction) {
            renderFunction(path);
        } else {
            // 404 - redirect to squad
            window.location.hash = '#/squad';
        }
    }

    navigate(path) {
        window.location.hash = `#${path}`;
    }

    getCurrentRoute() {
        return this.currentRoute;
    }
}

export const router = new Router();
