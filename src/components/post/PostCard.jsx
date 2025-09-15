import React from 'react';
import VoteButtons from './VoteButtons';

const PostCard = ({ post }) => {
  return (
    <article className="bg-white shadow-lg rounded-xl flex p-4 my-4 gap-4 transition-shadow hover:shadow-xl">
      <div className="flex-shrink-0">
        <VoteButtons initialVotes={post.initialVotes} />
      </div>
      <div className="flex-grow">
        <header className="mb-2">
          <p className="text-sm text-gray-500">
            Postado por <span className="font-semibold text-plum-purple">{post.author}</span>
          </p>
          <h2 className="text-2xl font-bold text-dark-blue-text">{post.title}</h2>
        </header>
        <p className="text-dark-blue-text mb-4">
          {post.content}
        </p>
        <footer>
          <button className="text-sm font-semibold text-gray-600 hover:text-burnt-pink">
            {post.commentsCount} comentários
          </button>
        </footer>
      </div>
    </article>
  );
};

export default PostCard;