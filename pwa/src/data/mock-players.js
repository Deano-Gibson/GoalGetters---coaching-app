/**
 * Mock Player Data
 */

export const players = [
    // Hollywood Bets (Team 1)
    { id: 1, teamId: 1, name: "J. Silva", position: "FWD", number: 9, status: "Fit", goals: 12, assists: 5 },
    { id: 2, teamId: 1, name: "M. Johnson", position: "MID", number: 8, status: "Fit", goals: 3, assists: 8 },
    { id: 3, teamId: 1, name: "D. Wilson", position: "DEF", number: 4, status: "Injured", goals: 1, assists: 0 },
    { id: 4, teamId: 1, name: "K. Ndlovu", position: "MID", number: 6, status: "Fit", goals: 2, assists: 4 },
    { id: 5, teamId: 1, name: "T. Brown", position: "GK", number: 1, status: "Fit", cleanSheets: 4 },
    { id: 6, teamId: 1, name: "S. Lee", position: "FWD", number: 11, status: "Fit", goals: 5, assists: 3 },

    // Super League (Team 2)
    { id: 201, teamId: 2, name: "A. Peterson", position: "FWD", number: 10, status: "Fit", goals: 15, assists: 2 },
    { id: 202, teamId: 2, name: "B. Smith", position: "MID", number: 8, status: "Fit", goals: 4, assists: 6 },
    { id: 203, teamId: 2, name: "C. Jones", position: "DEF", number: 5, status: "Suspended", goals: 2, assists: 1 },

    // Reserves (Team 3)
    { id: 301, teamId: 3, name: "R. Rookie", position: "FWD", number: 14, status: "Fit", goals: 1, assists: 0 },
    { id: 302, teamId: 3, name: "O. Oldman", position: "MID", number: 7, status: "Fit", goals: 0, assists: 1 }
];

export function getPlayersByTeam(teamId) {
    return players.filter(p => p.teamId === teamId);
}
