/**
 * Mock Player Data
 */

export const players = [
    // Hollywood Bets (Team 1)
    // Goalkeepers
    {
        id: 1,
        teamId: 1,
        firstName: "Alex",
        lastName: "Richard Chetty",
        number: 1,
        birthDate: "2005-03-15",
        age: 20,
        weight: 75,
        height: 188,
        foot: "Right",
        nominalPosition: "GK",
        alternativePositions: [],
        captain: true,
        injured: false,
        photo: null,
        attributes: { technical: { ballControl: 6, dribbling: 4, firstTouch: 5, passing: 6, shootingFinishing: 3, weakFootUsage: 4 }, mental: { attitudeInTraining: 7, confidence: 6, focusConcentration: 7, followingInstructions: 8, gameAwareness: 7 }, physical: { pace: 5, strength: 6, stamina: 7 } },
        statistics: { overall: { matches: 5, minutes: 450, rating: 6.8, goals: 0, assists: 0, cards: "0/0" } }
    },
    {
        id: 2,
        teamId: 1,
        firstName: "Gage",
        lastName: "Aaron Webster",
        number: 78,
        birthDate: "2006-08-22",
        age: 19,
        weight: 62,
        height: 183,
        foot: "Right",
        nominalPosition: "GK",
        alternativePositions: [],
        captain: false,
        injured: false,
        photo: null,
        attributes: { technical: { ballControl: 7, dribbling: 5, firstTouch: 5, passing: 5, shootingFinishing: 5, weakFootUsage: 5 }, mental: { attitudeInTraining: 5, confidence: 5, focusConcentration: 5, followingInstructions: 5, gameAwareness: 5 }, physical: { pace: 6, strength: 5, stamina: 6 } },
        statistics: { overall: { matches: 1, minutes: 27, rating: 3.0, goals: 0, assists: 0, cards: "0/0" } }
    },
    // Defenders
    {
        id: 3,
        teamId: 1,
        firstName: "Akho",
        lastName: "Mbizeni",
        number: 5,
        birthDate: "2005-04-10",
        age: 20,
        weight: 78,
        height: 180,
        foot: "Right",
        nominalPosition: "CB",
        alternativePositions: ["LB", "RB"],
        captain: false,
        injured: false,
        photo: null,
        attributes: { technical: { ballControl: 6, dribbling: 5, firstTouch: 6, passing: 6, shootingFinishing: 4, weakFootUsage: 5 }, mental: { attitudeInTraining: 7, confidence: 6, focusConcentration: 6, followingInstructions: 7, gameAwareness: 6 }, physical: { pace: 6, strength: 7, stamina: 7 } },
        statistics: { overall: { matches: 6, minutes: 540, rating: 6.5, goals: 1, assists: 0, cards: "2/0" } }
    },
    // Forwards
    {
        id: 4,
        teamId: 1,
        firstName: "Cameron",
        lastName: "Jaydan Cramford",
        number: 9,
        birthDate: "2006-01-18",
        age: 20,
        weight: 71,
        height: 175,
        foot: "Right",
        nominalPosition: "CF",
        alternativePositions: ["WF"],
        captain: false,
        injured: false,
        photo: null,
        attributes: { technical: { ballControl: 7, dribbling: 8, firstTouch: 7, passing: 6, shootingFinishing: 8, weakFootUsage: 5 }, mental: { attitudeInTraining: 8, confidence: 7, focusConcentration: 6, followingInstructions: 7, gameAwareness: 7 }, physical: { pace: 8, strength: 6, stamina: 7 } },
        statistics: { overall: { matches: 7, minutes: 630, rating: 7.2, goals: 11, assists: 3, cards: "1/0" } }
    },
    {
        id: 5,
        teamId: 1,
        firstName: "Lehlogonolo",
        lastName: "Seopo Molepo",
        number: 7,
        birthDate: "2005-11-30",
        age: 20,
        weight: 68,
        height: 172,
        foot: "Left",
        nominalPosition: "CF",
        alternativePositions: ["WF"],
        captain: false,
        injured: false,
        photo: null,
        attributes: { technical: { ballControl: 8, dribbling: 7, firstTouch: 8, passing: 7, shootingFinishing: 7, weakFootUsage: 6 }, mental: { attitudeInTraining: 7, confidence: 8, focusConcentration: 7, followingInstructions: 6, gameAwareness: 8 }, physical: { pace: 9, strength: 5, stamina: 6 } },
        statistics: { overall: { matches: 6, minutes: 540, rating: 7.5, goals: 8, assists: 5, cards: "0/0" } }
    },
    {
        id: 6,
        teamId: 1,
        firstName: "Rogan",
        lastName: "Robb",
        number: 21,
        birthDate: "2005-07-14",
        age: 20,
        weight: 74,
        height: 178,
        foot: "Right",
        nominalPosition: "CF",
        alternativePositions: ["LWB", "RWB", "CM", "AM", "LW", "RW"],
        captain: false,
        injured: false,
        photo: null,
        attributes: { technical: { ballControl: 7, dribbling: 6, firstTouch: 7, passing: 7, shootingFinishing: 6, weakFootUsage: 5 }, mental: { attitudeInTraining: 9, confidence: 7, focusConcentration: 8, followingInstructions: 8, gameAwareness: 7 }, physical: { pace: 7, strength: 6, stamina: 8 } },
        statistics: { overall: { matches: 6, minutes: 420, rating: 6.9, goals: 4, assists: 2, cards: "1/0" } }
    },

    // Super League (Team 2)
    {
        id: 201,
        teamId: 2,
        firstName: "Jabu",
        lastName: "Mahlangu",
        number: 10,
        birthDate: "2004-05-12",
        age: 21,
        weight: 70,
        height: 176,
        foot: "Right",
        nominalPosition: "CAM",
        alternativePositions: ["CM"],
        captain: true,
        injured: false,
        photo: null,
        attributes: { technical: { ballControl: 8, dribbling: 8, firstTouch: 7, passing: 8, shootingFinishing: 7, weakFootUsage: 4 }, mental: { attitudeInTraining: 8, confidence: 8, focusConcentration: 7, followingInstructions: 7, gameAwareness: 8 }, physical: { pace: 7, strength: 6, stamina: 8 } },
        statistics: { overall: { matches: 10, minutes: 900, rating: 7.8, goals: 5, assists: 8, cards: "1/0" } }
    }
];

export function getPlayersByTeam(teamId) {
    return players.filter(p => p.teamId === teamId);
}

export function getPlayersByPosition(teamId) {
    const teamPlayers = getPlayersByTeam(teamId);

    const positions = {
        'Goalkeepers': teamPlayers.filter(p => p.nominalPosition === 'GK'),
        'Defenders': teamPlayers.filter(p => ['CB', 'LB', 'RB', 'LWB', 'RWB'].includes(p.nominalPosition)),
        'Midfielders': teamPlayers.filter(p => ['CM', 'CDM', 'CAM', 'LM', 'RM'].includes(p.nominalPosition)),
        'Forwards': teamPlayers.filter(p => ['CF', 'ST', 'LW', 'RW', 'WF'].includes(p.nominalPosition))
    };

    return positions;
}

export function getPlayerById(id) {
    return players.find(p => p.id === parseInt(id));
}

export function addPlayer(playerData) {
    const newPlayer = {
        id: players.length + 1,
        ...playerData,
        statistics: { overall: { matches: 0, minutes: 0, rating: 0, goals: 0, assists: 0, cards: "0/0" } }
    };
    players.push(newPlayer);
    return newPlayer;
}
