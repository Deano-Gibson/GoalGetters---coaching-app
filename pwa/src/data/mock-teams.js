/**
 * Mock Team Data
 */

export const teams = [
    {
        id: 1,
        name: "Goal Getters Hollywood Bets",
        shortName: "GGHB",
        logo: null,
        active: true
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
    return teams.find(t => t.active) || teams[0];
}

export function setActiveTeam(teamId) {
    teams.forEach(t => t.active = (t.id === teamId));
}
