import React from 'react';
import Button from '../components/ui/Button';
import PostCard from '../components/post/PostCard';

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

const CommunityPage = () => {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-plum-purple">Comunidade</h1>
        <Button>Criar Novo Post</Button>
      </div>

      <div className="space-y-6">
        {samplePosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default CommunityPage;