import React from 'react';
import MatchCard from '../components/match/MatchCard';

// Dados de exemplo. No futuro, isso virá de uma API.
const sampleMatches = [
  {
    id: 1,
    league: 'Brasileirão Feminino A1',
    date: '2025-09-20T19:00:00Z',
    teamA: { name: 'Corinthians', score: 3 },
    teamB: { name: 'Palmeiras', score: 1 },
  },
  {
    id: 2,
    league: 'UEFA Women\'s Champions League',
    date: '2025-09-22T21:00:00Z',
    teamA: { name: 'Barcelona', score: 2 },
    teamB: { name: 'Lyon', score: 2 },
  },
];

const MatchesPage = () => {
  return (
    <section>
      <h1 className="text-4xl font-bold text-plum-purple mb-6">Próximas Partidas e Resultados</h1>
      <div className="space-y-4">
        {sampleMatches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </section>
  );
};

export default MatchesPage;