export const matches = [
    {
        id: 1,
        opponent: 'Hollywood Bets',
        logo: '🦌',
        date: '2023-11-12',
        time: '14:00',
        venue: 'Home',
        status: 'Upcoming',
        score: null,
        competition: 'League Match',
        events: []
    },
    {
        id: 2,
        opponent: 'Super League',
        logo: '⚡',
        date: '2023-11-05',
        time: '15:30',
        venue: 'Away',
        status: 'Finished',
        score: { us: 3, them: 1 },
        result: 'win',
        competition: 'Cup Semi-Final',
        events: [
            { id: 1, type: 'goal', team: 'us', player: 'J. Silva', minute: 12, detail: 'Header from corner' },
            { id: 2, type: 'card', cardType: 'yellow', team: 'them', player: 'Opponent #4', minute: 34, detail: 'Foul' },
            { id: 3, type: 'goal', team: 'us', player: 'M. Johnson', minute: 45, detail: 'Penalty' },
            { id: 4, type: 'sub', team: 'us', playerIn: 'D. Wilson', playerOut: 'T. Brown', minute: 60 },
            { id: 5, type: 'goal', team: 'them', player: 'Striker', minute: 78, detail: 'Counter attack' },
            { id: 6, type: 'goal', team: 'us', player: 'K. Ndlovu', minute: 88, detail: 'Long range' }
        ]
    },
    {
        id: 3,
        opponent: 'Reserves',
        logo: '🛡️',
        date: '2023-10-29',
        time: '10:00',
        venue: 'Home',
        status: 'Finished',
        score: { us: 1, them: 1 },
        result: 'draw',
        competition: 'Friendly',
        events: [
            { id: 1, type: 'goal', team: 'them', player: 'Winger', minute: 15 },
            { id: 2, type: 'goal', team: 'us', player: 'J. Silva', minute: 82 }
        ]
    },
    {
        id: 4,
        opponent: 'Academy U19',
        logo: '🎓',
        date: '2023-10-22',
        time: '09:00',
        venue: 'Away',
        status: 'Finished',
        score: { us: 0, them: 2 },
        result: 'loss',
        competition: 'League Match',
        events: [
            { id: 1, type: 'goal', team: 'them', player: 'Forward', minute: 22 },
            { id: 2, type: 'card', cardType: 'red', team: 'us', player: 'M. Johnson', minute: 40, detail: 'Professional foul' },
            { id: 3, type: 'goal', team: 'them', player: 'Midfielder', minute: 67 }
        ]
    },
    {
        id: 5,
        opponent: 'City Rivals',
        logo: '🏙️',
        date: '2023-12-03',
        time: '16:00',
        venue: 'Away',
        status: 'Upcoming',
        score: null,
        competition: 'League Match',
        events: []
    }
];
