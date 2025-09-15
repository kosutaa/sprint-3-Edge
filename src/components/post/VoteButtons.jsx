import React, { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

const VoteButtons = ({ initialVotes }) => {
  const [votes, setVotes] = useState(initialVotes);
  const [voted, setVoted] = useState(null); // 'up', 'down', ou null

  const handleUpvote = () => {
    if (voted === 'up') {
      // Desfaz o upvote
      setVoted(null);
      setVotes(votes - 1);
    } else if (voted === 'down') {
      // Muda de downvote para upvote
      setVoted('up');
      setVotes(votes + 2); // Reverte o downvote e adiciona o upvote
    } else {
      // Novo upvote
      setVoted('up');
      setVotes(votes + 1);
    }
  };

  const handleDownvote = () => {
    if (voted === 'down') {
      // Desfaz o downvote
      setVoted(null);
      setVotes(votes + 1);
    } else if (voted === 'up') {
      // Muda de upvote para downvote
      setVoted('down');
      setVotes(votes - 2); // Reverte o upvote e adiciona o downvote
    } else {
      // Novo downvote
      setVoted('down');
      setVotes(votes - 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleUpvote}
        className={`p-1 rounded-full transition-colors ${voted === 'up' ? 'bg-burnt-pink text-white' : 'hover:bg-delicate-lilac'}`}
        aria-label="Upvote"
      >
        <ChevronUpIcon className="h-6 w-6" />
      </button>
      <span className="font-bold text-lg text-plum-purple my-1">{votes}</span>
      <button
        onClick={handleDownvote}
        className={`p-1 rounded-full transition-colors ${voted === 'down' ? 'bg-plum-purple text-white' : 'hover:bg-delicate-lilac'}`}
        aria-label="Downvote"
      >
        <ChevronDownIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default VoteButtons;