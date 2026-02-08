/**
 * Mock Team Data
 */

const STORAGE_KEY = 'goal_getters_active_team_id';

export const teams = [
    {
        id: 1,
        name: "Goal Getters Hollywood Bets",
        shortName: "GGHB",
        logo: null,
        active: false
    },
    {
        id: 2,
        name: "Goal Getters Super League",
        shortName: "GGSL",
        logo: null,
        active: false
    },
    {
        id: 3,
        name: "Goal Getters Reserves",
        shortName: "GGR",
        logo: null,
        active: false
    },
    {
        id: 4,
        name: "Goal Getters Div 1",
        shortName: "GGD1",
        logo: null,
        active: false
    },
    {
        id: 5,
        name: "Goal Getters U/17",
        shortName: "GGU17",
        logo: null,
        active: false
    },
    {
        id: 6,
        name: "Goal Getters U/15",
        shortName: "GGU15",
        logo: null,
        active: false
    },
    {
        id: 7,
        name: "Goal Getters U/13",
        shortName: "GGU13",
        logo: null,
        active: false
    }
];

export function getActiveTeam() {
    try {
        const savedId = localStorage.getItem(STORAGE_KEY);
        if (savedId) {
            const id = parseInt(savedId);
            const team = teams.find(t => t.id === id);
            if (team) return team;
        }
    } catch (e) {
        console.warn('Failed to load active team from localStorage', e);
    }

    // Fallback to active flag or first team
    return teams.find(t => t.active) || teams[0];
}

export function setActiveTeam(teamId) {
    try {
        localStorage.setItem(STORAGE_KEY, teamId.toString());
    } catch (e) {
        console.warn('Failed to save active team to localStorage', e);
    }
    teams.forEach(t => t.active = (t.id === teamId));
}
