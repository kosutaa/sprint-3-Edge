import React from 'react';
import Button from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import MatchCard from '../components/match/MatchCard'; // <-- 1. Importar MatchCard
import PostCard from '../components/post/PostCard';   // <-- 2. Importar PostCard

// Dados de exemplo que virão da sua API no futuro
const sampleMatches = [
  {
    id: 1,
    league: 'Brasileirão Feminino A1 - Semifinal',
    date: '2025-09-20T19:00:00Z',
    teamA: { name: 'Corinthians', score: '?' },
    teamB: { name: 'Palmeiras', score: '?' },
  },
  {
    id: 2,
    league: 'UEFA Women\'s Champions League',
    date: '2025-09-22T21:00:00Z',
    teamA: { name: 'Barcelona', score: '?' },
    teamB: { name: 'Lyon', score: '?' },
  },
   {
    id: 3,
    league: 'NWSL - Final',
    date: '2025-09-28T20:00:00Z',
    teamA: { name: 'San Diego Wave', score: '?' },
    teamB: { name: 'Portland Thorns', score: '?' },
  },
];

const samplePosts = [
  {
    id: 1,
    author: 'ana_futeboleira',
    title: 'Marta ainda é a melhor de todos os tempos?',
    content: 'Com a nova geração chegando com tudo, queria saber a opinião de vocês. O legado da Marta é inalcançável?',
    initialVotes: 127,
    commentsCount: 42,
  },
  {
    id: 2,
    author: 'torcedor_raiz',
    title: 'O que esperar do Brasileirão Feminino este ano?',
    content: 'Parece que a competitividade aumentou muito! Quais times vocês acham que chegam forte para as finais?',
    initialVotes: 89,
    commentsCount: 23,
  }
];


const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="text-center flex flex-col items-center justify-center pt-8 pb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-plum-purple mb-4 leading-tight">
          Bem-vindo ao <span className="text-burnt-pink">Passa a Bola</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-dark-blue-text max-w-3xl mx-auto">
          O seu hub central para tudo sobre o futebol feminino. Acompanhe partidas, 
          participe da comunidade e celebre o esporte que amamos.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button onClick={() => navigate('/partidas')} className="w-full sm:w-auto text-lg px-8 py-3">
            Ver Partidas
          </Button>
          <Button onClick={() => navigate('/comunidade')} className="w-full sm:w-auto text-lg px-8 py-3">
            Ir para Comunidade
          </Button>
        </div>
      </section>

      <section className="space-y-12">
        <div>
          <h2 className="text-3xl font-bold text-plum-purple mb-4 border-b-2 border-delicate-lilac pb-2">
            Destaques da Rodada
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleMatches.map(match => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-plum-purple mb-4 border-b-2 border-delicate-lilac pb-2">
            Últimas da Comunidade
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {samplePosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;