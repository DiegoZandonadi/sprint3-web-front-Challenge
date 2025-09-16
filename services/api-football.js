// API de Futebol Feminino - Dados gratuitos
// Usando API-Football (RapidAPI) que tem dados de futebol feminino

const API_KEY = process.env.NEXT_PUBLIC_API_FOOTBALL_KEY || 'YOUR_API_KEY_HERE';
const BASE_URL = 'https://api-football-v1.p.rapidapi.com/v3';

// Headers para a API
const headers = {
  'X-RapidAPI-Key': API_KEY,
  'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
};

// Função para buscar jogos de futebol feminino
export async function getWomenFootballFixtures(league = '78', season = '2024') {
  try {
    const response = await fetch(
      `${BASE_URL}/fixtures?league=${league}&season=${season}`,
      { headers }
    );
    
    if (!response.ok) {
      throw new Error('Erro ao buscar jogos');
    }
    
    const data = await response.json();
    return data.response || [];
  } catch (error) {
    console.error('Erro na API de jogos:', error);
    // Retorna dados mockados em caso de erro
    return getMockFixtures();
  }
}

// Função para buscar estatísticas de jogadoras
export async function getWomenPlayerStats(playerId) {
  try {
    const response = await fetch(
      `${BASE_URL}/players?id=${playerId}&season=2024`,
      { headers }
    );
    
    if (!response.ok) {
      throw new Error('Erro ao buscar estatísticas da jogadora');
    }
    
    const data = await response.json();
    return data.response || [];
  } catch (error) {
    console.error('Erro na API de jogadoras:', error);
    return getMockPlayerStats();
  }
}

// Função para buscar times de futebol feminino
export async function getWomenTeams(league = '78', season = '2024') {
  try {
    const response = await fetch(
      `${BASE_URL}/teams?league=${league}&season=${season}`,
      { headers }
    );
    
    if (!response.ok) {
      throw new Error('Erro ao buscar times');
    }
    
    const data = await response.json();
    return data.response || [];
  } catch (error) {
    console.error('Erro na API de times:', error);
    return getMockTeams();
  }
}

// Função para buscar estatísticas de liga
export async function getWomenLeagueStats(league = '78', season = '2024') {
  try {
    const response = await fetch(
      `${BASE_URL}/standings?league=${league}&season=${season}`,
      { headers }
    );
    
    if (!response.ok) {
      throw new Error('Erro ao buscar estatísticas da liga');
    }
    
    const data = await response.json();
    return data.response || [];
  } catch (error) {
    console.error('Erro na API de estatísticas:', error);
    return getMockLeagueStats();
  }
}

// Dados mockados para quando a API não estiver disponível
function getMockFixtures() {
  return [
    {
      fixture: {
        id: 1,
        date: '2024-09-20T15:00:00+00:00',
        status: { short: 'NS' }
      },
      teams: {
        home: {
          id: 1,
          name: 'Juventus Feminino',
          logo: '/images/juventus.png'
        },
        away: {
          id: 2,
          name: 'Barcelona Feminino',
          logo: '/images/barcelona.png'
        }
      },
      goals: { home: null, away: null },
      league: {
        name: 'Serie A Feminina',
        country: 'Italy'
      }
    },
    {
      fixture: {
        id: 2,
        date: '2024-09-22T14:00:00+00:00',
        status: { short: 'FT' }
      },
      teams: {
        home: {
          id: 3,
          name: 'Arsenal Feminino',
          logo: '/images/arsenal.png'
        },
        away: {
          id: 4,
          name: 'Chelsea Feminino',
          logo: '/images/chelsea.png'
        }
      },
      goals: { home: 2, away: 1 },
      league: {
        name: 'FA Women\'s Super League',
        country: 'England'
      }
    }
  ];
}

function getMockPlayerStats() {
  return [
    {
      player: {
        id: 1,
        name: 'Alisha Lehmann',
        age: 26,
        nationality: 'Switzerland',
        height: '165cm',
        weight: '55kg',
        photo: '/images/jogadora.png'
      },
      statistics: [
        {
          team: {
            name: 'Juventus',
            logo: '/images/juventus.png'
          },
          games: {
            appearances: 15,
            lineups: 12,
            minutes: 1080,
            position: 'Right Wing'
          },
          goals: {
            total: 8,
            assists: 5,
            saves: 0
          },
          shots: {
            total: 45,
            on: 28
          },
          passes: {
            total: 320,
            key: 18,
            accuracy: 85
          }
        }
      ]
    }
  ];
}

function getMockTeams() {
  return [
    {
      team: {
        id: 1,
        name: 'Juventus Feminino',
        logo: '/images/juventus.png',
        country: 'Italy'
      }
    },
    {
      team: {
        id: 2,
        name: 'Barcelona Feminino',
        logo: '/images/barcelona.png',
        country: 'Spain'
      }
    },
    {
      team: {
        id: 3,
        name: 'Arsenal Feminino',
        logo: '/images/arsenal.png',
        country: 'England'
      }
    },
    {
      team: {
        id: 4,
        name: 'Chelsea Feminino',
        logo: '/images/chelsea.png',
        country: 'England'
      }
    }
  ];
}

function getMockLeagueStats() {
  return [
    {
      league: {
        id: 78,
        name: 'Serie A Feminina',
        country: 'Italy'
      },
      standings: [
        [
          {
            rank: 1,
            team: {
              id: 1,
              name: 'Juventus Feminino',
              logo: '/images/juventus.png'
            },
            points: 45,
            goalsDiff: 25,
            all: {
              played: 15,
              win: 14,
              draw: 3,
              lose: 0
            }
          },
          {
            rank: 2,
            team: {
              id: 2,
              name: 'Barcelona Feminino',
              logo: '/images/barcelona.png'
            },
            points: 42,
            goalsDiff: 20,
            all: {
              played: 15,
              win: 13,
              draw: 3,
              lose: 1
            }
          }
        ]
      ]
    }
  ];
}

// Função para formatar data
export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

// Função para formatar hora
export function formatTime(dateString) {
  const date = new Date(dateString);
  return date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  });
}
