/**
 * Mock Match Data
 */

export const matches = [
    {
        id: 1,
        teamId: 1,
        opponentName: "Temp",
        homeTeamScore: null,
        awayTeamScore: null,
        venue: "Home",
        city: "Germiston City Sports Ground",
        date: "2026-02-08T14:07",
        season: "2025/2026",
        competition: "League",
        matchType: "Friendly",
        status: "upcoming"
    },
    {
        id: 2,
        teamId: 1,
        opponentName: "Walk's Royal FC",
        homeTeamScore: 1,
        awayTeamScore: 0,
        venue: "Away",
        city: "Royal Stadium",
        date: "2026-02-07T15:00",
        season: "2025/2026",
        competition: "League",
        matchType: "League",
        status: "past"
    },
    {
        id: 3,
        teamId: 1,
        opponentName: "Vrrphaa Nation FC",
        homeTeamScore: 1,
        awayTeamScore: 1,
        venue: "Home",
        city: "Germiston City Sports Ground",
        date: "2026-02-04T19:30",
        season: "2025/2026",
        competition: "League",
        matchType: "League",
        status: "past"
    },
    {
        id: 4,
        teamId: 1,
        opponentName: "Alberton FC",
        homeTeamScore: 1,
        awayTeamScore: 0,
        venue: "Home",
        city: "Germiston City Sports Ground",
        date: "2026-01-25T12:00",
        season: "2025/2026",
        competition: "League",
        matchType: "League",
        status: "past"
    },
    {
        id: 5,
        teamId: 1,
        opponentName: "Benoni Northerns FC",
        homeTeamScore: 3,
        awayTeamScore: 1,
        venue: "Home",
        city: "Germiston City Sports Ground",
        date: "2026-01-23T19:30",
        season: "2025/2026",
        competition: "League",
        matchType: "League",
        status: "past"
    }
];

export function getMatchesByTeam(teamId) {
    return matches.filter(m => m.teamId === teamId);
}

export function getMatchById(id) {
    return matches.find(m => m.id === parseInt(id));
}

export function getUpcomingMatches(teamId) {
    return matches.filter(m => m.teamId === teamId && m.status === 'upcoming');
}

export function getPastMatches(teamId) {
    return matches.filter(m => m.teamId === teamId && m.status === 'past');
}

export function addMatch(matchData) {
    const newMatch = {
        id: matches.length + 1,
        ...matchData
    };
    matches.push(newMatch);
    return newMatch;
}
