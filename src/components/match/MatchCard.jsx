import React from 'react';

const MatchCard = ({ match }) => {
  return (
    <article className="bg-white shadow-md rounded-lg p-4 my-2 transition-transform duration-300 hover:shadow-xl hover:scale-[1.02]">
      <header className="mb-3 border-b pb-2">
        <h3 className="font-bold text-plum-purple">{match.league}</h3>
        <time dateTime={match.date} className="text-sm text-gray-500">
          {new Date(match.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', hour: '2-digit', minute: '2-digit' })}
        </time>
      </header>
      
      <div className="flex justify-between items-center text-dark-blue-text">

        {/* --- Time A --- */}
        <div className="flex flex-col items-center justify-center text-center w-2/5">
          <span className="font-semibold text-lg">{match.teamA.name}</span>
        </div>
        
        {/* --- Placar --- */}
        <div className="flex items-center justify-center text-2xl font-bold bg-delicate-lilac text-plum-purple rounded-lg px-4 py-2 w-1/5 min-w-max">
          <span>{match.teamA.score}</span>
          <span className="mx-2 text-xl">-</span>
          <span>{match.teamB.score}</span>
        </div>

        {/* --- Time B --- */}
        <div className="flex flex-col items-center justify-center text-center w-2/5">
          <span className="font-semibold text-lg">{match.teamB.name}</span>
        </div>

      </div>
    </article>
  );
};

export default MatchCard;